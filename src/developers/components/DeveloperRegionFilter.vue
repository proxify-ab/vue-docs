<script setup lang="ts">

import { VTFlyout, VTIconPlus } from '@vue/theme'

defineProps<{
  allTimezones: string[]
  selectedTimezone: string | null
}>()

const emit = defineEmits(['update:timezone'])

const selectTimezone = (timezone: string | null) => {
  emit('update:timezone', timezone)
}
</script>


<template>
  <div>
    <VTFlyout class="dropdown timezone-dropdown" button="Timezones" label="Timezones">
      <div class="vt-menu-items">
        <template v-for="item in allTimezones" :key="item">
          <span class="vt-menu-item" @click="selectTimezone(item)">{{ item }}</span>
        </template>
      </div>
    </VTFlyout>
    <div v-if="selectedTimezone" class="timezone-selected">
      <span class="timezone-label">{{ selectedTimezone }}</span>
      <span class="timezone-reset" @click="selectTimezone(null)">
        <span>Reset</span>
        <VTIconPlus class="timezone-reset-icon" />
      </span>
    </div>
  </div>
</template>

<style scoped>
:deep(.vt-flyout-menu) {
  left: 0;
  right: unset;
}

.vt-menu-item {
  display: block;
  padding: 0 18px;
  line-height: 28px;
  font-size: 13px;
  font-weight: 400;
  color: var(--vt-c-text-1);
  white-space: nowrap;
  transition: color 0.25s;
}

.vt-menu-item:hover {
  cursor: pointer;
  color: var(--vt-c-brand);
}

.timezone-dropdown {
  z-index: 10;
}

:deep(.vt-flyout-button) {
  height: fit-content;
  padding: 18px 0;
}

:deep(.vt-flyout-button-text) {
  line-height: 100%;
}

.timezone-selected {
  display: flex;
  gap: 8px;
}

.timezone-label {
  padding: 4px 16px;
  color: var(--vt-c-text-code);
  font-weight: 600;
  font-size: 0.85em;
  background-color: var(--vt-c-bg-mute);
  border-radius: 6px;
}

.timezone-reset {
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 13px;
  color: var(--vt-c-text-1);
  transition: color 0.25s;
}

.timezone-reset-icon {
  margin-left: 5px;
  width: 16px;
  height: 16px;
  fill: var(--vt-c-text-1);
  transform: rotate(45deg);
  transition: fill 0.25s;
}

.timezone-reset:hover {
  color: var(--vt-c-text-2);
}

.timezone-reset-icon {
  fill: var(--vt-c-text-2);
}
</style>
