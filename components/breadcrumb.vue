<!-- components/Breadcrumb.vue -->

<template>
  <nav class="flex gap-2">
    <div
      class="flex gap-2 text-lg font-medium"
      v-for="(item, index) in items"
      :key="index"
    >
      <NuxtLink
        :to="item.to"
        :class="{
          'text-gray-600 hover:text-gray-800 ': index !== items.length - 1,
        }"
        >{{ item.text }}</NuxtLink
      >
      <span v-if="index !== items.length - 1">/</span>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    items: {
      type: Array as () => { text: string; to: string }[],
      required: true,
    },
  },
});
</script>
