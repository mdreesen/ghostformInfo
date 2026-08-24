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
    'nuxt-qrcode',
  ],

  googleAuth: {
    clientId: process.env.NUXT_PUBLIC_GOOGLE_CLIENT_ID,
    autoLoadScript: true,         // load Google script automatically
    promptOneTap: true,           // show One Tap prompt
    enableServerVerify: true      // enable server-side token verification endpoint
},

  app: {
    head: {
      // Was 'Ascend' - a leftover fallback from an earlier, different
      // project. Individual pages set their own <title> via useHead().
      title: 'GhostForm — Never lose another lead to silence',
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
      // The 'embed.js' script tag that was here loaded on every page but
      // nothing in this codebase references anything it provides - the
      // actual embed (baseGhostForm) is a plain iframe, a different
      // approach entirely. Removed as unverified dead weight; add back with
      // a comment explaining what it's for if it turns out to be load-bearing.
    }
  },
  notify: {
    position: "top-right",
    duration: 5000,
    maxToasts: 5,
    theme: "system",
    showIcon: true,
  },
  qrcode: {
    options: {
      variant: 'circle',
      // OR
      // variant: {
      //   inner: 'circle',
      //   marker: 'rounded',
      //   pixel: 'rounded',
      // },
      radius: 1,
      blackColor: 'currentColor',
      whiteColor: 'transparent',
    },
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

  // @vueuse/motion/nuxt, plus the public /demo page's account config
  runtimeConfig: {
    public: {
      // The account the public /demo page submits test leads to. Defaults to
      // the values already in use; override via env so this can point at a
      // dedicated demo account without a code change.
      demoCompanyHash: process.env.NUXT_PUBLIC_DEMO_COMPANY_HASH || '$2b$15$W0Z4XHFsFAP41TiT39nACeEtnrSO6yoXvDLZWQ.fmIFKNdLa4QMqa',
      demoEmailHash: process.env.NUXT_PUBLIC_DEMO_EMAIL_HASH || '$2b$15$YFJokoSx/VCflVhQyToimecUYOoDitA0oBVHBqUmFUYq.RW0Kpo/m',
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