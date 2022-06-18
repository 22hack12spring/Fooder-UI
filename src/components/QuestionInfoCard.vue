<script setup lang="ts">
import { GourmetQuestion } from "../apis/generated";
import ItemizedText from "./ItemizedText.vue";

interface Props {
  question: GourmetQuestion;
}
// eslint-disable-next-line no-unused-vars
const props = defineProps<Props>();
</script>

<template>
  <q-card class="question-card full-width">
    <q-img class="question-image" :src="question.image" />
    <q-card-section>
      <itemized-text :text="question.genre" />
      <itemized-text :text="question.subgenre" />
      <itemized-text :text="question.price" />
    </q-card-section>
  </q-card>
</template>

<style scoped>
.question-card {
  max-width: 340px;
  max-height: 100%;
  border-radius: 20px;
}
.question-image {
  width: 340px;
  height: 340px;
}
</style>
