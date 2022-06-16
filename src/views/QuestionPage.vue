<script setup lang="ts">
import { GourmetQuestion } from "../apis/generated";
import QuestionInfoCard from "../components/QuestionInfoCard.vue";
// import { useStore } from "../store";
import { ref } from "vue";
import router from "../router";
// const store = useStore();
// const questions: Array<GourmetQuestion> | null = store.state.questions;

const question: GourmetQuestion = {
  id: 1,
  image: "image-url",
  genre: "ジャンル",
  subgenre: "サブジャンル",
  price: "価格",
};
const questionLength = 7;

// 便宜上1-indexedなので, 呼び出すときに-1する
const currentQuestionNum = ref<number>(1);

function onNoClicked() {
  currentQuestionNum.value *= 2;
  if (currentQuestionNum.value > questionLength) {
    router.push("/result");
  }
}
function onYesClicked() {
  currentQuestionNum.value = currentQuestionNum.value * 2 + 1;
  if (currentQuestionNum.value > questionLength) {
    router.push("/result");
  }
}
</script>

<template>
  <div class="full-width column justify-center items-center">
    <question-info-card :question="question" />
    <div class="full-width row justify-center">
      <div class="col">
        <q-btn round icon="close" size="lg" @click="onNoClicked" />
      </div>
      <div class="col">
        <q-btn round icon="favorite" size="lg" @click="onYesClicked" />
      </div>
    </div>
  </div>
</template>
