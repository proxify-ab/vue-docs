<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps<{
  title?: string
  titleTag?: string
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
    <Component v-if="title" :is="titleTag || 'h4'" class="developer-diagram__title">
      {{ title }}
    </Component>
    <p v-if="prependText" class="developer-diagram__prepend-text">{{ prependText }}</p>
    <div v-html="svgContent" class="developer-diagram__svg-wrapper"></div>
    <p v-if="appendText" class="developer-diagram__append-text">{{ appendText }}</p>
  </div>
</template>

<style scoped>
.developer-diagram {
  color: var(--vt-c-gray-dark-3);
}

.dark .developer-diagram {
  color: var(--vt-c-gray-light-3);
}

.developer-diagram__svg-wrapper {
  min-width: 200px;
  height: auto;
  width: 100%;
}

.developer-diagram__svg-wrapper svg {
  height: auto;
  width: 100%;
}
</style>
