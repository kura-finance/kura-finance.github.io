import { serverQueryContent } from '#content/server'
import { absoluteUrl } from '~/utils/site'
import { escapeXml } from '../utils/xml'

interface SitemapEntry {
  /** Locale-neutral path; the sitemap lists it once per locale with hreflang alternates. */
  loc: string
  lastmod: string
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority: number
}

interface BlogPost {
  _path: string
  date?: string
}

const STATIC_ROUTES: SitemapEntry[] = [
  { loc: '/', lastmod: '2026-06-22', changefreq: 'weekly', priority: 1.0 },
  { loc: '/download', lastmod: '2026-06-22', changefreq: 'weekly', priority: 0.95 },
  { loc: '/account', lastmod: '2026-06-22', changefreq: 'monthly', priority: 0.9 },
  { loc: '/financial-account', lastmod: '2026-06-22', changefreq: 'monthly', priority: 0.88 },
  { loc: '/global-transfers', lastmod: '2026-06-22', changefreq: 'monthly', priority: 0.85 },
  { loc: '/multi-currency', lastmod: '2026-06-22', changefreq: 'monthly', priority: 0.85 },
  { loc: '/kura-card', lastmod: '2026-06-22', changefreq: 'monthly', priority: 0.9 },
  { loc: '/card-waitlist', lastmod: '2026-06-22', changefreq: 'monthly', priority: 0.85 },
  { loc: '/invest', lastmod: '2026-06-22', changefreq: 'monthly', priority: 0.85 },
  { loc: '/us-stocks', lastmod: '2026-06-22', changefreq: 'monthly', priority: 0.85 },
  { loc: '/earn', lastmod: '2026-06-22', changefreq: 'monthly', priority: 0.85 },
  { loc: '/borrow', lastmod: '2026-06-27', changefreq: 'monthly', priority: 0.85 },
  { loc: '/trackfi', lastmod: '2026-06-22', changefreq: 'monthly', priority: 0.9 },
  { loc: '/connected-accounts', lastmod: '2026-06-22', changefreq: 'monthly', priority: 0.85 },
  { loc: '/net-worth', lastmod: '2026-06-22', changefreq: 'monthly', priority: 0.85 },
  { loc: '/banking', lastmod: '2026-06-22', changefreq: 'monthly', priority: 0.8 },
  { loc: '/investments', lastmod: '2026-06-22', changefreq: 'monthly', priority: 0.8 },
  { loc: '/digital-assets', lastmod: '2026-06-22', changefreq: 'monthly', priority: 0.8 },
  { loc: '/compare', lastmod: '2026-06-22', changefreq: 'monthly', priority: 0.88 },
  { loc: '/pricing', lastmod: '2026-07-22', changefreq: 'weekly', priority: 0.9 },
  { loc: '/business', lastmod: '2026-07-22', changefreq: 'monthly', priority: 0.88 },
  { loc: '/about', lastmod: '2026-06-22', changefreq: 'monthly', priority: 0.85 },
  { loc: '/blog', lastmod: '2026-06-22', changefreq: 'weekly', priority: 0.8 },
  { loc: '/blog/product-updates', lastmod: '2026-06-22', changefreq: 'weekly', priority: 0.75 },
  { loc: '/blog/company-news', lastmod: '2026-06-22', changefreq: 'weekly', priority: 0.75 },
  { loc: '/docs', lastmod: '2026-06-22', changefreq: 'monthly', priority: 0.75 },
  { loc: '/help', lastmod: '2026-06-22', changefreq: 'monthly', priority: 0.7 },
  { loc: '/contact', lastmod: '2026-06-22', changefreq: 'monthly', priority: 0.7 },
  { loc: '/investors', lastmod: '2026-11-12', changefreq: 'yearly', priority: 0.7 },
  { loc: '/docs/stock-countries', lastmod: '2026-06-22', changefreq: 'monthly', priority: 0.65 },
  { loc: '/docs/on-off-ramp-countries', lastmod: '2026-06-22', changefreq: 'monthly', priority: 0.65 },
  { loc: '/compliance', lastmod: '2026-07-16', changefreq: 'monthly', priority: 0.55 },
  { loc: '/privacy', lastmod: '2026-07-16', changefreq: 'yearly', priority: 0.5 },
  { loc: '/tos', lastmod: '2026-07-16', changefreq: 'yearly', priority: 0.5 },
  { loc: '/disclaimer', lastmod: '2026-07-16', changefreq: 'yearly', priority: 0.5 },
  { loc: '/referral-terms', lastmod: '2026-07-16', changefreq: 'yearly', priority: 0.45 },
  { loc: '/prohibited-activities', lastmod: '2026-07-16', changefreq: 'yearly', priority: 0.45 },
]

const LOCALES = [
  { code: 'en', hreflang: 'en', prefix: '' },
  { code: 'zh-TW', hreflang: 'zh-TW', prefix: '/zh-TW' },
] as const

function localizedUrl(path: string, prefix: string) {
  if (!prefix) return absoluteUrl(path)
  return absoluteUrl(path === '/' ? prefix : `${prefix}${path}`)
}

function renderUrl(entry: SitemapEntry, locales: readonly (typeof LOCALES)[number][] = LOCALES) {
  const alternates = locales
    .map(
      (locale) =>
        `    <xhtml:link rel="alternate" hreflang="${locale.hreflang}" href="${escapeXml(localizedUrl(entry.loc, locale.prefix))}" />`,
    )
    .concat(`    <xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(absoluteUrl(entry.loc))}" />`)
    .join('\n')

  return locales
    .map(
      (locale) => `  <url>
    <loc>${escapeXml(localizedUrl(entry.loc, locale.prefix))}</loc>
${alternates}
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority.toFixed(2)}</priority>
  </url>`,
    )
    .join('\n')
}

export default defineEventHandler(async (event) => {
  const posts = await serverQueryContent<BlogPost>(event, '/blog')
    .where({ _extension: 'md' })
    .sort({ date: -1 })
    .find()

  const translated = await serverQueryContent<BlogPost>(event, '/zh-tw/blog')
    .where({ _extension: 'md' })
    .only(['_path'])
    .find()
  const translatedSlugs = new Set(translated.map((post) => post._path.split('/').pop()))

  const blogUrls = posts.map((post) => {
    const slug = post._path.split('/').pop()
    const entry: SitemapEntry = {
      loc: `/blog/${slug}`,
      lastmod: post.date?.slice(0, 10) ?? '2026-06-21',
      changefreq: 'monthly',
      priority: 0.7,
    }
    return renderUrl(entry, translatedSlugs.has(slug) ? LOCALES : LOCALES.slice(0, 1))
  })

  const urls = [...STATIC_ROUTES.map((entry) => renderUrl(entry)), ...blogUrls].join('\n')
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>`

  setHeader(event, 'content-type', 'application/xml; charset=utf-8')
  setHeader(event, 'cache-control', 'public, max-age=3600')
  return xml
})
