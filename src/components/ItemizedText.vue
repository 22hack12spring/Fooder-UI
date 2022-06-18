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
    <div class="text">{{ text }}</div>
  </div>
</template>

<style scoped>
.bullet {
  background-color: #ff914c;
  width: 12px;
  height: 12px;
  position: relative;
  border-radius: 1px;
}
.text {
  color: #855e5e;
  font-family: "Noto Sans JP";
  font-size: 16pt;
}
</style>
