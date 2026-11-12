export interface BlogPost {
  _path: string
  title: string
  description: string
  date: string
  author: string
  category: string
  readingTime?: number
}

/**
 * English posts live in content/blog; translations live in content/<locale>/blog
 * with the same file names. Returns the content query prefix for a locale.
 */
export function blogContentPath(locale: string) {
  return locale === 'en' ? '/blog' : `/${locale.toLowerCase()}/blog`
}

/** Locale-neutral route for a post (NuxtLinkLocale adds the locale prefix). */
export function blogPostRoute(contentPath: string) {
  return `/blog/${contentPath.split('/').pop()}`
}
