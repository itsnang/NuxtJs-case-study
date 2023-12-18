<template>
  <div>
    <h1>Product: {{ id }}</h1>
    <h4>{{ data?.rating.count }}</h4>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { type Product } from "~/composables/product";

const { id } = useRoute().params;
const res = `https://fakestoreapi.com/products/${id}`;
const { data } = await useFetch<Product>(res, { key: id.toString() });
</script>
