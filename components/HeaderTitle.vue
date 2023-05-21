<template>
  <h1
    class="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 from-10% via-amber-400 via-30% to-pink-500 to-70% text-[24px] lg:text-[38px] w-full">
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