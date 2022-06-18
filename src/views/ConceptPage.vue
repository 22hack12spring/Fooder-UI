<script setup lang="ts">
import PageTitle from "../components/PageTitle.vue";
</script>

<template>
  <page-title title="Concept" subtitle="私たちの思い" />
  <div class="col-4 q-mt-lg">
    <q-img rounded src="../assets/concept.png" width="240px" class="logo" />
  </div>
  <div class="q-my-md text-secondary">
    <p class="q-mb-md section-title">あいまいで優柔不断なあなたへ</p>
    <p class="q-mb-xs">今日、何食べよう？ の時間を<br />そっとサポートします</p>
  </div>
  <div class="q-my-xl text-secondary">
    <p class="q-mb-md section-title">制作</p>
    <p>東京工業大学 デジタル創作同好会traP<br />チーム Fooder</p>
  </div>
</template>

<style scoped>
.section-title {
  text-decoration: underline solid #ff914c;
  text-decoration-thickness: 1px;
  text-underline-offset: 3px;
}
</style>
