<template>
  <section class="project-section">
      <div class="auto-container">
        <div class="sec-title text-center">
          <span class="sub-title">LATEST PROJECTS</span>
          <h2>Projects Across the USA</h2>
        </div>
        <div class="font-bold text-xl text-center">
        New projects announced in 2025
      </div>
        <!-- <MotionGroup preset="fadeVisibleOnce" :duration="350">
          <div class="flex justify-center">
            <div v-for="(project, index) in projects" :key="index" class="slide-item lg:w-50%">
              <div class="project-block-home1">
                <div class="inner-box">
                  <div class="image-box">
                    <figure class="image">
                      <NuxtLink class="lightbox-image" :to="project.url">
                        <NuxtImg format="webp" :src="project.image" :alt="project.title" />
                      </NuxtLink>
                    </figure>
                    <div class="info-box">
                      <NuxtLink :to="project.url" class="read-more"><i class="fa fa-long-arrow-alt-right" />
                      </NuxtLink>
                      <span class="cat">{{ project.category }}</span>
                      <h6 class="title mt-0">
                        <NuxtLink :to="project.url">{{ project.title }}</NuxtLink>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MotionGroup> -->
        <!-- <div class="carousel-outer">
          <swiper
            :slides-per-view="4"
            :space-between="30"
            :loop="true"
            :autoplay="{ delay: 1200, disableOnInteraction: true }"
            :breakpoints="breakpoints"
            :pagination="{ el: '.swiper-pagination', clickable: true }"
            :navigation="{ nextEl: '.h1n', prevEl: '.h1p' }"
            :modules="modules"
            class="project-carousel owl-theme"
          >
            <swiper-slide v-for="(project, index) in projects" :key="index" class="slide-item">
              <div class="project-block-home1">
                <div class="inner-box">
                  <div class="image-box">
                    <figure class="image">
                      <NuxtLink class="lightbox-image" :to="project.image"><NuxtImg format="webp" :src="project.image" :alt="project.title" /></NuxtLink>
                    </figure>
                    <div class="info-box">
                      <NuxtLink to="page-project-details" class="read-more"><i class="fa fa-long-arrow-alt-right"/></NuxtLink>
                      <span class="cat">{{ project.category }}</span>
                      <h6 class="title mt-0"><NuxtLink to="page-project-details">{{ project.title }}</NuxtLink></h6>
                    </div>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div> -->
      </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'

const projects = ref([
  { image: '/images/part-search.png', title: 'Part Search Web Application', category: 'Software', url: 'https://aero-part-search-web-app.vercel.app' },
  // { image: '/images/resource/project-2.jpg', title: 'Indoor Air Quality', category: 'Air Filter' },
  // { image: '/images/resource/project-3.jpg', title: 'Cooling Services', category: 'Maintenance' },
  // { image: '/images/resource/project-4.jpg', title: 'Annual Inspections', category: 'Maintenance' },
  // { image: '/images/resource/project-1.jpg', title: 'A/C Installation', category: 'AirCondition' },
])

const breakpoints = ref({
  320: { slidesPerView: 1, spaceBetween: 30 },
  575: { slidesPerView: 2, spaceBetween: 30 },
  767: { slidesPerView: 2, spaceBetween: 30 },
  991: { slidesPerView: 2, spaceBetween: 30 },
  1199: { slidesPerView: 3, spaceBetween: 30 },
  1350: { slidesPerView: 4, spaceBetween: 30 },
})

const modules = [Autoplay, Pagination, Navigation]
</script>

<style scoped>
/* Add your scoped component styles here */
</style>
