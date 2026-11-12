<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <section>
    <p class="text-kura-text-secondary leading-relaxed text-sm border border-kura-primary/20 rounded-xl p-4 bg-kura-primary/5">
      {{ t('legal.translationNote') }}
    </p>
  </section>
</template>
