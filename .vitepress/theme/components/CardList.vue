<script setup lang="ts">
import { computed, onMounted, ref, shallowRef } from 'vue'

const props = defineProps<{
  items: Array<any>;
  filter?: (item: any) => boolean | undefined;
  cardComponent: any;
  showLinkToAll?: boolean;
  shuffleItems?: boolean;
  browseLinkText?: string;
  browseLinkUrl?: string;
}>()

const mounted = ref(false)
const items = shallowRef(props.items)

const filteredItems = computed(() => {
  return props.filter ? items.value.filter(props.filter) : items.value
})

onMounted(() => {
  mounted.value = true
  const platinumItems = items.value.filter((item) => item.platinum)
  const normalItems = items.value.filter((item) => !item.platinum)

  if (props.shuffleItems) {
    shuffleArray(platinumItems)
    shuffleArray(normalItems)
  }

  items.value = [...platinumItems, ...normalItems]
})

function shuffleArray(array: Array<any>) {
  let currentIndex = array.length
  let temporaryValue
  let randomIndex

  // while there remain elements to shuffle...
  while (currentIndex !== 0) {
    // pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1
    // and swap it with the current element.
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }
  return array
}

</script>

<template>
  <div v-show="mounted" class="card-list">
    <!-- to skip SSG since the partners are shuffled -->
    <ClientOnly>
      <component
        :is="cardComponent"
        v-for="item in filteredItems"
        :key="item.id || item.name"
        :data="item"
      />
    </ClientOnly>

    <a
      class="browse-all-link"
      :href="props.browseLinkUrl"
      v-if="showLinkToAll && filteredItems.length % 2"
    >
      {{ browseLinkText }}
    </a>
  </div>
</template>

<style scoped>
.card-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.browse-all-link {
  display: block;
  width: 48.5%;
  margin-bottom: 36px;
  padding-top: 240px;
  font-size: 1.2em;
  text-align: center;
  color: var(--vt-c-text-2);
  border: 1px solid var(--vt-c-divider-light);
  border-radius: 4px;
  transition: color 0.5s ease;
}

.browse-all-link:hover {
  color: var(--vt-c-text-1);
}

@media (max-width: 768px) {
  .browse-all-link {
    display: none;
  }
}
</style>
