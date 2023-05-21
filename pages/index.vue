<template>
  <div class="hero w-[100vw] h-[100vh] lg:px-[150px] lg:py-[150px] md:px-[50px] md:py-[50px] px-[20px] pt-[100px]">
    <ClientOnly>
      <div class="max-w-[500px] max-h-[500px]">
        <h1 class="font-semibold lg:text-[40px] text-[27px] text-gray-900 mb-4">
          {{ $t('welcome') }}
        </h1>
        <h2 class="font-semibold text-[20px] lg:text-[32px] text-gray-900 mt-2 mb-8">
          <div class="flex items-center gap-2">I am
            <VueWriter
              class="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-yellow-orange to-rose-500"
              :array="['Programmer', 'Photography Enthusiast', 'Freelance Programmer']" caret="underscore" :typeSpeed="90"
              :eraseSpeed="50" />
          </div>
        </h2>
      </div>
    </ClientOnly>

    <ButtonNext to="/about" name="start" />
  </div>
</template>

<script setup>
const { setLocale } = useI18n()

setLocale('en')
</script>

<style scoped>
.hero {
  background-image: url('/hero-bg.webp');
  background-position: bottom;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  background-size: cover;
}
</style>