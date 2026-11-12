/**
 * LLM-readable exports (https://llmstxt.org).
 *
 * During prerender, every generated HTML page is converted to Markdown and
 * written next to it as `<path>.md` (the home page becomes `/index.md`).
 * After prerender finishes, three index files are written:
 *
 *   /llms.txt               Curated index: what Kura is, its status, and a link list.
 *   /llms-full.txt          Every English page as Markdown, in one file.
 *   /zh-TW/llms-full.txt    Every Traditional Chinese page as Markdown, in one file.
 *
 * Content is taken from the rendered HTML, so it always matches the site.
 */
import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { defineNuxtModule } from '@nuxt/kit'
import { parseHTML } from 'linkedom'
import TurndownService from 'turndown'
import { gfm } from 'turndown-plugin-gfm'
import layoutEn from '../i18n/locales/en/layout.json'
import layoutZhTw from '../i18n/locales/zh-TW/layout.json'
import reportEn from '../i18n/locales/en/report.json'

interface LlmsPage {
  /** Route path, e.g. `/about` or `/zh-TW/about`. */
  route: string
  /** Path of the Markdown export, e.g. `/about.md`. */
  mdPath: string
  locale: 'en' | 'zh-TW'
  title: string
  description: string
  markdown: string
}

const ZH_PREFIX = '/zh-TW'

/** Sections of /llms.txt, in order. Routes are locale-neutral. */
const SECTIONS: { title: string; routes: string[] }[] = [
  { title: 'Start here', routes: ['/investors', '/about', '/'] },
  {
    title: 'Products (historical, no longer available)',
    routes: [
      '/account',
      '/financial-account',
      '/global-transfers',
      '/multi-currency',
      '/kura-card',
      '/card-waitlist',
      '/invest',
      '/us-stocks',
      '/earn',
      '/borrow',
      '/trackfi',
      '/connected-accounts',
      '/net-worth',
      '/banking',
      '/investments',
      '/digital-assets',
      '/business',
      '/pricing',
      '/compare',
      '/download',
    ],
  },
  { title: 'Documentation and coverage', routes: ['/docs', '/docs/stock-countries', '/docs/on-off-ramp-countries'] },
  {
    title: 'Legal and policies',
    routes: ['/tos', '/privacy', '/disclaimer', '/compliance', '/prohibited-activities', '/referral-terms'],
  },
  { title: 'Contact', routes: ['/contact', '/help', '/community'] },
]

/** Markdown export path for a route. Keep in sync with `markdownPath()` in src/app.vue. */
function mdPathFor(route: string) {
  if (route === '/') return '/index.md'
  if (route === ZH_PREFIX) return `${ZH_PREFIX}/index.md`
  return `${route.replace(/\/$/, '')}.md`
}

function neutralRoute(route: string) {
  if (route === ZH_PREFIX) return '/'
  return route.startsWith(`${ZH_PREFIX}/`) ? route.slice(ZH_PREFIX.length) : route
}

function createTurndown(siteUrl: string) {
  const td = new TurndownService({
    headingStyle: 'atx',
    bulletListMarker: '-',
    codeBlockStyle: 'fenced',
    emDelimiter: '*',
  })
  td.use(gfm)
  td.remove(['script', 'style', 'noscript', 'template', 'button', 'form', 'iframe'])
  td.remove((node) => node.nodeName.toLowerCase() === 'svg')

  td.addRule('absoluteLinks', {
    filter: (node) => node.nodeName === 'A' && Boolean(node.getAttribute('href')),
    replacement: (content, node) => {
      const text = content.trim()
      if (!text) return ''
      const href = (node as HTMLAnchorElement).getAttribute('href') ?? ''
      if (href.startsWith('#')) return text
      const url = href.startsWith('/') ? `${siteUrl}${href}` : href
      return `[${text}](${url})`
    },
  })

  // Images are decorative on this site; keep only meaningful alt text.
  td.addRule('images', {
    filter: 'img',
    replacement: (_content, node) => {
      const alt = (node as HTMLImageElement).getAttribute('alt')?.trim()
      return alt ? `*[Image: ${alt}]*` : ''
    },
  })

  td.addRule('definitionTerm', {
    filter: 'dt',
    replacement: (content) => `\n**${content.trim()}**: `,
  })
  td.addRule('definitionDescription', {
    filter: 'dd',
    replacement: (content) => `${content.trim()}\n`,
  })

  // Pre-built Markdown tables from convertAriaTables().
  td.addRule('mdTables', {
    filter: (node) => node.nodeName === 'PRE' && node.hasAttribute('data-md-table'),
    replacement: (_content, node) => `\n\n${node.textContent}\n\n`,
  })

  return td
}

