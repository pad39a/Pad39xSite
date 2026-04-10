<template>
  <div>
    <LayoutPageTitle title="Contact Us"/>
    <SectionsPagecontactContact/>
    <SectionsPagecontactMap/>
  </div>
</template>
<script lang="ts" setup>
// definePageMeta({
//   layout: 'innerpage',
// })

useHead({
  title: 'Contact',
  meta: [
    {
      name: 'description',
      content: 'Contact page of LunarNavi'
    }
  ]
})
</script>