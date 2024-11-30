<template>
  <section class="project-section">
    <div class="large-container">
      <div class="sec-title text-center">
        <span class="sub-title">LATEST PRODUCTS</span>
        <h2>See Our Catalog</h2>
      </div>
      <div class="carousel-outer">
        <swiper
:slides-per-view="4" :space-between="30" :loop="true"
          :autoplay="{ delay: 1200, disableOnInteraction: true }" :breakpoints="breakpoints"
          :pagination="{ el: '.swiper-pagination', clickable: true }" :navigation="{ nextEl: '.h1n', prevEl: '.h1p' }"
          :modules="modules" class="project-carousel owl-theme">
          <swiper-slide v-for="(project, index) in products" :key="index" class="slide-item">
            <div class="project-block-home1">
              <div class="inner-box">
                <div class="image-box">
                  <figure class="image">
                    <NuxtLink class="lightbox-image" :to="'#'">
                      <NuxtImg class="!h-90" format="webp" :src="project.image" :alt="project.title" />
                    </NuxtLink>
                  </figure>
                  <div class="info-box">
                    <NuxtLink :to="'#'" class="read-more"><i class="fa fa-long-arrow-alt-right" />
                    </NuxtLink>
                    <!-- <span class="cat">{{ project.title }}</span> -->
                    <h6 class="title mt-0">
                      <NuxtLink :to="'#'">{{ project.title }}</NuxtLink>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/vue"

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const products = [
      {
        image: '/images/gyroscope.jpg',
        title: 'Emcore EMP-1 FOG Gyroscopes',
        description: 'New, unpowered, Emcore EMP-1 Fiber Optic Gyroscopes. Only two left!',
      },
      {
        image: '/images/silicon.png',
        title: 'Silicon Sensing CRG20 MEMS Gyroscopes',
        description: 'New in original ESD bag, not handled, never installed (new-old stock). These are very hard to find with ten (10) available.',
      },
      {
        image: '/images/accelerometer.jpeg',
        title: 'Honeywell QA650 Accelerometers',
        description: 'New in box, never used. Three available.',
      },
      {
        image: '/images/gyroscope.jpg',
        title: 'Emcore EMP-2 FOG Gyroscopes',
        description: 'Used, EMP-1 Fiber Optic Gyroscopes. Approximately 10 hours of use.',
      },
      {
        image: '/images/silicon.png',
        title: 'Silicon Sensing CRG20 MEMS Gyroscopes',
        description: 'New in original ESD bag, not handled, never installed (new-old stock). These are very hard to find with ten (10) available.',
      },
      {
        image: '/images/accelerometer.jpeg',
        title: 'Honeywell RBA500 Accelerometers',
        description: 'New in box, never used. Three available.',
      },
      {
        image: '/images/ringcore.jpg',
        title: 'Contraves 57CD Slip Ring Core',
        description: 'Removed from an operating unit, for parts only. Make offer.',
      },
    ]
    return {
      modules: [Autoplay, Pagination, Navigation],
      products,
      breakpoints: {
        320: { slidesPerView: 1.2 },
        575: { slidesPerView: 1.6 },
        767: { slidesPerView: 2.2 },
        991: { slidesPerView: 2.3 },
        1199: { slidesPerView: 3.3 },
        1350: { slidesPerView: 3.6 },
        1550: { slidesPerView: 4.2 },
      }
    }
  },
}
</script>