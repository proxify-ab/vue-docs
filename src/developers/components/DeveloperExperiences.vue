<script setup lang="ts">
import { DeveloperExperience } from './type'
import DeveloperProficiencies from './DeveloperProficiencies.vue'

defineProps<{
  experiences?: DeveloperExperience[]
  title?: string
}>()

</script>

<template>
  <div>
    <h4 v-if="title">{{ title }}</h4>
    <div v-if="experiences?.length" class="developer-experiences">
      <div class="developer-experience" v-for="experience in experiences" :key="experience.id">
        <div>
          <h5>{{ experience.role }}</h5>
          <i>
            {{ experience.company }} · {{ experience.startDate }} - {{ experience.endDate }} ({{ experience.period }})
          </i>
        </div>
        <div class="description">
          <p v-for="desc in experience.description">{{ desc }}</p>
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

.developer-experience {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  align-self: stretch;
}

h5 {
  color: var(--vt-c-text-code);
  font-weight: 600;
}
</style>
