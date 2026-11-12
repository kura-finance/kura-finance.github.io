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
const route = useRoute()

/** Markdown export of this page, generated at build time by modules/llms.ts. */
function markdownPath(path: string) {
  const clean = path.replace(/\/$/, '') || '/'
  if (clean === '/') return '/index.md'
  if (clean === '/zh-TW') return '/zh-TW/index.md'
  return `${clean}.md`
}

useHead({
  htmlAttrs: { lang: () => i18nHead.value.htmlAttrs?.lang },
  link: () => [
    ...[...(i18nHead.value.link || [])].filter((link) => link.rel !== 'canonical'),
    { rel: 'alternate', type: 'text/markdown', href: markdownPath(route.path) },
  ],
  meta: () => [...(i18nHead.value.meta || [])],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(organizationSchema()),
    },
  ],
})
</script>
