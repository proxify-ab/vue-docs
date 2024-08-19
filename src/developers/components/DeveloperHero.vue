<script setup lang="ts">
import PageHero from '@theme/components/PageHero.vue'
import partnerConfig from '../partnerConfig.js'

defineProps<{ title?: string }>()
</script>

<template>
  <PageHero>
    <template #title>{{ title || partnerConfig.pageHeroBanner.title }}</template>
    <template #lead>
      Vue Developers are certified individual freelancers. Payments, compliance and vetting are administrated by our
      partner
      <a class="link" :href="partnerConfig.companyWebsiteLink" target="_blank">{{ partnerConfig.partnerName }}</a>.
      Interested to join the list?
      <br />
      <a class="link" :href="partnerConfig.applyPage" target="_blank">Apply here</a>.
    </template>
  </PageHero>
</template>
