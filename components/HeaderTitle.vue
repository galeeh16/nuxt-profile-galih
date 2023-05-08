<template>
  <h1
    class="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-orange-500 via-yellow-400 to-pink-500 text-[24px] lg:text-[38px]">
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

<style scoped>
h1.title::after {
  content: '';
  position: absolute;
  display: block;
  width: 50px;
  height: 3px;
  background: #ed791b;
  bottom: -8px;
  left: 0;
}
</style>