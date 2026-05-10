// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: [
    'nuxt-auth-utils',
    '@vueuse/motion/nuxt',
    '@nuxt/image',
    '@nuxtjs/color-mode',
    '@nuxt/ui',
    'nuxt-vitalizer',
    'nuxt-google-auth',
    'nuxt-notify',
  ],

  googleAuth: {
    clientId: process.env.NUXT_PUBLIC_GOOGLE_CLIENT_ID,
    autoLoadScript: true,         // load Google script automatically
    promptOneTap: true,           // show One Tap prompt
    enableServerVerify: true      // enable server-side token verification endpoint
},

  app: {
    head: {
      title: 'Ascend', // default fallback title
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
      script: [
        { src: 'https://ghostform-zeta.vercel.app/embed.js', async: true }
      ]
    }
  },
  notify: {
    position: "top-right",
    duration: 5000,
    maxToasts: 5,
    theme: "system",
    showIcon: true,
  },
  vite: {
    plugins: [
      tailwindcss()
    ],
    optimizeDeps: {
      include: [
        'vue-chrts',
        '@vue/devtools-core',
        '@vue/devtools-kit',
        'date-fns',
        'lucide-vue-next',
      ]
    }
  },
  typescript: {
    strict: false
  },
  colorMode: {
    dataValue: 'theme',
    classSuffix: '',
  },

  // @vueuse/motion/nuxt
  runtimeConfig: {
    public: {
      motion: {
        directives: {
          'pop-bottom': {
            initial: {
              scale: 0,
              opacity: 0,
              y: 100,
            },
            visible: {
              scale: 1,
              opacity: 1,
              y: 0,
            }
          }
        }
      }
    }
  }
})