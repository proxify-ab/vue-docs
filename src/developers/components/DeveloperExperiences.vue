<script setup lang="ts">
import { DeveloperExperience } from './type'
import DeveloperProficiencies from './DeveloperProficiencies.vue'

defineProps<{
  experiences?: DeveloperExperience[];
  title?: string;
}>()
</script>

<template>
  <div class="developer-experiences">
    <h4 v-if="title" class="developer-experiences__title">{{ title }}</h4>
    <div v-if="experiences?.length" class="developer-experiences__list">
      <div class="developer-experience" v-for="experience in experiences" :key="experience.id">
        <div class="developer-experience__header">
          <h5 class="developer-experience__role">{{ experience.role }}</h5>
          <i class="developer-experience__details">
            {{ experience.company }} · {{ experience.startDate }} - {{ experience.endDate }} ({{ experience.period }})
          </i>
        </div>
        <div class="developer-experience__description">
          <template v-for="(desc, index) in experience.description" :key="`desc-${index}`">
            <p v-if="desc.type === 'p'">{{ desc.content }}</p>
            <ul v-else-if="desc.type === 'ul'" class="developer-experience__list">
              <li v-for="(item, idx) in desc.content" :key="`item-${idx}`">{{ item }}</li>
            </ul>
          </template>
        </div>
        <DeveloperProficiencies :proficiencies="experience.skills" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.developer-experiences {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  align-self: stretch;
}

.developer-experiences__list {
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-self: stretch;
}

.developer-experience__header {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.developer-experience__role {
  color: var(--vt-c-text-code);
  font-weight: 600;
}

.developer-experience__description ul {
  list-style-type: disc;
  margin-left: 20px;
  margin-bottom: 8px;
}
</style>
