<template>
  <!-- Testimonials Section -->
  <section class="testimonial-section-two">
    <div class="bg-image" style="background-image: url(./images/background/6.jpg)"></div>
    <div class="auto-container">
      <div class="row">
        <!-- Testimonial Column -->
        <div class="testimonial-column col-lg-6">
          <div class="inner-column">
            <div class="sec-title">
              <span class="sub-title">Our Testimonial</span>
              <h2>What They’re Talking <br>About Us</h2>
            </div>
            <swiper :slides-per-view="1" :space-between="30" :loop="true" :autoplay="{
              delay: 800,
              disableOnInteraction: true,
              }" :breakpoints="{
              320: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              575: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              767: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              }" :pagination="{
                el: '.swiper-pagination',
                clickable: true,
              }" :navigation="{
                nextEl: '.h1n',
                prevEl: '.h1p',
              }" :modules="modules" class="testimonial-carousel-two owl-theme default-dots">
              <swiper-slide class="slide-item">
                <div class="testimonial-block-two">
                  <div class="inner-box">
                    <i class="icon icon-quote"></i>
                    <div class="text">This is due to their excellent service, and augue homero consectetuer nam. Eu quo laoreet propriae, malis exerci habemus has vocent persius eum ea.</div>
                    <div class="info-box">
                      <div class="thumb"><img src="/images/resource/testi-thumb-1.jpg" alt=""></div>
                      <h4 class="name">Jessica Brown</h4>
                      <span class="designation">Customer</span>
                    </div>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide class="slide-item">
                <div class="testimonial-block-two">
                  <div class="inner-box">
                    <i class="icon icon-quote"></i>
                    <div class="text">propriae, malis exerci habemus has vocent persius eum ea. This is due to their excellent service, and augue homero consectetuer nam. Eu quo</div>
                    <div class="info-box">
                      <div class="thumb"><img src="/images/resource/testi-thumb-3.jpg" alt=""></div>
                      <h4 class="name">Jessica Brown</h4>
                      <span class="designation">Customer</span>
                    </div>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide class="slide-item">
                <div class="testimonial-block-two">
                  <div class="inner-box">
                    <i class="icon icon-quote"></i>
                    <div class="text">This is due to their excellent service, propriae, malis exerci habemus has vocent persius eum ea. and augue homero consectetuer nam. Eu quo</div>
                    <div class="info-box">
                      <div class="thumb"><img src="/images/resource/testi-thumb-2.jpg" alt=""></div>
                      <h4 class="name">Jessica Brown</h4>
                      <span class="designation">Customer</span>
                    </div>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
        <!-- form Column -->
        <div class="form-column col-lg-6">
          <div class="inner-column">
            <!-- Contact Form -->
            <div class="contact-form">
              <h4 class="title">Request a quote</h4>
              <!--Contact Form-->
              <form method="post" action="get" id="contact-form">
                <div class="row">
                  <div class="col-lg-12 form-group">
                    <label>Your Name:</label>
                    <input type="text" name="full_name" placeholder="" required>
                  </div>
                  <div class="col-md-6 form-group">
                    <label>Your Email:</label>
                    <input type="text" name="Email" placeholder="" required>
                  </div>
                  <div class="col-md-6 form-group">
                    <label>Phone No::</label>
                    <input type="text" name="Phone" placeholder="" required>
                  </div>
                  <div class="col-lg-12 form-group">
                    <label>Number of installations:</label>
                    <div class="range-slider-one">
                      <input type="text" class="range-amount bg-transparent" name="field-name" readonly>
                      <input type="range" min="0" max="100" value="49" class="slider range-amount" />
                    </div>
                  </div>
                  <div class="col-md-6 form-group">
                    <label>Service type:</label>
                    <select class="custom-select">
                      <option value="">Select</option>
                      <option value="">AC Installation</option>
                      <option value="">Servicing</option>
                      <option value="">Duct Repair</option>
                      <option value="">HVAC</option>
                      <option value="">Air Quality Check</option>
                      <option value="">Cooling Heating Service</option>
                    </select>
                  </div>
                  <div class="col-md-6 form-group">
                    <label>Load:</label>
                    <select class="custom-select">
                      <option value="">Select</option>
                      <option value="">Home</option>
                      <option value="">Office</option>
                      <option value="">Shopping Mall</option>
                      <option value="">Other</option>
                    </select>
                  </div>
                  <div class="col-lg-12 form-group">
                    <button class="theme-btn btn-style-two hvr-light" type="submit" name="submit-form"><span class="btn-title">Submit Request</span></button>
                  </div>
                </div>
              </form>
            </div>
            <!--End Contact Form -->
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End Testimonials Section -->
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

// Range Slider
import { ref } from "vue";
const sliderValue = ref(50);
const value = ref(50)
</script>