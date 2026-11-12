<script setup lang="ts">
import { bridgeCoverage } from '~/data/coverage/bridge-countries'
import { moonpayCoverage } from '~/data/coverage/moonpay-countries'

definePageMeta({ layout: 'default' })

const { t } = useI18n()
const notes = useCopy<string[]>('rampCountries.notes')

function section(key: string, countries: readonly string[], variant?: 'warning') {
  return {
    title: t(`rampCountries.sections.${key}.title`),
    description: t(`rampCountries.sections.${key}.description`),
    countries,
    ...(variant ? { variant } : {}),
  }
}

const sections = computed(() => [
  section('usd', bridgeCoverage.usd),
  section('eurGbp', bridgeCoverage.eurGbp),
  section('mxnBrlCop', bridgeCoverage.mxnBrlCop),
  section('card', moonpayCoverage.debitCreditCard),
  section('bridgeUnavailable', bridgeCoverage.unavailable, 'warning'),
  section('moonpayUnavailable', moonpayCoverage.unavailable, 'warning'),
  section('prohibited', bridgeCoverage.prohibited, 'warning'),
])

const sourceLinks = computed(() => [
  { label: t('rampCountries.sources.bridge'), url: bridgeCoverage.sourceUrl },
  { label: t('rampCountries.sources.moonpay'), url: moonpayCoverage.sourceUrl },
])

usePageSeo({
  title: () => t('rampCountries.seo.title'),
  description: () => t('rampCountries.seo.description'),
  path: '/docs/on-off-ramp-countries',
  keywords: () => t('rampCountries.seo.keywords'),
})
</script>

<template>
  <CoverageCountriesPage
    :badge="t('rampCountries.badge')"
    :title="t('rampCountries.title')"
    :subtitle="t('rampCountries.subtitle')"
    :partners="[
      { name: 'Bridge.xyz', url: 'https://bridge.xyz' },
      { name: 'MoonPay', url: 'https://moonpay.com' },
    ]"
    docs-hub-path="/docs"
    :last-updated="moonpayCoverage.lastUpdated"
    :source-links="sourceLinks"
    :sections="sections"
    :notes="notes"
  />
</template>