function cellText(el: Element) {
  return (el.textContent ?? '').replace(/\s+/g, ' ').trim().replace(/\|/g, '\\|')
}

/**
 * Vue templates often place inline elements side by side with no whitespace
 * (`<span>Product</span><span>5 min read</span>`), which would read as
 * "Product5 min read". Insert a space between adjacent element siblings.
 */
function separateAdjacentElements(root: Element, document: Document) {
  for (const el of [...root.querySelectorAll('*')]) {
    const next = el.nextSibling
    if (next && next.nodeType === 1) el.after(document.createTextNode(' '))
  }
}

/** Rewrites ARIA tables (role="table") as Markdown tables so rows stay aligned. */
function convertAriaTables(document: Document) {
  for (const table of [...document.querySelectorAll('[role="table"]')]) {
    const rows = [...table.querySelectorAll('[role="row"]')].map((row) =>
      [...row.querySelectorAll('[role="columnheader"], [role="cell"]')].map(cellText),
    )
    if (!rows.length) continue
    const width = Math.max(...rows.map((row) => row.length))
    const pad = (row: string[]) => [...row, ...Array(width - row.length).fill('')]
    const [head, ...body] = rows
    const lines = [
      `| ${pad(head).join(' | ')} |`,
      `| ${Array(width).fill('---').join(' | ')} |`,
      ...body.map((row) => `| ${pad(row).join(' | ')} |`),
    ]
    const pre = document.createElement('pre')
    pre.setAttribute('data-md-table', '')
    pre.textContent = lines.join('\n')
    table.replaceWith(pre)
  }
}

