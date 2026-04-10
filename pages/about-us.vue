<template>
  <div>
    <LayoutPageTitle title="About Us"/>
    <SectionsHome1About/>
    <SectionsHome1Service/>
    <!--  <SectionsHome1Testimonials/>-->
  </div>
</template>
<script lang="ts" setup>
// definePageMeta({
//   layout: 'innerpage'
// })

useHead({
  title: 'About Us',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'LunarNavi is inspired by the historic Apollo moon launches from LunarNavi at Cape Canaveral and the pioneering work of SpaceX to build reusable launch vehicles.'
    }
  ]
})

</script>