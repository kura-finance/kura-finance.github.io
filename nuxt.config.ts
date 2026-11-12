import { fileURLToPath } from 'node:url'
import { join, dirname } from 'node:path'

const rootDir = dirname(fileURLToPath(import.meta.url))

/** Message files under i18n/locales/<locale>/, merged per locale. */
const LOCALE_FILES = ['layout', 'home', 'about', 'pricing', 'download', 'products', 'support', 'docs', 'coverage', 'blog', 'report', 'legal']

export default defineNuxtConfig({
  srcDir: 'src',
  serverDir: 'src/server',
  dir: {
    public: join(rootDir, 'public'),
  },
  ssr: true,
  compatibilityDate: '2026-04-18',
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image', '@nuxt/content', '@nuxtjs/i18n', './modules/llms'],
  i18n: {
    baseUrl: 'https://kura-finance.com',
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    locales: [
      { code: 'en', language: 'en-US', name: 'English', files: LOCALE_FILES.map((name) => `en/${name}.json`) },
      { code: 'zh-TW', language: 'zh-TW', name: '繁體中文', files: LOCALE_FILES.map((name) => `zh-TW/${name}.json`) },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'kura_locale',
      redirectOn: 'root',
      alwaysRedirect: false,
    },
    vueI18n: './i18n.config.ts',
  },
  css: ['~/styles/globals.css'],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  runtimeConfig: {
    public: {
      siteUrl: 'https://kura-finance.com',
    },
  },
  experimental: {
    // Inline payload in HTML; avoid preloading /_payload.json on dynamic routes (Safari MIME/CSP issues).
    payloadExtraction: false,
    appManifest: false,
  },
  app: {
    head: {
      title: 'Kura — Modern Finance, Redesigned',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'One account to save, spend, invest, earn, and move money globally. A premium financial experience with the simplicity of a bank.' },
        { name: 'author', content: 'Kura' },
        { name: 'theme-color', content: '#f8f9fc' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
        { name: 'apple-mobile-web-app-title', content: 'Kura' },
        { property: 'og:site_name', content: 'Kura' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: 'https://kura-finance.com/og.jpg' },
        { property: 'og:image:type', content: 'image/jpeg' },
        { property: 'og:image:alt', content: 'Kura — Modern Finance, Redesigned' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: 'https://kura-finance.com/og.jpg' },
        { name: 'robots', content: 'index, follow' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'apple-touch-icon', href: '/icon_background.webp' },
        { rel: 'mask-icon', href: '/favicon.svg', color: '#7C5CFC' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,400;0,14..32,500;0,14..32,600&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;1,6..72,400&display=swap' },
        { rel: 'sitemap', href: '/sitemap.xml', type: 'application/xml' },
        { rel: 'alternate', type: 'application/rss+xml', title: 'Kura Blog RSS', href: '/feed.xml' },
      ],
    },
  },
  image: {
    format: ['webp'],
    quality: 80,
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
    },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/sitemap.xml', '/feed.xml', '/zh-TW'],
      autoSubfolderIndex: false,
    },
    compressPublicAssets: true,
    // Every page is prerendered, so the Pages Function serves no content.
    // Cloudflare requires at least one include rule; `/api/*` has no handlers
    // and returns 404. Everything else (including /_nuxt/*) is static. Missing static files must 404 — without
    // public/404.html Cloudflare Pages SPA-falls-back to index.html (text/html)
    // for missing .js URLs and browsers throw MIME errors.
    cloudflare: {
      pages: {
        defaultRoutes: false,
        routes: {
          version: 1,
          include: ['/api/*'],
          exclude: [],
        },
      },
    },
  },
  $production: {
    nitro: {
      preset: 'cloudflare_pages',
    },
  },
  routeRules: {
    '/**': {
      headers: {
        'Content-Security-Policy':
          "default-src 'self'; script-src 'self' 'unsafe-inline' https://static.cloudflareinsights.com; connect-src 'self' https://static.cloudflareinsights.com https://cloudflareinsights.com; img-src 'self' data: https:; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; frame-ancestors 'none'; base-uri 'self'; object-src 'none'",
        // HTML / document responses: never long-cache (chunk hashes rotate each deploy).
        'cache-control': 'public, max-age=0, must-revalidate',
      },
    },
    '/': { prerender: true },
    '/about': { prerender: true },
    '/pricing': { prerender: true },
    '/download': { prerender: true },
    '/account': { prerender: true },
    '/financial-account': { prerender: true },
    '/global-transfers': { prerender: true },
    '/multi-currency': { prerender: true },
    '/card-waitlist': { prerender: true },
    '/invest': { prerender: true },
    '/us-stocks': { prerender: true },
    '/earn': { prerender: true },
    '/borrow': { prerender: true },
    '/connected-accounts': { prerender: true },
    '/net-worth': { prerender: true },
    '/banking': { prerender: true },
    '/investments': { prerender: true },
    '/digital-assets': { prerender: true },
    '/compare': { prerender: true },
    '/contact': { prerender: true },
    '/open-source': { redirect: { to: '/', statusCode: 301 } },
    '/kura-wallet': { redirect: { to: '/account', statusCode: 301 } },
    '/kura-card': { prerender: true },
    '/trackfi': { prerender: true },
    '/help': { prerender: true },
    '/docs': { prerender: true },
    '/blog': { prerender: true },
    '/blog/**': { prerender: true },
    '/blog/product-updates': { prerender: true },
    '/blog/company-news': { prerender: true },
    '/feed.xml': { prerender: true },
    '/sitemap.xml': { prerender: true },
    '/docs/stock-countries': { prerender: true },
    '/docs/on-off-ramp-countries': { prerender: true },
    '/docs/card-countries': { redirect: { to: '/kura-card', statusCode: 301 } },
    '/resources/stock-countries': { redirect: { to: '/docs/stock-countries', statusCode: 301 } },
    '/resources/card-countries': { redirect: { to: '/kura-card', statusCode: 301 } },
    '/resources/on-off-ramp-countries': { redirect: { to: '/docs/on-off-ramp-countries', statusCode: 301 } },
    '/business': { prerender: true },
    '/community': { prerender: true },
    // The business report is static since Kura ceased operations.
    '/investors': { prerender: true },
    '/privacy': { prerender: true },
    '/tos': { prerender: true },
    '/disclaimer': { prerender: true },
    '/referral-terms': { prerender: true },
    '/prohibited-activities': { prerender: true },
    '/compliance': { prerender: true },
    // Traditional Chinese (zh-TW) mirrors of the routes above.
    '/zh-TW': { prerender: true },
    '/zh-TW/about': { prerender: true },
    '/zh-TW/pricing': { prerender: true },
    '/zh-TW/download': { prerender: true },
    '/zh-TW/account': { prerender: true },
    '/zh-TW/financial-account': { prerender: true },
    '/zh-TW/global-transfers': { prerender: true },
    '/zh-TW/multi-currency': { prerender: true },
    '/zh-TW/card-waitlist': { prerender: true },
    '/zh-TW/invest': { prerender: true },
    '/zh-TW/us-stocks': { prerender: true },
    '/zh-TW/earn': { prerender: true },
    '/zh-TW/borrow': { prerender: true },
    '/zh-TW/connected-accounts': { prerender: true },
    '/zh-TW/net-worth': { prerender: true },
    '/zh-TW/banking': { prerender: true },
    '/zh-TW/investments': { prerender: true },
    '/zh-TW/digital-assets': { prerender: true },
    '/zh-TW/compare': { prerender: true },
    '/zh-TW/contact': { prerender: true },
    '/zh-TW/open-source': { redirect: { to: '/zh-TW', statusCode: 301 } },
    '/zh-TW/kura-wallet': { redirect: { to: '/zh-TW/account', statusCode: 301 } },
    '/zh-TW/kura-card': { prerender: true },
    '/zh-TW/trackfi': { prerender: true },
    '/zh-TW/help': { prerender: true },
    '/zh-TW/docs': { prerender: true },
    '/zh-TW/blog': { prerender: true },
    '/zh-TW/blog/**': { prerender: true },
    '/zh-TW/blog/product-updates': { prerender: true },
    '/zh-TW/blog/company-news': { prerender: true },
    '/zh-TW/docs/stock-countries': { prerender: true },
    '/zh-TW/docs/on-off-ramp-countries': { prerender: true },
    '/zh-TW/docs/card-countries': { redirect: { to: '/zh-TW/kura-card', statusCode: 301 } },
    '/zh-TW/resources/stock-countries': { redirect: { to: '/zh-TW/docs/stock-countries', statusCode: 301 } },
    '/zh-TW/resources/card-countries': { redirect: { to: '/zh-TW/kura-card', statusCode: 301 } },
    '/zh-TW/resources/on-off-ramp-countries': { redirect: { to: '/zh-TW/docs/on-off-ramp-countries', statusCode: 301 } },
    '/zh-TW/business': { prerender: true },
    '/zh-TW/community': { prerender: true },
    '/zh-TW/investors': { prerender: true },
    '/zh-TW/privacy': { prerender: true },
    '/zh-TW/tos': { prerender: true },
    '/zh-TW/disclaimer': { prerender: true },
    '/zh-TW/referral-terms': { prerender: true },
    '/zh-TW/prohibited-activities': { prerender: true },
    '/zh-TW/compliance': { prerender: true },
    '/_nuxt/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
    '/icon.webp': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
    '/icon_background.webp': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
    '/favicon.svg': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
    '/og.jpg': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
    '/screenshot.webp': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
  },
  tailwindcss: {
    configPath: 'tailwind.config.ts',
    viewer: false,
  },
  devtools: { enabled: false },
  vite: {
    vue: {
      template: {
        transformAssetUrls: {
          includeAbsolute: false,
        },
      },
    },
  },
});
