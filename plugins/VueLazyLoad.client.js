import VueLazyload from 'vue-lazyload'

export default defineNuxtPlugin(nuxtApp => {
  // Doing something with nuxtApp
  nuxtApp.vueApp.use(VueLazyload, {
    preLoad: 1.3,
    // error: errorimage,
    // loading: loadimage,
    attempt: 1,
    lazyComponent: true
  })

})