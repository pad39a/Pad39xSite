<template>
  <div>
    <SectionsHome1Slider/>
    <SectionsHome1Features/>
    <SectionsHome1About/>
    <SectionsHome1Service/>
    <SectionsHome1Video/>
    <!-- <SectionsHome1Work/> -->
    <!-- <SectionsHome1Funfact/> -->
    <SectionsHome1Project/>
    <!-- <SectionsHome1Products/> -->
    <SectionsHome1Contact class="mb-12 lg:mb-0"/>
    <!-- <SectionsHome1Testimonials/> -->
    <!-- <SectionsHome1Clients/> -->
    <!-- <SectionsHome1News/> -->
  </div>
</template>

<script lang="ts" setup>
const title = 'Home'
useSeoMeta({
  title,
  ogTitle: title,
  description: 'Home page of PAD39X',
  ogDescription: 'Home page of PAD39X',

})
</script>