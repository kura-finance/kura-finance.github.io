<script setup lang="ts">
definePageMeta({
  layout: 'default',
})

const { t } = useI18n()

usePageSeo({
  title: () => t('home.seo.title'),
  description: () => t('home.seo.description'),
  path: '/',
  keywords: () => t('home.seo.keywords'),
  jsonLd: websiteSchema(),
})
</script>

<template>
  <div>
    <HeroSection />
    <MoneyFeaturesSection />
    <DesignedForHumansSection />
    <EcosystemSection />
    <ComparisonSection />
    <CTASection />
  </div>
</template>
