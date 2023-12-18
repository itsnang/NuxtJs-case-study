<template>
  <div>
    <h1>Products</h1>
    <div class="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <div v-for="p in products">
        <ProductCard :product="p" />
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { type Products } from '~/composables/product';
const { data: products } = await useFetch<Products>('https://fakestoreapi.com/products');
</script>




  

