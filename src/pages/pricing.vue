<script setup lang="ts">
import { ref, computed } from 'vue'

definePageMeta({
  layout: 'default',
})

const { t } = useI18n()

usePageSeo({
  title: () => t('pricing.seo.title'),
  description: () => t('pricing.seo.description'),
  path: '/pricing',
  keywords: () => t('pricing.seo.keywords'),
})

const isAnnual = ref(false)

type PlanCopy = { name: string; description: string; features: { title: string; description: string }[] }

const planCopy = useCopy<Record<'basic' | 'pro' | 'ultimate', PlanCopy>>('pricing.plans')

const plans = computed(() => [
  { ...planCopy.value.basic, monthlyPrice: null as number | null, annualPrice: null as number | null, highlighted: false },
  { ...planCopy.value.pro, monthlyPrice: 12.99, annualPrice: 129.99, highlighted: true },
  { ...planCopy.value.ultimate, monthlyPrice: 29.99, annualPrice: 299.99, highlighted: false },
])

const getPlanPrice = (plan: (typeof plans.value)[number]) => {
  if (plan.monthlyPrice === null) {
    return { price: t('pricing.free'), period: '', subtext: '' }
  }

  if (isAnnual.value && plan.annualPrice !== null) {
    const monthlyEquivalent = (plan.annualPrice / 12).toFixed(2)
    return {
      price: `$${plan.annualPrice.toFixed(2)}`,
      period: t('pricing.perYear'),
      subtext: t('pricing.billedAnnually', { price: `$${monthlyEquivalent}` }),
    }
  }

  return {
    price: `$${plan.monthlyPrice.toFixed(2)}`,
    period: t('pricing.perMonth'),
    subtext: '',
  }
}

const displayPlans = computed(() =>
  plans.value.map((plan) => ({
    ...plan,
    display: getPlanPrice(plan),
  })),
)

</script>

<template>
  <div class="w-full text-kura-text bg-kura-background">
    <PageHero
      :eyebrow="t('pricing.hero.eyebrow')"
      :title="t('pricing.hero.title')"
      :description="t('pricing.hero.description')"
    />

    <main class="marketing-container pb-20 md:pb-28">
      <div class="flex justify-center mb-12">
        <div class="inline-flex items-center gap-1 p-1 rounded-full border border-kura-border bg-kura-surface">
          <button
            type="button"
            class="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200"
            :class="!isAnnual ? 'bg-white text-kura-text shadow-sm' : 'text-kura-text-secondary hover:text-kura-text'"
            @click="isAnnual = false"
          >
            {{ t('pricing.monthly') }}
          </button>
          <button
            type="button"
            class="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 flex items-center gap-2"
            :class="isAnnual ? 'bg-white text-kura-text shadow-sm' : 'text-kura-text-secondary hover:text-kura-text'"
            @click="isAnnual = true"
          >
            {{ t('pricing.annual') }}
            <span class="text-[10px] font-bold uppercase tracking-wide px-1.5 py-0.5 rounded-full bg-kura-primary/15 text-kura-primary">
              {{ t('pricing.save') }}
            </span>
          </button>
        </div>
      </div>

      <div class="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16 justify-items-center max-w-6xl mx-auto">
        <div v-for="(plan, index) in displayPlans" :key="index" class="relative group flex w-full">
          <div
            class="relative w-full card-surface rounded-3xl transition-all duration-300 flex flex-col"
            :class="plan.highlighted ? 'border-kura-primary/50 xl:scale-105 z-10 shadow-card' : 'hover:border-kura-primary/20'"
          >
            <div class="p-5 lg:p-7 flex flex-col h-full">
              <div class="flex flex-col grow-0 min-h-[170px] lg:min-h-[180px]">
                <div class="flex items-center justify-between mb-2 min-h-[28px]">
                  <h3 class="text-lg lg:text-xl font-bold">{{ plan.name }}</h3>
                  <span v-if="plan.highlighted" class="px-2 py-0.5 rounded-full bg-kura-primary/20 text-kura-primary text-[10px] font-bold uppercase tracking-widest whitespace-nowrap ml-2 shrink-0">{{ t('pricing.popular') }}</span>
                </div>
                <p class="text-kura-text-secondary mb-4 text-xs lg:text-sm">{{ plan.description }}</p>

                <div class="mt-auto mb-4">
                  <span class="text-3xl lg:text-4xl font-black">{{ plan.display.price }}</span>
                  <span v-if="plan.display.period" class="text-kura-text-secondary ml-1 text-xs">{{ plan.display.period }}</span>
                  <div class="text-xs text-kura-primary mt-1 min-h-[16px]">
                    <span v-if="plan.display.subtext">{{ plan.display.subtext }}</span>
                  </div>
                </div>
              </div>

              <p class="w-full px-4 py-2.5 rounded-full text-sm font-semibold text-center mb-6 shrink-0 border border-kura-border text-kura-text-secondary">
                {{ t('pricing.unavailable') }}
              </p>

              <div class="space-y-4 pt-4 border-t border-kura-border flex-grow">
                <div v-for="(feature, featureIndex) in plan.features" :key="featureIndex" class="flex items-start gap-2.5">
                  <svg class="w-4 h-4 text-kura-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <div>
                    <p class="text-kura-text text-xs font-semibold leading-relaxed">{{ feature.title }}</p>
                    <p class="text-kura-text-secondary text-xs leading-relaxed mt-0.5">{{ feature.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="max-w-3xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center tracking-tight">{{ t('pricing.faq.title') }}</h2>

        <div class="space-y-4">
          <details class="group card-surface rounded-2xl p-6 cursor-pointer hover:border-kura-primary/20 transition-colors">
            <summary class="flex items-center justify-between font-bold text-lg">
              <span>{{ t('pricing.faq.switchQ') }}</span>
              <span class="text-2xl group-open:rotate-180 transition-transform">+</span>
            </summary>
            <p class="mt-4 text-kura-text-secondary">{{ t('pricing.faq.switchA') }}</p>
          </details>

          <details class="group card-surface rounded-2xl p-6 cursor-pointer hover:border-kura-primary/20 transition-colors">
            <summary class="flex items-center justify-between font-bold text-lg">
              <span>{{ t('pricing.faq.businessQ') }}</span>
              <span class="text-2xl group-open:rotate-180 transition-transform">+</span>
            </summary>
            <i18n-t keypath="pricing.faq.businessA" tag="p" class="mt-4 text-kura-text-secondary" scope="global">
              <template #link>
                <NuxtLinkLocale to="/business" class="text-kura-primary font-medium hover:text-kura-primary-dark transition-colors">{{ t('pricing.faq.businessLink') }}</NuxtLinkLocale>
              </template>
            </i18n-t>
          </details>

          <details class="group card-surface rounded-2xl p-6 cursor-pointer hover:border-kura-primary/20 transition-colors">
            <summary class="flex items-center justify-between font-bold text-lg">
              <span>{{ t('pricing.faq.secureQ') }}</span>
              <span class="text-2xl group-open:rotate-180 transition-transform">+</span>
            </summary>
            <p class="mt-4 text-kura-text-secondary">{{ t('pricing.faq.secureA') }}</p>
          </details>
        </div>
      </section>
    </main>

    <CTASection />
  </div>
</template>
