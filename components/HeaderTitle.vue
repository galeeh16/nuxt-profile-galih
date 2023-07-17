<template>
  <h1 class="font-semibold text-primary text-[24px] lg:text-[38px] w-full">
    {{ title }}</h1>
</template>

<script setup>
const props = defineProps({
  title: {
    required: true,
    type: String
  }
})
</script>