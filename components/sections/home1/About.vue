<template>
  <section class="about-section-home1">
    <div class="auto-container">
      <div class="overflow-hidden bg-white ">
        <div>
          <div
            class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
            <!-- <MotionGroup preset="slideVisibleOnceBottom" :duration="700"> -->
              <div class="lg:pr-4 lg:pt-4">
                <div class="lg:max-w-lg">
                  <div class="sec-title">
                    <span v-motion-slide-visible-once-left  class="sub-title">About Us</span>
                    <h2 v-motion-slide-visible-once-left  class="title">Welcome to AeroSpace Technology LunarNavi</h2>
                    <div class="text">
                      <p  v-motion-slide-visible-once-left>LunarNavi is inspired by the historic Apollo moon launches from PAD39A at Cape Canaveral and the
                        pioneering work of SpaceX to build reusable launch vehicles. </p>
                      <p  v-motion-slide-visible-once-left>Our mission is to create new and experimental space technologies based on proven commercial
                        products. Our team over a period of thirty years have solved recurring gaps between what
                        aerospace and commercial manufacturers are willing to build and what the next generation of
                        space pioneers need to reach their mission goals. </p>
                      <p  v-motion-slide-visible-once-left>LunarNavi engineers and partners provide options to solve both small and large specification gaps
                        to create a winning solution within aerospace and spacecraft requirements and budgets. </p>
                    </div>
                  </div>
                  <!-- <div class="mt-8">
                      <NuxtLink to="/abou" class="theme-btn btn-style-one text-white">About Us</NuxtLink>
                    </div> -->
                  <figure v-motion-slide-visible-once-bottom class="mt-16 border-l border-gray-200 pl-8 text-gray-600">
                    <blockquote class="text-base/7">
                      <p>“The LunarNavi team help us with the development and successful launch of a new avionics module
                        used
                        in flight vehicles and the associated test and calibration systems.”</p>
                    </blockquote>
                    <figcaption class="mt-6 flex gap-x-4 text-sm/6">
                      <div><span class="font-semibold text-gray-900">Tim W</span> 
                        
                        <!-- – Wharp Industries -->
                      
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </div>
            <!-- </MotionGroup> -->
            <NuxtImg
v-motion-slide-visible-once-right format="webp"
              src="https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Product screenshot"
              class="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:ml-0"
              width="2432" height="1442" />
          </div>
        </div>
      </div>
    </div>

  </section>
  <modal-video v-model:is-open="videoIsOpen" :channel="videoChannel" :video-id="videoId" />
  <!--Emd About Section -->
</template>
<script lang="ts" setup>
import ModalVideo from '~/components/elements/ModalVideo.vue'


const videoIsOpen = ref(false)
const videoChannel = computed(() => {
  //Logic to extract based on URL
  return 'youtube'
})
const videoId = computed(() => {
  //Logic to extract based on URL
  return 'QiqQoqtnHrk'
})
const openVideo = () => {
  videoIsOpen.value = !videoIsOpen.value
}

</script>