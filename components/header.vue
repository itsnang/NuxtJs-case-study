<template>
  <div class="flex justify-between bg-gray-100 py-4  px-10">
    <NuxtLink to="/"
      class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text text-2xl">
      NuxtJS
    </NuxtLink>
    <div class="gap-6 flex">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
      <NuxtLink to="/products">Products</NuxtLink>

    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Header',
}
</script>