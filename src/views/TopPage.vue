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
  <html>
    <DIV style="line-height: 1pt">
      <p style="text-align: left"><font size="6">Location</font></p>
      <p style="text-align: left">
        <font size="2">&nbsp;&ensp;&ensp;&ensp;どこへ行く?</font>
      </p>
    </DIV>
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
  <div class="q-pa-md q-gutter-sm">
    <q-btn
      unelevated
      style="width: 190px"
      color="orange"
      label="Search"
      @click="Startclicked()"
    />
  </div>
</template>
