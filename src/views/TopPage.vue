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
  <div class="q-pa-md"></div>
  <html>
    <div style="line-height: 1pt" class="q-pl-md">
      <p style="text-align: left" class="do-hyeon subtitle">Location</p>
      <p style="text-align: left" class="text-secondary">どこへ行く?</p>
    </div>
  </html>
  <div class="q-pa-sm"></div>
  <div class="full-width column justify-center items-center">
    <div class="q-gutter-md" style="width: 250px">
      <q-input rounded outlined v-model="text" label="大岡山駅" />
    </div>
  </div>
  <div class="q-pa-md"></div>
  <div class="col-4">
    <q-img src="../assets/logo.png" style="width: 200px; height: 200px" />
  </div>
  <div class="q-pa-sm"></div>
  <div class="q-pa-md q-gutter-sm do-hyeon search">
    <q-btn
      unelevated
      style="width: 190px"
      color="orange"
      label="Search"
      @click="Startclicked()"
    />
  </div>
</template>

<style>
.subtitle {
  font-size: 25px;
}
.search {
  letter-spacing: 10em;
}
</style>
