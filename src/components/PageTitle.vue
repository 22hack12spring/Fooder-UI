<script setup lang="ts">
const props = defineProps({
  title: String,
  subtitle: String,
});
</script>

<template>
  <div class="title-left">
    <div class="title-container">
      <p class="do-hyeon title">{{ props.title }}</p>
      <p class="text-secondary subtitle">{{ props.subtitle }}</p>
    </div>
  </div>
</template>

<style scoped>
.title-left {
  display: flex;
}
.title-container {
  margin-left: 20px;
  margin-top: 16px;
  display: flex;
  line-height: 20px;
  justify-content: center;
  flex-direction: column;
}
.title {
  font-size: 2rem;
  margin: 0px;
}

.subtitle {
  margin: 0px;
}
</style>
