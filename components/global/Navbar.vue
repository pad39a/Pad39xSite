<template>
  <div class="h-24 relative">
    <header
        :class="[
         'bg-white shadow-lg h-24 flex items-center justify-between px-4 lg:px-6 xl:px-8 fixed top-0 left-0 right-0 z-50 transition-transform duration-300',
         {
           '-translate-y-full': isNavbarHidden,
           'translate-y-0': !isNavbarHidden,
         }
       ]"
    >
      <!-- Logo -->
      <NuxtLink to="/" class="flex-shrink-0 flex items-center">
        <Logo class="h-15" alt="logo" />
      </NuxtLink>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex">
        <ul class="flex items-center ml-4 xl:ml-8 space-x-4">
          <li
              v-for="link in navLinks"
              :key="link.name"
              :class="['p-3 inline-block xl:p-6', { active: link.active }]"
          >
            <NuxtLink :to="link.url" class="relative  hover:text-current">
              <span>{{ link.name }}</span>
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <!-- Social Links & Actions -->
      <div class="hidden xl:flex items-center space-x-4">
        <!-- Social Icons -->
        <nav>
          <ul class="flex items-center space-x-2">
            <li v-for="social in socialLinks" :key="social.name" class="p-1">
              <a
                  :href="social.url"
                  class="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5"
                  :aria-label="social.name"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                <svg
                    :class="social.iconClass"
                    aria-hidden="true"
                    focusable="false"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                >
                  <path :d="social.svgPath" fill="currentColor"/>
                </svg>
              </a>
            </li>
          </ul>
        </nav>

        <!-- Search & Contact Button -->
        <div class="flex items-center space-x-4">
          <!-- <a href="#" class="mr-4 lg:mr-6 xl:mr-8" aria-label="Search">
            <svg
              class="h-6 xl:h-8"
              aria-hidden="true"
              focusable="false"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"
              />
            </svg>
          </a> -->
          <NuxtLink to="/contact">
            <button
                class="theme-btn btn-style-one"
            >
              Contact Us
            </button>
          </NuxtLink>
        </div>
      </div>

      <!-- Mobile Menu Button -->
      <button
          class="md:hidden flex items-center focus:outline-none mobile-menu-toggle"
          aria-label="Toggle Menu"
          :aria-expanded="isMobileMenuOpen.toString()"
          @click="toggleMobileMenu"
      >
        <svg
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
          <path
              v-if="!isMobileMenuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
          />
          <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <!-- Mobile Navigation -->
      <transition name="slide-left">
        <nav
            v-if="isMobileMenuOpen"
            ref="mobileMenu"
            class="absolute top-24 left-0 right-0 bg-white shadow-lg md:hidden"
        >
          <ul class="flex flex-col items-center space-y-4 py-4">
            <li
                v-for="link in navLinks"
                :key="link.name"
                :class="['p-3', { active: link.active }]"
            >
              <NuxtLink :to="link.url" class="relative">{{ link.name }}</NuxtLink>
            </li>
          </ul>
        </nav>
      </transition>
    </header>
  </div>
  </template>
  
  <script setup lang="ts">
  import { onClickOutside } from '@vueuse/core'

  // Interface Definitions
  interface NavLink {
    name: string;
    url: string;
    active?: boolean;
  }
  
  interface SocialLink {
    name: string;
    url: string;
    iconClass: string;
    svgPath: string;
  }

  const route = useRoute()
  const mobileMenu = ref(null)
  
  // Navigation Links
  const links: NavLink[] = [
    { name: 'Home', url: '/', },
    // { name: 'Services', url: '/services' },
    { name: 'About', url: '/about-us' },
    // { name: 'Projects', url: '#' },
    // { name: 'Skills', url: '#' },
    { name: 'Contact', url: '/contact' },
  ];
  const navLinks = computed(() => links.map((link) => ({ ...link, active: link.url === route.path })));
  // Social Links
  const socialLinks: SocialLink[] = [
    // {
    //   name: 'Twitter',
    //   url: 'https://twitter.com',
    //   iconClass: 'h-4 w-4',
    //   svgPath:
    //     'M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z',
    // },
    // {
    //   name: 'Facebook',
    //   url: 'https://facebook.com',
    //   iconClass: 'h-4 w-4',
    //   svgPath:
    //     'M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z',
    // },
    // {
    //   name: 'LinkedIn',
    //   url: 'https://www.linkedin.com/company/33036590',
    //   iconClass: 'h-4 w-4',
    //   svgPath:
    //     'M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z',
    // },
    // {
    //   name: 'Instagram',
    //   url: 'https://instagram.com',
    //   iconClass: 'h-4 w-4',
    //   svgPath:
    //     'M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z',
    // },
  ];
  
  // Reactive States
  const isMobileMenuOpen = ref(false);
  const isNavbarHidden = ref(false);
  
  // Function to Toggle Mobile Menu
  const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
  };
  
  // Scroll Handling
  let lastScrollY = 0;
  
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
  
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      // Scrolling down
      isNavbarHidden.value = true;
    } else {
      // Scrolling up
      isNavbarHidden.value = false;
    }
  
    lastScrollY = currentScrollY;
  };
  
  onMounted(() => {
    // Initialize lastScrollY
    lastScrollY = window.scrollY;
  
    window.addEventListener('scroll', handleScroll);
  });
  
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });

  onClickOutside(mobileMenu, (e) => {
    // if element is not .mobile-menu-toggle and not .mobile-menu-toggle children
    if (!e.target.closest('.mobile-menu-toggle')) {
      isMobileMenuOpen.value = false;
    }
  });

  watch(() => isMobileMenuOpen, (isOpen) => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });
  watch(() => route.path, () => {
    isMobileMenuOpen.value = false;
  });
  </script>
  
  <style scoped>
  /* Navigation Link Styles */
  li.active span::before {
    background-color: #f95b26;
  }
  
  li:not(.active):hover span::before {
    background-color: #ccc;
  }
  
  li span {
    position: relative;
    z-index: 0;
  }
  
  li span::before {
    content: '';
    position: absolute;
    z-index: -1;
    bottom: 2px;
    left: -4px;
    right: -4px;
    display: block;
    height: 6px;
  }
  
  /* Transition for Mobile Navigation Sliding */
  .slide-enter-active,
  .slide-leave-active {
    transition: transform 0.3s ease;
  }
  .slide-enter-from {
    transform: translateY(-100%);
  }
  .slide-enter-to {
    transform: translateY(0);
  }
  .slide-leave-from {
    transform: translateY(0);
  }
  .slide-leave-to {
    transform: translateY(-100%);
  }


  .slide-left-enter-active,
.slide-left-leave-active {
  /* transition: opacity transform 0.32s ease; */
  @apply duration-320 ease;
}

.slide-left-enter-from,
.slide-left-leave-to {
  opacity: 0;
  transform: translateY(5%);
}
  </style>
  