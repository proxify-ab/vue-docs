<script setup lang="ts">
import { ref, computed } from 'vue'
import TalentHero from './TalentHero.vue'
import TalentCard from './TalentCard.vue'
import TalentJoin from './TalentJoin.vue'
import data from '../talent.json'
import { TalentProfiles, TalentProfile } from './type'
import PageShowcaseListLayout from '@theme/components/PageShowcaseListLayout.vue'
import partnerConfig from '../partnerConfig'
import CardList from '@theme/components/CardList.vue'
import TalentTimezoneFilter from './TalentTimezoneFilter.vue'

// Data initialization
const selectedTimezone = ref<string | null>(null)
const allTalents = ref<TalentProfiles>(data as TalentProfiles)
const allTimezones = computed(() => [...new Set(allTalents.value.map(profile => profile.timezone))])

// Randomly select any profile to be the spotlighted profile
const spotlightedProfile = computed(() => {
  return allTalents.value.length ? allTalents.value[Math.floor(Math.random() * allTalents.value.length)] : null
})

// Filtering cards logic
const filterTalentByTimezone = (talent: TalentProfile): boolean => {
  return selectedTimezone.value
    ? talent.timezone === selectedTimezone.value
    : true
}
</script>

<template>
  <PageShowcaseListLayout
    spotlightTitle="Spotlight"
    featuredTitle="Vue.js Certified individuals"
  >
    <template #hero>
      <TalentHero />
    </template>

    <template #spotlight>
      <TalentCard v-if="spotlightedProfile" hero :data="spotlightedProfile" />
    </template>

    <template #actions>
      <TalentTimezoneFilter
        :allTimezones="allTimezones"
        :selectedTimezone="selectedTimezone"
        @update:timezone="selectedTimezone = $event"
      />
      <a class="accent-button" :href="partnerConfig.contactPage" target="_blank">Contact us for a tailored fit</a>
    </template>

    <template #featured-list>
      <CardList
        :items="allTalents"
        :filter="filterTalentByTimezone"
        :cardComponent="TalentCard"
        browseLinkText="Browse and Search all Talents"
        browseLinkUrl="./all.html"
      />
    </template>

    <template #featured-cta>
      <div class="featured-cta">
        <a class="accent-button" :href="partnerConfig.contactPage" target="_blank">Contact us for a tailored fit</a>
      </div>
    </template>

    <template #join>
      <TalentJoin />
    </template>
  </PageShowcaseListLayout>
</template>

<style scoped>
/* Timezone Selection Styles */
:deep(.featured-actions) {
  min-height: 90px;
  align-items: flex-start;
}

/* Page cta */
.featured-cta {
  margin: 1.5rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* Media Queries */
@media (max-width: 769px) {
  :deep(.featured-actions) {
    min-height: 160px;
    align-items: flex-start;
    justify-content: flex-end;
  }
}
</style>
