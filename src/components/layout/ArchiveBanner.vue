<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <aside
    :aria-label="t('banner.label')"
    class="fixed bottom-0 inset-x-0 z-[60] bg-kura-ink text-white border-t border-white/10"
  >
    <p class="marketing-container py-2.5 text-xs sm:text-sm leading-snug text-center">
      <span class="font-semibold">{{ t('banner.headline') }}</span>
      {{ t('banner.body') }}
      <NuxtLinkLocale to="/disclaimer" class="underline underline-offset-2 hover:text-kura-primary-light whitespace-nowrap">
        {{ t('banner.details') }}
      </NuxtLinkLocale>
    </p>
  </aside>
</template>
