<template>
  <Menu as="div" class="relative inline-block text-left">
    <div>
      <MenuButton
        class="inline-flex w-full justify-center items-center gap-2 py-2 font-medium text-base focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
      >
        <slot name="title" />
        <arrow-down v-if="show" />
      </MenuButton>
    </div>

    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <MenuItems
        class="absolute right-0 mt-1 p-1 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
      >
        <MenuItem v-for="(item, index) in buttons" :key="index">
          <button
            :class="$route?.name === item?.path ? 'font-bold' : ''"
            @click="routingProvider(item)"
            class="group flex w-[150px] items-center rounded-md px-4 py-2 text-sm text-start"
          >
            {{ item.name }}
          </button>
        </MenuItem>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";
import arrowDown from "../icons/arrows/arrowDown.vue";
import { useRouter } from "vue-router";

const router = useRouter();

defineProps({
  buttons: { type: Array, default: [{ name: "Русский" }] },
  show: { type: Boolean, default: true },
});
function routingProvider(item) {
  if (item.path) {
    router.push({ name: item.path });
  }
}
</script>
