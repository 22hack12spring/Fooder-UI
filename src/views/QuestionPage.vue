<script setup lang="ts">
import { GourmetAnswer, GourmetQuestion } from "../apis/generated";
import QuestionInfoCard from "../components/QuestionInfoCard.vue";
import { useStore } from "../store";
import { ref } from "vue";
import router from "../router";
import { gourmetAnswerRequest } from "../apis";
const store = useStore();
const questions: Array<GourmetQuestion> | null = store.state.questions;

// const question: GourmetQuestion = {
// id: 1,
// image: "image-url",
// genre: "ジャンル",
// subgenre: "サブジャンル",
// price: "価格",
// };
const questionLength = 7;

// 便宜上1-indexedなので, 配列のindexとして利用するときに-1する
const currentQuestionNum = ref<number>(1);

const gourmetAnswers = ref<Array<GourmetAnswer>>([]);

function onNoClicked() {
  gourmetAnswers.value.push({
    id: currentQuestionNum.value,
    answer: "no",
  });
  currentQuestionNum.value *= 2;
  if (currentQuestionNum.value > questionLength) {
    allQuestionsAnswered();
  }
}
function onYesClicked() {
  gourmetAnswers.value.push({
    id: currentQuestionNum.value,
    answer: "yes",
  });
  currentQuestionNum.value = currentQuestionNum.value * 2 + 1;
  if (currentQuestionNum.value > questionLength) {
    allQuestionsAnswered();
  }
}

function allQuestionsAnswered() {
  gourmetAnswerRequest({
    id: store.state.gourmetSearchId!,
    answer: gourmetAnswers.value,
  });
  router.push("/result");
}
</script>

<template>
  <div
    v-if="questions !== null"
    class="full-width column justify-center items-center"
  >
    <question-info-card :question="questions[currentQuestionNum - 1]" />
    <div class="full-width row justify-center">
      <div class="col">
        <q-btn round icon="close" size="lg" @click="onNoClicked" />
      </div>
      <div class="col">
        <q-btn round icon="favorite" size="lg" @click="onYesClicked" />
      </div>
    </div>
  </div>
  <div v-else>質問の取得に失敗しました</div>
</template>
