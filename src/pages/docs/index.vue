<template>
  <div class="w-full text-kura-text bg-kura-background">
    <PageHero
      :eyebrow="t('docs.hero.eyebrow')"
      :title="t('docs.hero.title')"
      :description="t('docs.hero.description')"
      :divider="false"
    />

    <main class="marketing-container pb-20 md:pb-28 space-y-14 md:space-y-16 pt-2 md:pt-4">
      <section>
        <h2 class="text-2xl font-bold tracking-tight mb-5">{{ t('docs.sections.countries') }}</h2>
        <div class="grid md:grid-cols-2 gap-5">
          <DocLinkCard
            v-for="doc in countryDocs"
            :key="doc.title"
            v-bind="doc"
          />
        </div>
      </section>

      <section>
        <h2 class="text-2xl font-bold tracking-tight mb-5">{{ t('docs.sections.trust') }}</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <DocLinkCard
            v-for="doc in trustDocs"
            :key="doc.title"
            v-bind="doc"
          />
        </div>
      </section>

      <section>
        <h2 class="text-2xl font-bold tracking-tight mb-5">{{ t('docs.sections.investors') }}</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <DocLinkCard
            :title="t('docs.report.title')"
            :description="t('docs.report.description')"
            :category="t('docs.report.category')"
            to="/investors"
          />
        </div>
      </section>

      <section>
        <h2 class="text-2xl font-bold tracking-tight mb-5">{{ t('docs.sections.source') }}</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <DocLinkCard
            :title="t('docs.github.title')"
            :description="t('docs.github.description')"
            :category="t('docs.github.category')"
            to="https://github.com/Kura-Finance"
          />
        </div>
      </section>

      <section class="card-surface p-8 md:p-10 text-center bg-kura-surface">
        <h2 class="text-2xl md:text-3xl font-bold mb-4">{{ t('docs.legal.title') }}</h2>
        <p class="text-kura-text-secondary max-w-2xl mx-auto mb-6 text-sm leading-relaxed">
          {{ t('docs.legal.description') }}
        </p>
        <a href="mailto:legal@kura-finance.com" class="btn-primary">
          {{ t('docs.legal.button') }}
        </a>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default',
})

const { t } = useI18n()

const COUNTRY_LINKS = ['/docs/stock-countries', '/docs/on-off-ramp-countries']
const TRUST_LINKS = ['/privacy', '/compliance', '/tos', '/disclaimer', '/referral-terms', '/prohibited-activities']

type DocCopy = { title: string; description: string; category: string }

const countryCopy = useCopy<DocCopy[]>('docs.countryDocs')
const trustCopy = useCopy<DocCopy[]>('docs.trustDocs')

const countryDocs = computed(() =>
  countryCopy.value.map((doc, index) => ({ ...doc, status: t('common.discontinued'), to: COUNTRY_LINKS[index] })),
)
const trustDocs = computed(() => trustCopy.value.map((doc, index) => ({ ...doc, to: TRUST_LINKS[index] })))

usePageSeo({
  title: () => t('docs.seo.title'),
  description: () => t('docs.seo.description'),
  path: '/docs',
  keywords: () => t('docs.seo.keywords'),
})
</script>