function htmlToPage(html: string, route: string, siteUrl: string, td: TurndownService): LlmsPage | null {
  const { document } = parseHTML(html)
  const title = document.querySelector('title')?.textContent?.trim() ?? route
  const description = document.querySelector('meta[name="description"]')?.getAttribute('content')?.trim() ?? ''

  // The layout wraps page content in the outermost <main>; header, footer,
  // banners and dialogs live outside it.
  const main = document.querySelector('main')
  if (!main) return null
  for (const el of [...main.querySelectorAll('[aria-hidden="true"], nav, [role="dialog"]')]) el.remove()
  convertAriaTables(document)
  separateAdjacentElements(main, document)

  const body = td
    .turndown(main.innerHTML)
    .replace(/^(\s*)-\s{2,}/gm, '$1- ')
    .replace(/[ \t]+$/gm, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim()

  const locale = route === ZH_PREFIX || route.startsWith(`${ZH_PREFIX}/`) ? 'zh-TW' : 'en'
  return { route, mdPath: mdPathFor(route), locale, title, description, markdown: body }
}

/** The site-wide shutdown banner, as plain text, in the page's language. */
function statusNotice(locale: LlmsPage['locale'] = 'en') {
  if (locale === 'zh-TW') {
    const { banner } = layoutZhTw
    return `${banner.headline}${banner.body}`
  }
  const { banner, notice } = layoutEn
  return `${banner.headline} ${banner.body} ${notice.intro.replace(/, including but not limited to:$/, '.')}`
}

function renderPageFile(page: LlmsPage, siteUrl: string) {
  const url = `${siteUrl}${page.route}`
  return [
    `# ${page.title}`,
    '',
    `> ${statusNotice(page.locale)}`,
    '',
    `Source: ${url}`,
    page.description ? `Description: ${page.description}` : '',
    '',
    page.markdown,
    '',
  ]
    .filter((line, i, all) => !(line === '' && all[i - 1] === ''))
    .join('\n')
}

function renderIndex(pages: LlmsPage[], siteUrl: string) {
  const en = new Map(pages.filter((p) => p.locale === 'en').map((p) => [p.route, p]))
  const listed = new Set<string>()
  const link = (page: LlmsPage) => {
    listed.add(page.route)
    const desc = page.description ? `: ${page.description}` : ''
    const title = page.title.replace(/ \| Kura$/, '')
    return `- [${title}](${siteUrl}${page.mdPath})${desc}`
  }

  const { summary, meta } = reportEn.report
  const out: string[] = [
    '# Kura',
    '',
    `> ${statusNotice()} This site is kept as a historical record of what Kura Finance LLC built and offered between ${meta.period.value}. Describe Kura in the past tense; do not present its products as available.`,
    '',
    `${summary.lede} ${summary.prose}`,
    '',
    'Key facts:',
    '',
    ...summary.facts.map((fact) => `- ${fact.label}: ${fact.value}`),
    `- Status: dissolved; no support team. Legal matters only, by email (see the Contact page).`,
    `- Operating data and lessons learned: see the Business Report (data as of ${meta.asOf.value}).`,
    '',
    'Every page below is also available as Markdown at the linked `.md` URL. The whole site is available in one file at',
    `${siteUrl}/llms-full.txt (English) and ${siteUrl}${ZH_PREFIX}/llms-full.txt (Traditional Chinese).`,
    '',
  ]

  for (const section of SECTIONS) {
    const items = section.routes.map((route) => en.get(route)).filter((p): p is LlmsPage => Boolean(p))
    if (!items.length) continue
    out.push(`## ${section.title}`, '', ...items.map(link), '')
  }

  const blog = [...en.values()].filter((p) => p.route === '/blog' || p.route.startsWith('/blog/'))
  if (blog.length) out.push('## Blog (published while Kura was operating)', '', ...blog.map(link), '')

  const rest = [...en.values()].filter((p) => !listed.has(p.route))
  const zh = pages.filter((p) => p.locale === 'zh-TW')
  out.push('## Optional', '')
  out.push(...rest.map(link))
  out.push(`- [Traditional Chinese (zh-TW) full text](${siteUrl}${ZH_PREFIX}/llms-full.txt): All ${zh.length} zh-TW pages in one file.`)
  out.push(`- [Sitemap](${siteUrl}/sitemap.xml): Every URL with hreflang alternates.`)
  out.push(`- [Blog RSS](${siteUrl}/feed.xml)`)
  out.push('')
  return out.join('\n')
}

function renderFull(pages: LlmsPage[], siteUrl: string, heading: string, locale: LlmsPage['locale']) {
  const sorted = [...pages].sort((a, b) => order(a.route) - order(b.route) || a.route.localeCompare(b.route))
  return [
    `# ${heading}`,
    '',
    `> ${statusNotice(locale)}`,
    '',
    `Generated from ${siteUrl}. ${sorted.length} pages follow, each starting with a level-one heading and its source URL.`,
    '',
    ...sorted.map((page) => `---\n\n${renderPageFile(page, siteUrl)}`),
  ].join('\n')
}

function order(route: string) {
  const neutral = neutralRoute(route)
  let i = 0
  for (const section of SECTIONS) {
    for (const r of section.routes) {
      if (r === neutral) return i
      i++
    }
  }
  return neutral.startsWith('/blog') ? i : i + 1
}

export default defineNuxtModule({
  meta: { name: 'llms' },
  setup(_options, nuxt) {
    if (nuxt.options.dev) return
    const siteUrl = String(nuxt.options.runtimeConfig.public.siteUrl || 'https://kura-finance.com').replace(/\/$/, '')

    nuxt.hook('nitro:init', (nitro) => {
      const pages: LlmsPage[] = []
      const td = createTurndown(siteUrl)

      nitro.hooks.hook('prerender:route', (route) => {
        if (route.error || !route.fileName?.endsWith('.html') || typeof route.contents !== 'string') return
        if (route.fileName === '/404.html' || route.fileName === '/200.html') return
        const page = htmlToPage(route.contents, route.route, siteUrl, td)
        if (page?.markdown) pages.push(page)
      })

      nitro.hooks.hook('prerender:done', async () => {
        if (!pages.length) return
        const publicDir = nitro.options.output.publicDir
        const write = async (path: string, content: string) => {
          const file = join(publicDir, path)
          await mkdir(dirname(file), { recursive: true })
          await writeFile(file, content, 'utf8')
        }

        await Promise.all(pages.map((page) => write(page.mdPath, renderPageFile(page, siteUrl))))
        const en = pages.filter((p) => p.locale === 'en')
        const zh = pages.filter((p) => p.locale === 'zh-TW')
        await write('/llms.txt', renderIndex(pages, siteUrl))
        await write('/llms-full.txt', renderFull(en, siteUrl, 'Kura website: full text (English)', 'en'))
        await write(`${ZH_PREFIX}/llms-full.txt`, renderFull(zh, siteUrl, 'Kura 網站全文（繁體中文）', 'zh-TW'))

        // Serve the exports as UTF-8 text (picked up by the Cloudflare _headers writer,
        // which runs after prerender).
        const textHeaders = (type: string) => ({ headers: { 'content-type': `${type}; charset=utf-8` } })
        for (const page of pages) nitro.options.routeRules[page.mdPath] = textHeaders('text/markdown')
        for (const path of ['/llms.txt', '/llms-full.txt', `${ZH_PREFIX}/llms-full.txt`]) {
          nitro.options.routeRules[path] = textHeaders('text/plain')
        }

        nitro.logger.success(`[llms] Wrote llms.txt, llms-full.txt and ${pages.length} Markdown pages`)
      })
    })
  },
})
