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

// Compute highlighted profiles and select spotlighted profile
const highlightedProfiles = computed(() => allTalents.value.filter(profile => profile.highlighted))
const spotlightedProfile = computed(() => {
  const profiles = highlightedProfiles.value
  return profiles.length ? profiles[Math.floor(Math.random() * profiles.length)] : null
})

// Filtering cards logic
const filterTalentByTimezoneAndHighlight = (talent: TalentProfile): boolean => {
  return selectedTimezone.value
    ? talent.timezone === selectedTimezone.value
    : !!talent.highlighted
}
</script>

<template>
  <PageShowcaseListLayout
    spotlightTitle="Spotlight"
    featuredTitle="Vue.js Certified individuals"
    browseLinkText="Browse More Developers"
    browseLinkUrl="./all.html"
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
        :filter="filterTalentByTimezoneAndHighlight"
        :cardComponent="TalentCard"
        browseLinkText="Browse and Search all Talents"
        browseLinkUrl="./all.html"
      />
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

/* Media Queries */
@media (max-width: 769px) {
  :deep(.featured-actions) {
    min-height: 160px;
    align-items: flex-start;
    justify-content: flex-end;
  }
}
</style>
