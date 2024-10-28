<template>
  <div class="relative w-full h-screen flex flex-col gap-4 overflow-y-auto snap-y snap-mandatory scroll-smooth">
  <header-component />

  <slot />

  <footer-component />
  </div>
</template>

<script setup>
import headerComponent from "./headerComponent.vue";
import footerComponent from "./footerComponent.vue";
</script>

<style></style>
