<script setup lang="ts">
definePageMeta({
  layout: 'default',
})

const { t } = useI18n()

usePageSeo({
  title: () => t('trackfi.seo.title'),
  description: () => t('trackfi.seo.description'),
  path: '/trackfi',
  keywords: () => t('trackfi.seo.keywords'),
})

const PILLAR_LINKS = ['/banking', '/investments', '/digital-assets']

const tags = useCopy<string[]>('trackfi.hero.tags')
const pillarCopy = useCopy<{ title: string; subtitle: string; description: string }[]>('trackfi.pillars')
const pillars = computed(() => pillarCopy.value.map((pillar, index) => ({ ...pillar, to: PILLAR_LINKS[index] })))
const securityFeatures = useCopy<{ title: string; description: string }[]>('trackfi.security')
</script>

<template>
  <div class="w-full text-kura-text bg-kura-background">
    <PageHero
      :eyebrow="t('trackfi.hero.eyebrow')"
      :title="t('trackfi.hero.title')"
      :description="t('trackfi.hero.description')"
      :tags="tags"
    />

    <main class="marketing-container pb-20 md:pb-28">
      <section class="mb-20 md:mb-28">
        <div class="max-w-2xl mb-12">
          <p class="section-label mb-3">{{ t('trackfi.overview.label') }}</p>
          <h2 class="text-3xl md:text-4xl font-bold tracking-tight leading-[1.1]">
            {{ t('trackfi.overview.title') }}
          </h2>
        </div>
        <div class="grid md:grid-cols-3 gap-5">
          <NuxtLinkLocale
            v-for="pillar in pillars"
            :key="pillar.title"
            :to="pillar.to"
            class="group card-surface p-7 hover:border-kura-primary/30 hover:shadow-card transition-all"
          >
            <h3 class="text-xl font-semibold mb-2 group-hover:text-kura-primary transition-colors">{{ pillar.title }}</h3>
            <p class="text-sm text-kura-primary font-medium mb-4">{{ pillar.subtitle }}</p>
            <p class="text-kura-text-secondary leading-relaxed text-sm">{{ pillar.description }}</p>
            <span class="inline-flex items-center gap-1 mt-4 text-sm font-medium text-kura-primary">
              {{ t('home.hero.learnMore') }}
              <svg class="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </NuxtLinkLocale>
        </div>
      </section>

      <section class="mb-20 md:mb-28">
        <div class="max-w-2xl mx-auto text-center mb-12">
          <p class="section-label mb-3">{{ t('trackfi.privacy.label') }}</p>
          <h2 class="text-3xl md:text-4xl font-bold tracking-tight leading-[1.1]">{{ t('trackfi.privacy.title') }}</h2>
          <p class="text-kura-text-secondary mt-4 leading-relaxed">
            {{ t('trackfi.privacy.description') }}
          </p>
        </div>
        <div class="grid md:grid-cols-2 gap-5">
          <div v-for="feature in securityFeatures" :key="feature.title" class="card-surface p-7">
            <h3 class="text-lg font-semibold mb-3">{{ feature.title }}</h3>
            <p class="text-kura-text-secondary leading-relaxed text-sm">{{ feature.description }}</p>
          </div>
        </div>
      </section>

      <section class="card-surface p-8 md:p-10 text-center bg-kura-surface rounded-3xl">
        <h2 class="text-2xl md:text-3xl font-bold mb-4 tracking-tight">{{ t('trackfi.plans.title') }}</h2>
        <p class="text-kura-text-secondary max-w-2xl mx-auto mb-6 leading-relaxed">
          {{ t('trackfi.plans.description') }}
        </p>
        <NuxtLinkLocale to="/pricing" class="text-kura-primary hover:text-kura-primary-dark transition-colors font-semibold text-sm">
          {{ t('trackfi.plans.link') }}
        </NuxtLinkLocale>
      </section>
    </main>

    <CTASection />
  </div>
</template>
