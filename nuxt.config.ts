import en from './locales/en.json'
import id from './locales/id.json'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    'nuxt-simple-sitemap',
  ],
  app: {
    head: {
      title: 'Galih Anggoro Jati',
      meta: [
        {
          name: 'description',
          content: 'Profile Galih Anggoro Jati'
        },
        {
          name: 'keywords',
          content: 'Profile, Galih, Anggoro, Nuxt JS, JavaScript, Vue'
        }
      ],
      link: [
        {
          rel: 'preload',
          as: 'image',
          href: '/profile-img.webp'
        },
        {
          rel: 'preload',
          as: 'image',
          href: '/hero-bg.webp'
        }
      ]
    },
    pageTransition: {
      name: 'slide-left',
      mode: 'out-in'
    },

  },
  i18n: {
    // add `vueI18n` option to `@nuxtjs/i18n` module options
    vueI18n: {
      legacy: false,
      locale: 'en',
      messages: {
        en: en,
        id: id
      }
    }
  },
  // Recommended 
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://galih-anggoro-jati.vercel.app',
    }
  },

})
