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
        <div class="flex flex-col gap-4">
          <a
            href="mailto:support@kura-finance.com"
            class="text-lg font-semibold text-kura-primary hover:text-kura-primary-dark transition-colors"
          >
            support@kura-finance.com
          </a>
          <a
            href="mailto:hello@kura-finance.com"
            class="text-lg font-semibold text-kura-primary hover:text-kura-primary-dark transition-colors"
          >
            hello@kura-finance.com
          </a>
        </div>
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
  description: () => t('help.seo.description', { support: 'support@kura-finance.com', hello: 'hello@kura-finance.com' }),
  path: '/help',
  keywords: () => t('help.seo.keywords'),
})
</script>
