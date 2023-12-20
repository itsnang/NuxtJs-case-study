<template>
  <div>
    <div class="flex justify-center overflow-hidden rounded-2xl bg-gray-100">
      <NuxtImg
        :src="img"
        alt="Banner"
        layout="fill"
        class="rounded-2xl object-cover"
      />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "ProductHeader",
  props: {
    img: String,
  },
};
</script>
