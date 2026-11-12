<script setup lang="ts">
import { brandIconOnDarkUrl } from '~/utils/brand'

const { t } = useI18n()
</script>

<template>
  <footer class="relative z-20 bg-kura-ink text-white border-t border-kura-border-dark">
    <div class="marketing-container py-12 md:py-16">
      <div class="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-10 mb-8 md:mb-12">
        <div class="space-y-4 col-span-1 md:col-span-2">
          <h3 class="text-xl font-bold flex items-center gap-2">
            <img :src="brandIconOnDarkUrl" :alt="t('nav.logoAlt')" width="32" height="32" loading="lazy" decoding="async" class="w-8 h-8" />
            Kura
          </h3>
          <p class="text-sm text-kura-ink-subtle leading-relaxed max-w-sm">
            {{ t('footer.tagline') }}
          </p>
          <div class="flex space-x-4 pt-2">
            <a href="https://x.com/kurafinance?s=21" target="_blank" rel="noopener noreferrer" class="text-kura-ink-subtle hover:text-white transition-colors">
              <span class="sr-only">X</span>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-7.029 3.746 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </div>
        </div>

        <div class="space-y-4">
          <h4 class="font-semibold text-sm uppercase tracking-widest text-kura-ink-muted">{{ t('footer.product') }}</h4>
          <ul class="space-y-2">
            <li><NuxtLinkLocale to="/account" class="text-sm text-kura-ink-subtle hover:text-white transition-colors">{{ t('nav.links.account') }}</NuxtLinkLocale></li>
            <li><NuxtLinkLocale to="/kura-card" class="text-sm text-kura-ink-subtle hover:text-white transition-colors">{{ t('nav.links.kuraCard') }}</NuxtLinkLocale></li>
            <li><NuxtLinkLocale to="/trackfi" class="text-sm text-kura-ink-subtle hover:text-white transition-colors">{{ t('nav.links.trackfi') }}</NuxtLinkLocale></li>
            <li><NuxtLinkLocale to="/business" class="text-sm text-kura-ink-subtle hover:text-white transition-colors">{{ t('nav.links.business') }}</NuxtLinkLocale></li>
            <li><NuxtLinkLocale to="/compare" class="text-sm text-kura-ink-subtle hover:text-white transition-colors">{{ t('footer.compare') }}</NuxtLinkLocale></li>
            <li><NuxtLinkLocale to="/pricing" class="text-sm text-kura-ink-subtle hover:text-white transition-colors">{{ t('nav.pricing') }}</NuxtLinkLocale></li>
          </ul>
        </div>

        <div class="space-y-4">
          <h4 class="font-semibold text-sm uppercase tracking-widest text-kura-ink-muted">{{ t('footer.company') }}</h4>
          <ul class="space-y-2">
            <li><NuxtLinkLocale to="/investors" class="text-sm text-kura-ink-subtle hover:text-white transition-colors">{{ t('nav.links.businessReport') }}</NuxtLinkLocale></li>
            <li><NuxtLinkLocale to="/about" class="text-sm text-kura-ink-subtle hover:text-white transition-colors">{{ t('footer.about') }}</NuxtLinkLocale></li>
            <li><NuxtLinkLocale to="/contact" class="text-sm text-kura-ink-subtle hover:text-white transition-colors">{{ t('footer.contact') }}</NuxtLinkLocale></li>
            <li><NuxtLinkLocale to="/blog" class="text-sm text-kura-ink-subtle hover:text-white transition-colors">{{ t('nav.links.blog') }}</NuxtLinkLocale></li>
          </ul>
        </div>

        <div class="space-y-4">
          <h4 class="font-semibold text-sm uppercase tracking-widest text-kura-ink-muted">{{ t('footer.legal') }}</h4>
          <ul class="space-y-2">
            <li><NuxtLinkLocale to="/docs" class="text-sm text-kura-ink-subtle hover:text-white transition-colors">{{ t('footer.documentation') }}</NuxtLinkLocale></li>
            <li><NuxtLinkLocale to="/tos" class="text-sm text-kura-ink-subtle hover:text-white transition-colors">{{ t('footer.tos') }}</NuxtLinkLocale></li>
            <li><NuxtLinkLocale to="/privacy" class="text-sm text-kura-ink-subtle hover:text-white transition-colors">{{ t('footer.privacy') }}</NuxtLinkLocale></li>
            <li><NuxtLinkLocale to="/disclaimer" class="text-sm text-kura-ink-subtle hover:text-white transition-colors">{{ t('footer.disclaimer') }}</NuxtLinkLocale></li>
            <li><NuxtLinkLocale to="/referral-terms" class="text-sm text-kura-ink-subtle hover:text-white transition-colors">{{ t('footer.referralTerms') }}</NuxtLinkLocale></li>
            <li><NuxtLinkLocale to="/prohibited-activities" class="text-sm text-kura-ink-subtle hover:text-white transition-colors">{{ t('footer.prohibited') }}</NuxtLinkLocale></li>
            <li><NuxtLinkLocale to="/compliance" class="text-sm text-kura-ink-subtle hover:text-white transition-colors">{{ t('nav.links.compliance') }}</NuxtLinkLocale></li>
          </ul>
        </div>
      </div>

      <div class="border-t border-kura-border-dark pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        <p class="text-kura-ink-subtle font-mono">{{ t('footer.copyright') }}</p>
      </div>
    </div>
  </footer>
</template>
