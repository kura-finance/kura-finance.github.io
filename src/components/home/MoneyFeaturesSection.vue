<template>
  <section id="features" class="section-padding section-divider bg-kura-background">
    <div class="marketing-container">
      <div class="max-w-xl mb-20 md:mb-24">
        <p class="section-label mb-5">{{ t('home.features.label') }}</p>
        <h2 class="headline-xl text-display-sm md:text-display-md">
          {{ t('home.features.title') }}
        </h2>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-6 gap-px bg-kura-border border border-kura-border rounded-xl overflow-hidden">
        <article
          v-for="(feature, index) in features"
          :key="feature.title"
          class="feature-card bg-white p-10 md:p-12"
          :class="featureGridClass(index, features.length)"
        >
          <p class="section-label mb-8">{{ feature.number }}</p>
          <h3 class="font-display text-2xl md:text-[1.75rem] text-kura-text mb-4 font-normal tracking-[-0.02em]">
            {{ feature.title }}
          </h3>
          <p class="text-kura-text-secondary leading-relaxed max-w-sm">
            {{ feature.description }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
const features = useCopy<{ number: string; title: string; description: string }[]>('home.features.items')

function featureGridClass(index: number, total: number) {
  if (index < 3) return 'xl:col-span-2'
  if (index === total - 1) return 'sm:col-span-2 xl:col-span-3'
  return 'xl:col-span-3'
}
</script>
