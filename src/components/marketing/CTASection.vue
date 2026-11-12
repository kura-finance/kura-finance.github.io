<template>
  <section class="section-padding section-divider bg-kura-background">
    <div class="marketing-container">
      <div class="max-w-2xl mx-auto text-center">
        <h2 class="headline-xl text-display-sm md:text-display-md mb-6">
          Kura has ceased operations.
        </h2>
        <p class="prose-lead mb-12 max-w-lg mx-auto">
          This site is kept as an archive of what Kura offered. The features described here are no longer available. What remains is an open-source wallet that is not maintained.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/investors" class="btn-primary">
            Read the business report
          </NuxtLink>
          <a :href="SHUTDOWN.githubUrl" target="_blank" rel="noopener noreferrer" class="btn-secondary">
            View source code
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { SHUTDOWN } from '~/utils/site'

// Pages still pass their original promotional copy. Since Kura ceased
// operations the section always renders the archive message instead.
defineProps<{
  title?: string
  description?: string
  primaryLabel?: string
  primaryTo?: string
  secondaryLabel?: string
  secondaryTo?: string
}>()
</script>
