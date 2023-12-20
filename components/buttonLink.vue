<template>
  <NuxtLink
    v-if="isLink == true"
    :to="href"
    class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
  >
    <button>
      <slot></slot>
    </button>
  </NuxtLink>
</template>

<script lang="ts">
export default {
  name: "ButtonLink",
  props: {
    isLink: Boolean,
    href: String,
  },
};
</script>
