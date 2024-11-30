<template>
  <section class="services-section-two pb-90 bg-f7">
    <div class="auto-container">
      <div class="sec-title text-center">
        <span class="sub-title">SPECIALISE IN THE AIR CONDITION</span>
        <h2>Specialist Cooling & Heating Service</h2>
      </div>
      <div class="carousel-outer">
      <swiper :slides-per-view="3" :space-between="30" :loop="true" :autoplay="{
        delay: 1200,
        disableOnInteraction: true,
        }" :breakpoints="{
          320: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          575: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          767: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          991: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1199: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1350: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }" :pagination="{
          el: '.swiper-pagination',
          clickable: true,
        }" :navigation="{
          nextEl: '.h1n',
          prevEl: '.h1p',
        }" :modules="modules" class="services-carousel owl-theme">
          <swiper-slide class="slide-item">
            <!-- Service Block Carousel -->
            <div class="service-block-two">
              <div class="inner-box">
                <div class="image-box">
                  <i class="icon flaticon-ac1-humidifier"></i>
                  <figure class="image"><NuxtLink to="/images/resource/project-1.jpg" class="lightbox-image"><img src="/images/resource/project-1.jpg" alt=""></NuxtLink></figure>
                </div>
                <div class="content-box">
                  <span class="sub-title">01 Service</span>
                  <h4 class="title"><NuxtLink to="page-service-details">Cooling Services</NuxtLink></h4>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide class="slide-item">
            <!-- Service Block Two-->
            <div class="service-block-two">
              <div class="inner-box">
                <div class="image-box">
                  <i class="icon flaticon-ac1-air-conditioner-11"></i>
                  <figure class="image"><NuxtLink to="/images/resource/project-2.jpg" class="lightbox-image"><img src="/images/resource/project-2.jpg" alt=""></NuxtLink></figure>
                </div>
                <div class="content-box">
                  <span class="sub-title">02 Service</span>
                  <h4 class="title"><NuxtLink to="page-service-details">AC Maintenance</NuxtLink></h4>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide class="slide-item">
            <!-- Service Block Two-->
            <div class="service-block-two">
              <div class="inner-box">
                <div class="image-box">
                  <i class="icon flaticon-ac1-mechanic"></i>
                  <figure class="image"><NuxtLink to="/images/resource/project-3.jpg" class="lightbox-image"><img src="/images/resource/project-3.jpg" alt=""></NuxtLink></figure>
                </div>
                <div class="content-box">
                  <span class="sub-title">03 Service</span>
                  <h4 class="title"><NuxtLink to="page-service-details">Dust Cleaning</NuxtLink></h4>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide class="slide-item">
            <!-- Service Block Carousel -->
            <div class="service-block-two">
              <div class="inner-box">
                <div class="image-box">
                  <i class="icon flaticon-ac1-humidifier"></i>
                  <figure class="image"><NuxtLink to="/images/resource/project-1.jpg" class="lightbox-image"><img src="/images/resource/project-1.jpg" alt=""></NuxtLink></figure>
                </div>
                <div class="content-box">
                  <span class="sub-title">01 Service</span>
                  <h4 class="title"><NuxtLink to="page-service-details">Cooling Services</NuxtLink></h4>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
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