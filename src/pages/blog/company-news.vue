<script setup lang="ts">
import { blogContentPath, type BlogPost } from '~/utils/blog'

definePageMeta({ layout: 'default' })

const { t, locale } = useI18n()

usePageSeo({
  title: () => t('blog.companyNews.seo.title'),
  description: () => t('blog.companyNews.seo.description'),
  path: '/blog/company-news',
  keywords: () => t('blog.companyNews.seo.keywords'),
})

const { data: posts } = await useAsyncData(`blog-company-news-${locale.value}`, () =>
  queryContent<BlogPost>(blogContentPath(locale.value))
    .where({ _extension: 'md' })
    .where({ category: { $ne: 'Product' } })
    .sort({ date: -1 })
    .find(),
)
</script>

<template>
  <div class="w-full text-kura-text bg-kura-background">
    <PageHero
      :eyebrow="t('blog.companyNews.eyebrow')"
      :title="t('blog.companyNews.title')"
      :description="t('blog.companyNews.description')"
      :divider="false"
    >
      <NuxtLinkLocale to="/blog" class="btn-secondary text-sm">{{ t('blog.allPosts') }}</NuxtLinkLocale>
    </PageHero>

    <main class="marketing-container pb-20 md:pb-28 pt-2 md:pt-4">
      <BlogPostGrid v-if="posts?.length" :posts="posts" />

      <section v-else class="card-surface p-12 text-center mb-14">
        <p class="text-kura-text-secondary mb-4">{{ t('blog.companyNews.empty') }}</p>
        <NuxtLinkLocale to="/blog" class="text-kura-primary font-medium hover:text-kura-primary-dark transition-colors text-sm">
          {{ t('blog.browseAll') }}
        </NuxtLinkLocale>
      </section>

      <CTASection />
    </main>
  </div>
</template>
