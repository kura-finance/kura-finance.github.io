import { computed } from 'vue'

type Resolver = (message: any) => string

function isCompiledMessage(value: unknown): boolean {
  if (typeof value === 'function') return true
  return (
    typeof value === 'object' &&
    value !== null &&
    typeof (value as { type?: unknown }).type === 'number'
  )
}

function resolveTree(value: unknown, rt: Resolver): any {
  if (typeof value === 'string' || isCompiledMessage(value)) return rt(value)
  if (Array.isArray(value)) return value.map((item) => resolveTree(item, rt))
  if (value && typeof value === 'object') {
    const out: Record<string, unknown> = {}
    for (const [key, item] of Object.entries(value)) out[key] = resolveTree(item, rt)
    return out
  }
  return value
}

/**
 * Returns a message subtree (objects, arrays, strings) for the current locale
 * with every leaf resolved to a plain string. Use it for lists and structured
 * copy; use `t()` for single strings and `<i18n-t>` for text with inline links.
 */
export function useCopy<T = any>(key: string) {
  const { tm, rt, locale } = useI18n()
  return computed<T>(() => {
    void locale.value
    return resolveTree(tm(key), rt as Resolver) as T
  })
}
