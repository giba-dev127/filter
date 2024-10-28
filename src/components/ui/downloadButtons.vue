<template>
  <div class="flex items-center gap-2">
   <button class="p-1 border border-black bg-transparent rounded-xl flex items-center gap-1 hover:bg-slate-200 transition duration-300 ease-in-out">
      <apple-icon />
      <p>iOS</p>
   </button>
   <button class="p-1 border border-black bg-transparent rounded-xl flex items-center gap-1 hover:bg-slate-200 transition duration-300 ease-in-out">
      <android-icon />
      <p>Android</p>
   </button>
  </div>
</template>

<script setup>
import androidIcon from "../icons/androidIcon.vue";
import appleIcon from "../icons/appleIcon.vue";
</script>

<style>

</style>