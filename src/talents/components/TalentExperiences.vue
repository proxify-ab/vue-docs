<script setup lang="ts">
import { TalentExperience } from './type'
import TalentProficiencies from './TalentProficiencies.vue'

defineProps<{
  experiences?: TalentExperience[]
  title?: string
}>()

</script>

<template>
  <div>
    <h4 v-if="title">{{ title }}</h4>
    <div v-if="experiences?.length" class="talent-experiences">
      <div class="talent-experience" v-for="e in experiences" :key="e.id">
        <div>
          <h5>{{ e.role }}</h5>
          <i>
            {{ e.company }} · {{ e.startDate }} - {{ e.endDate }} ({{ e.period }})
          </i>
        </div>
        <p class="description">{{ e.description }}</p>
        <TalentProficiencies :proficiencies="e.skills" />
      </div>
    </div>
  </div>

</template>


<style scoped>
.talent-experiences {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  align-self: stretch;
}

.talent-experience {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  align-self: stretch;
}

h4 {
  color: var(--vt-c-text-1);
  font-size: 1.2em;
  font-weight: 600;
}

h5 {
  color: var(--vt-c-text-2);
  font-weight: 700;
}
</style>
