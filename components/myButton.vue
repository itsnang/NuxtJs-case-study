<!-- components/MyButton.vue -->

<template>
  <button :class="buttonClasses" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script lang="ts">
export default {
  props: {
    type: {
      type: String,
      default: "primary", // Default button type
    },
  },
  computed: {
    buttonClasses(): string {
      return `px-4 py-3 rounded ${this.getTypeClass()}`;
    },
  },
  methods: {
    getTypeClass(): string {
      return this.type === "primary"
        ? "bg-blue-500 text-white hover:bg-blue-600"
        : "bg-gray-300 text-black hover:bg-gray-400 ";
    },
    handleClick(): void {
      this.$emit("click"); // Emit click event
    },
  },
};
</script>

<style scoped>
/* Add any additional styles or overrides here */
</style>
