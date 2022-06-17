<script setup lang="ts">
import { ref } from "vue";
import { gourmetStartRequest } from "../apis";
const text = ref("");
async function Startclicked() {
  await gourmetStartRequest({
    station: text.value,
  });
}
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
  <div class="title-left">
    <div class="title-container">
      <p class="do-hyeon title">Location</p>
      <p class="text-secondary subtitle">どこへ行く?</p>
    </div>
  </div>
  <div class="q-pa-sm"></div>
  <div class="full-width column justify-center items-center">
    <div class="q-gutter-md" style="width: 264px">
      <q-input outlined v-model="text" label="駅名" class="station" />
    </div>
  </div>
  <div class="q-pa-md"></div>
  <div class="col-4">
    <q-img src="../assets/logo.png" style="width: 200px; height: 200px" />
  </div>
  <div class="q-pa-sm"></div>
  <div class="q-pa-md q-gutter-sm do-hyeon">
    <q-btn
      size="1.875rem"
      padding="0px"
      no-caps
      style="width: 190px"
      color="primary"
      label="Search"
      class="search"
      @click="Startclicked()"
    />
  </div>
</template>

<style>
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

.station {
  display: flex;
}
</style>
