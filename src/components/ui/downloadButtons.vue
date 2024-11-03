<template>
  <div :class="downloadble ? 'flex flex-col gap-[10px]' : 'flex items-center gap-2'">
   <button :class="downloadble ? 'rounded-lg' : 'rounded-[4px]'" class="p-1 border border-black bg-transparent max-w-max  flex items-center gap-1 hover:bg-slate-200 transition duration-300 ease-in-out">
      <apple-icon />
      <p v-if="!downloadble">iOS</p>
      <p v-else>Download iOS App</p>
   </button>
   <button :class="downloadble ? 'rounded-lg' : 'rounded-[4px]'" class="p-1 border border-black bg-transparent max-w-max flex items-center gap-1 hover:bg-slate-200 transition duration-300 ease-in-out">
      <template v-if="!downloadble">
         <android-icon />
         <p>Android</p>
      </template>
      <template v-else>
         <google-play-icon />
         <p>Download Android App</p>
      </template>
   </button>
  </div>
</template>

<script setup>
defineProps({downloadble: {type: Boolean, default: false}})
import androidIcon from "../icons/androidIcon.vue";
import appleIcon from "../icons/appleIcon.vue";
import googlePlayIcon from "../icons/googlePlayIcon.vue";
</script>

<style>

</style>