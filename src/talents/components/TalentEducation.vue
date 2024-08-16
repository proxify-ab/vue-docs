<script setup lang="ts">
import { TalentEducation } from './type'

defineProps<{
  education?: TalentEducation[]
  title?: string
}>()
</script>

<template>
  <div>
    <h4 v-if="title">{{ title }}</h4>
    <div v-if="education?.length" class="talent-education-list">
      <div class="talent-education" v-for="ed in education" :key="ed.id">
        <h5>{{ ed.degree }}</h5>
        <i>{{ ed.school }} · {{ ed.startDate }} - {{ ed.endDate }}</i>
      </div>
    </div>
  </div>
</template>

<style scoped>
.talent-education-list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  align-self: stretch;
}

h5 {
  color: var(--vt-c-text-code);
  font-weight: 600;
}
</style>
