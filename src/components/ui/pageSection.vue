<template>
  <section
    ref="scrollElement"
    class="scroll-element w-full h-screen min-h-screen md:py-0 md:h-full flex flex-col md:flex-row items-center"
    :class="[
      isSnap ? 'snap-start' : '',
      isWholeScrollable ? 'overflow-y-auto' : 'overflow-hidden',
      { visible: isVisible },
    ]"
  >
    <div
      :class="isPopolam ? 'h-1/2' : 'h-full'"
      class="w-full md:w-1/2 px-2 md:px-4 md:h-full md:pt-16 md:pb-20 flex items-center"
    >
      <slot name="l" />
    </div>
    <div
      :class="[
        isPopolam ? 'h-1/2' : 'h-full',
        isWholeScrollable ? '' : 'overflow-y-auto',
      ]"
      class="w-full md:w-1/2 z-40 md:h-full flex justify-center items-center"
    >
      <slot name="r" />
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onDeactivated } from "vue";

defineProps({
  isPopolam: { type: Boolean, default: true },
  isSnap: { type: Boolean, default: true },
  isWholeScrollable: { type: Boolean, default: true },
});

const scrollElement = ref(null);
const isVisible = ref(false);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        isVisible.value = true;
      } else {
        isVisible.value = false;
      }
    });
  },
  { threshold: 0.3 }
);

onMounted(() => {
  if (scrollElement.value) {
    observer.observe(scrollElement.value);
  }
});

onDeactivated(() => {
  if (scrollElement.value) {
    observer.unobserve(scrollElement.value);
  }
});
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
