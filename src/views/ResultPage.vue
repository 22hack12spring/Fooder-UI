<script setup lang="ts">
import ItemizedText from "../components/ItemizedText.vue";
</script>

<template>
  <div class="full-width column justify-center items-center">
    <q-card class="resultCard">
      <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />
      <div class="shop-name text-h6">イタリアンバル NORANEKO</div>
      <div>
        <itemized-text
          class="q-ml-md itemized-text"
          text="イタリアン・フレンチ"
        />
        <itemized-text
          class="q-ml-md itemized-text"
          text="ダイニングバー・バル"
        />
        <itemized-text class="q-ml-md itemized-text" text="3001〜4000円" />
      </div>
      <div class="row justify-start">
        <div class="col-3 q-pl-md" style="text-align: left">Lunch</div>
        <div class="col-8" style="text-align: left">なし</div>
      </div>
      <div class="row">
        <div class="col-3 q-pl-md" style="text-align: left">Close</div>
        <div class="col-8" style="text-align: left">
          第二、第四月曜日※変動有
        </div>
      </div>
      <div class="row">
        <div class="col-3 q-pl-md" style="text-align: left">Access</div>
        <div class="col-8" style="text-align: left">
          東京都杉並区高円寺北２－２２－６クックランド高円寺ビル２階
        </div>
      </div>
      <div>map</div>
      <div class="row q-pr-md justify-end items-center">
        <q-icon name="open_in_new" class="q-mr-sm" />
        <div>もっと詳しく</div>
      </div>
    </q-card>
  </div>
</template>

<style scoped>
.shop-name {
  background: rgba(0, 0, 0, 0.7);
  color: white;
  position: absolute;
  width: 100%;
  transform: translateY(-100%);
}
.resultCard {
  width: 100%;
  max-width: 300px;
  border-radius: 20px;
}
.itemized-text {
  font-size: 12pt;
}
</style>
