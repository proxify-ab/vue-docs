<script setup lang="ts">
import { computed } from 'vue'
import { DeveloperProfile } from './type'
import { getDeveloperProfileImage, truncateTextFromArray } from './utils'
import { VTIconMapPin } from '@vue/theme'
import DeveloperProficiencies from './DeveloperProficiencies.vue'
import DeveloperCompensations from './DeveloperCompensations.vue'
import { useRouter } from 'vitepress'

const router = useRouter()

const props = defineProps<{
  data: DeveloperProfile
  hero?: boolean
}>()

const { id, alias, name, image, description, compensations, proficiencies, location } = props.data

const profileImage = computed(() => getDeveloperProfileImage(image, id))

const trimmedDescription = computed(() => truncateTextFromArray(description, 220))

function openDeveloperPage() {
  router.go(`./developers/${id}-${alias.toLowerCase()}-freelance-developer.html`)
}
</script>

<template>
  <div
    class="developer-card"
    :class="{ 'developer-card--hero': hero }"
    @click="openDeveloperPage"
  >
    <div class="developer-card__header">
      <div v-if="!hero" class="developer-card__avatar">
        <img :src="profileImage" :alt="name" />
      </div>
      <div class="developer-card__summary">
        <h3 class="developer-card__name">{{ name }}</h3>
        <p class="developer-card__location">
          <VTIconMapPin class="developer-card__icon" />
          {{ location }}
        </p>
        <p v-if="!hero" class="developer-card__compensation">{{ compensations.monthly }}</p>
      </div>
    </div>

    <p class="developer-card__intro">{{ trimmedDescription }}</p>

    <DeveloperCompensations
      v-if="hero"
      title="Compensation"
      :compensations="compensations"
      class="developer-card__section developer-card__compensation"
    />

    <DeveloperProficiencies
      :proficiencies="proficiencies"
      :title="hero ? 'Main proficiencies' : undefined"
      enable-show-all
      class="developer-card__section developer-card__proficiencies"
      @click.stop
    />

    <div v-if="hero" class="developer-card__image">
      <img :src="profileImage" :alt="name" />
    </div>
  </div>
</template>

<style scoped>
/* General Styles */
.developer-card {
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

.developer-card:hover {
  cursor: pointer;
  box-shadow: 0 12px 12px rgba(0, 0, 0, 0.1);
}

/* Header Styles */
.developer-card__header {
  display: flex;
  align-items: center;
  gap: 24px;
  color: var(--vt-c-text-2);
  font-size: 13.5px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.2px;
}

.developer-card__avatar {
  width: 88px;
  height: 88px;
  border-radius: 50%;
  overflow: hidden;
}

.developer-card__avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
}

.developer-card__summary {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
}

.developer-card__name {
  color: var(--vt-c-text-1);
  font-size: 22.5px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.1px;
}


/* Location Styles */
.developer-card__location {
  display: flex;
  align-items: center;
  gap: 4px;
}


.developer-card__icon {
  width: 20px;
  height: 20px;
  opacity: 0.5;
  fill: var(--vt-c-text-2);
}

/* Card Sections Styles */
.developer-card__section h4,
.developer-card__section :deep(h4) {
  color: var(--vt-c-text-1);
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
}

/* Image Styles */
.developer-card__image {
  display: inline-block;
  object-fit: cover;
}

/* Hero Card Styles */
.developer-card--hero {
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

/* Hero - Header, Intro, Sections, and Image Styles */
.developer-card--hero .developer-card__header {
  grid-area: header;
}

.developer-card--hero .developer-card__intro {
  grid-area: intro;
}

.developer-card--hero .developer-card__location {
  font-size: 14px;
}

.developer-card--hero .developer-card__name {
  font-size: 24px;
}

.developer-card--hero .developer-card__proficiencies {
  grid-area: proficiencies;
  cursor: default;
}

.developer-card--hero .developer-card__compensation {
  grid-area: compensation;
}

.developer-card--hero .developer-card__image {
  grid-area: image;
  width: 100%;
  max-height: 400px;
  overflow: hidden;
}

.developer-card--hero .developer-card__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
}

/* Media Queries */
@media (min-width: 640px) and (max-width: 959px) {
  .developer-card__header {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 768px) {
  .developer-card {
    width: 100%;
  }
}

@media (min-width: 640px) and (max-width: 768px) {
  .developer-card--hero {
    grid-template-areas:
      "header image"
      "intro image"
      "compensation compensation"
      "proficiencies proficiencies";
    grid-template-rows: auto 1fr auto auto;
    grid-template-columns: 1fr 250px;
    align-items: start;
  }

  .developer-card--hero .developer-card__image {
    max-width: 250px;
    height: auto;
    margin-left: auto;
  }
}

@media (min-width: 769px) and (max-width: 959px) {
  .developer-card--hero {
    grid-template-areas:
      "header image"
      "intro image"
      "compensation image"
      "proficiencies proficiencies";
    grid-template-rows: auto auto 1fr auto;
    grid-template-columns: 1fr 288px;
  }

  .developer-card--hero .developer-card__image {
    max-width: 288px;
  }
}

@media (min-width: 960px) {
  .developer-card--hero {
    grid-template-areas:
      "header image"
      "intro image"
      "compensation image"
      "proficiencies image";
    grid-template-columns: 1fr 288px;
    grid-template-rows: auto auto auto 1fr;
  }

  .developer-card--hero .developer-card__image {
    overflow: visible;
  }

  .developer-card--hero .developer-card__image img {
    height: auto;
  }
}

/* Dark Mode Styles */
.dark .developer-card:not(.developer-card--hero) {
  border: 1px solid var(--vt-c-divider-light);
}

.dark .developer-card:not(.developer-card--hero):hover {
  border-color: #555;
}
</style>
