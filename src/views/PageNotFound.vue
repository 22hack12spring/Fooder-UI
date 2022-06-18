<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <q-img src="../assets/town.png" width="240px" class="q-mt-md" />
  <div class="q-my-md text-secondary">
    ページが見つかりませんでした(´・ω・`)
  </div>
  <div class="q-mt-lg">
    <router-link to="/">トップページへ</router-link>
  </div>
</template>
