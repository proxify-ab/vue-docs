<script setup lang="ts">
import { ref, computed } from 'vue'
import data from '../developers.json'
import { DeveloperProfiles, DeveloperProfile } from './type'
import PageShowcaseListLayout from '@theme/components/PageShowcaseListLayout.vue'
import partnerConfig from '../partnerConfig'
import CardList from '@theme/components/CardList.vue'
import DeveloperHero from './DeveloperHero.vue'
import DeveloperCard from './DeveloperCard.vue'
import DeveloperRegionFilter from './DeveloperRegionFilter.vue'
import DeveloperJoin from './DeveloperJoin.vue'
import { useRoute } from 'vitepress'
import { generateUTMUrl } from './utils'

// Link to contact us with UTM parameters
const route = useRoute()
const hireUsLink = computed(() => generateUTMUrl(partnerConfig.hireUsButtonUrl, route.path))

// Data initialization
const selectedRegion = ref<string | null>(null)
const allDevelopers = ref<DeveloperProfiles>(data as DeveloperProfiles)
const allRegions = computed(() => [...new Set(allDevelopers.value.map(profile => profile.region))])

// Randomly select any profile to be the spotlighted profile
const spotlightedProfile = computed(() => {
  return allDevelopers.value.length ? allDevelopers.value[Math.floor(Math.random() * allDevelopers.value.length)] : null
})

// Filtering cards logic
const filterDeveloperByRegion = (developer: DeveloperProfile): boolean => {
  return selectedRegion.value ? developer.region === selectedRegion.value : true
}
</script>

<template>
  <PageShowcaseListLayout
    spotlightTitle="Spotlight"
    featuredTitle="Vue.js Certified individuals"
  >
    <template #hero>
      <DeveloperHero />
    </template>

    <template #spotlight>
      <DeveloperCard v-if="spotlightedProfile" hero :data="spotlightedProfile" />
    </template>

    <template #actions>
      <DeveloperRegionFilter
        :allRegions="allRegions"
        :selectedRegion="selectedRegion"
        @update:region="selectedRegion = $event"
      />
      <a class="accent-button" :href="hireUsLink" target="_blank">Contact us for a tailored fit</a>
    </template>

    <template #featured-list>
      <CardList
        :items="allDevelopers"
        :filter="filterDeveloperByRegion"
        :cardComponent="DeveloperCard"
      />
    </template>

    <template #featured-cta>
      <div class="featured-cta">
        <a class="accent-button" :href="hireUsLink" target="_blank">Contact us for a tailored fit</a>
      </div>
    </template>

    <template #join>
      <DeveloperJoin />
    </template>
  </PageShowcaseListLayout>
</template>

<style scoped>
/* Region Selection Styles */
:deep(.featured-actions) {
  min-height: 90px;
  align-items: flex-start;
}

/* Page CTA */
.featured-cta {
  margin: 1.5rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* Media Queries */
@media (max-width: 768px) {
  :deep(.featured-actions) {
    min-height: 160px;
    align-items: flex-start;
    justify-content: flex-end;
  }
}
</style>
