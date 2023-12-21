<script setup lang="ts">
import { useRoute } from "vue-router";
import { type Product } from "~/composables/product";
import { type Detail } from "~/composables/detail";
import { Share2Icon } from "@radix-icons/vue";
import Breadcrumb from "~/components/breadcrumb.vue";

import { ref } from "vue";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
  RadioGroup,
  RadioGroupLabel,
  RadioGroupDescription,
  RadioGroupOption,
} from "@headlessui/vue";

const isOpen = ref(false);

function closeModal() {
  isOpen.value = false;
}
function openModal() {
  isOpen.value = true;
}

const { id } = useRoute().params;
const res = `https://fakestoreapi.com/products/${id}`;
const { data } = await useFetch<Product>(res, { key: id.toString() });
interface PageData {
  breadcrumbItems: { text: string; to: string }[];
}
const detail: Detail[] = [
  {
    color: "Red",
  },
  {
    color: "Blue",
  },
  {
    color: "Green",
  },
  {
    color: "Yellow",
  },
];
const selected = ref(detail[0]);

const breadcrumbItems = ref<Array<{ text: string; to: string }>>([
  { text: "Product", to: "/products" },
  { text: data?.value?.id?.toString() ?? "1", to: `/products/${id}` },
]);
definePageMeta({
  layout: "product",
});
</script>

<template>
  <div class="pt-4">
    <Breadcrumb :items="breadcrumbItems" />
    <ProductHeader class="pt-3" :img="data?.image" />

    <div class="w-full pt-6">
      <RadioGroup v-model="selected">
        <div class="flex flex-wrap lg:flex-nowrap md:flex-nowrap gap-8">
          <RadioGroupOption
            as="template"
            v-for="plan in detail"
            :key="plan.color"
            :value="plan"
            v-slot="{ active, checked }"
          >
            <div
              :class="[
                active
                  ? 'ring-2 w-full  ring-white/60 ring-offset-2 ring-offset-sky-300'
                  : 'w-full ring-1 ring-offset-sky-300',
                checked ? 'bg-blue-400 text-white ' : 'bg-white ',
              ]"
              class="relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none"
            >
              <div class="flex w-full items-center justify-between">
                <div class="flex items-center px-3">
                  <div class="text-sm">
                    <RadioGroupLabel
                      as="p"
                      :class="checked ? 'text-white' : 'text-gray-900'"
                      class="font-medium"
                    >
                      {{ plan.color }}
                    </RadioGroupLabel>
                    <RadioGroupDescription
                      as="span"
                      :class="checked ? 'text-sky-100' : 'text-gray-500'"
                      class="inline"
                    >
                    </RadioGroupDescription>
                  </div>
                </div>
                <div v-show="checked" class="shrink-0 text-white">
                  <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none">
                    <circle
                      cx="12"
                      cy="12"
                      r="12"
                      fill="#fff"
                      fill-opacity="0.2"
                    />
                    <path
                      d="M7 13l3 3 7-7"
                      stroke="#fff"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </RadioGroupOption>
        </div>
      </RadioGroup>
    </div>
    <div class="py-8 flex space-x-4 bg-gray-50 px-8 my-7 rounded-lg border">
      <MyButton @click="openModal" class="flex-1" type="primary"
        >Buy now</MyButton
      >

      <MyButton type="secondary">
        <Share2Icon class="w-6 h-6" />
      </MyButton>
    </div>
    <h4
      class="text-xl underline underline-offset-8 decoration-blue-200 decoration-[4px]"
    >
      Details
    </h4>
    <p class="text-gray-500 text-md pt-3">{{ data?.description }}</p>
  </div>

  <TransitionRoot appear :show="isOpen == true" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle
                as="h3"
                class="text-lg font-medium leading-6 text-gray-900"
              >
                Purchase item
              </DialogTitle>
              <div class="mt-2">
                <p class="text-sm text-gray-500">{{ data?.title }}</p>
              </div>
              <div class="flex items-center justify-center">
                <NuxtImg
                  :src="data?.image"
                  alt="Banner"
                  layout="fill"
                  class="rounded-2xl object-cover flex"
                />
              </div>

              <div class="flex justify-between items-center pt-2">
                <p>Color: {{ selected.color }}</p>
                <p class="text-lg font-medium leading-6 text-gray-900">
                  ${{ data?.price }}
                </p>
                <button
                  type="button"
                  class="justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  @click="closeModal"
                >
                  Buy now
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
