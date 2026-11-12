<template>
  <div class="w-full text-kura-text bg-white">
    <PageHero
      :eyebrow="t('community.hero.eyebrow')"
      :title="t('community.hero.title')"
      :description="t('community.hero.description')"
      :tags="tags"
    />

    <main class="marketing-container max-w-xl pb-20 md:pb-28 text-center">
      <div class="card-surface p-8 md:p-10 space-y-6">
        <p class="text-sm text-kura-text-secondary leading-relaxed">
          {{ t('community.connect', { email: 'legal@kura-finance.com' }) }}
        </p>
        <div class="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="https://x.com/kurafinance?s=21"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-secondary text-sm"
          >
            {{ t('community.followX') }}
          </a>
          <NuxtLinkLocale to="/blog" class="btn-primary text-sm">{{ t('community.blog') }}</NuxtLinkLocale>
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
const tags = useCopy<string[]>('community.hero.tags')

usePageSeo({
  title: () => t('community.seo.title'),
  description: () => t('community.seo.description'),
  path: '/community',
  noindex: true,
})
</script>
