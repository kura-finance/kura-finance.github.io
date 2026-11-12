/**
 * Site navigation structure. Labels are message keys under `nav.*`; components
 * resolve them with `t()` so menus follow the active locale.
 */
export interface NavLink {
  key: string
  to: string
  external?: boolean
}

export interface NavGroup {
  key: string
  links: NavLink[]
}

export const PRODUCT_CATEGORIES: NavGroup[] = [
  {
    key: 'cash',
    links: [
      { key: 'account', to: '/account' },
      { key: 'globalTransfers', to: '/global-transfers' },
      { key: 'multiCurrency', to: '/multi-currency' },
    ],
  },
  {
    key: 'cards',
    links: [{ key: 'kuraCard', to: '/kura-card' }],
  },
  {
    key: 'investing',
    links: [
      { key: 'invest', to: '/invest' },
      { key: 'usStocks', to: '/us-stocks' },
      { key: 'earn', to: '/earn' },
      { key: 'borrow', to: '/borrow' },
    ],
  },
  {
    key: 'portfolio',
    links: [
      { key: 'trackfi', to: '/trackfi' },
      { key: 'connectedAccounts', to: '/connected-accounts' },
      { key: 'netWorth', to: '/net-worth' },
      { key: 'business', to: '/business' },
    ],
  },
]

export const RESOURCE_COLUMNS: NavGroup[] = [
  {
    key: 'blog',
    links: [
      { key: 'allPosts', to: '/blog' },
      { key: 'productUpdates', to: '/blog/product-updates' },
      { key: 'companyNews', to: '/blog/company-news' },
    ],
  },
  {
    key: 'documentation',
    links: [
      { key: 'docsCenter', to: '/docs' },
      { key: 'stockCountries', to: '/docs/stock-countries' },
      { key: 'rampCountries', to: '/docs/on-off-ramp-countries' },
      { key: 'compliance', to: '/compliance' },
      { key: 'privacy', to: '/privacy' },
    ],
  },
  {
    key: 'support',
    links: [
      { key: 'helpCenter', to: '/help' },
      { key: 'community', to: '/community' },
      { key: 'contactUs', to: '/contact' },
      { key: 'businessReport', to: '/investors' },
    ],
  },
]

export const ABOUT_COLUMNS: NavGroup[] = [
  {
    key: 'connect',
    links: [
      { key: 'community', to: '/community' },
      { key: 'blog', to: '/blog' },
      { key: 'x', to: 'https://x.com/kurafinance', external: true },
    ],
  },
  {
    key: 'company',
    links: [{ key: 'compliance', to: '/compliance' }],
  },
]

export function useNavGroups(groups: NavGroup[], section: 'categories' | 'resourceColumns' | 'aboutColumns') {
  const { t } = useI18n()
  return computed(() =>
    groups.map((group) => ({
      key: group.key,
      title: t(`nav.${section}.${group.key}.title`),
      description: t(`nav.${section}.${group.key}.description`),
      links: group.links.map((link) => ({
        name: t(`nav.links.${link.key}`),
        to: link.to,
        external: link.external ?? false,
      })),
    })),
  )
}
