<script lang="ts" setup>
interface Props {
  show: boolean
}
const { show = false } = defineProps<Props>()
</script>

<template>
  <div v-if="show" class="fixed inset-0 bg-black opacity-60 h-screen w-full z-35" />
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
