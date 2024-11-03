<template>
  <div class="md:block fixed w-full bottom-1 z-60">
    <div
      class="w-full max-w-[398px] mx-auto border border-black flex bg-[#FFFFFF] rounded-lg text-[#373737] items-center gap-4 p-4"
    >
      <span class="w-full">This website uses cookies.</span>
      <div class="flex items-center gap-4">
        <button class="underline w-full" @click="$emit('close')">Accept</button>
        <button class="underline w-full" @click="$emit('close')">Reject</button>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style></style>
