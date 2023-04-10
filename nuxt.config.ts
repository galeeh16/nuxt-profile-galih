import en from './locales/en.json'
import id from './locales/id.json'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
  ],
  app: {
    head: {
      title: 'Galih Anggoro Jati'
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
})
