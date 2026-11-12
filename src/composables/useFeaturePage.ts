import { computed } from 'vue'
import { FEATURE_PAGES_EN, type FeaturePageConfig, type FeaturePageSlug } from '~/data/feature-pages'
import { FEATURE_PAGES_ZH_TW } from '~/data/feature-pages.zh-TW'

const FEATURE_PAGES: Record<string, Record<FeaturePageSlug, FeaturePageConfig>> = {
  en: FEATURE_PAGES_EN,
  'zh-TW': FEATURE_PAGES_ZH_TW,
}

export function useFeaturePage(slug: FeaturePageSlug) {
  const { locale } = useI18n()
  const config = computed<FeaturePageConfig>(
    () => (FEATURE_PAGES[locale.value] ?? FEATURE_PAGES_EN)[slug],
  )

  usePageSeo({
    title: () => config.value.seo.title,
    description: () => config.value.seo.description,
    path: () => config.value.seo.path,
    keywords: () => config.value.seo.keywords,
  })

  return config
}
