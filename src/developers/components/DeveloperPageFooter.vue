<script setup lang="ts">
import partnerConfig from '../partnerConfig.js'
import { getLogo } from '../../partners/components/utils'
import { useRoute } from 'vitepress'
import { computed } from 'vue'
import { generateUTMUrl } from './utils'

const route = useRoute()

const logoLink = computed(() => {
  return generateUTMUrl(partnerConfig.websiteUrl, route.path)
})

const hireUsLink = computed(() => {
  return generateUTMUrl(partnerConfig.hireUsButtonUrl, route.path)
})

const websiteVuePageLink = computed(() => {
  return generateUTMUrl(partnerConfig.pageFooter.websiteVueLink, route.path)
})
</script>

<template>
  <footer class="partner-footer">
    <p class="footer-text">{{ partnerConfig.pageFooter.text }}</p>

    <a v-if="partnerConfig.logo" :href="logoLink" target="_blank" class="footer-logo-link">
      <img
        class="footer-logo dark"
        :alt="`${partnerConfig.partnerName} logo`"
        :src="getLogo(partnerConfig.logo, true)"
      />
      <img
        class="footer-logo"
        :alt="`${partnerConfig.partnerName} logo`"
        :src="getLogo(partnerConfig.logo)"
      />
    </a>

    <div class="footer-social-links">
      <a :href="`mailto:${partnerConfig.pageFooter.email}`">{{ partnerConfig.pageFooter.email }}</a>
      <p>{{ partnerConfig.pageFooter.phone }}</p>
      <a :href="websiteVuePageLink">{{ partnerConfig.pageFooter.websiteVueLabel }}</a>
    </div>

    <a class="accent-button" :href="hireUsLink" target="_blank">Get in contact</a>
  </footer>
</template>

<style scoped>
.partner-footer {
  color: var(--vt-c-text-2);
  padding: 40px 10px;
}

.footer-text {
  margin-bottom: 40px;
}

.footer-logo {
  margin-bottom: 16px;
  max-width: 135px;
}

.footer-logo.dark,
.dark .footer-logo:not(.dark) {
  display: none;
}

.dark .footer-logo.dark {
  display: inline-block;
}

.footer-social-links {
  margin-bottom: 40px;
}

@media (min-width: 768px) {
  .partner-footer {
    padding: 0;
  }
}
</style>
