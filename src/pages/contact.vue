<script setup lang="ts">
definePageMeta({ layout: 'default' })

const { t } = useI18n()

usePageSeo({
  title: () => t('contact.seo.title'),
  description: () => t('contact.seo.description'),
  path: '/contact',
  keywords: () => t('contact.seo.keywords'),
})

const channels = computed(() => [
  { title: t('contact.channels.legal.title'), description: t('contact.channels.legal.description'), email: 'legal@kura-finance.com' },
])
</script>

<template>
  <div class="w-full text-kura-text bg-kura-background">
    <PageHero
      :eyebrow="t('contact.hero.eyebrow')"
      :title="t('contact.hero.title')"
      :description="t('contact.hero.description')"
    />

    <main class="marketing-container pb-20 md:pb-28">
      <div class="grid gap-5 max-w-xl mb-14">
        <div v-for="channel in channels" :key="channel.title" class="card-surface p-7">
          <h2 class="text-lg font-semibold mb-2">{{ channel.title }}</h2>
          <p class="text-sm text-kura-text-secondary leading-relaxed mb-4">{{ channel.description }}</p>
          <a :href="`mailto:${channel.email}`" class="text-kura-primary font-medium hover:text-kura-primary-dark transition-colors">
            {{ channel.email }}
          </a>
        </div>
      </div>

      <section class="card-surface p-8 md:p-10 max-w-2xl">
        <h2 class="text-xl font-semibold mb-3">{{ t('contact.more.title') }}</h2>
        <ul class="space-y-3 text-sm text-kura-text-secondary">
          <li>
            <NuxtLinkLocale to="/help" class="text-kura-primary hover:text-kura-primary-dark transition-colors font-medium">
              {{ t('contact.more.help') }}
            </NuxtLinkLocale>
            {{ t('contact.more.helpDesc') }}
          </li>
          <li>
            <NuxtLinkLocale to="/community" class="text-kura-primary hover:text-kura-primary-dark transition-colors font-medium">
              {{ t('contact.more.community') }}
            </NuxtLinkLocale>
            {{ t('contact.more.communityDesc') }}
          </li>
          <li>
            <NuxtLinkLocale to="/investors" class="text-kura-primary hover:text-kura-primary-dark transition-colors font-medium">
              {{ t('contact.more.report') }}
            </NuxtLinkLocale>
            {{ t('contact.more.reportDesc') }}
          </li>
        </ul>
      </section>
    </main>

    <CTASection />
  </div>
</template>
