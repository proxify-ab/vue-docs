<script setup lang="ts">
import { VTFlyout, VTIconPlus } from '@vue/theme'
import { computed } from 'vue'

const props = defineProps<{
  allRegions: string[]
  selectedRegion: string | null
}>()

const emit = defineEmits(['update:region'])

const selectRegion = (region: string | null) => {
  emit('update:region', region)
}

const sortedRegions = computed(() => {
  return [...props.allRegions].sort((a, b) => a.localeCompare(b))
})
</script>

<template>
  <div class="region-selector">
    <VTFlyout class="region-selector__dropdown" button="Regions" label="Regions">
      <div class="region-selector__menu">
        <template v-for="item in sortedRegions" :key="item">
          <span class="region-selector__menu-item" @click="selectRegion(item)">
            {{ item }}
          </span>
        </template>
      </div>
    </VTFlyout>
    <div v-if="selectedRegion" class="region-selector__selected">
      <span class="region-selector__label">{{ selectedRegion }}</span>
      <span class="region-selector__reset" @click="selectRegion(null)">
        <span>Reset</span>
        <VTIconPlus class="region-selector__reset-icon" />
      </span>
    </div>
  </div>
</template>

<style scoped>
/* Flyout Menu Adjustments */
:deep(.vt-flyout-menu) {
  left: 0;
  right: unset;
}

/* Menu Items */
.region-selector__menu-item {
  display: block;
  padding: 0 18px;
  line-height: 28px;
  font-size: 13px;
  font-weight: 400;
  color: var(--vt-c-text-1);
  white-space: nowrap;
  transition: color 0.25s;
}

.region-selector__menu-item:hover {
  cursor: pointer;
  color: var(--vt-c-brand);
}

/* Dropdown Button */
.region-selector__dropdown {
  z-index: 10;
}

:deep(.vt-flyout-button) {
  height: fit-content;
  padding: 18px 0;
}

:deep(.vt-flyout-button-text) {
  line-height: 100%;
}

/* Selected Region Display */
.region-selector__selected {
  display: flex;
  gap: 8px;
}

.region-selector__label {
  padding: 4px 16px;
  color: var(--vt-c-text-code);
  font-weight: 600;
  font-size: 0.85em;
  background-color: var(--vt-c-bg-mute);
  border-radius: 6px;
}

/* Reset Button */
.region-selector__reset {
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 13px;
  color: var(--vt-c-text-1);
  transition: color 0.25s;
}

.region-selector__reset:hover {
  color: var(--vt-c-text-2);
}

.region-selector__reset-icon {
  margin-left: 5px;
  width: 16px;
  height: 16px;
  fill: var(--vt-c-text-1);
  transform: rotate(45deg);
  transition: fill 0.25s;
}

.region-selector__reset:hover .region-selector__reset-icon {
  fill: var(--vt-c-text-2);
}
</style>
