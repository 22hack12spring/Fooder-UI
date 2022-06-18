<script setup lang="ts">
interface Props {
  text: string;
}
// eslint-disable-next-line no-unused-vars
const props = defineProps<Props>();
</script>

<template>
  <div class="row items-center">
    <div class="bullet q-mr-sm" />
    <div>{{ text }}</div>
  </div>
</template>

<style>
.bullet {
  background-color: orange;
  width: 12px;
  height: 12px;
  position: relative;
  border-radius: 1px;
}
</style>
