<script setup lang="ts">
import { dinariCoverage } from '~/data/coverage/dinari-countries'
import { COUNTRY_NAMES_ZH_TW } from '~/data/coverage/country-names.zh-TW'

definePageMeta({ layout: 'default' })

const { t, locale } = useI18n()
const extraNotes = useCopy<string[]>('stockCountries.notes')

const sections = computed(() => [
  {
    title: t('stockCountries.sections.notAvailable.title'),
    description: t('stockCountries.sections.notAvailable.description'),
    countries: dinariCoverage.notAvailable.map((item) => item.name),
    variant: 'warning' as const,
  },
  {
    title: t('stockCountries.sections.restricted.title'),
    description: t('stockCountries.sections.restricted.description'),
    countries: dinariCoverage.restricted,
    variant: 'warning' as const,
  },
])

const notes = computed(() => [
  t('stockCountries.summary'),
  ...dinariCoverage.notAvailable.map((item) => {
    const name = locale.value === 'zh-TW' ? (COUNTRY_NAMES_ZH_TW[item.name] ?? item.name) : item.name
    const separator = locale.value === 'zh-TW' ? '：' : ': '
    return `${name}${separator}${t(`stockCountries.notAvailableNotes.${item.name}`)}`
  }),
  ...extraNotes.value,
])

usePageSeo({
  title: () => t('stockCountries.seo.title'),
  description: () => t('stockCountries.seo.description'),
  path: '/docs/stock-countries',
  keywords: () => t('stockCountries.seo.keywords'),
})
</script>

<template>
  <CoverageCountriesPage
    :badge="t('stockCountries.badge')"
    :title="t('stockCountries.title')"
    :subtitle="t('stockCountries.subtitle')"
    partner="Dinari"
    partner-url="https://dinari.com"
    docs-hub-path="/docs"
    :last-updated="dinariCoverage.lastUpdated"
    :source-url="dinariCoverage.sourceUrl"
    :sections="sections"
    :notes="notes"
  />
</template>
