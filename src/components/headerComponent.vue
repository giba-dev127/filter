<script setup>
import filterTextIcon from "./icons/filterTextIcon.vue"
import logoIcon from "./icons/logoIcon.vue"
import arrowDown from "./icons/arrows/arrowDown.vue"
</script>

<template>
   <header class="w-full md:w-1/2 fixed top-0 left-0 bg-[#F0F0F0] z-50 md:z-30 h-16 flex flex-row items-center justify-between px-4">
      <div class="flex items-center gap-[10px] cursor-pointer" @click="$router.push('/')">
         <logo-icon />
         <filter-text-icon class="w-[76px] h-7" fill-black />
      </div>
      <div class="flex items-center gap-2 cursor-pointer">
         <p class="text-base">English</p>
         <arrow-down />
      </div>
   </header>  
</template>