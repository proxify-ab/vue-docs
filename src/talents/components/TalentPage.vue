<script setup lang="ts">
import data from '../talent.json'
import { TalentProfiles } from './type'
import { VTIconChevronLeft, VTIconMapPin } from '@vue/theme'
import { computed } from 'vue'
import { getProfileImage } from './utils'
import TalentPageFooter from './TalentPageFooter.vue'
import TalentExperiences from './TalentExperiences.vue'
import TalentEducation from './TalentEducation.vue'
import TalentProficiencies from './TalentProficiencies.vue'
import partnerConfig from '../partnerConfig.js'
import TalentCompensations from './TalentCompensations.vue'

const props = defineProps<{
  talent: number
}>()

const p = (data as TalentProfiles).find(
  (p) => p.id === props.talent
)!

const { id, name, image, location, description, compensations, proficiencies, experiences, education } = p

const profileImage = computed(() => getProfileImage(image, id))

</script>

<template>
  <div class="talent-page">
    <div class="back">
      <a href="./all.html">
        <VTIconChevronLeft class="icon" />
        Back to all talents</a
      >
    </div>

    <div class="talent-page__content">
      <img class="talent-page__profile-image" :src="profileImage" :alt="name" />

      <div class="talent-page__main">
        <div class="talent-page__main-info">
          <h2 class="talent-page__name">{{ name }}</h2>
          <a class="accent-button talent-page__main-action" :href="partnerConfig.contactPage" target="_blank">Get in
            contact</a>

          <p class="talent-page__location">
            <VTIconMapPin class="icon" />
            {{ location }}
          </p>

          <div class="talent-page__description">
            <p v-for="desc in description">{{ desc }}</p>
          </div>
        </div>

        <div class="divider"></div>

        <TalentCompensations
          class="talent-page__text-section"
          title="Compensation"
          :compensations="compensations"
          :showDetails="true"
        />

        <TalentProficiencies
          class="talent-page__text-section"
          title="Proficiencies"
          :proficiencies="proficiencies" />


        <div class="talent-page__text-section">
          <h4>Candidate profile</h4>
          <img src="/images/talents/1-profile.png" :alt="name" />
        </div>

        <div class="talent-page__text-section">
          <h4>Candidate score</h4>
          <p>The practical score range is 0 to 100. For all Vue.js developer who have been evaluationed, this is the
            distribution of their scores across that range and here’s where your candidate scored.
          </p>
          <img src="/images/talents/1-score.png" :alt="name" />
          <p>Data from 3,661 evaluated Vue.js developers and 38,008 applicants.</p>
        </div>

        <TalentExperiences
          class="talent-page__text-section"
          title="Selected experience"
          :experiences="experiences" />

        <TalentEducation
          class="talent-page__text-section"
          title="Education"
          :education="education"
        />
      </div>

      <TalentPageFooter class="talent-page__footer" />

    </div>
  </div>
</template>

<style scoped>
.talent-page {
  width: 100%;
  max-width: 1080px;
  padding: 0 28px;
  margin: 0 auto;
}

.back {
  display: block;
  font-size: 0.9em;
  font-weight: 600;
  margin: 24px 0 96px;
}

.back a {
  color: var(--vt-c-text-3);
  transition: color 0.5s;
}

.back a:hover {
  color: var(--vt-c-text-2);
}

.icon {
  width: 22px;
  height: 22px;
  display: inline-block;
  fill: var(--vt-c-text-3);
  position: relative;
  top: -1px;
  margin-right: 4px;
}

.talent-page__profile-image {
  width: 100%;
  max-width: 327px;
  margin-bottom: 24px;
  align-self: stretch;
  background: lightgray 50% / cover no-repeat;
}

.talent-page__main-info {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto;
  gap: 10px;
  align-items: center;
}

.divider {
  width: 100%;
  margin-top: 24px;
  border-top: 1px solid var(--vt-c-divider-light);
}

.talent-page__text-section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  padding: 40px 0;
}

.talent-page__name {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  color: var(--vt-c-text-1);
  font-size: 40px;
  line-height: 100%;
}

.talent-page__location {
  color: var(--vt-c-text-2);
  grid-column: 1 / 3;
  grid-row: 2 / 3;
  font-size: 14px;
}

.talent-page__description {
  grid-column: 1 / 3;
  grid-row: 3 / 4;
  font-size: 14px;

  p {
    margin-bottom: 16px;
  }

  p:last-child {
    margin-bottom: 0;
  }
}

.talent-page__main-action {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  justify-self: end;
}

.talent-page__location svg {
  width: 20px;
  height: 20px;
  display: inline-block;
  opacity: 0.5;
  position: relative;
  top: -1px;
  left: -2px;
  fill: var(--vt-c-text-2);
}

.accent-button,
:deep(.accent-button) {
  display: block;
  width: fit-content;
  max-width: 100%;
  text-align: center;
  background-color: var(--vt-c-brand);
  color: var(--vt-c-bg);
  padding: 4px 14px;
  font-size: 13.6px;
  line-height: 24px;
  font-weight: 600;
  border-radius: 6px;
  transition: background-color 0.5s, color 0.5s;
}

.accent-button:hover,
:deep(.accent-button):hover {
  background-color: var(--vt-c-brand-dark);
}

.dark .accent-button:hover,
.dark :deep(.accent-button):hover {
  background-color: var(--vt-c-gray-dark-3);
}


@media (min-width: 769px) {
  .talent-page {
    padding: 0 28px 64px;

  }

  .talent-page__content {
    display: grid;
    grid-template-columns: 1fr 213px;
    grid-template-rows: auto 1fr;
    align-items: start;
    column-gap: 76px;
  }

  .talent-page__main {
    grid-column: 1 / 2;
    grid-row: 1 / 3;
    height: 100%;
  }

  .talent-page__profile-image {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }

  .talent-page__footer {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }

  .talent-page__main-info {
    grid-template-columns: 1fr max-content;
    grid-template-rows: auto auto auto;
  }

  .talent-page__text-section {
    padding: 24px 0;
  }
}

@media (min-width: 1440px) {
  .talent-page__content {
    grid-template-columns: 1fr 306px;
  }
}

@media (max-width: 768px) {
  .talent-page__main-action {
    display: none;
  }
}
</style>
