<template>
  <section class="services-section bg-f7">
    <div class="anim-icons">
      <span class="icon icon-wave-line"/>
    </div>

    <div class="auto-container">
      <div class="sec-title text-center">
        <span class="sub-title">WHY CHOOSE US</span>
        <h2>Our Innovative Services</h2>
      </div>
      <MotionGroup preset="slideVisibleOnceBottom" :duration="1050">
        <div class="row">
          <div
            v-for="(service, index) in servicesData"
            :key="index"
            class="service-block-home1 col-xl-3 col-sm-6 wow fadeInUp"
            :data-wow-delay="`${index * 200}ms`"
          >
            <div class="inner-box">
              <figure class="image">
                <NuxtLink :to="service.href">
                  <img :src="service.image" :alt="service.title" >
                </NuxtLink>
              </figure>
              <div class="content">
                <!-- <div class="bg-app-primary rounded-md flex items-center justify-center overflow-hidden w-16 h-16 absolute right-10 -top-8 z-12">
                <Icon :name="service.icon" :icon="service.icon" class="w-80% h-80% text-white" />
              </div> -->
                <!-- <Icon :name="service.icon" /> -->
               <!-- <i :class="`icon ${service.icon}`"/> -->
                <h4 class="title h-24">
                  <NuxtLink :to="service.href">{{ service.title }}</NuxtLink>
                </h4>
                <div class="text h-28">{{ service.paragraph }}</div>
                <!-- <NuxtLink :to="slugify(service.href)" class="read-more">
                  <span class="btn-title">Read More <i class="fas fa-arrow-right"/></span>
                </NuxtLink> -->
              </div>
            </div>
          </div>
        </div>
      </MotionGroup>
    </div>
  </section>
</template>

<script lang="ts" setup>
import {slugify} from "~/helpers";

const servicesData = ref([
  {
    image: '/images/service_prototype.jpg',
    title: 'PROTOTYPES',
    paragraph: ' We can convert your napkin concept or simplified CAD file to a 3D demo model in a matter of hours or days',
    href: '/#',
    icon: 'fe:prototype',
  },
  {
    image: '/images/service_systems.jpg',
    title: 'SYSTEMS',
    paragraph: 'From simple circuits to turnkey box builds for test or flight systems',
    href: '/#',
    icon: 'fe:gear',
  },
  {
    image: '/images/service_mems_foundry.jpg',
    title: 'MEMS FOUNDRY',
    paragraph: 'Leverage our connection to a Tier One MEMS foundry in Japan',
    href: '/#',
    icon: 'fe:layer',
  },
  {
    image: '/images/service_exo_concepts.jpg',
    title: 'EXO CONCEPTS',
    paragraph: 'Inertial sensors, magnetometers, and other sensor packages',
    href: '/#',
    icon: 'fe:globe',
  },
])
</script>
