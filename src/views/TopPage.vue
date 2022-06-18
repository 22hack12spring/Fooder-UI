<script setup lang="ts">
import { ref } from "vue";
import { gourmetStartRequest } from "../apis";
import { useQuasar, QSpinnerPie } from "quasar";
import PageTitle from "../components/PageTitle.vue";
import router from "../router";
const text = ref("");
const $q = useQuasar();

const stations = ["大岡山", "渋谷", "新宿", "横浜"];
const stationHint = stations[Math.floor(Math.random() * stations.length)];

const showloading = () => {
  $q.loading.show({
    spinner: QSpinnerPie,
    spinnerColor: "primary",
    spinnerSize: 80,
  });
};

async function Startclicked() {
  if (text.value.length === 0) {
    return;
  }
  showloading();
  await gourmetStartRequest({
    station: text.value,
  });
  $q.loading.hide();
  router.push("/question");
}

const stationRules = [
  (v: string) => (v && v.length > 0) || "駅名を入力してください",
];

async function gpsSearchClicked() {
  showloading();
  navigator.geolocation.getCurrentPosition(
    async function (position: GeolocationPosition) {
      await gourmetStartRequest({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
      $q.loading.hide();
      router.push("/question");
    },
    function () {
      $q.loading.hide();
      $q.notify({
        message: "GPSを取得できませんでした",
        icon: "warning",
        color: "negative",
      });
    },
    {
      timeout: 5000,
    }
  );
}
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
  <page-title title="Location" subtitle="どこへ行く？" />
  <div class="full-width column justify-center items-center q-my-lg">
    <div class="station">
      <q-input
        :rules="stationRules"
        outlined
        v-model="text"
        :placeholder="stationHint"
        hint="地名・駅名"
        :input-style="{ fontSize: '1rem' }"
      />
    </div>
  </div>
  <div class="col-4 q-my-lg">
    <q-img
      rounded
      src="../assets/fooder_logo.png"
      width="240px"
      height="240px"
    />
  </div>

  <div class="q-gutter-sm do-hyeon q-mt-lg">
    <q-btn
      size="1.875rem"
      padding="0px"
      no-caps
      style="width: 190px; height: 60px"
      color="primary"
      label="Search"
      class="search"
      @click="Startclicked()"
    />
  </div>
  <q-btn
    class="q-mt-lg do-hyeon"
    style="width: 190px; height: 60px"
    icon="my_location"
    label="gps Search"
    size="1.25rem"
    color="primary"
    @click="gpsSearchClicked"
  />
</template>

<style scoped>
.station {
  min-width: 240px;
  width: calc(100% - 32px);
}

.logo {
  border-radius: 8px;
}
</style>
