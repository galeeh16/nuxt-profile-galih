<template>
  <!-- <nuxt-link :to="props.to" class="group relative inline-block focus:outline-none active:outline-none">
    <span
      class="absolute inset-0  bg-orange-500 transition-transform group-hover:translate-y-0 group-hover:translate-x-0 rounded-md"></span>
    <span
      class="relative inline-flex items-center gap-2 border-2 border-current px-8 py-3 text-sm font-semibold tracking-widest text-gray-900 group-active:text-opacity-75 rounded-md">
      {{ $t(name) }}
      <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </span>
  </nuxt-link> -->
  <nuxt-link :to="props.to" type="button"
    class="inline-flex items-center font-semibold tracking-widest gap-2 text-white bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-orange-300 dark:focus:ring-orange-800 rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
    {{ $t(props.name) }}
    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  </nuxt-link>
</template>

<script setup>
const props = defineProps({
  to: {
    required: true,
    type: String
  },
  name: {
    required: true,
    type: String
  }
})
</script>