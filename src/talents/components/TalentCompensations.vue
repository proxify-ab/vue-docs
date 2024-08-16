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
      <div v-if="compensations && Object.keys(compensations).length" class="talent-compensations__list">
        <div v-for="(compensation, key) in compensations" :key="key">
          {{ compensation }}
        </div>
      </div>
      <div v-if="showDetails" class="talent-compensations__details">
        <p>No other costs.</p>
        <p>One month trial period, thereafter, one month notice period.</p>
      </div>
    </div>
  </div>
</template>


<style scoped>
.talent-compensations__list {
  display: flex;
  flex-direction: column;
}

.talent-compensations__details {
  margin-top: 32px;
}
</style>
