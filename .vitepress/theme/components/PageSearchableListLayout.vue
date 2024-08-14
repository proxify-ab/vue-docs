<script setup lang="ts">
import { ref, computed } from 'vue'
import { VTIconSearch } from '@vue/theme'

const props = defineProps<{
  title: string;
  items: Array<any>;
  searchPlaceholder: string;
  filterFunction: (item: any, query: string) => boolean;
}>()

const query = ref('')

const filteredItems = computed(() => {
  return (item: any) => props.filterFunction(item, query.value)
})
</script>

<template>
  <div class="searchable-list">
    <slot name="hero" :title="props.title" />
    <div class="search-container">
      <VTIconSearch class="search-icon" />
      <input
        class="search-input"
        :placeholder="props.searchPlaceholder"
        v-model="query"
      />
      <slot name="list" :filter="filteredItems" />
    </div>
    <slot name="join" />
  </div>
</template>

<style scoped>
.searchable-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.search-container {
  max-width: 960px;
  margin: 1em auto 2em;
  padding: 0 28px;
  position: relative;
  width: 100%;
}

.search-icon {
  width: 18px;
  height: 18px;
  fill: var(--vt-c-text-3);
  position: absolute;
  top: 12px;
  left: 12px;
}

.search-input {
  width: 100%;
  padding: 8px 12px 8px 36px;
  border-bottom: 1px solid var(--vt-c-divider-light);
  margin-bottom: 2em;
}
</style>
