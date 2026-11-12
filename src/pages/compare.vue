<script setup lang="ts">
definePageMeta({ layout: 'default' })

const { t } = useI18n()
const tags = useCopy<string[]>('comparePage.tags')

usePageSeo({
  title: () => t('comparePage.seo.title'),
  description: () => t('comparePage.seo.description'),
  path: '/compare',
  keywords: () => t('comparePage.seo.keywords'),
})
</script>

<template>
  <div class="w-full text-kura-text bg-kura-background">
    <PageHero
      :eyebrow="t('comparePage.eyebrow')"
      :title="t('comparePage.title')"
      :description="t('comparePage.description')"
      :tags="tags"
    />

    <ComparisonSection />

    <CTASection />
  </div>
</template>
