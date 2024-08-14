<script setup lang="ts">
import { TalentCompensations } from './type'

defineProps<{
  compensations?: TalentCompensations
  showDetails?: boolean
  title?: string
}>()
</script>

<template>
  <div>
    <h4 v-if="title">{{ title }}</h4>
    <div>
      <div v-if="compensations && Object.keys(compensations).length" class="talent-page__compensations_list">
        <div v-for="(compensation, key) in compensations" :key="key">
          {{ compensation }}
        </div>
      </div>
      <p v-if="showDetails">No other costs.</p>
      <p v-if="showDetails">One month trial period, thereafter, one month notice period.</p></div>
  </div>
</template>


<style scoped>
.talent-page__compensations_list {
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
}

h4 {
  color: var(--vt-c-text-1);
  font-size: 1.2em;
  font-weight: 600;
}
</style>
