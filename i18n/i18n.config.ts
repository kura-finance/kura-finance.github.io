export default defineI18nConfig(() => ({
  fallbackLocale: 'en',
  // Warn only in development; production falls back to English silently.
  missingWarn: import.meta.dev,
  fallbackWarn: false,
}))
