<template>
  <div class="w-full text-kura-text bg-white">
    <div class="marketing-container pt-28 pb-8 md:pt-32">
      <NuxtLinkLocale
        to="/blog"
        class="inline-flex items-center gap-2 text-sm text-kura-text-secondary hover:text-kura-primary transition-colors"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        {{ t('blog.back') }}
      </NuxtLinkLocale>
    </div>

    <main class="marketing-container max-w-3xl pb-16 md:pb-20">
      <article v-if="article">
        <header class="mb-10 pb-8 border-b border-kura-border">
          <div class="flex flex-wrap items-center gap-3 mb-4">
            <span class="section-label !text-xs">{{ te(`blog.categories.${article.category}`) ? t(`blog.categories.${article.category}`) : article.category }}</span>
            <span v-if="article.readingTime" class="text-xs text-kura-text-secondary">{{ t('blog.minRead', { count: article.readingTime }) }}</span>
          </div>
          <h1 class="text-3xl md:text-4xl font-bold mb-4 tracking-tight">{{ article.title }}</h1>
          <p class="text-lg text-kura-text-secondary leading-relaxed mb-6">{{ article.description }}</p>
          <div class="flex items-center gap-4 text-sm text-kura-text-secondary">
            <span>{{ article.author }}</span>
            <span aria-hidden="true">·</span>
            <time :datetime="article.date">{{ formatDate(article.date, locale) }}</time>
          </div>
        </header>

        <div class="prose prose-lg max-w-none">
          <ContentRenderer :value="article" />
        </div>
      </article>
    </main>

    <CTASection />
  </div>
</template>

<script setup lang="ts">
import { formatBlogDate as formatDate } from '~/utils/site'
import { blogContentPath } from '~/utils/blog'

definePageMeta({
  layout: 'default',
})

interface BlogArticle {
  title: string
  description: string
  date: string
  author: string
  category: string
  readingTime?: number
  body?: unknown
}

const { t, te, locale } = useI18n()
const localePath = useLocalePath()
const route = useRoute()
const slug = route.params.slug as string

const { data: article } = await useAsyncData(`blog-${locale.value}-${slug}`, () =>
  queryContent<BlogArticle>(blogContentPath(locale.value), slug).findOne(),
)

if (!article.value) {
  throw createError({ statusCode: 404, statusMessage: 'Post not found' })
}

usePageSeo({
  title: () => article.value?.title ?? t('blog.postFallback'),
  description: () => article.value?.description ?? '',
  path: () => `/blog/${slug}`,
  ogType: 'article',
  article: () =>
    article.value
      ? {
          publishedTime: article.value.date,
          author: article.value.author,
        }
      : undefined,
  jsonLd: () =>
    article.value
      ? [
          articleSchema({
            title: article.value.title,
            description: article.value.description,
            path: localePath(`/blog/${slug}`),
            date: article.value.date,
            author: article.value.author,
          }),
          breadcrumbSchema([
            { name: t('blog.home'), path: localePath('/') },
            { name: t('blog.seo.title'), path: localePath('/blog') },
            { name: article.value.title, path: localePath(`/blog/${slug}`) },
          ]),
        ]
      : undefined,
})
</script>
