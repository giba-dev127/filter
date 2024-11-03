<script setup>
import filterTextIcon from "./icons/filterTextIcon.vue"
import logoIcon from "./icons/logoIcon.vue"
import arrowDown from "./icons/arrows/arrowDown.vue"
import dropdownMenu from "./ui/dropdownMenu.vue";
import { footerMenu } from "../libs/constants";

const headerMobileMenu = [{name: "English"}, ...footerMenu]
</script>

<template>
   <header class="w-full md:w-1/2 fixed top-0 left-0 bg-[#F0F0F0] z-50 md:z-30 h-16 flex flex-row items-center justify-between p-4 xs:p-5 xs:-mx-2">
      <div class="flex items-center gap-[10px] cursor-pointer" @click="$router.push({name: 'home-landing'})">
         <logo-icon />
         <filter-text-icon class="w-[76px] h-7" fill-black />
      </div>
      <div class="flex items-center gap-2 cursor-pointer">
         <dropdown-menu class="hidden xs:block">
            <template #title>
               <span>
                  English
               </span>
            </template>
         </dropdown-menu>
         <dropdown-menu class="block xs:hidden" title="≡" :buttons="headerMobileMenu" :show="false">
            <template #title>
               <span class="text-2xl py-2">
                  ≡
               </span>
            </template>
         </dropdown-menu>
      </div>
   </header>  
</template>