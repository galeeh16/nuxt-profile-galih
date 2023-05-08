// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // ssr: false,
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    'nuxt-simple-sitemap',
    '@nuxtjs/robots',
  ],
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      // charset: 'utf-8',
      title: 'Galih Anggoro Jati',
      meta: [
        // {
        //   name: 'viewport',
        //   content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
        // },
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
    defaultLocale: 'en',
    vueI18n: './i18n.config.js' // if you are using custom path, default 
  },
  // Recommended 
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://galih-anggoro-jati.vercel.app',
    }
  },
})
