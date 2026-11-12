<template>
  <div class="w-full text-kura-text bg-white">
    <PageHero
      :eyebrow="t('help.hero.eyebrow')"
      :title="t('help.hero.title')"
      :description="t('help.hero.description')"
    />

    <main class="marketing-container max-w-xl pb-20 md:pb-28">
      <div class="card-surface p-8 md:p-10 space-y-6 text-center">
        <p class="text-sm text-kura-text-secondary">{{ t('help.contactUs') }}</p>
        <a
          href="mailto:legal@kura-finance.com"
          class="block text-lg font-semibold text-kura-primary hover:text-kura-primary-dark transition-colors"
        >
          legal@kura-finance.com
        </a>
        <p class="text-sm text-kura-text-secondary leading-relaxed">{{ t('help.noSupport') }}</p>
        <div class="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
          <NuxtLinkLocale to="/docs" class="btn-secondary text-sm">{{ t('help.docs') }}</NuxtLinkLocale>
          <NuxtLinkLocale to="/" class="btn-primary text-sm">{{ t('help.home') }}</NuxtLinkLocale>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default',
})

const { t } = useI18n()

usePageSeo({
  title: () => t('help.seo.title'),
  description: () => t('help.seo.description', { legal: 'legal@kura-finance.com' }),
  path: '/help',
  keywords: () => t('help.seo.keywords'),
})
</script>
