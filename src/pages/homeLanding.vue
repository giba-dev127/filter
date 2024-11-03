<template>
  <page-wrapper>

    <page-section v-for="(item, index) in landingItems" :key="index">
      <template #l>
        <div class="flex flex-col items-start gap-2">
          <text-title :text="item.title" class="max-w-[784px]" />
          <text-text v-if="item.text" :text="item.text" class="w-full max-w-[343px] xs:max-w-[366px]" />
          <download-buttons v-if="item.isDownloadButtons" :downloadble="index === landingItems.length - 1" />
        </div>
      </template>

      <template #r>
        <img :src="item.img" class="w-full h-full" :class="item.isPhotoCover ? 'object-cover' : 'object-contain'">
      </template>
    </page-section>

    <section class="w-full h-screen min-h-screen flex flex-col justify-between relative z-50 snap-start bg-[#373737]">
      <filter-text-icon :fill-black="false" class="w-full p-4 xs:p-5" />
      <footer class="w-full bg-[#373737] flex flex-row text-txt-100 items-end justify-between px-5 pb-5">
        <div class="flex flex-col items-start gap-1 pl-[4px]">
          <p @click="$router.push({name: item.path})" class="hover:underline cursor-pointer" v-for="(item, index) in footerMenu" :key="index">
            {{ item.name }}
          </p>
        </div>
        <div class="flex items-center gap-1">
          <p class="hover:underline cursor-pointer">Instagram</p>
        </div>
       </footer>
    </section>

  </page-wrapper>
  <popup-component v-if="showCookies" @close="showCookies = false" class="z-50" />
</template>

<script setup>
import filterTextIcon from "../components/icons/filterTextIcon.vue";
import pageWrapper from "../components/pageWrapper.vue";
import textTitle from "../components/ui/textTitle.vue";
import textText from "../components/ui/textText.vue";
import downloadButtons from "../components/ui/downloadButtons.vue";
import pageSection from "../components/ui/pageSection.vue";
import popupComponent from "../components/ui/popup.vue";
import { footerMenu } from "../libs/constants";
import { ref, shallowRef } from "vue";
import { useStorage } from "@vueuse/core";

const landingItems = shallowRef([
  {isPhotoCover: true, title: 'Monetize your taste', text: 'Explore new ones and subscribe to your favorite influencers, follow their selection and learn more about their taste', isDownloadButtons: true, img: '/filter/img/man.png'},
  {isPhotoCover: false, title: 'Get access to the taste of the influencer', text: 'Explore new ones and subscribe to your favorite influencers, follow their selection and learn more about their taste', isDownloadButtons: false, img: '/filter/img/influencer.png'},
  {isPhotoCover: false, title: 'Look for inspiration in the moodboards of your influencers.', text: 'Explore new ones and subscribe to your favorite influencers, follow their selection and learn more about their taste', isDownloadButtons: false, img: '/filter/img/albums.png'},
  {isPhotoCover: false, title: 'Get access to the taste of the influencer', isDownloadButtons: false, img: '/filter/img/socials.png'},
  {isPhotoCover: false, title: 'Available on android and iOS', text: 'Find inspiration, anywhere it strikes', isDownloadButtons: true, img: '/filter/img/balance.png'},
])

const showCookies = useStorage("showCookies", true)
</script>

<style></style>
