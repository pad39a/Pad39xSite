<template>
  <!-- Features Section -->
  <section class="features-section-two">
    <div class="auto-container">
      <div class="row">
        <div class="title-column col-lg-6">
          <div class="title-box">
            <h4 v-motion-slide-visible-once-bottom class="title">Bridging Experimental Technologies <br>
              to Solve Tomorrow’s Problems</h4>
          </div>
        </div>
        <!-- <MotionGroup preset="slideVisibleOnceLeft" :duration="850"> -->
          <div class="features-column col-lg-6">
            <div class="row">
              <!-- Feature Block -->
              <div v-motion-slide-visible-once-right  class="feature-block-three col-md-4">
                <div class="inner">
                  <i class="icon flaticon-ac1-adjustment-1" />
                  <h4  class="title">Advanced Aerospace Solutions</h4>
                </div>
              </div>
              <!-- Feature Block -->
              <div v-motion-slide-visible-once-right class="feature-block-three col-md-4">
                <div class="inner">
                  <i class="icon flaticon-ac1-air-conditioner-10" />
                  <h4 class="title">Secure <br> Supply Chain</h4>
                </div>
              </div>
              <!-- Feature Block -->
              <div
v-motion-slide-visible-once-right
                          class="feature-block-three col-md-4">
                <div class="inner">
                  <i class="icon flaticon-ac1-mechanic" />
                  <h4 class="title">Expert <br> Technical Support</h4>
                </div>
              </div>
            </div>
          </div>
        <!-- </MotionGroup> -->
      </div>
    </div>
  </section>
  <!-- End Features Section -->
</template>


<style lang="scss" scoped>
.feature-block-three {
  @apply h-auto md:h-56 2xl:h-auto;
  .inner {
    @apply h-full;
  }
}
</style>