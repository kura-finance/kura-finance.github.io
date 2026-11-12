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
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(organizationSchema()),
    },
  ],
})
</script>
