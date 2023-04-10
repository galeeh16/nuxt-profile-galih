<template>
  <div class="p-4 md:p-10 lg:p-16">
    <HeaderTitle title="PORTFOLIO" />

    <MotifGradient />

    <p class="mt-10 font-normal leading-[30px]">This is the projects that i made so far</p>

    <!-- project section -->
    <ClientOnly>
      <div class="">
        <div class="flex gap-4 items-center mt-8 overflow-x-auto pb-3">

          <button v-for="filter in filterButton" :key="filter.id" @click="filtered(filter.id)"
            class="cursor-pointer focus:outline-none active:outline-none px-3 py-1 rounded-xl border border-gray-300 text-[14px] hover:text-orange-500 hover:border-orange-500 ease-in-out transition duration-100 whitespace-nowrap"
            :class="search === filter.id ? 'text-orange-500 border-orange-500' : 'border-gray-300'">
            {{ filter.title }}
          </button>
        </div>

        <template v-for="(portfolio, portIdx) in portfolioFilter" :key="portfolio.id">
          <h3 class="font-medium text-[19px] mt-8 lg:mt-8 mb-4">{{ portfolio.title }}</h3>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            <div v-for="(img, indexImg) in portfolio.imgs" :key="img.id" class="cursor-pointer shadow-lg"
              title="Show image">
              <template v-if="portIdx <= 1">
                <img :src="img.src" class="object-cover w-full h-[253px] rounded-sm"
                  @click="showGroupImage(portfolio.imgs, indexImg)" />
              </template>
              <template v-else>
                <img v-lazy="img.src" class="object-cover w-full h-[253px]"
                  @click="showGroupImage(portfolio.imgs, indexImg)" />
              </template>
            </div>
          </div>

          <div class="mb-14"></div>
        </template>

        <vue-easy-lightbox :visible="visibleRef" :imgs="imgsRef" :index="indexRef" @hide="onHide"></vue-easy-lightbox>

      </div>

      <div class="flex justify-start lg:justify-end mb-5 mt-3">
        <ButtonNext to="/work-experiences" name="next" />
      </div>
    </ClientOnly>

  </div>
</template>

<script setup>
import Logee1 from '~/assets/images/portfolio/logee/logee1.webp'
import Logee2 from '~/assets/images/portfolio/logee/logee2.webp'
import Logee3 from '~/assets/images/portfolio/logee/logee3.webp'

import Merchant1 from '~/assets/images/portfolio/merchant/merchant1.webp'
import Merchant2 from '~/assets/images/portfolio/merchant/merchant2.webp'
import Merchant3 from '~/assets/images/portfolio/merchant/merchant3.webp'

import Dextop1 from '~/assets/images/portfolio/dextop/dextop1.webp'
import Dextop2 from '~/assets/images/portfolio/dextop/dextop2.webp'
import Dextop3 from '~/assets/images/portfolio/dextop/dextop3.webp'

import Youbid1 from '~/assets/images/portfolio/youbid/youbid1.webp'
import Youbid2 from '~/assets/images/portfolio/youbid/youbid2.webp'
import Youbid3 from '~/assets/images/portfolio/youbid/youbid3.webp'

import CBS1 from '~/assets/images/portfolio/cbs-web/cbs1.webp'
import CBS2 from '~/assets/images/portfolio/cbs-web/cbs2.webp'
import CBS3 from '~/assets/images/portfolio/cbs-web/cbs3.webp'

import CBSMon1 from '~/assets/images/portfolio/cbs-monitoring/cbs-monitoring1.webp'
import CBSMon2 from '~/assets/images/portfolio/cbs-monitoring/cbs-monitoring2.webp'
import CBSMon3 from '~/assets/images/portfolio/cbs-monitoring/cbs-monitoring3.webp'

const portfolios = ref([
  {
    id: 1,
    title: 'Logee',
    imgs: [
      { id: 'img-Logee-1', src: Logee1, title: 'Logee 1' },
      { id: 'img-Logee-2', src: Logee2, title: 'Logee 2' },
      { id: 'img-Logee-3', src: Logee3, title: 'Logee 3' },
    ]
  },
  {
    id: 2,
    title: 'Merchant',
    imgs: [
      { id: 'img-Merchant-1', src: Merchant1 },
      { id: 'img-Merchant-2', src: Merchant2 },
      { id: 'img-Merchant-3', src: Merchant3 },
    ]
  },
  {
    id: 3,
    title: 'Dextop',
    imgs: [
      { id: 'img-Dextop-1', src: Dextop1 },
      { id: 'img-Dextop-2', src: Dextop2 },
      { id: 'img-Dextop-3', src: Dextop3 },
    ]
  },
  {
    id: 4,
    title: 'Youb.id',
    imgs: [
      { id: 'img-Youbid-1', src: Youbid1 },
      { id: 'img-Youbid-2', src: Youbid2 },
      { id: 'img-Youbid-3', src: Youbid3 },
    ]
  },
  {
    id: 5,
    title: 'CBS Web',
    imgs: [
      { id: 'img-CBS-1', src: CBS1 },
      { id: 'img-CBS-2', src: CBS2 },
      { id: 'img-CBS-3', src: CBS3 },
    ]
  },
  {
    id: 6,
    title: 'CBS Monitoring',
    imgs: [
      { id: 'img-CBSMon-1', src: CBSMon1 },
      { id: 'img-CBSMon-2', src: CBSMon2 },
      { id: 'img-CBSMon-3', src: CBSMon3 },
    ]
  }
]);

const search = ref(999) // default All

const filterButton = ref([
  { id: 999, title: 'All' },
  { id: 1, title: 'Logee' },
  { id: 2, title: 'Merchant' },
  { id: 3, title: 'Dextop' },
  { id: 4, title: 'Youb.id' },
  { id: 5, title: 'CBS Web' },
  { id: 6, title: 'CBS Monitoring' },
])

const portfolioFilter = computed(() => {
  if (search.value === 999) {
    return portfolios.value
  }
  return portfolios.value.filter(app => {
    // return app.name.toLowerCase().includes(search.value) || app.type.toLowerCase().includes(search.value);
    return app.id === search.value;
  })
})

const filtered = (id) => {
  search.value = id
}


// Lightbox 
const visibleRef = ref(false)
const indexRef = ref(0) // default 0
const imgsRef = ref([])

const showGroupImage = (dataImages, indexImage) => {
  imgsRef.value = dataImages
  // or
  // imgsRef.value = [
  //   { title: 'test img', src: 'http://via.placeholder.com/350x150' },
  //   'http://via.placeholder.com/350x150'
  // ]
  indexRef.value = indexImage // index of imgList
  visibleRef.value = true
}
const onHide = () => {
  imgsRef.value = []
  indexRef.value = 0
  visibleRef.value = false
}
</script>
