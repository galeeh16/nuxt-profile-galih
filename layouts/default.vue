<template>
  <Transition name="sidebar">
    <header id="header"
      class="h-[100-vh] fixed w-[300px] top-0 bottom-0 bg-zinc-950 duration-300 ease-in-out text-white p-4 lg:p-6 z-[5] overflow-hidden"
      v-show="isShowingSidebar">
      <div class="flex justify-center mt-4 lg:mt-6 relative">
        <img src="/profile-galih.webp" alt="Galih" loading="eager" class="w-[120px] h-[120px] rounded-full" />

        <div class="bg-gradient w-44 h-52 absolute z-[-1] top-0 left-0 inset-0">

        </div>
      </div>

      <div class="mt-4 text-center">
        <nuxt-link to="/" class="text-gray-200 font-semibold text-[22px]">Galih Anggoro Jati</nuxt-link>
      </div>

      <div class="mt-14">
        <ul>
          <li class="mb-8 font-normal" v-for="link in links" :key="link.id">
            <nuxt-link :to="link.to" class="inline-flex items-center gap-2 text-gray-400 group" @click="dismissSidebar">
              <span class="group-hover:fill-orange-500" :style="link.to == route.path ? linkOverrideStyle : linkBaseStyle"
                v-html="link.svg"></span>
              <span class="group-hover:text-orange-500"
                :class="link.to == route.path ? 'text-orange-500' : 'text-gray-400'">{{ $t(link.name) }}</span>
            </nuxt-link>
          </li>
        </ul>
      </div>

      <div class="fixed bottom-5 left-5 text-gray-400 text-[14px] ">
        &copy; Copyright Galih Anggoro Jati
      </div>
    </header>
  </Transition>

  <div class="lg:ml-[300px] ml-0">

    <slot />
  </div>

  <button v-show="isShowingButtonSidebar" @click="isShowingSidebar = !isShowingSidebar" id="btn-hamburger-menu"
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

const dismissSidebar = () => {
  const currentWidth = window.innerWidth
  if (currentWidth < 1024) {
    let b = document.getElementById('btn-hamburger-menu')
    b.click()
  }
}

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
  },
  {
    id: 4,
    to: '/work-experiences',
    name: 'work_experiences',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="transform: ;msFilter:;"><path d="M4.035 15.479A3.976 3.976 0 0 0 4 16c0 2.378 2.138 4.284 4.521 3.964C9.214 21.198 10.534 22 12 22s2.786-.802 3.479-2.036C17.857 20.284 20 18.378 20 16c0-.173-.012-.347-.035-.521C21.198 14.786 22 13.465 22 12s-.802-2.786-2.035-3.479C19.988 8.347 20 8.173 20 8c0-2.378-2.143-4.288-4.521-3.964C14.786 2.802 13.466 2 12 2s-2.786.802-3.479 2.036C6.138 3.712 4 5.622 4 8c0 .173.012.347.035.521C2.802 9.214 2 10.535 2 12s.802 2.786 2.035 3.479zm1.442-5.403 1.102-.293-.434-1.053A1.932 1.932 0 0 1 6 8c0-1.103.897-2 2-2 .247 0 .499.05.73.145l1.054.434.293-1.102a1.99 1.99 0 0 1 3.846 0l.293 1.102 1.054-.434C15.501 6.05 15.753 6 16 6c1.103 0 2 .897 2 2 0 .247-.05.5-.145.73l-.434 1.053 1.102.293a1.993 1.993 0 0 1 0 3.848l-1.102.293.434 1.053c.095.23.145.483.145.73 0 1.103-.897 2-2 2-.247 0-.499-.05-.73-.145l-1.054-.434-.293 1.102a1.99 1.99 0 0 1-3.846 0l-.293-1.102-1.054.434A1.935 1.935 0 0 1 8 18c-1.103 0-2-.897-2-2 0-.247.05-.5.145-.73l.434-1.053-1.102-.293a1.993 1.993 0 0 1 0-3.848z"></path><path d="m15.742 10.71-1.408-1.42-3.331 3.299-1.296-1.296-1.414 1.414 2.704 2.704z"></path></svg>`
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

.bg-gradient {
  background-image: linear-gradient(45deg, #82fdff, #fb78ff);
  filter: blur(150px);
}
</style>
