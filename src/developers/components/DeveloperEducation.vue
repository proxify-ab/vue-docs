<script setup lang="ts">
import { DeveloperEducation } from './type'

defineProps<{
  education?: DeveloperEducation[]
  title?: string
}>()
</script>

<template>
  <div>
    <h4 v-if="title">{{ title }}</h4>
    <div v-if="education?.length" class="developer-education-list">
      <div class="developer-education" v-for="ed in education" :key="ed.id">
        <h5>{{ ed.degree }}</h5>
        <i>{{ ed.school }} · {{ ed.startDate }} - {{ ed.endDate }}</i>
      </div>
    </div>
  </div>
</template>

<style scoped>
.developer-education-list {
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
