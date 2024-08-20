<script setup lang="ts">
import { ref, computed } from 'vue'
import partnerConfig from '../partnerConfig'

const props = defineProps<{
  proficiencies: string[]
  title?: string
  titleTag?: string
  enableShowAll?: boolean
}>()

const showAll = ref(false)
const maxVisibleProficiencies = partnerConfig.proficiencies.skillsPerCard

const visibleProficiencies = computed(() => {
  if (!props.enableShowAll) {
    return props.proficiencies
  }

  if (props.proficiencies.length <= maxVisibleProficiencies) {
    return props.proficiencies
  }
  return showAll.value ? props.proficiencies : props.proficiencies.slice(0, maxVisibleProficiencies)
})

const shouldShowButton = computed(() => {
  return props.enableShowAll && props.proficiencies.length > maxVisibleProficiencies
})

const toggleShowAll = (event: Event) => {
  event.stopPropagation()
  event.preventDefault()
  showAll.value = !showAll.value
}
</script>

<template>
  <div class="developer-proficiencies">
    <Component v-if="title" :is="titleTag || 'h4'" class="developer-proficiencies__title">{{ title }}</Component>
    <div class="developer-proficiencies__list">
      <span class="developer-proficiencies__item" v-for="p in visibleProficiencies" :key="p">{{ p }}</span>
      <button
        v-if="shouldShowButton"
        @click.stop="toggleShowAll"
        class="developer-proficiencies__toggle"
      >
        {{ showAll ? 'Show less' : 'Show all' }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.developer-proficiencies {
  display: flex;
  flex-direction: column;
}

.developer-proficiencies__list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.developer-proficiencies__item {
  display: inline-block;
  color: var(--vt-c-text-code);
  font-weight: 600;
  font-size: 0.85em;
  background-color: var(--vt-c-bg-mute);
  padding: 4px 10px;
  border-radius: 6px;
}

.developer-proficiencies__toggle {
  display: inline-block;
  font-weight: 600;
  font-size: 0.85em;
  color: var(--vt-c-brand);
  padding: 4px 10px;
  border-radius: 6px;
  cursor: pointer;
}

.developer-proficiencies__toggle:hover {
  color: var(--vt-c-brand-dark);
}

.dark .developer-proficiencies__toggle:hover {
  color: var(--vt-c-gray-dark-3);
}
</style>
