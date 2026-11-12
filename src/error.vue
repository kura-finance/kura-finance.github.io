<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{
  error: NuxtError
}>()

const isNotFound = computed(() => props.error?.statusCode === 404)

const { t } = useI18n()
const localePath = useLocalePath()

const title = computed(() => t(isNotFound.value ? 'error.notFoundTitle' : 'error.genericTitle'))

const description = computed(() =>
  isNotFound.value
    ? t('error.notFoundDesc')
    : props.error?.statusMessage || t('error.genericDesc'),
)

const statusLabel = computed(() => String(props.error?.statusCode || 500))

useHead({
  title: () => t(isNotFound.value ? 'error.notFoundMeta' : 'error.genericMeta'),
  meta: [{ name: 'robots', content: 'noindex' }],
})

function goHome() {
  clearError({ redirect: localePath('/') })
}

function goBack() {
  if (import.meta.client && window.history.length > 1) {
    clearError()
    window.history.back()
    return
  }
  goHome()
}
</script>

<template>
  <div class="error-page min-h-screen flex flex-col bg-kura-background text-kura-text">
    <Header />

    <main class="flex-grow relative overflow-hidden">
      <div class="error-page__glow" aria-hidden="true" />

      <div class="marketing-container relative pt-28 pb-20 md:pt-36 md:pb-28">
        <div class="max-w-2xl">
          <p class="section-label mb-6">{{ t('error.label', { code: statusLabel }) }}</p>

          <p class="error-page__code font-display text-kura-primary/20 select-none" aria-hidden="true">
            {{ statusLabel }}
          </p>

          <h1 class="headline-xl text-display-sm md:text-display-md mb-5 -mt-8 md:-mt-12 relative">
            {{ title }}
          </h1>

          <p class="prose-lead mb-10 max-w-lg">
            {{ description }}
          </p>

          <div class="flex flex-wrap gap-3 mb-14">
            <button type="button" class="btn-primary" @click="goHome">
              {{ t('error.home') }}
            </button>
            <button type="button" class="btn-secondary" @click="goBack">
              {{ t('error.back') }}
            </button>
          </div>

          <div v-if="isNotFound" class="error-page__links">
            <p class="section-label mb-4">{{ t('error.tryThese') }}</p>
            <ul class="grid sm:grid-cols-2 gap-3">
              <li>
                <NuxtLinkLocale to="/investors" class="error-page__link" @click="clearError()">
                  <span>{{ t('error.links.report.title') }}</span>
                  <span class="error-page__link-hint">{{ t('error.links.report.hint') }}</span>
                </NuxtLinkLocale>
              </li>
              <li>
                <NuxtLinkLocale to="/docs" class="error-page__link" @click="clearError()">
                  <span>{{ t('error.links.docs.title') }}</span>
                  <span class="error-page__link-hint">{{ t('error.links.docs.hint') }}</span>
                </NuxtLinkLocale>
              </li>
              <li>
                <NuxtLinkLocale to="/help" class="error-page__link" @click="clearError()">
                  <span>{{ t('error.links.help.title') }}</span>
                  <span class="error-page__link-hint">{{ t('error.links.help.hint') }}</span>
                </NuxtLinkLocale>
              </li>
              <li>
                <NuxtLinkLocale to="/contact" class="error-page__link" @click="clearError()">
                  <span>{{ t('error.links.contact.title') }}</span>
                  <span class="error-page__link-hint">{{ t('error.links.contact.hint') }}</span>
                </NuxtLinkLocale>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>

    <LazyFooter />
  </div>
</template>

<style scoped>
.error-page__glow {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    radial-gradient(ellipse 70% 50% at 10% 0%, rgba(124, 92, 252, 0.12), transparent 55%),
    radial-gradient(ellipse 50% 40% at 90% 20%, rgba(124, 92, 252, 0.06), transparent 50%);
}

.error-page__code {
  font-size: clamp(6rem, 18vw, 11rem);
  line-height: 0.85;
  letter-spacing: -0.04em;
  font-weight: 500;
  animation: error-fade 0.7s ease-out both;
}

.error-page__links {
  max-width: 32rem;
  animation: error-rise 0.6s ease-out 0.15s both;
}

.error-page__link {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 1rem 1.15rem;
  border-radius: 0.75rem;
  border: 1px solid #e1e4ec;
  background: #fff;
  transition: border-color 0.2s ease, background-color 0.2s ease;
}

.error-page__link:hover {
  border-color: rgba(124, 92, 252, 0.35);
  background: #faf9ff;
}

.error-page__link span:first-child {
  font-size: 0.9375rem;
  font-weight: 500;
  color: #12131a;
}

.error-page__link-hint {
  font-size: 0.8125rem;
  color: #64687a;
}

@keyframes error-fade {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes error-rise {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .error-page__code,
  .error-page__links {
    animation: none;
  }
}
</style>
