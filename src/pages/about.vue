<script setup lang="ts">
definePageMeta({ layout: 'default' })

const { t } = useI18n()

usePageSeo({
  title: () => t('about.seo.title'),
  description: () => t('about.seo.description'),
  path: '/about',
  keywords: () => t('about.seo.keywords'),
})

const principles = useCopy<{ title: string; description: string }[]>('about.principles')
const pillars = useCopy<{ label: string; title: string; description: string }[]>('about.pillars')
const milestones = useCopy<{ phase: string; title: string; time: string; content: string }[]>('about.milestones')
const founderParagraphs = useCopy<string[]>('about.founder.paragraphs')
</script>

<template>
  <div class="w-full text-kura-text bg-kura-background">
    <PageHero
      :eyebrow="t('about.hero.eyebrow')"
      :title="t('about.hero.title')"
      :description="t('about.hero.description')"
    />

    <section class="section-padding border-t border-kura-border">
      <div class="marketing-container">
        <div class="max-w-2xl mb-14 md:mb-20">
          <p class="section-label mb-5">{{ t('about.mission.label') }}</p>
          <h2 class="headline-xl text-display-sm md:text-display-md mb-6">
            {{ t('about.mission.title') }}
          </h2>
          <p class="prose-lead max-w-xl">
            {{ t('about.mission.description') }}
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-10 md:gap-12 lg:gap-16">
          <article
            v-for="(principle, index) in principles"
            :key="principle.title"
            class="about-principle"
            :class="index > 0 ? 'md:border-l md:border-kura-border md:pl-10 lg:pl-12' : ''"
          >
            <h3 class="font-display text-2xl text-kura-text font-normal tracking-[-0.02em] mb-4">
              {{ principle.title }}
            </h3>
            <p class="text-kura-text-secondary leading-relaxed text-[0.9375rem]">
              {{ principle.description }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <section class="section-padding bg-kura-surface border-t border-kura-border">
      <div class="marketing-container">
        <div class="max-w-2xl mb-14 md:mb-20">
          <p class="section-label mb-5">{{ t('about.product.label') }}</p>
          <h2 class="headline-xl text-display-sm md:text-display-md mb-6">
            {{ t('about.product.title') }}
          </h2>
          <p class="prose-lead max-w-xl">
            {{ t('about.product.description') }}
          </p>
        </div>

        <div class="grid sm:grid-cols-2 gap-x-10 gap-y-12 lg:gap-x-16">
          <article v-for="pillar in pillars" :key="pillar.title" class="about-pillar">
            <p class="section-label mb-3">{{ pillar.label }}</p>
            <h3 class="font-display text-xl md:text-2xl text-kura-text font-normal tracking-[-0.02em] mb-3">
              {{ pillar.title }}
            </h3>
            <p class="text-kura-text-secondary leading-relaxed text-[0.9375rem]">
              {{ pillar.description }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <section class="section-padding border-t border-kura-border">
      <div class="marketing-container">
        <div class="about-founder">
          <NuxtImg
            src="/avatar.webp"
            :alt="t('about.founder.avatarAlt')"
            width="160"
            height="160"
            loading="lazy"
            decoding="async"
            class="about-founder__avatar"
          />
          <div class="about-founder__body">
            <p class="section-label mb-4">{{ t('about.founder.label') }}</p>
            <h2 class="headline-xl text-display-sm mb-6">{{ t('about.founder.title') }}</h2>
            <div class="space-y-5 text-kura-text-secondary leading-relaxed">
              <p v-for="paragraph in founderParagraphs" :key="paragraph">
                {{ paragraph }}
              </p>
            </div>
            <div class="about-founder__sign">
              <span class="about-founder__name">{{ t('about.founder.name') }}</span>
              <span class="about-founder__role">{{ t('about.founder.role') }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-padding bg-white border-t border-kura-border">
      <div class="marketing-container">
        <div class="max-w-2xl mb-14 md:mb-16">
          <p class="section-label mb-5">{{ t('about.evolution.label') }}</p>
          <h2 class="headline-xl text-display-sm md:text-display-md">
            {{ t('about.evolution.title') }}
          </h2>
        </div>

        <ol class="about-timeline">
          <li v-for="item in milestones" :key="item.phase" class="about-timeline__item">
            <p class="about-timeline__phase" aria-hidden="true">{{ item.phase }}</p>
            <div class="about-timeline__content">
              <div class="about-timeline__head">
                <h3 class="about-timeline__title">{{ item.title }}</h3>
                <span class="about-timeline__time">{{ item.time }}</span>
              </div>
              <p class="about-timeline__body">{{ item.content }}</p>
            </div>
          </li>
        </ol>
      </div>
    </section>

    <section class="section-padding border-t border-kura-border">
      <div class="marketing-container">
        <div class="about-trust">
          <div class="about-trust__copy">
            <p class="section-label mb-4">{{ t('about.trust.label') }}</p>
            <h2 class="headline-xl text-display-sm mb-4">{{ t('about.trust.title') }}</h2>
            <p class="text-kura-text-secondary leading-relaxed max-w-lg">
              {{ t('about.trust.description') }}
            </p>
          </div>
          <div class="about-trust__actions">
            <NuxtLinkLocale to="/compliance" class="btn-primary">
              {{ t('about.trust.center') }}
            </NuxtLinkLocale>
            <NuxtLinkLocale to="/investors" class="btn-secondary">
              {{ t('about.trust.report') }}
            </NuxtLinkLocale>
          </div>
        </div>
      </div>
    </section>

    <CTASection />
  </div>
</template>

<style scoped>
.about-founder {
  display: grid;
  gap: 2rem;
  align-items: start;
  max-width: 52rem;
}

@media (min-width: 768px) {
  .about-founder {
    grid-template-columns: 10rem minmax(0, 1fr);
    gap: 3rem;
  }
}

.about-founder__avatar {
  width: 8rem;
  height: 8rem;
  border-radius: 1rem;
  object-fit: cover;
  border: 1px solid #e1e4ec;
}

@media (min-width: 768px) {
  .about-founder__avatar {
    width: 10rem;
    height: 10rem;
  }
}

.about-founder__sign {
  margin-top: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.about-founder__name {
  font-family: "Newsreader", Georgia, serif;
  font-size: 1.375rem;
  font-style: italic;
  font-weight: 500;
  color: #12131a;
}

.about-founder__role {
  font-size: 0.8125rem;
  letter-spacing: 0.04em;
  color: #9499a8;
}

.about-timeline {
  list-style: none;
  margin: 0;
  padding: 0;
  max-width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 0;
  border-top: 1px solid #12131a;
}

.about-timeline__item {
  display: grid;
  grid-template-columns: 2.5rem minmax(0, 1fr);
  gap: 1rem 1.25rem;
  padding: 1.75rem 0;
  border-bottom: 1px solid #e1e4ec;
}

@media (min-width: 640px) {
  .about-timeline__item {
    grid-template-columns: 3rem minmax(0, 1fr);
    gap: 1.5rem;
    padding: 2rem 0;
  }
}

.about-timeline__phase {
  margin: 0;
  padding-top: 0.2rem;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  font-variant-numeric: tabular-nums;
  color: #9499a8;
}

.about-timeline__head {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.5rem 1rem;
  margin-bottom: 0.5rem;
}

.about-timeline__title {
  margin: 0;
  font-family: "Newsreader", Georgia, serif;
  font-size: 1.25rem;
  font-weight: 500;
  letter-spacing: -0.02em;
  color: #12131a;
}

.about-timeline__time {
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #7c5cfc;
}

.about-timeline__body {
  margin: 0;
  font-size: 0.9375rem;
  line-height: 1.65;
  color: #64687a;
}

.about-trust {
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  padding: 2rem 0;
}

@media (min-width: 768px) {
  .about-trust {
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    gap: 3rem;
  }
}

.about-trust__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  flex-shrink: 0;
}
</style>
