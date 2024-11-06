<template>
  <section
    ref="scrollElement"
    class="scroll-element w-full h-screen min-h-screen md:py-0 md:h-full flex flex-col md:flex-row items-center divide-y-2 md:divide-y-0 md:divide-x-2 divide-[#DFDFDF]"
    :class="[
      isSnap ? 'snap-start' : '',
      isWholeScrollable ? 'overflow-y-auto' : 'overflow-hidden',
      { visible: isVisible },
    ]"
  >
    <div
      :class="isPopolam ? 'h-1/3 mt-4' : 'h-full'"
      class="relative w-full md:w-1/2 px-4 flex items-center"
    >
      <slot name="l" />
    </div>
    <div
      :class="[
        isPopolam ? 'h-2/3' : 'h-full',
        isWholeScrollable ? '' : 'overflow-y-auto',
      ]"
      class="relative w-full md:w-1/2 z-40 md:h-full flex justify-center items-center"
    >
      <slot name="r" />
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onDeactivated } from "vue";
// import { useIntersectionObserver } from "@vueuse/core";

defineProps({
  isPopolam: { type: Boolean, default: true },
  isSnap: { type: Boolean, default: true },
  isWholeScrollable: { type: Boolean, default: true },
});

const scrollElement = ref(null);
const isVisible = ref(false);

// const observer = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         isVisible.value = true;
//       } else {
//         isVisible.value = false;
//       }
//     });
//   },
//   { threshold: 0.8 }
// );

// onMounted(() => {
//   if (scrollElement.value) {
//     observer.observe(scrollElement.value);
//   }
// });

// onDeactivated(() => {
//   if (scrollElement.value) {
//     observer.unobserve(scrollElement.value);
//   }
// });
</script>

<style>
.scroll-element {
   opacity: 0;
   transition: opacity 0.6s ease-out;
 }
 
 .visible {
   opacity: 1;
 }
</style>
