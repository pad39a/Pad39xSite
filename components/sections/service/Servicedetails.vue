<template>
  <!--Start Services Details-->
  <section v-if="serviceBySlug" class="services-details">
    <div class="container">
      <div class="row">
        <!--Start Services Details Content-->
        <div class="col-xl-8 col-lg-8">
          <div class="services-details__content">
            <NuxtImg format="webp" class="w-full" :src="serviceBySlug.image" :alt="serviceBySlug.title" placeholder />
            <h2 class="mt-4">{{ serviceBySlug.title }}</h2>
            <p>
              {{ serviceBySlug.paragraph }}
            </p>

            <!--            Content Start -->

            <!--            <div class="content">-->
            <!--              <div class="text">-->
            <!--                <h3>Our Scope of Work</h3>-->
            <!--                <p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>-->
            <!--              </div>-->
            <!--              <div class="feature-list">-->
            <!--                <div class="row clearfix">-->
            <!--                  <div class="col-lg-6 col-md-6 col-sm-12 column">-->
            <!--                    <div class="single-item">-->
            <!--                      <div class="icon-box"><i class="fas fa-check-circle"/></div>-->
            <!--                      <h6 class="title">We're Certified</h6>-->
            <!--                    </div>-->
            <!--                  </div>-->
            <!--                  <div class="col-lg-6 col-md-6 col-sm-12 column">-->
            <!--                    <div class="single-item">-->
            <!--                      <div class="icon-box"><i class="fas fa-check-circle"/></div>-->
            <!--                      <h6 class="title">Professional Technician</h6>-->
            <!--                    </div>-->
            <!--                  </div>-->
            <!--                  <div class="col-lg-6 col-md-6 col-sm-12 column">-->
            <!--                    <div class="single-item">-->
            <!--                      <div class="icon-box"><i class="fas fa-check-circle"/></div>-->
            <!--                      <h6 class="title">Awards Achievement</h6>-->
            <!--                    </div>-->
            <!--                  </div>-->
            <!--                  <div class="col-lg-6 col-md-6 col-sm-12 column">-->
            <!--                    <div class="single-item">-->
            <!--                      <div class="icon-box"><i class="fas fa-check-circle"/></div>-->
            <!--                      <h6 class="title">Best Services</h6>-->
            <!--                    </div>-->
            <!--                  </div>-->
            <!--                  <div class="col-lg-6 col-md-6 col-sm-12 column">-->
            <!--                    <div class="single-item">-->
            <!--                      <div class="icon-box"><i class="fas fa-check-circle"/></div>-->
            <!--                      <h6 class="title">Expert Team</h6>-->
            <!--                    </div>-->
            <!--                  </div>-->
            <!--                  <div class="col-lg-6 col-md-6 col-sm-12 column">-->
            <!--                    <div class="single-item">-->
            <!--                      <div class="icon-box"><i class="fas fa-check-circle"/></div>-->
            <!--                      <h6 class="title">Assessments</h6>-->
            <!--                    </div>-->
            <!--                  </div>-->
            <!--                </div>-->
            <!--              </div>-->
            <!--            </div>-->

            <!--            Content End -->


<!--            FAQ Start -->

            <!-- <div class="mb-5 mb-lg-0">
              <h3>FAQ</h3>
              <p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia
                quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
              <ul class="accordion-box wow fadeInRight">
                <li class="accordion block" :class="{ 'active-block': isActive.key === 1}">
                  <div class="acc-btn" :class="{ 'active': isActive.key === 1}" @click="handleClick(1)">Where do I find
                    my product key?
                    <div class="icon fas fa-angle-down"/>
                  </div>
                  <div class="acc-content" :class="{ 'current': isActive.key === 1}">
                    <div class="content">
                      <div class="text">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                        richardson ad squid.
                      </div>
                    </div>
                  </div>
                </li>
                <li class="accordion block" :class="{ 'active-block': isActive.key === 2}">
                  <div class="acc-btn" :class="{ 'active': isActive.key === 2}" @click="handleClick(2)">I need more
                    information about Theme.
                    <div class="icon fas fa-angle-down"/>
                  </div>
                  <div class="acc-content" :class="{ 'current': isActive.key === 2}">
                    <div class="content">
                      <div class="text">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                        richardson ad squid.
                      </div>
                    </div>
                  </div>
                </li>
                <li class="accordion block mb-0" :class="{ 'active-block': isActive.key === 3}">
                  <div class="acc-btn" :class="{ 'active': isActive.key === 3}" @click="handleClick(3)">How do we
                    activate the Theme?
                    <div class="icon fas fa-angle-down"/>
                  </div>
                  <div class="acc-content" :class="{ 'current': isActive.key === 3}">
                    <div class="content">
                      <div class="text">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                        richardson ad squid.
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div> -->
          </div>
        </div>

<!--        FAQ end-->

        <!--End Services Details Content-->

        <!--Start Services Details Sidebar-->
        <div class="col-xl-4 col-lg-4">
          <div class="service-sidebar">
            <!--Start Services Details Sidebar Single-->
            <div class="sidebar-widget service-sidebar-single">
              <div class="service-sidebar-single-services wow fadeInUp" data-wow-delay="0.1s" data-wow-duration="1200m">
                <div class="title">
                  <h3>All Services</h3>
                </div>
                <ul>
                  <li
                      v-for="service in servicesData" :key="service.title"

                      :class="{
                    'current': service.slug === $route.params.slug
                  }">
                    <NuxtLink :to="`/services/${slugify(service.title)}`">{{ service.title }} <i
                        class="fa fa-angle-right"/></NuxtLink>
                  </li>
                </ul>
              </div>
            </div>
            <!--End Services Details Sidebar Single-->

            <!--Start Services Details Sidebar Single-->
            <div class="sidebar-widget service-sidebar-single">
              <div
class="service-sidebar-single-contact-box text-center wow fadeInUp" data-wow-delay="0.3s"
                   data-wow-duration="1200m" style="background-image: url(/images/resource/news-2.jpg)">
                <div class="icon">
                  <span class="lnr lnr-icon-phone"/>
                </div>
                <div class="title">
                  <h2>Innovative Aerospace <br>Services</h2>
                </div>
                <p class="phone">
                  <NuxtLink to="tel:321-473-4622">321-473-4622</NuxtLink>
                </p>
                <p>Call Us Anytime</p>
              </div>
            </div>
            <!--End Services Details Sidebar Single-->

            <!--Start Services Details Sidebar Single-->
            <div class="sidebar-widget service-sidebar-single mt-3">
              <div class="service-sidebar-single-btn wow fadeInUp" data-wow-delay="0.5s" data-wow-duration="1200m">
                <NuxtLink to="#" class="theme-btn btn-style-one d-grid"
                ><span class="btn-title text-gray-100"><span class="fas fa-file-pdf"/> download pdf file</span>
                </NuxtLink>
              </div>
            </div>
            <!--End Services Details Sidebar Single-->
          </div>
        </div>
        <!--End Services Details Sidebar-->
      </div>
    </div>
  </section>
  <!--End Services Details-->
</template>
<script lang="ts" setup>
import {ref} from 'vue'
import {servicesData} from '~/constants/data';
import {slugify} from "~/helpers";

const route = useRoute()
const serviceBySlug = computed(() => servicesData.find((service) => service.slug === route.params.slug));

const isActive = ref({
  status: false,
  key: 1,
})

const handleClick = (key) => {
  if (isActive.value.key === key) {
    isActive.value.status = false
  } else {
    isActive.value.status = true
    isActive.value.key = key
  }
};
</script>