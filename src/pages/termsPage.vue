<template>
  <pageWrapper>
   <page-section :is-snap="false" :is-popolam="false">
      <template #l>
         <div class="w-full mt-10 md:mt-0 md:max-w-[660px] flex flex-col items-start gap-5">
            <textTitle text="Terms & Conditions" />
            <textText text="Please read these Terms of Service (the “Terms”) and our Privacy Policy (“Privacy Policy”) carefully because they govern your use of the website located at cosmos.so (the “Site”) and services accessible via the Site and corresponding mobile application (“App”) offered by “Cosmos”). To make these Terms easier to read, the Site, our services and App are collectively called the “Services.”" />
         </div>
      </template>
      <template #r>
         <div class="flex flex-col gap-2 px-2 self-start md:mt-4">
            <h4 class="font-bold">1. Agreement to Terms.</h4>
            <p>By using our Services, you agree to be bound by these Terms. If you don’t agree to be bound by these Terms, do not use the Services.</p>
            <h4 class="font-bold">2. Privacy Policy.</h4>
            <p>Please review our <router-link :to="{name: 'privacy-policy-page'}" class="font-semibold underline">Privacy Policy</router-link>, which also governs your use of the Services, for information on how we collect, use, and share your information.</p>
            <h4 class="font-bold">3. Changes to these Terms or the Services.</h4>
            <p>We may update the Terms from time to time in our sole discretion. If we do, we’ll let you know by posting the updated Terms on the Site, to the App and/or may also send other communications. It’s important that you review the Terms whenever we update them, or you use the Services. If you continue to use the Services after we have posted updated Terms, it means that you accept and agree to the changes. If you don’t agree to be bound by the changes, you may not use the Services anymore. Because our Services are evolving over time, we may change or discontinue all or any part of the Services, at any time and without notice, at our sole discretion.</p>
         </div>
      </template>
   </page-section>
  </pageWrapper>
</template>

<script setup>
import pageWrapper from '../components/pageWrapper.vue';
import PageSection from '../components/ui/pageSection.vue';
import textTitle from '../components/ui/textTitle.vue';
import textText from '../components/ui/textText.vue';
</script>

<style>

</style>