<template>
  <page-wrapper>
    <page-section v-if="!isForm" :is-popolam="false" :is-snap="false">
      <template #l>
        <div class="flex flex-col items-start gap-5 w-full mt-20 md:mt-0">
          <text-title text="How can we help?" class="text-xl md:3xl" />
          <text-text
            class="w-full text-sm md:text-base md:max-w-[560px]"
            text="This may mean our list of supported countries and regions could differ from PayPal’s official list. While we strive to keep this list current, the supported locations may occasionally be updated by PayPal/Hyperwallet. For the most up-to-date information, please refer to PayPal support."
          />
          <div class="w-full md:max-w-[560px] relative">
            <input
              v-model="searchItem"
              @input="search"
              type="text"
              class="w-full pl-8 p-1.5 border rounded-lg border-[#929292] bg-transparent outline-none"
              placeholder="Search"
            />
            <search-icon class="absolute top-2.5 left-2" />
          </div>
          <div
            class="w-full md:max-w-[560px] grid grid-cols-3 xs:grid-cols-4 gap-4 xs:gap-2 md:gap-[10px]"
          >
            <div
              v-for="(text, index) in menuItems"
              :key="index"
              class="md:w-full md:h-full transition-all z-50 ease-in-out flex font-bold flex-col cursor-pointer justify-around items-start gap-2 py-4 px-2 border border-[#373737] xs:border-[#929292] text-[#373737] rounded-2xl xs:rounded-lg"
              :class="
                selectedItem === text
                  ? 'bg-[#373737] text-[#F0F0F0]'
                  : 'bg-transparent hover:bg-[#373737] hover:text-[#F0F0F0]'
              "
              @click="selectedItem = text"
            >
              <p class="text-xl">{{ index + 1 }}.</p>
              <p class="h-8 text-xs">{{ text }}</p>
            </div>
          </div>
        </div>
      </template>

      <template #r>
        <div
          v-if="selectedItem"
          class="relative w-full h-full border-l border-[#DFDFDF] px-4 pt-4 self-start flex flex-col justify-between overflow-y-hidden xs:overflow-y-auto"
        >
          <div class="flex flex-col">
            <p class="pb-4 border-b border-[#DFDFDF] text-xl font-bold">
              {{ selectedItem }}
            </p>
            <Disclosure
              v-slot="{ open }"
              v-for="(qa, index) in disclosureItems"
              :key="index"
            >
              <DisclosureButton
                class="py-2 font-semibold text-start flex items-center justify-between"
              >
                <span> {{ qa.question }} </span>
  
                <plus v-if="!open" />
                <minus v-else />
              </DisclosureButton>
              <transition
                enter-active-class="transition duration-100 ease-out"
                enter-from-class="transform scale-95 opacity-0"
                enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-75 ease-out"
                leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0"
              >
                <DisclosurePanel>
                  <div v-html="qa.answer"></div>
                </DisclosurePanel>
              </transition>
            </Disclosure>
          </div>
          <div
            class="w-full justify-self-end my-4 bg-white rounded-2xl xs:rounded-lg p-6 flex flex-col gap-4"
          >
            <div class="flex flex-col">
              <h3 class="text-xl font-bold">Still need help?</h3>
              <p class="text-[#929292]">
                The Filter support team is here to help
              </p>
            </div>
            <button
              @click="isForm = true"
              class="p-3 w-full max-w-[203px] rounded-lg transition-all ease-in hover:bg-black bg-[#373737] text-white font-semibold"
            >
              Submit a request
            </button>
          </div>
        </div>
      </template>
    </page-section>

    <page-section v-if="isForm" :is-popolam="true" :is-snap="false" :is-whole-scrollable="false">
      <template #l>
        <div class="mt-16 mb-4 md:mt-0 md:mb-0">
          <textTitle text="Fill the form" class="mb-5" />
          <textText
            class="w-full max-w-[619px]"
            text="This may mean our list of supported countries and regions could differ from PayPal’s official list. While we strive to keep this list current, the supported locations may occasionally be updated by PayPal/Hyperwallet. For the most up-to-date information, please refer to PayPal support."
          />
        </div>
      </template>
      <template #r>
        <div class="w-full px-5 rounded-lg shadow-md md:self-start mt-64 md:mt-4">
          <h3 class="font-bold text-lg mb-4">
            Providing as much information as possible in your request will allow
            us to help you faster
          </h3>
          <form @submit.prevent="handleSubmit">
            <!-- Request Type -->
            <label class="block text-sm font-medium text-gray-700 mb-1"
              >Please choose a request type below</label
            >
            <select
              v-model="requestType"
              class="w-full p-2 mb-4 border border-[#F8F8F8] bg-white bg-transparent rounded-lg"
            >
              <option value="I am a creator and I need support">
                I am a creator and I need support
              </option>
              <option value="I am a viewer and I need support">
                I am a viewer and I need support
              </option>
            </select>

            <!-- Email -->
            <label class="block text-sm font-medium text-gray-700 mb-1"
              >Your email address<span class="text-red-600">*</span></label
            >
            <input
              type="email"
              v-model="email"
              class="w-full p-2 mb-4 border border-[#F8F8F8] bg-white rounded-lg outline-none"
              placeholder="Email"
              required
            />

            <!-- Options -->
            <label class="block text-sm font-medium text-gray-700 mb-1"
              >Please select one of the options below<span class="text-red-600">*</span></label
            >
            <select
              v-model="option"
              class="w-full p-2 mb-4 border bg-white border-[#F8F8F8] rounded-lg"
              required
            >
              <option value="" disabled>-</option>
              <option value="Technical issue">Technical issue</option>
              <option value="Account issue">Account issue</option>
              <option value="Payment issue">Payment issue</option>
              <option value="Other">Other</option>
            </select>

            <!-- Subject -->
            <label class="block text-sm font-medium text-gray-700 mb-1"
              >Subject<span class="text-red-600">*</span></label
            >
            <input
              type="text"
              v-model="subject"
              class="w-full p-2 mb-4 border bg-white border-[#F8F8F8] rounded-lg outline-none"
              placeholder="Email"
              required
            />
            <p class="text-[#929292] -mt-3 mb-2 text-sm xs:text-base">Please use a few words to summarize your question</p>

            <!-- Description -->
            <label class="block text-sm font-medium text-gray-700 mb-1"
              >Description<span class="text-red-600">*</span></label
            >
            <textarea
              v-model="description"
              class="w-full p-2 mb-4 border border-[#F8F8F8] rounded-lg bg-white outline-none"
              placeholder="Please enter the details of your request."
              required
              rows="5"
            ></textarea>
            <p class="text-[#929292] -mt-3 mb-2 text-sm xs:text-base">Please enter the details of your request. A member of our team will reach out with a response.</p>

            <!-- Attachments -->
            <label class="block text-sm font-medium text-gray-700 mb-1"
              >Attachments (optional)</label
            >
            <div
              class="w-full p-4 mb-4 border border-[#F8F8F8] rounded-lg bg-white font-medium text-[#373737] flex items-center justify-center cursor-pointer"
              @click="triggerFileInput"
              @dragover.prevent
              @drop.prevent="handleDrop"
            >
              <span v-if="!fileName" class="text-sm">Add file or drop files here</span>
              <span v-else>{{ fileName }}</span>
              <input
                ref="fileInput"
                type="file"
                class="hidden"
                @change="handleFileUpload"
              />
            </div>
            <!-- <label class="block text-sm font-medium text-gray-700 mb-1">Attachments (optional)</label>
            <input
              type="file"
              @change="handleFileUpload"
              class="w-full p-2 mb-4 border bg-white border-[#F8F8F8] rounded"
            /> -->

            <!-- Submit Button -->
            <button
              type="submit"
              class="w-full text-white py-2 mb-px rounded-lg transition-all ease-in hover:bg-black bg-[#373737]"
            >
              Submit
            </button>
          </form>
          <button
            @click="isForm = false"
            class="w-full text-black bg-transparent border border-black py-2 my-2 rounded-lg transition-all ease-in hover:bg-[#373737]"
          >
            Back
          </button>
        </div>
      </template>
    </page-section>
  </page-wrapper>
