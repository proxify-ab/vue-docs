<script setup lang="ts">
import partnerConfig from '../partnerConfig.js'
import { getLogo } from '../../partners/components/utils'
</script>

<template>
  <footer class="partner-footer">
    <p class="footer-text">{{ partnerConfig.footer.text }}</p>

    <a v-if="partnerConfig.logo" :href="partnerConfig.companyWebsiteLink" target="_blank" class="footer-logo-link">
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
      <a :href="`mailto:${partnerConfig.footer.email}`">{{ partnerConfig.footer.email }}</a>
      <p>{{ partnerConfig.footer.phone }}</p>
      <a :href="partnerConfig.footer.websiteVueLink">{{ partnerConfig.footer.websiteVueLabel }}</a>
    </div>

    <a class="accent-button" :href="partnerConfig.contactPage" target="_blank">Get in contact</a>
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
