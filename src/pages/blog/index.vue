<template>
  <div class="w-full text-kura-text bg-kura-background">
    <PageHero
      :eyebrow="t('blog.hero.eyebrow')"
      :title="t('blog.hero.title')"
      :description="t('blog.hero.description')"
      :divider="false"
    >
      <a
        href="/feed.xml"
        class="btn-secondary text-sm gap-2 inline-flex"
        :title="t('blog.rssTitle')"
      >
        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19 7.38 20 6.18 20C5 20 4 19 4 17.82a2.18 2.18 0 0 1 2.18-2.18M4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27V4.44m0 5.66a9.9 9.9 0 0 1 9.9 9.9h-2.83A7.07 7.07 0 0 0 4 12.93V10.1Z" />
        </svg>
        {{ t('blog.rss') }}
      </a>
    </PageHero>

    <main class="marketing-container pb-20 md:pb-28 pt-2 md:pt-4">
      <BlogPostGrid v-if="posts?.length" :posts="posts" />

      <section v-else class="card-surface p-12 text-center mb-14">
        <p class="text-kura-text-secondary">{{ t('blog.empty') }}</p>
      </section>

      <CTASection />
    </main>
  </div>
</template>

<script setup lang="ts">
import { blogContentPath, type BlogPost } from '~/utils/blog'

definePageMeta({
  layout: 'default',
})

const { t, locale } = useI18n()

const { data: posts } = await useAsyncData(`blog-posts-${locale.value}`, () =>
  queryContent<BlogPost>(blogContentPath(locale.value))
    .where({ _extension: 'md' })
    .sort({ date: -1 })
    .find(),
)

usePageSeo({
  title: () => t('blog.seo.title'),
  description: () => t('blog.seo.description'),
  path: '/blog',
  keywords: () => t('blog.seo.keywords'),
})
</script>
