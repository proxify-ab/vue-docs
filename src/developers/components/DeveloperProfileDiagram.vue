<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps<{
  title?: string
  titleTag?: string
  developerAlias: string
  developerId: number
  image?: string
  diagramType: 'profile' | 'score'
  prependText?: string
  appendText?: string
}>()

const svgContent = ref('')

onMounted(async () => {
  const url = `/images/developers/${props.image || `${props.developerId}-${props.diagramType}.svg`}`
  const response = await fetch(url)
  if (response.ok) {
    svgContent.value = await response.text()
  }
})
</script>

<template>
  <div class="developer-diagram">
    <Component v-if="title" :is="titleTag || 'h4'">{{ title }}</Component>
    <p v-if="prependText">{{ prependText }}</p>
    <div v-html="svgContent" class="svg-wrapper"></div>
    <p v-if="appendText">{{ appendText }}</p>
  </div>
</template>

<style scoped>
.developer-diagram {
  color: var(--vt-c-gray-dark-3);
}

.dark .developer-diagram {
  color: var(--vt-c-gray-light-3);
}

.svg-wrapper svg {
  width: 100%;
  height: auto;
}
</style>
