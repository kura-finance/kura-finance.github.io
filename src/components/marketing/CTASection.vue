<template>
  <section class="section-padding section-divider bg-kura-background">
    <div class="marketing-container">
      <div class="max-w-2xl mx-auto text-center">
        <h2 class="headline-xl text-display-sm md:text-display-md mb-6">
          {{ t('cta.title') }}
        </h2>
        <p class="prose-lead mb-12 max-w-lg mx-auto">
          {{ t('cta.description') }}
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLinkLocale to="/investors" class="btn-primary">
            {{ t('cta.report') }}
          </NuxtLinkLocale>
          <a :href="SHUTDOWN.githubUrl" target="_blank" rel="noopener noreferrer" class="btn-secondary">
            {{ t('cta.source') }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { SHUTDOWN } from '~/utils/site'

const { t } = useI18n()
</script>
