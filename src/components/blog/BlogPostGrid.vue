<script setup lang="ts">
import { blogPostRoute, type BlogPost } from '~/utils/blog'
import { formatBlogDate } from '~/utils/site'

defineProps<{ posts: BlogPost[] }>()

const { t, te, locale } = useI18n()

function categoryLabel(category: string) {
  const key = `blog.categories.${category}`
  return te(key) ? t(key) : category
}
</script>

<template>
  <section class="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
    <NuxtLinkLocale
      v-for="post in posts"
      :key="post._path"
      :to="blogPostRoute(post._path)"
      class="group card-surface p-6 hover:border-kura-primary/30 hover:shadow-card transition-all flex flex-col"
    >
      <div class="flex items-center justify-between mb-4 gap-2">
        <span class="text-xs uppercase tracking-widest font-semibold text-kura-primary">{{ categoryLabel(post.category) }}</span>
        <span v-if="post.readingTime" class="text-[11px] text-kura-text-secondary">{{ t('blog.minutes', { count: post.readingTime }) }}</span>
      </div>
      <h2 class="text-lg font-semibold mb-3 group-hover:text-kura-primary transition-colors">{{ post.title }}</h2>
      <p class="text-sm text-kura-text-secondary leading-relaxed mb-5 flex-1">{{ post.description }}</p>
      <div class="flex items-center justify-between text-xs text-kura-text-secondary pt-4 border-t border-kura-border">
        <span>{{ post.author }}</span>
        <time :datetime="post.date">{{ formatBlogDate(post.date, locale) }}</time>
      </div>
    </NuxtLinkLocale>
  </section>
</template>
