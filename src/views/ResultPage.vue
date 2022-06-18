<script setup lang="ts">
import ItemizedText from "../components/ItemizedText.vue";
</script>

<template>
  <div class="full-width column justify-center items-center">
    <q-card class="resultCard">
      <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />
      <div class="shop-name note-sans q-py-lg q-pl-sm">
        イタリアンバル NORANEKO
      </div>
      <div>
        <itemized-text class="q-ml-md" text="イタリアン・フレンチ" />
        <itemized-text class="q-ml-md" text="ダイニングバー・バル" />
        <itemized-text class="q-ml-md" text="3001〜4000円" />
      </div>
      <div class="row justify-start">
        <div class="col-3 q-pl-md itemize-title do-hyeon">Lunch</div>
        <div class="col-8 itemize-text">なし</div>
      </div>
      <div class="row">
        <div class="col-3 q-pl-md itemize-title do-hyeon">Close</div>
        <div class="col-8 itemize-text">第二、第四月曜日※変動有</div>
      </div>
      <div class="row">
        <div class="col-3 q-pl-md itemize-title do-hyeon">Access</div>
        <div class="col-8 itemize-text note-sans">
          東京都杉並区高円寺北２－２２－６クックランド高円寺ビル２階
        </div>
      </div>
      <div>map</div>
      <div class="row q-pr-md q-mb-sm justify-end items-center link">
        <a href="https://google.com" />
        <q-icon
          name="open_in_new"
          class="q-mr-sm"
          style="color: #855e5e; font-size: 20px"
        />
        <div style="color: #855e5e">もっと詳しく</div>
      </div>
    </q-card>
  </div>
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
}
.resultCard {
  width: 100%;
  max-width: 400px;
  border-radius: 20px;
}
</style>
