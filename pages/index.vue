<!-- pages/index.vue -->

<template>
  <div class="text-center pt-4">
    <h2 class="text-3xl font-semibold mb-4">Welcome to Our Store</h2>
    <p class="text-gray-600">
      Explore our wide range of products and find the perfect items for you.
    </p>
    <p class="text-gray-600">
      Shop now and enjoy a seamless online shopping experience.
    </p>
    <NuxtLink
      to="/products"
      class="inline-block bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg mt-8"
    >
      Shop Now
    </NuxtLink>
    <NuxtImg :src="img" class="w-full h-auto mt-8" />
  </div>
  <div class="py-12">
    <div class="container mx-auto text-center">
      <h2 class="text-3xl font-semibold mb-4">About Our Website</h2>
      <p class="text-gray-600">
        Welcome to our e-commerce store! We're excited to have you here. It's
        important to note that this website is part of a learning project, and
        the data you see is powered by a fake API specifically created for
        practicing Nuxt.js development.
      </p>
      <p class="text-gray-600">
        As we continue to improve and enhance our skills in building web
        applications with Nuxt.js, we appreciate your understanding and
        patience. Feel free to explore the products and features, and if you
        have any feedback, we'd love to hear from you!
      </p>
    </div>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  data() {
    return {
      img: "https://images.unsplash.com/photo-1580654843061-8c90a9585fec?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    };
  },
});
</script>
