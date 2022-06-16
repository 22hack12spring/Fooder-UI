<script setup lang="ts">
import { ref } from "vue";
import { GourmetStartRequest } from "../apis/generated";
import { gourmetStartRequest } from "../apis";

const x: GourmetStartRequest = {
  station: "text",
};
const text = ref("");
async function Startclicked() {
  await gourmetStartRequest(x);
}
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
  <div class="col-4">
    <q-img
      src="https://placeimg.com/500/300/nature"
      style="max-width: 500px; height: 500px"
    />
  </div>

  <div class="full-width column justify-center items-center">
    <div class="q-gutter-md" style="max-width: 300px">
      <q-input rounded outlined v-model="text" label="Station" />
    </div>
  </div>

  <div class="q-pa-md q-gutter-sm">
    <q-btn
      round
      color="deep-orange"
      icon="my_location"
      @click="Startclicked()"
    />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
