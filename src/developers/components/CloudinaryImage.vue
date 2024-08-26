<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  src: string,
  alt: string,
  width: number,
  height: number,
  quality?: {
    type: string,
    default: 'q_auto:best',
  },
  crop?: {
    type: string,
    default: 'c_fit',
  },
  faceRecognition?: {
    type: boolean,
    default: false,
  },
  loading?: 'lazy' | 'eager',
  className?: {
    type: string,
    default: '',
  },
}>()

const cloudinaryUrl = 'https://res.cloudinary.com/proxify-io/image/upload'

const imageSrc = computed(() => {
  const attributes = [
    'f_auto',
    'dpr_auto',
    props.crop,
    props.quality,
    props.faceRecognition ? 'g_face' : '',
    props.width ? `w_${props.width}` : '',
    props.height ? `h_${props.height}` : '',
  ]
    .filter((item) => item !== '')
    .join(',');

  return `${cloudinaryUrl}/${attributes}/v1/${props.src.replace(/^\/+/, '')}`;
})
</script>

<template>
  <img
    :src="imageSrc"
    :alt="alt"
    :width="width"
    :height="height"
    :loading="loading"
    :class="['c-image', className]"
  />
</template>

<style scoped>
.c-image {
  max-width: 100%;
  height: auto;
  vertical-align: top;
}
</style>
