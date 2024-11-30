<template>
  <div>
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
                <NuxtLink :to="`/services/${slugify(service.title)}`">
                  <NuxtImg format="webp" placeholder :src="service.image" :alt="service.title" />
                </NuxtLink>
              </figure>
              <div class="content">
                <!-- <div class="bg-app-primary rounded-md flex items-center justify-center overflow-hidden w-16 h-16 absolute right-10 -top-8 z-12">
                <Icon :name="service.icon" :icon="service.icon" class="w-80% h-80% text-white" />
              </div> -->
                <!-- <Icon :name="service.icon" /> -->
               <!-- <i :class="`icon ${service.icon}`"/> -->
                <h4 class="title h-24">
                  <NuxtLink :to="`/services/${slugify(service.title)}`">{{ service.title }}</NuxtLink>
                </h4>
                <div class="text">{{ service.paragraph }}</div>
                <NuxtLink :to="`/services/${slugify(service.title)}`" class="read-more">
                  <span class="btn-title">Read More <i class="fas fa-arrow-right"/></span>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </MotionGroup>
  </div>
</template>

<script lang="ts" setup>
import { servicesData } from '~/constants/data'
import {slugify} from "~/helpers";

</script>