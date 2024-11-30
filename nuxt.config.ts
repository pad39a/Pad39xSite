import { resolve } from "path"
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    alias: {
        "@": resolve(__dirname, "/"),
    },
    app: {
        head: {
            meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" },
                { hid: 'og:title', property: 'og:title', content: 'PAD39X Aerospace Technologies Center' },
                { hid: 'og:description', property: 'og:description', content: `PAD39X is inspired by the historic Apollo moon launches from PAD39X at Cape Canaveral and the
                        pioneering work of SpaceX to build reusable launch vehicles.` },
                { hid: 'og:image', property: 'og:image', content: '/images/pad39xlogo.png' },
            ],
            link: [{ rel: 'icon', type: 'image/png', href: '/images/pad39favicon.png' }],
            title: "PAD39X Aerospace Technologies Center",
            description: "PAD39X is inspired by the historic Apollo moon launches from PAD39X at Cape Canaveral and the pioneering work of SpaceX to build reusable launch vehicles.",
            script: []
        }
    },
    css: [
        '@unocss/reset/tailwind.css',
        'swiper/css',
        'swiper/css/navigation',
        'swiper/css/pagination',
        // 'swiper/css/free-mode',
        // 'swiper/css/thumbs',
        "public/css/bootstrap.min.css",
        "public/css/style.css",
        "public/css/responsive.css",
    ],
    modules: [
        '@vueuse/nuxt',
        // '@primevue/nuxt-module',
        '@unocss/nuxt',
        // '@pinia/nuxt',
        // '@nuxtjs/color-mode',
        '@vite-pwa/nuxt',
        '@nuxt/eslint',
        '@nuxt/icon',
        '@vueuse/motion/nuxt',
        '@nuxt/image',
        '@nuxt/fonts',
        // '@nuxtjs/seo',
        [
            "@nuxtjs/google-fonts",
            {
                families: {
                    Chivo: {
                        wght: [400, 700, 900]
                    },
                    "Noto+Sans": {
                        wght: [400, 500, 600, 700, 800]
                    },
                    download: true,
                    inject: true
                }
            }
        ],
    ],

    site: {
        url: 'https://pad39-v2.vercel.app',
        name: 'PAD39X',
        // ...etc
      },

    //   routeRules: {
    //     // Homepage pre-rendered at build time
    //     '/': { prerender: true },
    //     '/about': { swr: 3600 },
    //     '/services': { swr: 3600 },
    //     '/services/**': { swr: 3600 },

    //   }
    // debug: true,
    nitro: {
        prerender: {
            crawlLinks: true,
            failOnError: false,
          exclude: [
            '/index',               // ignore the index page if needed
            '/page-services-details',
            '/page-service',
            '/tel:+321-473-4622',    // ignore external link
            // Add any other routes you want to exclude
          ]
        }
      }
      
})