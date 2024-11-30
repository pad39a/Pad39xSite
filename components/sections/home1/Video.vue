<template>
  <section class="call-to-action" style="background-image: url(./images/nasa.jpg)">
    <div class="auto-container">
      <div class="outer-box">
        <!-- <NuxtLink class="play-now lightbox-image" @click="openVideo"><i class="icon fa fa-play"/><span class="ripple"/></NuxtLink> -->
        <div class="sec-title light mb-0">
          <div class="sub-title">Get in touch with us anytime</div>
          <h1>Invest in success using <br >Our aerospace services</h1>
        </div>
      </div>
    </div>
  </section>
  <ElementsModalVideo v-model:is-open="videoIsOpen" :channel="videoChannel" :video-id="videoId" />
  <!--Emd About Section -->
</template>
<script>
import ModalVideo from '~/components/elements/ModalVideo.vue'
export default {
  components: {
    // ModalVideo
  },
  data: () => {
    return {
      videoIsOpen: false
    }
  },
  computed: {
    videoChannel: function () {
      //Logic to extract based on URL
      return 'youtube'
    },
    videoId: function () {
      //Logic to extract based on URL
      return 'QiqQoqtnHrk'
    }
  },
  methods: {
    openVideo() {
      this.videoIsOpen = !this.videoIsOpen
    }
  }
}
</script>