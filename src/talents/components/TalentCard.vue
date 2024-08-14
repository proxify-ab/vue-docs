<script setup lang="ts">
import { computed } from 'vue'
import { TalentProfile } from './type'
import { getProfileImage } from './utils'
import { VTIconMapPin } from '@vue/theme'
import TalentProficiencies from './TalentProficiencies.vue'
import TalentCompensations from './TalentCompensations.vue'

const props = defineProps<{
  data: TalentProfile
  hero?: boolean
}>()

const { id, name, image, intro, compensations, proficiencies, location } = props.data

const profileImage = computed(() => getProfileImage(image, id))
</script>

<template>
  <a
    class="talent-card"
    :class="{ 'talent-card--hero': hero }"
    :href="'/talents/' + id + '.html'"
  >
    <div class="talent-card__content">
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
      <div class="talent-card__body">
        <p class="talent-card__intro">{{ intro }}</p>

        <TalentCompensations
          v-if="hero"
          title="Compensation"
          :compensations="compensations"
          class="talent-card__section"
        />

        <TalentProficiencies
          :proficiencies="proficiencies"
          :title="hero? 'Main proficiencies': undefined"
          class="talent-card__section"
        />
      </div>
    </div>
    <img v-if="hero" class="talent-card__image" :src="profileImage" :alt="name" />
  </a>
</template>

<style scoped>
.talent-card {
  background-color: var(--vt-c-bg);
  padding: 24px 28px;
  border-radius: 4px;
  box-shadow: 0 12px 12px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  width: 48.5%;
  margin-bottom: 36px;
  font-size: 15px;
  transition: background-color 0.5s, box-shadow 0.25s ease, border-color 0.25s ease;
}

.talent-card--hero {
  font-size: 16px;
  flex-direction: row;
  width: 100%;
}

.talent-card__content {
  display: flex;
  flex-direction: column;
  gap: 23px;
}

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
  background: lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
}

.talent-card__avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
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

.talent-card__location {
  display: flex;
  align-items: center;
  gap: 4px;
}

.talent-card__icon {
  width: 20px;
  height: 20px;
  opacity: 0.5;
  fill: var(--vt-c-text-2);
}

.talent-card__compensation {
  font-size: 13.5px;
  color: var(--vt-c-text-2);
}

.talent-card__body {
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: 15px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.2px;
}

.talent-card__section {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.talent-card__image {
  display: inline-block;
  margin-left: auto;
  width: 100%;
  max-width: 288px;
  height: auto;
  object-fit: cover;
}


.talent-card:hover {
  box-shadow: 0 12px 12px rgba(0, 0, 0, 0.1);
}

.dark .talent-card {
  box-shadow: none !important;
}

.dark .talent-card:not(.talent-card--hero) {
  border: 1px solid var(--vt-c-divider-light);
}

.dark .talent-card:not(.talent-card--hero):hover {
  border-color: #555;
}

@media (max-width: 768px) {
  .talent-card {
    width: 100%;
  }

  .talent-card--hero {
    flex-direction: column;
  }

  .talent-card__image {
    width: 100%;
    max-width: 100%;
    height: auto;
  }

  .talent-card__header {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
}
</style>
