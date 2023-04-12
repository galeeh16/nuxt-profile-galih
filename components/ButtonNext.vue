<template>
  <nuxt-link :to="props.to" class="group relative inline-block focus:outline-none active:outline-none">
    <span
      class="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-orange-500 transition-transform group-hover:translate-y-0 group-hover:translate-x-0 rounded-md"></span>
    <span
      class="relative inline-flex items-center gap-2 border-2 border-current px-8 py-3 text-sm font-semibold tracking-widest text-gray-900 group-active:text-opacity-75 rounded-md">
      {{ $t(name) }}
      <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </span>
  </nuxt-link>

  <!-- <a href="#_" class="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
    <span
      class="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
    <span class="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
      <span class="relative text-white">Button Text</span>
    </span>
  </a> -->
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