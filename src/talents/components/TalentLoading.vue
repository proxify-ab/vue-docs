<script setup lang="ts">
import { ref, computed } from 'vue'
import TalentHero from './TalentHero.vue'
import TalentCard from './TalentCard.vue'
import TalentJoin from './TalentJoin.vue'
import data from '../talent.json'
import { TalentProfiles, TalentProfile } from './type'
import { VTFlyout } from '@vue/theme'
import PageShowcaseListLayout from '@theme/components/PageShowcaseListLayout.vue'
import partnerConfig from '../partnerConfig'
import CardList from '@theme/components/CardList.vue'

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
const selectTimezone = (timezone: string | null) => {
  selectedTimezone.value = timezone
}

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
      <VTFlyout button="Timezones" label="Timezones">
        <div class="vt-menu-items">
          <template v-for="item in allTimezones" :key="item">
            <span class="vt-menu-item" @click="selectTimezone(item)">{{ item }}</span>
          </template>
          <span class="vt-menu-item" @click="selectTimezone(null)">Reset</span>
        </div>
      </VTFlyout>

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
.vt-menu-item {
  display: block;
  padding: 0 18px;
  line-height: 28px;
  font-size: 13px;
  font-weight: 400;
  color: var(--vt-c-text-1);
  white-space: nowrap;
  transition: color 0.25s;
}

.vt-menu-item:hover {
  cursor: pointer;
  color: var(--vt-c-brand);
}

:deep(.vt-flyout-menu) {
  left: 0;
  right: unset;
}
</style>
