<template>
  <button
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
  >
    <NuxtLink v-if="isLink == true" :to="href">
      <slot></slot>
    </NuxtLink>
  </button>
</template>

<script lang="ts">
export default {
  name: "Button",
  props: {
    isLink: Boolean,
    href: String,
  },
};
</script>
