<template>
  <footer class="w-full md:w-1/2 md:fixed bottom-0 left-0 bg-[#F0F0F0] z-30 flex flex-row items-end justify-between p-5 -mx-2">
   <div class="flex flex-col items-start gap-1 text-txt-100 pl-[4px]">
      <p @click="$router.push({name: item.path})" class="hover:underline cursor-pointer" :class="$route.path === item.path ? 'font-bold' : ''" v-for="(item, index) in footerMenu" :key="index">
         {{ item.name }}
      </p>
   </div>
   <div class="flex items-center gap-1" :class="$route.name === 'home-landing' ? '' : 'opacity-0'">
      <p>Scroll to explore</p>
      <arrow-down-full />
   </div>
  </footer>
</template>

<script setup>
import { shallowRef } from "vue";
import arrowDownFull from "./icons/arrows/arrowDownFull.vue";
import { footerMenu } from "../libs/constants";


</script>

<style>

</style>