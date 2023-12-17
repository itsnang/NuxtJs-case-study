<template>
  <div>
    <h1>Product: {{ id }}</h1>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const { id } = useRoute().params;
</script>

