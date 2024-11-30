<template>
  <section class="banner-section-four">
    <swiper
:slides-per-view="1" :space-between="30" :loop="true"  :pagination="{
      el: '.swiper-pagination',
      clickable: true,
    }" :navigation="{
      nextEl: '.h1n',
      prevEl: '.h1p',
    }" :modules="modules" class="banner-slider">
    <!-- Slide Item -->
    <swiper-slide class="banner-slide slide-item hero -mt-20">
      <NuxtImg format="webp" src="/images/hero.jpg" alt="" class="rev-slidebg" />
      <div class="outer-box">
        <div class="auto-container">
          <div class="content-box">
            <span v-motion-slide-visible-once-left class="sub-title" data-animation-in="fadeInLeft" data-delay-in="0.1">Developing Aerospace Products and Services</span>
            <h2 v-motion-slide-visible-once-left class="title" data-animation-in="fadeInLeft" data-delay-in="0.3">Innovate +<span class="font-bold block">Aerospace</span>
            </h2>
            <div class="btn-box">
              <NuxtLink v-motion-slide-visible-once-bottom to="/about-us" data-animation-in="fadeInUp" data-delay-in="0.5" class="theme-btn btn-style-one !text-sm lg:!text-lg">Explore More</NuxtLink>
              <!-- <AppButton color="menu">Hello</AppButton> -->
              <div  class="inner-box" data-animation-in="fadeInUp" data-delay-in="0.7"/>
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>

    <!-- Slide Item -->
    <!-- <swiper-slide class="banner-slide slide-item">
      <img src="/images/main-slider/3.jpg" alt="" class="rev-slidebg">
      <div class="outer-box">
        <div class="auto-container">
          <div class="content-box">
            <span class="sub-title" data-animation-in="fadeInLeft" data-delay-in="0.1">Providing Best AC Repair Service</span>
            <h2 class="title" data-animation-in="fadeInLeft" data-delay-in="0.3">Professional Cooling <br class="d-none d-lg-block"><span class="color2">&</span> Heating Service</h2>
            <div class="btn-box">
              <NuxtLink to="/page-about" data-animation-in="fadeInUp" data-delay-in="0.5" class="theme-btn">Explore More</NuxtLink>
              <div class="inner-box" data-animation-in="fadeInUp" data-delay-in="0.7"/>
            </div>
          </div>
        </div>
      </div>
    </swiper-slide> -->
  </swiper>
</section>
</template>
<script>
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/vue"

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Autoplay, Pagination, Navigation],
        }
    },
}
</script>