</template>

<script setup>
import pageWrapper from "../components/pageWrapper.vue";
import pageSection from "../components/ui/pageSection.vue";
import textTitle from "../components/ui/textTitle.vue";
import textText from "../components/ui/textText.vue";
import searchIcon from "../components/icons/searchIcon.vue";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ref, shallowRef } from "vue";
import { questionItems } from "../libs/constants";
import plus from '../components/icons/plus.vue'
import minus from '../components/icons/minus.vue'

const menuItems = shallowRef(questionItems);
const selectedItem = ref("");
const searchItem = ref("");
const disclosureItems = shallowRef([
  {
    question: "Setting up payouts",
    answer: `
      <ol type="i">
        <li class="mb-4 relative">
         <span>1.</span>
         <span class="font-semibold absolute left-6 top-0">PayPal supported countries</span>
         <p class="mt-2 ml-6 text-sm">Patreon uses PayPal as an option to process payouts. In some cases, your payout may be processed through a service called HyperWallet, which is a global platform provided by PayPal, to handle payouts for users around the world.</p>
        </li>
        <li class="relative">
         <span>2.</span>
         <span class="font-semibold absolute left-6 top-0">PayPal supported countries</span>
         <p class="mt-2 ml-6 text-sm">This may mean our list of supported countries and regions could differ from PayPal’s official list. While we strive to keep this list current, the supported locations may occasionally be updated by PayPal/Hyperwallet. For the most up-to-date information, please refer to PayPal support.</p>
        </li>
      </ol>
    `,
  },
  {
    question: "How payouts work",
    answer: `
      <ol type="i">
        <li class="mb-4 relative">
         <span>1.</span>
         <span class="font-semibold absolute left-6 top-0">PayPal supported countries</span>
         <p class="mt-2 ml-6 text-sm">Patreon uses PayPal as an option to process payouts. In some cases, your payout may be processed through a service called HyperWallet, which is a global platform provided by PayPal, to handle payouts for users around the world.</p>
        </li>
        <li class="relative">
         <span>2.</span>
         <span class="font-semibold absolute left-6 top-0">PayPal supported countries</span>
         <p class="mt-2 ml-6 text-sm">This may mean our list of supported countries and regions could differ from PayPal’s official list. While we strive to keep this list current, the supported locations may occasionally be updated by PayPal/Hyperwallet. For the most up-to-date information, please refer to PayPal support.</p>
        </li>
      </ol>
    `,
  },
  {
    question: "Payout issues",
    answer: `
      <ol type="i">
        <li class="mb-4 relative">
         <span>1.</span>
         <span class="font-semibold absolute left-6 top-0">PayPal supported countries</span>
         <p class="mt-2 ml-6 text-sm">Patreon uses PayPal as an option to process payouts. In some cases, your payout may be processed through a service called HyperWallet, which is a global platform provided by PayPal, to handle payouts for users around the world.</p>
        </li>
        <li class="relative">
         <span>2.</span>
         <span class="font-semibold absolute left-6 top-0">PayPal supported countries</span>
         <p class="mt-2 ml-6 text-sm">This may mean our list of supported countries and regions could differ from PayPal’s official list. While we strive to keep this list current, the supported locations may occasionally be updated by PayPal/Hyperwallet. For the most up-to-date information, please refer to PayPal support.</p>
        </li>
      </ol>
    `,
  },
]);

function search(){
  selectedItem.value = menuItems.value.filter(item => item.toLowerCase().includes(searchItem.value.toLowerCase()))[0] || ""
}

const isForm = ref(false);

const fileInput = ref(null);
const fileName = ref("");

const handleFileUpload = (event) => {
  const files = event.target.files;
  if (files.length > 0) {
    fileName.value = files[0].name;
  }
};

const triggerFileInput = () => {
  fileInput.value.click();
};

const handleDrop = (event) => {
  const files = event.dataTransfer.files;
  if (files.length > 0) {
    fileInput.value.files = files;
    fileName.value = files[0].name;
  }
};

const handleSubmit = () => {
  console.log('nigaaa');
  
  alert("Form submitted!");
};
</script>

<style></style>
