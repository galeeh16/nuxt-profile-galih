<template>
  <nuxt-link :to="props.to" type="button"
    class="inline-flex items-center font-semibold tracking-wide gap-2 text-white bg-primary hover:bg-primaryHover rounded-lg px-5 py-3 text-normal text-center mr-2 mb-2">
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