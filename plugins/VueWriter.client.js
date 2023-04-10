// https://github.com/quelchx/vue-writer
import VueWriter from 'vue-writer'

export default defineNuxtPlugin(nuxtApp => {
  // Doing something with nuxtApp
  nuxtApp.vueApp.use(VueWriter)
})