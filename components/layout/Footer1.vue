<template>
  <footer class="main-footer">
    <div class="bg-image"  style="background-image: url(./images/background/5.jpg)"/>

    <!--Widgets Section-->
    <div class="widgets-section">
      <div class="auto-container">
        <div class="row">
          <!--Footer Column-->
          <div class="footer-column col-lg-3 col-sm-6">
            <div class="footer-widget about-widget">
              <div class="logo"><NuxtLink class="flex items-center gap-2" to="/"><Logo class="h-10" /> <span class="font-bold block text-white text-2xl">PAD39X</span>
              </NuxtLink></div>
              <div class="text">Our mission is to create new and experimental space technologies based on proven commercial products.</div>
<!--              <ul class="social-icon-two">-->
<!--                <li><NuxtLink to="#"><i class="fab fa-twitter"/></NuxtLink></li>-->
<!--                <li><NuxtLink to="#"><i class="fab fa-facebook"/></NuxtLink></li>-->
<!--                <li><NuxtLink to="#"><i class="fab fa-pinterest"/></NuxtLink></li>-->
<!--                <li><NuxtLink to="#"><i class="fab fa-instagram"/></NuxtLink></li>-->
<!--              </ul>-->
            </div>
          </div>

          <!--Footer Column-->
          <div class="footer-column col-lg-3 col-sm-6">
            <div class="footer-widget">
              <h3 class="widget-title">Links</h3>
              <ul class="user-links">
                <li v-for="link in publicLinks" :key="link.name"><NuxtLink :to="link.url">{{ link.name }}</NuxtLink></li>
              </ul>
            </div>
          </div>

          <!--Footer Column-->
          <div class="footer-column col-lg-3 col-sm-6">
            <div class="footer-widget contact-widget">
              <h3 class="widget-title">Contact</h3>
              <div class="widget-content">
                <p class="text-white-light">{{CONTACT_INFO.city}}, {{CONTACT_INFO.stateShort}}</p>
                <ul class="user-links">
                  <li><i class="far fa-envelope"/> <NuxtLink to="mailto:needhelp@yourdomain.com">
                    {{CONTACT_INFO.email}}
                  </NuxtLink><br></li>
                  <li><i class="fas fa-square-phone"/> <NuxtLink to="tel:321-473-4622">321-473-4622</NuxtLink><br></li>
                </ul>
              </div>
            </div>
          </div>

          <!--Footer Column-->
          <!-- <div class="footer-column col-lg-3 col-sm-6">
            <div class="footer-widget gallery-widget">
              <h3 class="widget-title">Gallery</h3>
              <div class="widget-content">
                <div class="outer clearfix">
                  <figure class="image">
                    <NuxtLink to="#"><img src="/images/resource/project-thumb-1.jpg" alt=""></NuxtLink>
                  </figure>
                  <figure class="image">
                    <NuxtLink to="#"><img src="/images/resource/project-thumb-2.jpg" alt=""></NuxtLink>
                  </figure>
                  <figure class="image">
                    <NuxtLink to="#"><img src="/images/resource/project-thumb-3.jpg" alt=""></NuxtLink>
                  </figure>
                  <figure class="image">
                    <NuxtLink to="#"><img src="/images/resource/project-thumb-4.jpg" alt=""></NuxtLink>
                  </figure>
                  <figure class="image">
                    <NuxtLink to="#"><img src="/images/resource/project-thumb-5.jpg" alt=""></NuxtLink>
                  </figure>
                  <figure class="image">
                    <NuxtLink to="#"><img src="/images/resource/project-thumb-6.jpg" alt=""></NuxtLink>
                  </figure>
                </div>
              </div>
            </div>
          </div> -->

        </div>
      </div>
    </div>

    <!--Footer Bottom-->
    <div class="footer-bottom">
      <div class="auto-container">
        <div class="inner-container d-flex justify-content-between">
          <div class="copyright-text">
            <p class="mb-0">&copy; Copyright {{ new Date().getFullYear() }} reserved by <NuxtLink to="/">PAD39X</NuxtLink></p>
          </div>
          <!-- <ul class="social-icon-two">
            <li>
              <NuxtLink to="#"><i class="fab fa-facebook"/></NuxtLink>
            </li>
            <li>
              <NuxtLink to="#"><i class="fab fa-twitter"/></NuxtLink>
            </li>
            <li>
              <NuxtLink to="#"><i class="fab fa-pinterest"/></NuxtLink>
            </li>
            <li>
              <NuxtLink to="#"><i class="fab fa-instagram"/></NuxtLink>
            </li>
          </ul> -->
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import { publicLinks } from '~/constants/navigation';
import {CONTACT_INFO} from "~/constants";

</script>