<template>
  <section class="page-title" style="background-image: url(https://images.unsplash.com/photo-1561323578-0b8e6fdc11c0?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);">
    <div class="auto-container">
      <div class="title-outer">
        <h1 class="title">{{ title }}</h1>
        <ul class="page-breadcrumb">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li>{{ title }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script>
  export default {
    name: "PageTitle",
    props: {
      title: {
        type: String
      }
    }
  }
</script>