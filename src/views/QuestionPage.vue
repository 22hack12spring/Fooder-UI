<script setup lang="ts"></script>

<template>
  <div class="full-width column justify-center items-center">
    <q-card class="mycard q-mb-md">
      <div class="restaurant-name">四川屋台</div>
      <img src="https://cdn.quasar.dev/img/mountains.jpg" />

      <q-card-section>
        <div class="text-h6">ジャンル: ああ</div>
        <div class="text-h6">価格帯: 100円</div>
      </q-card-section>
    </q-card>
    <div class="full-width row justify-center">
      <div class="col">
        <q-btn round icon="close" size="lg" />
      </div>
      <div class="col">
        <q-btn round icon="favorite" size="lg" />
      </div>
    </div>
  </div>
</template>

<style>
.restaurant-name {
  font-size: 24pt;
}

.mycard {
  max-width: 80%;
  max-height: 100%;
}
</style>
