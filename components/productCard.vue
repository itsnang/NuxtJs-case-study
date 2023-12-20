<template>
  <div
    :key="product.id"
    class="shadow-complete border-[2px] border-blue-100 border-dashed flex min-h-[22rem] w-full flex-col rounded-2xl bg-white p-1"
  >
    <NuxtLink
      :to="`products/${product.id}`"
      class="relative aspect-[4/3] w-full overflow-hidden rounded-xl"
    >
      <NuxtImg
        :src="product.image"
        :alt="product.title"
        layout="fill"
        class="object-cover"
        @load="loading = false"
      />
      <div
        v-if="loading"
        class="absolute inset-0 z-10 animate-pulse bg-gray-100"
      ></div>
    </NuxtLink>
    <div class="flex flex-1 flex-col gap-4 p-[14px]">
      <div v-if="loading == true">
        <div className="flex-1 space-y-1">
          <div className="h-4 w-1/2 rounded-xl bg-gray-100"></div>
          <div className="h-4 w-4/5 rounded-xl bg-gray-100"></div>
          <div className="h-4 w-1/3 rounded-xl bg-gray-100"></div>
        </div>
        <div className="h-8 rounded-xl bg-gray-100"></div>
      </div>

      <div class="flex-1">
        <NuxtLink
          :to="`products/${product.id}`"
          class="line-clamp-1 text-xl font-medium text-gray-900"
        >
          {{ product.title }}
        </NuxtLink>
        <NuxtLink
          :to="`products/${product.id}`"
          class="line-clamp-1 text-base text-gray-500"
        >
          {{ product.description }}
        </NuxtLink>
      </div>
      <div class="flex justify-between">
        <p class="text-xl font-medium text-blue-500">${{ product.price }}</p>
        <div class="bg-green-100 flex items-center px-2 rounded-md">
          <p class="text-base text-green-600">
            {{ `Rating: ${product.rating.rate} ` }}
          </p>
        </div>
      </div>
      <ButtonLink
        class="flex justify-center"
        :isLink="true"
        :href="`products/${product.id}`"
        >View Detail</ButtonLink
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { type Product } from "~/composables/product";
const { product } = defineProps<{
  product: Product;
}>();
const loading: Ref<boolean> = ref(true);
</script>
