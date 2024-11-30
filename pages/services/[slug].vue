<template>
    <div v-if="serviceBySlug">
        <LayoutPageTitle :title="`${serviceBySlug.title}`" />
        <SectionsServiceServicedetails />
    </div>
  </template>
  <script lang="ts" setup>
  import { slugify } from '~/helpers'
  import { servicesData } from '~/constants/data'
  const route = useRoute()
  const serviceBySlug = computed(() => servicesData.find(service => slugify(service.title) === route.params.slug))
  onMounted(() => {
    if (!serviceBySlug.value) {
      navigateTo('/404')
    }
  })
  definePageMeta({
    // title: `${serviceBySlug.value.title} | Services Details`,
  })
  </script>