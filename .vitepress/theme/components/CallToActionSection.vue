<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  link: string;
  linkText: string;
}>()
</script>

<template>
  <div>
    <div class="cta-divider"></div>
    <div class="cta-section-container">
      <h2 class="cta-title">{{ title }}</h2>
      <p class="cta-description">{{ description }}</p>
      <a class="cta-button" :href="link" target="_blank">{{ linkText }}</a>
    </div>
  </div>
</template>

<style scoped>
.cta-divider {
  width: 100px;
  margin: 0 auto;
  border-top: 1px solid var(--vt-c-divider-light);
}

.cta-section-container {
  max-width: 688px;
  padding: 28px 28px 96px;
  text-align: center;
  margin: 0 auto;
}

.cta-title {
  font-weight: 600;
  letter-spacing: -0.5px;
  font-size: 34px;
  line-height: 1.2;
  margin: 0.5em 0 1em;
}

.cta-description {
  color: var(--vt-c-text-2);
}

.cta-button {
  margin-top: 2em;
  display: inline-block;
  text-align: center;
  background-color: var(--vt-c-bg-mute);
  color: var(--vt-c-text-code);
  padding: 12px 24px;
  font-weight: 600;
  border-radius: 6px;
  transition: background-color 0.5s, color 0.5s;
  text-decoration: none;
}

.cta-button:hover {
  background-color: var(--vt-c-gray-light-4);
}

.dark .cta-button:hover {
  background-color: var(--vt-c-gray-dark-3);
}
</style>
