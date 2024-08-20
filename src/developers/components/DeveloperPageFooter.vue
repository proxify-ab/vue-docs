<script setup lang="ts">
import partnerConfig from '../partnerConfig.js'
import { getLogo } from '../../partners/components/utils'
import { useRoute } from 'vitepress'
import { computed } from 'vue'
import { generateUTMUrl } from './utils'

const route = useRoute()

const logoLink = computed(() => generateUTMUrl(partnerConfig.websiteUrl, route.path))
const hireUsLink = computed(() => generateUTMUrl(partnerConfig.hireUsButtonUrl, route.path))
const websiteVuePageLink = computed(() => generateUTMUrl(partnerConfig.pageFooter.websiteVueLink, route.path))
</script>

<template>
  <footer class="partner-footer">
    <p class="partner-footer__text">{{ partnerConfig.pageFooter.text }}</p>

    <a v-if="partnerConfig.logo" :href="logoLink" target="_blank" class="partner-footer__logo-link">
      <img
        class="partner-footer__logo dark"
        :alt="`${partnerConfig.partnerName} logo`"
        :src="getLogo(partnerConfig.logo, true)"
      />
      <img
        class="partner-footer__logo"
        :alt="`${partnerConfig.partnerName} logo`"
        :src="getLogo(partnerConfig.logo)"
      />
    </a>

    <div class="partner-footer__social-links">
      <a :href="`mailto:${partnerConfig.pageFooter.email}`">{{ partnerConfig.pageFooter.email }}</a>
      <p>{{ partnerConfig.pageFooter.phone }}</p>
      <a :href="websiteVuePageLink">{{ partnerConfig.pageFooter.websiteVueLabel }}</a>
    </div>

    <a class="partner-footer__contact-button accent-button" :href="hireUsLink" target="_blank">
      Get in contact
    </a>
  </footer>
</template>

<style scoped>
.partner-footer {
  color: var(--vt-c-text-2);
  padding: 40px 10px;
}

.partner-footer__text {
  margin-bottom: 40px;
}

.partner-footer__logo {
  margin-bottom: 16px;
  max-width: 135px;
}

.partner-footer__logo.dark,
.dark .partner-footer__logo:not(.dark) {
  display: none;
}

.dark .partner-footer__logo.dark {
  display: inline-block;
}

.partner-footer__social-links {
  margin-bottom: 40px;
}

@media (min-width: 768px) {
  .partner-footer {
    padding: 0;
  }
}
</style>
