<script setup lang="ts">
import { GourmetShop } from "../apis/generated";
import ItemizedText from "../components/ItemizedText.vue";
import { useStore } from "../store";

const store = useStore();
const result: GourmetShop | null = store.state.result;
</script>

<template>
  <div
    v-if="result !== null"
    class="full-width column justify-center items-center"
  >
    <q-card class="resultCard">
      <q-img :src="result.photo" />
      <div class="shop-name note-sans q-py-lg q-pl-sm">
        {{ result.name }}
      </div>
      <div class="q-mb-md">
        <itemized-text class="q-ml-md" :text="result.genre" />
        <itemized-text class="q-ml-md" :text="result.subgenre" />
        <itemized-text class="q-ml-md" :text="result.price" />
      </div>
      <div class="row justify-start">
        <div class="col-3 q-pl-md q-my-xs itemize-title do-hyeon">Lunch</div>
        <div class="col-8 itemize-text q-my-xs">{{ result.lunch }}</div>
      </div>
      <div class="row">
        <div class="col-3 q-pl-md q-my-xs itemize-title do-hyeon">Close</div>
        <div class="col-8 itemize-text q-my-xs">{{ result.close }}</div>
      </div>
      <div class="row">
        <div class="col-3 q-pl-md q-my-xs itemize-title do-hyeon">Access</div>
        <div class="col-8 itemize-text note-sans q-my-xs">
          {{ result.address }}
        </div>
      </div>
      <div class="q-py-md">
        <iframe
          width="370"
          :src="
            'http://maps.google.co.jp/maps?q=' +
            result.lat +
            ', ' +
            result.lng +
            '&z=15&output=embed&t=m'
          "
          frameborder="0"
          marginwidth="0"
          marginheight="0"
        ></iframe>
      </div>
      <div class="row q-pr-md q-mb-sm justify-end items-center link">
        <a :href="result.url" />
        <q-icon
          name="open_in_new"
          class="q-mr-sm"
          style="color: #855e5e; font-size: 20px"
        />
        <div style="color: #855e5e">もっと詳しく</div>
      </div>
    </q-card>
  </div>
  <div v-else>結果を取得できませんでした</div>
</template>

<style scoped>
.link {
  position: relative;
}
.link a {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
.shop-name {
  background: rgba(0, 0, 0, 0.7);
  color: white;
  position: absolute;
  width: 100%;
  transform: translateY(-100%);
  font-size: 20pt;
  font-weight: bold;
  text-align: left;
}
.itemize-title {
  color: #855e5e;
  text-align: left;
  font-size: 12pt;
}
.itemize-text {
  color: #855e5e;
  text-align: left;
  font-size: 12pt;
}
.resultCard {
  width: 100%;
  max-width: 400px;
  border-radius: 20px;
}
</style>
