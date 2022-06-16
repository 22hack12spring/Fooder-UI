<script setup lang="ts">
import { GourmetQuestion } from "../apis/generated";

interface Props {
  question: GourmetQuestion | null;
}
const props = defineProps<Props>();
</script>

<template>
  <q-card v-if="props.question !== null" class="mycard q-mb-md">
    <div class="restaurant-name">{{ question?.id }}</div>
    {{ question?.image }}
    <q-card-section>
      <div class="text-h6">
        ジャンル: {{ question?.genre }}, サブジャンル: {{ question?.subgenre }}
      </div>
      <div class="text-h6">価格帯: {{ question?.price }}</div>
    </q-card-section>
  </q-card>
  <div v-else>質問を取得できませんでした</div>
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
