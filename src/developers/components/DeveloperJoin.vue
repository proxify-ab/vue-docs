<script setup lang="ts">
import CallToActionSection from '@theme/components/CallToActionSection.vue'
import partnerConfig from '../partnerConfig.js'
</script>

<template>
  <CallToActionSection
    v-if="partnerConfig.applyPage"
    title="Become a listed developer"
    description="Get a long-term part-time or full-time position at company looking for a Vue.js developer."
    :link="partnerConfig.applyPage"
    linkText="Apply to join"
  />
</template>
