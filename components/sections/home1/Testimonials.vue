<template>
  <section class="testimonial-section-home1">
    <div class="auto-container">
      <div class="sec-title text-center">
        <span class="sub-title">Our Testimonial</span>
        <h2>Break boundaries eignite brands</h2>
      </div>
      <!-- Sponsors Outer -->
      <div class="carousel-outer">
        <!--clients carousel-->
        <swiper :slides-per-view="2" :space-between="30" :loop="true" :autoplay="{
          delay: 8000,
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
    slidesPerView: 2,
    spaceBetween: 30,
  },
  1350: {
    slidesPerView: 2,
    spaceBetween: 30,
  },
}" :pagination="{
  el: '.swiper-pagination',
  clickable: true,
}" :navigation="{
  nextEl: '.h1n',
  prevEl: '.h1p',
}" :modules="modules" class="testimonial-carousel-home1 owl-theme disable-nav">
          <swiper-slide class="slide-item">
            <div class="testimonial-block-home1">
              <div class="inner-box">
                <div class="content-box">
                  <div class="image-box">
                    <figure class="thumb"><img src="/images/resource/testi-thumb1-1.jpg" alt=""></figure>
                    <span class="quote-icon fa fa-quote-right"></span>
                  </div>    
                  <h4 class="name mt-0">Darrell Steward</h4>
                  <span class="designation">Marketing Coordinator</span>
                  <div class="rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                  <div class="text">There are many variations of passages of lk Lorem Ipsum available, but the majority hjkli have suffered alteration in some form, byhlk injected humour.</div>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide class="slide-item">
            <div class="testimonial-block-home1">
              <div class="inner-box">
                <div class="content-box">
                  <div class="image-box">
                    <figure class="thumb"><img src="/images/resource/testi-thumb1-2.jpg" alt=""></figure>
                    <span class="quote-icon fa fa-quote-right"></span>
                  </div>    
                  <h4 class="name mt-0">Devon Lane</h4>
                  <span class="designation">Marketing Coordinator</span>
                  <div class="rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                  <div class="text">There are many variations of passages of lk Lorem Ipsum available, but the majority hjkli have suffered alteration in some form, byhlk injected humour.</div>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide class="slide-item">
            <div class="testimonial-block-home1">
              <div class="inner-box">
                <div class="content-box">
                  <div class="image-box">
                    <figure class="thumb"><img src="/images/resource/testi-thumb1-1.jpg" alt=""></figure>
                    <span class="quote-icon fa fa-quote-right"></span>
                  </div>    
                  <h4 class="name mt-0">Darrell Steward</h4>
                  <span class="designation">Marketing Coordinator</span>
                  <div class="rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                  <div class="text">There are many variations of passages of lk Lorem Ipsum available, but the majority hjkli have suffered alteration in some form, byhlk injected humour.</div>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide class="slide-item">
            <div class="testimonial-block-home1">
              <div class="inner-box">
                <div class="content-box">
                  <div class="image-box">
                    <figure class="thumb"><img src="/images/resource/testi-thumb1-2.jpg" alt=""></figure>
                    <span class="quote-icon fa fa-quote-right"></span>
                  </div>    
                  <h4 class="name mt-0">Devon Lane</h4>
                  <span class="designation">Marketing Coordinator</span>
                  <div class="rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                  <div class="text">There are many variations of passages of lk Lorem Ipsum available, but the majority hjkli have suffered alteration in some form, byhlk injected humour.</div>
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