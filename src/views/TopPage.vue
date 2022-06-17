<script setup lang="ts">
import { ref } from "vue";
import { gourmetStartRequest } from "../apis";
import router from "../router";
const text = ref("");

async function Startclicked() {
  if (text.value.length === 0) {
    return;
  }
  await gourmetStartRequest({
    station: text.value,
  });
  router.push("/question");
}

const stationRules = [
  (v: string) => (v && v.length > 0) || "駅名を入力してください",
];

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
  <div class="full-width column justify-center items-center q-my-lg">
    <div class="station">
      <q-input :rules="stationRules" outlined v-model="text" label="駅名" />
    </div>
  </div>
  <div class="col-4 q-my-lg">
    <q-img
      rounded
      src="../assets/fooder_logo.png"
      width="240px"
      height="240px"
      class="logo"
    />
  </div>

  <div class="q-gutter-sm do-hyeon q-mt-lg">
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
  min-width: 240px;
  width: calc(100% - 32px);
}

.logo {
  border-radius: 8px;
}
</style>
