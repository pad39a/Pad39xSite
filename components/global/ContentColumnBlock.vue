<script setup lang="ts">
import { defineProps } from 'vue'

interface ContentBlockProps {
  imageUrl: string
  title: string
  description: string
  buttonText: string
  linkUrl: string
  reverse?: boolean
}

const props = defineProps<ContentBlockProps>()
</script>

<template>
  <div :class="`max-w-1440px mx-auto flex flex-col md:flex-row gap-24 ${props.reverse ? 'md:flex-row-reverse' : ''} items-center`">
    <div class="w-full md:w-1/2">
      <img :src="props.imageUrl" alt="image" class="w-full rounded-lg">
    </div>
    <div class="w-full md:w-1/2">
      <h2 class="text-2xl font-bold mb-4">
        {{ props.title }}
      </h2>
      <p class="mb-4">
        {{ props.description }}
      </p>
      <AppButton color="menu" :to="props.linkUrl">
        {{ props.buttonText }}
      </AppButton>
    </div>
  </div>
</template>

<style scoped>
</style>
