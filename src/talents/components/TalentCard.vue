<script setup lang="ts">
import { computed } from 'vue'
import { TalentProfile } from './type'
import { getTalentProfileImage } from './utils'
import { VTIconMapPin } from '@vue/theme'
import TalentProficiencies from './TalentProficiencies.vue'
import TalentCompensations from './TalentCompensations.vue'
import { useRouter } from 'vitepress'

const router = useRouter()

const props = defineProps<{
  data: TalentProfile
  hero?: boolean
}>()

const { id, name, image, intro, compensations, proficiencies, location } = props.data

const profileImage = computed(() => getTalentProfileImage(image, id))

function openTalentPage() {
  router.go(`./talents/${id}.html`)
}
</script>

<template>
  <div
    class="talent-card"
    :class="{ 'talent-card--hero': hero }"
    @click="openTalentPage"
  >
    <div class="talent-card__header">
      <div v-if="!hero" class="talent-card__avatar">
        <img :src="profileImage" :alt="name" />
      </div>
      <div class="talent-card__summary">
        <h3 class="talent-card__name">{{ name }}</h3>
        <p class="talent-card__location">
          <VTIconMapPin class="talent-card__icon" />
          {{ location }}
        </p>
        <p v-if="!hero" class="talent-card__compensation">{{ compensations.monthly }}</p>
      </div>
    </div>

    <p class="talent-card__intro">{{ intro }}</p>

    <TalentCompensations
      v-if="hero"
      title="Compensation"
      :compensations="compensations"
      class="talent-card__section talent-card__compensation"
    />

    <TalentProficiencies
      :proficiencies="proficiencies"
      :title="hero ? 'Main proficiencies' : undefined"
      enable-show-all
      class="talent-card__section talent-card__proficiencies"
      @click.stop
    />


    <div v-if="hero" class="talent-card__image">
      <img :src="profileImage" :alt="name" />
    </div>
  </div>
</template>

<style scoped>
/* General Styles */
.talent-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 23px;
  width: 48.5%;
  margin-bottom: 36px;
  padding: 24px 28px;
  background-color: var(--vt-c-bg);
  border-radius: 4px;
  box-shadow: 0 12px 12px rgba(0, 0, 0, 0.05);
  font-size: 15px;
  transition: background-color 0.5s, box-shadow 0.25s ease, border-color 0.25s ease;
}

.talent-card:hover {
  cursor: pointer;
  box-shadow: 0 12px 12px rgba(0, 0, 0, 0.1);
}

/* Header Styles */
.talent-card__header {
  display: flex;
  align-items: center;
  gap: 24px;
  color: var(--vt-c-text-2);
  font-size: 13.5px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.2px;
}

.talent-card__avatar {
  width: 88px;
  height: 88px;
  border-radius: 50%;
  overflow: hidden;
}

.talent-card__avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
}

.talent-card__summary {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
}

.talent-card__name {
  color: var(--vt-c-text-1);
  font-size: 22.5px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.1px;
}

.talent-card--hero .talent-card__name {
  font-size: 24px;
}

/* Location Styles */
.talent-card__location {
  display: flex;
  align-items: center;
  gap: 4px;
}

.talent-card--hero .talent-card__location {
  font-size: 14px;
}

.talent-card__icon {
  width: 20px;
  height: 20px;
  opacity: 0.5;
  fill: var(--vt-c-text-2);
}

/* Card Sections Styles */
.talent-card__section h4,
.talent-card__section :deep(h4) {
  color: var(--vt-c-text-1);
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
}

/* Image Styles */
.talent-card__image {
  display: inline-block;
  object-fit: cover;
}

/* Hero Card Styles */
.talent-card--hero {
  display: grid;
  gap: 16px;
  width: 100%;
  font-size: 16px;
  grid-template-areas:
    "header"
    "intro"
    "compensation"
    "proficiencies"
    "image";
}

/* Header, Intro, Sections, and Image Styles */
.talent-card--hero .talent-card__header {
  grid-area: header;
}

.talent-card--hero .talent-card__intro {
  grid-area: intro;
}

.talent-card--hero .talent-card__proficiencies {
  grid-area: proficiencies;
  cursor: default;
}

.talent-card--hero .talent-card__compensation {
  grid-area: compensation;
}

.talent-card--hero .talent-card__image {
  grid-area: image;
  width: 100%;
  max-height: 400px;
  overflow: hidden;
}

.talent-card--hero .talent-card__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
}

@media (min-width: 640px) and (max-width: 768px) {
  .talent-card--hero {
    grid-template-areas:
      "header image"
      "intro image"
      "compensation compensation"
      "proficiencies proficiencies";
    grid-template-rows: auto  1fr auto auto;
    grid-template-columns: 1fr 250px;
    align-items: start;
  }

  .talent-card--hero .talent-card__image {
    max-width: 250px;
    height: auto;
    margin-left: auto;
  }
}

@media (min-width: 769px) and (max-width: 959px) {
  .talent-card--hero {
    grid-template-areas:
      "header image"
      "intro image"
      "compensation image"
      "proficiencies proficiencies";
    grid-template-rows: auto auto 1fr auto;
    grid-template-columns: 1fr 288px;
  }

  .talent-card--hero .talent-card__image {
    max-width: 288px;
  }
}

@media (min-width: 960px) {
  .talent-card--hero {
    grid-template-areas:
      "header image"
      "intro image"
      "compensation image"
      "proficiencies image";
    grid-template-columns: 1fr 288px;
    grid-template-rows: auto auto auto 1fr;
  }

  .talent-card--hero .talent-card__image {
    overflow: visible;
  }

  .talent-card--hero .talent-card__image img {
    height: auto;
  }
}

/* Responsive Styles */
@media (max-width: 640px) {
  .talent-card {
    width: 100%;
  }
}

@media (min-width: 640px) and (max-width: 768px) {
  .talent-card__header {
    flex-direction: column;
    align-items: flex-start;
  }
}

/* Dark Mode Styles */
.dark .talent-card:not(.talent-card--hero) {
  border: 1px solid var(--vt-c-divider-light);
}

.dark .talent-card:not(.talent-card--hero):hover {
  border-color: #555;
}
</style>



