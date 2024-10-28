<template>
  <page-wrapper>

    <page-section v-for="(item, index) in landingItems" :key="index">
      <template #l>
        <div class="flex flex-col items-start gap-2">
          <text-title :text="item.title" />
          <text-text v-if="item.text" :text="item.text" class="w-2/3" />
          <download-buttons v-if="item.isDownloadButtons" />
        </div>
      </template>

      <template #r>
        <img :src="item.img" class="w-full h-full" :class="item.isPhotoCover ? 'object-cover' : 'object-contain'">
      </template>
    </page-section>

    <section class="w-full h-screen min-h-screen flex flex-col justify-between relative z-40 snap-start bg-[#373737]">
      <filter-text-icon :fill-black="false" class="w-full" />
      <footer class="w-full bg-[#373737] flex flex-row text-txt-100 items-end justify-between px-2">
        <div class="flex flex-col items-start gap-1 pl-[4px]">
          <p @click="$router.push(item.path)" class="hover:underline cursor-pointer" v-for="(item, index) in footerMenu" :key="index">
            {{ item.name }}
          </p>
        </div>
        <div class="flex items-center gap-1">
          <p class="hover:underline cursor-pointer">Instagram</p>
        </div>
       </footer>
    </section>

  </page-wrapper>
</template>

<script setup>
import filterTextIcon from "../components/icons/filterTextIcon.vue";
import pageWrapper from "../components/pageWrapper.vue";
import textTitle from "../components/ui/textTitle.vue";
import textText from "../components/ui/textText.vue";
import downloadButtons from "../components/ui/downloadButtons.vue";
import pageSection from "../components/ui/pageSection.vue";
import { footerMenu } from "../libs/constants";
import { shallowRef } from "vue";

const landingItems = shallowRef([
  {isPhotoCover: true, title: 'Monetize your taste', text: 'Explore new ones and subscribe to your favorite influencers, follow their selection and learn more about their taste', isDownloadButtons: true, img: 'filter/img/man.png'},
  {isPhotoCover: false, title: 'Explore new ones and subscribe to your favorite influencers, follow their selection and learn more about their taste', text: '', isDownloadButtons: false, img: 'filter//img/face_phone.png'},
  {isPhotoCover: false, title: 'Look for inspiration in the moodboards of your influencers.', text: 'Explore new ones and subscribe to your favorite influencers, follow their selection and learn more about their taste', isDownloadButtons: false, img: 'filter/img/empty.png'},
  {isPhotoCover: false, title: 'Available on android and iOS', text: 'Find inspiration, anywhere it strikes', isDownloadButtons: true, img: 'filter/img/phone.png'},
])
</script>

<style></style>
