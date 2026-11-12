<template>
  <AppLoader />
  <ShutdownNotice />
  <ArchiveBanner />
  <div class="min-h-screen bg-kura-background text-kura-text flex flex-col pb-20 sm:pb-12">
    <div class="relative z-10 flex flex-col flex-grow">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </div>
</template>

<script setup lang="ts">
// Sets <html lang>, hreflang alternates, and og:locale for the active locale.
const i18nHead = useLocaleHead({ seo: true })

useHead({
  htmlAttrs: { lang: () => i18nHead.value.htmlAttrs?.lang },
  link: () => [...(i18nHead.value.link || [])].filter((link) => link.rel !== 'canonical'),
  meta: () => [...(i18nHead.value.meta || [])],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(organizationSchema()),
    },
  ],
})
</script>
