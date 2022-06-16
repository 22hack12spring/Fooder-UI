<script setup lang="ts">
import { GourmetQuestion } from "../apis/generated";

interface Props {
  question: GourmetQuestion | null;
}
// eslint-disable-next-line no-unused-vars
const props = defineProps<Props>();
</script>

<template>
  <q-card class="mycard q-mb-md full-width">
    <div class="restaurant-name">Q{{ question?.id }}</div>
    <q-img src="https://q.trap.jp/api/v3/public/icon/itt" />
    <q-card-section>
      <div class="row full-width">
        <div class="col text-h6">
          {{ question?.genre }}
        </div>
        <div class="col text-h6">
          {{ question?.subgenre }}
        </div>
      </div>
      <div class="text-h6">価格帯: {{ question?.price }}</div>
    </q-card-section>
  </q-card>
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
