<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps<{ dark?: boolean }>()
const emit = defineEmits<{ navigate: [] }>()

const { locale, locales, t } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const isOpen = ref(false)
const root = ref<HTMLElement | null>(null)

const available = computed(() =>
  locales.value.map((entry) => (typeof entry === 'string' ? { code: entry, name: entry } : entry)),
)

function toggle() {
  isOpen.value = !isOpen.value
}

function choose() {
  isOpen.value = false
  emit('navigate')
}

function onDocumentClick(event: Event) {
  if (root.value && !root.value.contains(event.target as Node)) isOpen.value = false
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') isOpen.value = false
}

onMounted(() => {
  document.addEventListener('click', onDocumentClick)
  document.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  document.removeEventListener('click', onDocumentClick)
  document.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <div ref="root" class="relative">
    <button
      type="button"
      class="flex items-center justify-center w-9 h-9 rounded-lg transition-colors"
      :class="props.dark ? 'text-white/70 hover:text-white hover:bg-white/10' : 'text-kura-text-secondary hover:text-kura-primary hover:bg-kura-surface'"
      :aria-label="t('nav.language')"
      :aria-expanded="isOpen"
      aria-haspopup="true"
      @click.stop="toggle"
    >
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.75" />
        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.75" d="M3 12h18M12 3c2.5 2.6 3.75 5.6 3.75 9S14.5 18.4 12 21M12 3C9.5 5.6 8.25 8.6 8.25 12S9.5 18.4 12 21" />
      </svg>
    </button>

    <!-- v-show keeps the links in the server-rendered HTML so the prerender crawler finds every locale. -->
    <ul
      v-show="isOpen"
      class="absolute right-0 top-full mt-2 min-w-[10rem] rounded-lg border border-kura-border bg-white py-1 shadow-card z-[60]"
    >
      <li v-for="entry in available" :key="entry.code">
        <NuxtLink
          :to="switchLocalePath(entry.code)"
          :lang="entry.code"
          class="flex items-center justify-between gap-3 px-4 py-2 text-sm transition-colors hover:bg-kura-surface"
          :class="entry.code === locale ? 'text-kura-primary font-medium' : 'text-kura-text'"
          :aria-current="entry.code === locale ? 'true' : undefined"
          @click="choose"
        >
          {{ entry.name }}
          <svg v-if="entry.code === locale" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
