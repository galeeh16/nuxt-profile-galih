// https://github.com/XiongAmao/vue-easy-lightbox
import VueEasyLightbox from 'vue-easy-lightbox'

export default defineNuxtPlugin(nuxtApp => {
    // Doing something with nuxtApp
    nuxtApp.vueApp.use(VueEasyLightbox)
})