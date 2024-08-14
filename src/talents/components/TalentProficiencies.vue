<script setup lang="ts">

defineProps<{
  proficiencies: string[]
  title?: string
  titleTag?: string
}>()

</script>

<template>
  <div>
    <Component v-if="title" :is="titleTag || 'h4'">{{ title }}</Component>
    <div class="talent-proficiencies">
      <span class="talent-proficiency" v-for="p in proficiencies" :key="p">{{ p }}</span>
    </div>
  </div>
</template>


<style scoped>
.talent-proficiencies {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.talent-proficiency {
  display: inline-block;
  color: var(--vt-c-text-code);
  font-weight: 600;
  font-size: 0.85em;
  background-color: var(--vt-c-bg-mute);
  padding: 4px 10px;
  border-radius: 6px;
}

h4 {
  color: var(--vt-c-text-1);
  font-size: 1.2em;
  font-weight: 600;
}
</style>
