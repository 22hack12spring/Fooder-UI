<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <q-img src="../assets/town.png" width="240px" class="q-mt-md" />
  <div class="q-mb-md text-secondary">お店が見つかりませんでした(´・ω・`)</div>
  <div class="q-mb-md text-secondary">
    検索する地名・駅名を<br />変える必要があるかもしれません
  </div>
  <div class="q-mt-lg">
    <router-link to="/">トップページへ</router-link>
  </div>
</template>
