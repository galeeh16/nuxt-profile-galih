<template>
  <Transition name="sidebar">
    <header id="header"
      class="h-[100-vh] fixed w-[300px] top-0 bottom-0 bg-[#040b14] duration-300 ease-in-out text-white p-4 lg:p-6 z-[5]"
      v-show="isShowingSidebar">
      <div class="flex justify-center mt-4 lg:mt-6">
        <img src="/profile-img.webp" class="w-[120px] h-[120px] rounded-full border-[7px] border-gray-700" />
      </div>

      <div class="mt-4">
        <p class="text-gray-200 text-center font-semibold text-[22px]">Galih Anggoro Jati</p>
      </div>

      <div class="mt-14">
        <ul>
          <li class="mb-8 font-normal" v-for="link in links" :key="link.id">
            <nuxt-link :to="link.to" class="inline-flex items-center gap-2 text-gray-400  text-lg">
              <span :style="link.to == route.path ? linkOverrideStyle : linkBaseStyle" v-html="link.svg"></span>
              <span :class="link.to == route.path ? 'text-orange-500' : 'text-gray-400'">{{ $t(link.name) }}</span>
            </nuxt-link>
          </li>
        </ul>
      </div>

      <div class="fixed bottom-5 left-5 text-gray-400 text-[14px]">
        &copy; Copyright Galih Anggoro Jati
      </div>
    </header>
  </Transition>

  <div class="lg:ml-[300px] ml-0">

    <slot />
  </div>

  <button v-show="isShowingButtonSidebar" @click="isShowingSidebar = !isShowingSidebar"
    class="block rounded-full shadow-lg bg-orange-100 p-2 text-orange-500 transition hover:text-orange-600/75 fixed right-6 top-6">
    <span class="sr-only">Toggle menu</span>

    <svg v-if="isShowingSidebar" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
    <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
      stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  </button>

  <scroll-to-top />
</template>


<script setup>
const route = useRoute();

const isShowingSidebar = ref(true);
const isShowingButtonSidebar = ref(false)

const width = ref()
const height = ref()

onMounted(() => {
  width.value = document.documentElement.clientWidth;
  height.value = document.documentElement.clientHeight;

  window.addEventListener('resize', getDimensions)

  // lg = 1024px
  if (width.value < 1024) {
    isShowingSidebar.value = false
    isShowingButtonSidebar.value = true
  } else {
    isShowingSidebar.value = true
    isShowingButtonSidebar.value = false
  }
})

onUnmounted(() => {
  window.removeEventListener('resize', getDimensions);
})

const getDimensions = () => {
  width.value = document.documentElement.clientWidth;
  height.value = document.documentElement.clientHeight;

  // lg = 1024px
  if (width.value < 1024) {
    isShowingSidebar.value = false
    isShowingButtonSidebar.value = true
  } else {
    isShowingSidebar.value = true
    isShowingButtonSidebar.value = false
  }
}

const links = ref([
  {
    id: 1,
    to: '/',
    name: 'home',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
              style="transform: ;msFilter:;">
              <path
                d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586 6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z">
              </path>
            </svg>`
  },
  {
    id: 2,
    to: '/about',
    name: 'about',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="transform: ;msFilter:;"><path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path></svg>`
  },
  {
    id: 3,
    to: '/portfolio',
    name: 'portfolio',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="transform: ;msFilter:;"><path d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM4 19V5h7v14H4zm9 0V5h7l.001 14H13z"></path><path d="M15 7h3v2h-3zm0 4h3v2h-3z"></path></svg>`
  }
])

// default warna svg
const linkBaseStyle = ref({
  fill: '#999'
})
// ketika link sama dengan route path, svg nya ganti warna biru muda
const linkOverrideStyle = ref({
  fill: '#ed791b'
})
</script>


<style>
.sidebar-enter-from {
  transform: translateX(-300px);
}

.sidebar-enter-active {
  transition: all .25s ease-in;
}

.sidebar-leave-active {
  transition: all .25s ease-in;
}

.sidebar-leave-to {
  transform: translateX(-300px);
}
</style>
