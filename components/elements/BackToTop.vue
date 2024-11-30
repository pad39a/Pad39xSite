<template>
  <a class="scroll-to-top scroll-to-target text-white" :class="{ 'd-block': scroll }" href="#__nuxt"><span class="fa fa-angle-up"/></a>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const scroll = ref(false)
const handleScroll = () => {
  const scrollCheck = window.scrollY > 100
  if (scrollCheck !== scroll.value) {
    scroll.value = scrollCheck
  }
}

onMounted(() => {
  document.addEventListener("scroll", handleScroll)
})
onUnmounted(() => {
  document.removeEventListener("scroll", handleScroll)
})
</script>