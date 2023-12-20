<template>
  <div class="pt-4">
    <Breadcrumb :items="breadcrumbItems" />
    <ProductHeader class="pt-3" :img="data?.image" />

    <div class="py-8 flex space-x-4 bg-gray-50 px-8 my-7 rounded-lg border">
      <MyButton class="flex-1" type="primary">Add to Cart</MyButton>

      <MyButton class="flex-2" type="secondary">Buy Now</MyButton>
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
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { type Product } from "~/composables/product";
import { Share2Icon } from "@radix-icons/vue";
import Breadcrumb from "~/components/breadcrumb.vue";

const { id } = useRoute().params;
const res = `https://fakestoreapi.com/products/${id}`;
const { data } = await useFetch<Product>(res, { key: id.toString() });
interface PageData {
  breadcrumbItems: { text: string; to: string }[];
}

const breadcrumbItems = ref<Array<{ text: string; to: string }>>([
  { text: "Product", to: "/products" },
  { text: data?.value?.id?.toString() ?? "1", to: `/products/${id}` },
]);
definePageMeta({
  layout: "product",
});
</script>
