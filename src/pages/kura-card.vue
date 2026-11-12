<script setup lang="ts">
definePageMeta({
  layout: 'default',
})

const { t } = useI18n()

usePageSeo({
  title: () => t('kuraCard.seo.title'),
  description: () => t('kuraCard.seo.description'),
  path: '/kura-card',
  keywords: () => t('kuraCard.seo.keywords'),
})

const tags = useCopy<string[]>('kuraCard.hero.tags')
const features = useCopy<{ title: string; description: string }[]>('kuraCard.features.items')
const cardBenefits = useCopy<string[]>('kuraCard.benefits.items')
const onboardingSteps = useCopy<string[]>('kuraCard.how.steps')
</script>

<template>
  <div class="w-full text-kura-text bg-kura-background">
    <PageHero
      :eyebrow="t('kuraCard.hero.eyebrow')"
      :title="t('kuraCard.hero.title')"
      :description="t('kuraCard.hero.description')"
      :tags="tags"
    />

    <main class="marketing-container pb-20 md:pb-28">
      <section class="mb-14 md:mb-16">
        <div class="rounded-3xl border border-kura-primary/20 bg-kura-primary/5 p-8 md:p-10 text-center max-w-2xl mx-auto">
          <p class="section-label mb-3">{{ t('kuraCard.status.label') }}</p>
          <h2 class="text-2xl md:text-3xl font-bold mb-4 tracking-tight">{{ t('kuraCard.status.title') }}</h2>
          <p class="text-kura-text-secondary leading-relaxed">
            {{ t('kuraCard.status.description') }}
          </p>
        </div>
      </section>

      <section class="mb-14 md:mb-16">
        <div class="rounded-3xl border border-kura-border bg-kura-surface p-8 md:p-10 max-w-3xl mx-auto">
          <p class="section-label mb-3">{{ t('kuraCard.benefits.label') }}</p>
          <h2 class="text-2xl font-bold mb-4 tracking-tight">{{ t('kuraCard.benefits.title') }}</h2>
          <ul class="grid sm:grid-cols-2 gap-3">
            <li v-for="benefit in cardBenefits" :key="benefit" class="flex items-start gap-2 text-sm text-kura-text-secondary">
              <span class="text-kura-primary mt-0.5">✓</span>
              {{ benefit }}
            </li>
          </ul>
        </div>
      </section>

      <section class="mb-14 md:mb-16">
        <div class="max-w-2xl mb-10">
          <p class="section-label mb-3">{{ t('kuraCard.features.label') }}</p>
          <h2 class="text-3xl font-bold tracking-tight">{{ t('kuraCard.features.title') }}</h2>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div v-for="feature in features" :key="feature.title" class="card-surface p-7">
            <h3 class="text-lg font-semibold mb-3">{{ feature.title }}</h3>
            <p class="text-kura-text-secondary leading-relaxed text-sm">{{ feature.description }}</p>
          </div>
        </div>
      </section>

      <section class="card-surface p-8 md:p-12 mb-14 md:mb-16 bg-white">
        <h2 class="text-2xl md:text-3xl font-bold mb-4 text-center tracking-tight">{{ t('kuraCard.how.title') }}</h2>
        <p class="text-kura-text-secondary text-center max-w-2xl mx-auto mb-10 leading-relaxed">
          {{ t('kuraCard.how.description') }}
        </p>
        <ol class="max-w-xl mx-auto space-y-4">
          <li v-for="(step, index) in onboardingSteps" :key="step" class="flex items-start gap-4">
            <span class="flex-shrink-0 w-8 h-8 rounded-full bg-kura-primary/10 text-kura-primary font-semibold text-sm flex items-center justify-center">
              {{ index + 1 }}
            </span>
            <span class="text-kura-text-secondary pt-1 text-sm">{{ step }}</span>
          </li>
        </ol>
        <p class="text-sm text-kura-text-secondary text-center mt-8 max-w-lg mx-auto">
          {{ t('kuraCard.how.note') }}
        </p>
      </section>
    </main>

    <CTASection />
  </div>
</template>
