<template>
  <h1 class="text-[24px] lg:text-[34px] text-orange-500 tracking-[4px] relative title font-medium">{{ title }}</h1>
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
  bottom: -10px;
  left: 0;
}
</style>