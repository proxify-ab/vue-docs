<script setup lang="ts">
const props = defineProps<{
  spotlightTitle: string;
  featuredTitle: string;
  browseLinkText: string;
  browseLinkUrl: string;
}>()
</script>

<template>
  <div class="showcase-layout">
    <!-- Hero Section -->
    <slot name="hero"></slot>

    <!-- Spotlight Section -->
    <div class="showcase-spotlight">
      <div class="spotlight-content">
        <h2 class="section-title">{{ props.spotlightTitle }}</h2>
        <slot name="spotlight"></slot>
      </div>
    </div>

    <!-- Featured Section -->
    <div class="showcase-featured">
      <!-- Optional Actions Section -->
      <div v-if="$slots.actions" class="featured-actions">
        <slot name="actions"></slot>
      </div>
      <h2 class="section-title">{{ props.featuredTitle }}</h2>
      <slot name="featured-list"></slot>
      <div class="browse-more">
        <a class="button-accent" :href="props.browseLinkUrl">{{ props.browseLinkText }}</a>
      </div>
    </div>

    <!-- Join Section -->
    <slot name="join"></slot>
  </div>
</template>

<style scoped>
.showcase-layout {
  padding-bottom: 16px;
}

.showcase-spotlight {
  background-color: var(--vt-c-bg-soft);
}

.spotlight-content {
  padding: 36px 48px;
  max-width: 1280px;
  margin: 0 auto;
}

.section-title {
  font-size: 1.1em;
  font-weight: 600;
  margin-bottom: 1.5em;
  color: var(--vt-c-text-2);
}

.showcase-featured {
  padding: 36px 48px;
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
}

.featured-actions {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5em;
}

.browse-more {
  margin: 1.5rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.button-accent,
:deep(.button-accent) {
  display: block;
  width: fit-content;
  min-width: 240px;
  max-width: 260px;
  text-align: center;
  background-color: var(--vt-c-brand);
  color: var(--vt-c-bg);
  padding: 12px 24px;
  font-weight: 600;
  border-radius: 6px;
  transition: background-color 0.5s, color 0.5s;
}

.button-accent:hover {
  background-color: var(--vt-c-brand-dark);
}

.dark .button-accent:hover {
  background-color: var(--vt-c-gray-dark-3);
}

@media (max-width: 768px) {
  .spotlight-content,
  .showcase-featured {
    padding: 36px 28px;
  }
}
</style>
