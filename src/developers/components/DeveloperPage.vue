<script setup lang="ts">
import { computed } from 'vue'
import data from '../developers.json'
import partnerConfig from '../partnerConfig.js'
import { DeveloperProfiles } from './type'
import { getDeveloperProfileImage } from './utils'
import { VTIconChevronLeft, VTIconMapPin } from '@vue/theme'
import DeveloperCompensations from './DeveloperCompensations.vue'
import DeveloperProficiencies from './DeveloperProficiencies.vue'
import DeveloperProfileDiagram from './DeveloperProfileDiagram.vue'
import DeveloperExperiences from './DeveloperExperiences.vue'
import DeveloperEducation from './DeveloperEducation.vue'
import DeveloperPageFooter from './DeveloperPageFooter.vue'


const props = defineProps<{
  developerId: number
}>()

const developer = (data as DeveloperProfiles).find(
  (developer) => developer.id === props.developerId
)!

const { id, name, image, location, description, compensations, proficiencies, experiences, education } = developer

const profileImage = computed(() => getDeveloperProfileImage(image, id))

</script>

<template>
  <div class="developer-page">
    <div class="back">
      <a href="./index.html">
        <VTIconChevronLeft class="icon" />
        Back to all developers</a
      >
    </div>

    <div class="developer-page__content">
      <div class="developer-page__profile-image">
        <img :src="profileImage" :alt="name" />
      </div>
      <div class="developer-page__main">
        <div class="developer-page__main-info">
          <h2 class="developer-page__name">{{ name }}</h2>
          <a class="accent-button developer-page__main-action" :href="partnerConfig.contactPage" target="_blank">Get in
            contact</a>

          <p class="developer-page__location">
            <VTIconMapPin class="icon" />
            {{ location }}
          </p>

          <div class="developer-page__description">
            <p v-for="desc in description">{{ desc }}</p>
          </div>
        </div>

        <DeveloperCompensations
          class="developer-page__text-section"
          title="Compensation"
          :compensations="compensations"
          :showDetails="true"
        />

        <DeveloperProficiencies
          class="developer-page__text-section"
          title="Proficiencies"
          :proficiencies="proficiencies" />


        <DeveloperProfileDiagram
          :developerId="id"
          :developerName="name"
          diagramType="profile"
          title="Candidate profile"
          class="developer-page__text-section"
        />

        <DeveloperProfileDiagram
          :developerId="id"
          :developerName="name"
          diagramType="score"
          title="Candidate score"
          prependText="The practical score range is 0 to 100. For all Vue.js developers who have been evaluated, this is the distribution of their scores across that range, and here’s where your candidate scored."
          appendText="Data from 3,661 evaluated Vue.js developers and 38,008 applicants."
          class="developer-page__text-section"
        />

        <DeveloperExperiences
          class="developer-page__text-section"
          title="Selected experience"
          :experiences="experiences" />

        <DeveloperEducation
          class="developer-page__text-section"
          title="Education"
          :education="education"
        />
      </div>

      <DeveloperPageFooter class="developer-page__footer" />

    </div>
  </div>
</template>

<style scoped>
.developer-page {
  color: var(--vt-c-text-2);
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

.developer-page__profile-image {
  grid-area: image;
  width: 100%;
  max-height: 400px;
  overflow: hidden;
  margin-bottom: 24px;
}

.developer-page__profile-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
}

.developer-page__main-info {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto;
  gap: 10px;
  align-items: center;
}

.developer-page__text-section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  padding: 24px 0;
  border-top: 1px solid var(--vt-c-divider-light);
}

.developer-page__text-section h4,
.developer-page__text-section :deep(h4) {
  color: var(--vt-c-text-1);
  font-size: 18px;
  font-weight: 600;
}

.developer-page__name {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  color: var(--vt-c-text-1);
  font-size: 32px;
  line-height: 100%;
}

.developer-page__location {
  grid-column: 1 / 3;
  grid-row: 2 / 3;
  font-size: 14px;
  margin-bottom: 14px;
}

.developer-page__description {
  grid-column: 1 / 3;
  grid-row: 3 / 4;
  font-size: 16px;
  margin-bottom: 40px;

  p {
    margin-bottom: 16px;
  }

  p:last-child {
    margin-bottom: 0;
  }
}

.developer-page__main-action {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  justify-self: end;
}

.developer-page__location svg {
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
  padding: 12px 24px;
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
  .developer-page {
    padding: 0 28px 64px;
  }

  .developer-page__content {
    display: grid;
    grid-template-columns: 1fr 213px;
    grid-template-rows: auto 1fr;
    align-items: start;
    column-gap: 76px;
  }

  .developer-page__main {
    grid-column: 1 / 2;
    grid-row: 1 / 3;
    height: 100%;
  }

  .developer-page__profile-image {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }

  .developer-page__footer {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }

  .developer-page__main-info {
    grid-template-columns: 1fr max-content;
    grid-template-rows: auto auto auto;
  }

  .developer-page__text-section {
    padding: 40px 0;
  }
}

@media (min-width: 1440px) {
  .developer-page__content {
    grid-template-columns: 1fr 306px;
  }

  .developer-page__name {
    font-size: 40px;
  }
}


@media (max-width: 768px) {
  .developer-page__main-action {
    display: none;
  }

  .developer-page__description {
    margin-bottom: 24px;
  }

  .back {
    margin-bottom: 48px;
  }
}
</style>
