<template>
  <section class="relative bg-kura-background overflow-hidden">
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_20%_0%,rgba(124,92,252,0.07),transparent_55%)] pointer-events-none" />

    <div class="relative marketing-container pt-36 pb-24 md:pt-44 md:pb-32">
      <div class="grid lg:grid-cols-[1fr_0.85fr] gap-16 lg:gap-20 items-center">
        <div class="max-w-xl lg:max-w-none">
          <h1 class="headline-xl text-display-md sm:text-display-lg mb-8">
            {{ t('home.hero.titleLine1') }}<br />{{ t('home.hero.titleLine2') }}
          </h1>

          <p class="prose-lead mb-12 max-w-md">
            {{ t('home.hero.description') }}
          </p>

          <div class="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5">
            <a :href="githubUrl" target="_blank" rel="noopener noreferrer" class="btn-primary">
              {{ t('home.hero.source') }}
            </a>
            <a
              :href="webAppUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-secondary"
            >
              {{ t('home.hero.dashboard') }}
            </a>
            <NuxtLink to="#features" class="btn-link group">
              {{ t('home.hero.learnMore') }}
              <svg class="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </NuxtLink>
          </div>
        </div>

        <div class="relative flex justify-center lg:justify-end pt-4 lg:pt-0">
          <PhoneMockup size="large" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { SHUTDOWN, WEB_APP_URL } from '~/utils/site'

const { t } = useI18n()
const githubUrl = SHUTDOWN.githubUrl

const webAppUrl = WEB_APP_URL
</script>
