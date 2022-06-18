<script setup lang="ts">
import gsap from "gsap";
import { GourmetAnswer, GourmetQuestion } from "../apis/generated";
import QuestionInfoCard from "../components/QuestionInfoCard.vue";
import { useStore } from "../store";
import { ref } from "vue";
import router from "../router";
import { gourmetAnswerRequest } from "../apis";
import PageTitle from "../components/PageTitle.vue";

const store = useStore();
const questions: Array<GourmetQuestion> | null = store.state.questions;

const questionLength = 7;

// 便宜上1-indexedなので, 配列のindexとして利用するときに-1する
const currentQuestionNum = ref<number>(1);

const gourmetAnswers = ref<Array<GourmetAnswer>>([]);

let currentAnswer = "no";
function onNoClicked() {
  currentAnswer = "no";
  gourmetAnswers.value.push({
    id: currentQuestionNum.value,
    answer: "no",
  });
  const tmp = currentQuestionNum.value * 2;
  if (tmp > questionLength) {
    allQuestionsAnswered();
  } else {
    currentQuestionNum.value = tmp;
  }
}
function onYesClicked() {
  currentAnswer = "yes";
  gourmetAnswers.value.push({
    id: currentQuestionNum.value,
    answer: "yes",
  });
  const tmp = currentQuestionNum.value * 2 + 1;
  if (tmp > questionLength) {
    allQuestionsAnswered();
  } else {
    currentQuestionNum.value = tmp;
  }
}

async function allQuestionsAnswered() {
  await gourmetAnswerRequest({
    id: store.state.gourmetSearchId!,
    answer: gourmetAnswers.value,
  });
  router.push("/result");
}

// **** animation **** //
function flipCardLeave(el: gsap.TweenTarget, completed: () => void) {
  if (currentAnswer == "no") {
    gsap.to(el, {
      duration: 0.7,
      x: "-100%",
      rotate: "-20deg",
      transformOrigin: "buttom left",
      onComplete: completed,
      ease: "power3.inOut",
    });
    gsap.to(el, {
      duration: 0.1,
      delay: 0.4,
      opacity: 0,
    });
  } else {
    gsap.to(el, {
      duration: 0.7,
      x: "100%",
      rotate: "15deg",
      transformOrigin: "buttom right",
      onComplete: completed,
      ease: "power3.inOut",
    });
    gsap.to(el, {
      duration: 0.1,
      delay: 0.4,
      opacity: 0,
    });
  }
}

// **** swipe **** //
let swipeStartX: number | null = null;
let swipeEndX: number | null = null;

function onSwipeStart(e: TouchEvent) {
  swipeStartX = e.touches[0].clientX;
}

function onSwipeMove(e: TouchEvent) {
  if (swipeStartX == null) {
    return;
  }
  swipeEndX = e.touches[0].clientX;
}

function onSwipeEnd() {
  if (swipeStartX == null || swipeEndX == null) {
    return;
  }
  const diff = swipeEndX - swipeStartX;
  if (diff < 100) {
    onNoClicked();
  } else if (diff > -100) {
    onYesClicked();
  }
  swipeStartX = null;
  swipeEndX = null;
}

function onSwipeCancel() {
  swipeStartX = null;
  swipeEndX = null;
}
</script>

<template>
  <page-title title="Discover" subtitle="今日の気分は?" class="q-mb-lg" />
  <div
    v-if="questions !== null"
    class="full-width column justify-center items-center"
  >
    <div
      class="card-container"
      @touchstart="onSwipeStart"
      @touchmove="onSwipeMove"
      @touchend="onSwipeEnd"
      @touchcancel="onSwipeCancel"
    >
      <question-info-card
        :question="questions[currentQuestionNum - 1]"
        class="q-mb-lg card-space"
      />
      <transition leave @leave="flipCardLeave">
        <div class="card">
          <question-info-card
            :question="questions[currentQuestionNum - 1]"
            class="q-mb-lg"
          />
        </div>
      </transition>
      <transition leave @leave="flipCardLeave">
        <div class="card" v-if="currentQuestionNum <= 3">
          <question-info-card
            :question="questions[currentQuestionNum - 1]"
            class="q-mb-lg"
          />
        </div>
      </transition>
      <transition leave @leave="flipCardLeave">
        <div class="card" v-if="currentQuestionNum === 1">
          <question-info-card
            :question="questions[currentQuestionNum - 1]"
            class="q-mb-lg"
          />
        </div>
      </transition>
    </div>
    <div class="full-width row">
      <div class="col">
        <q-btn
          round
          dense
          icon="close"
          class="close-button"
          size="28px"
          @click="onNoClicked"
        />
      </div>
      <div class="col">
        <q-btn
          round
          dense
          icon="favorite_border"
          class="fav-button"
          size="28px"
          style="padding-top: 8px"
          @click="onYesClicked"
        />
      </div>
    </div>
  </div>
  <div v-else>質問の取得に失敗しました</div>
</template>

<style scoped lang="scss">
.close-button {
  background-color: $accent;
  color: white;
}
.fav-button {
  background-color: $primary;
  color: white;
}
.card-container {
  position: relative;
  width: 100%;
}
.card {
  width: 100%;
  max-width: 340px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}
.card-space {
  visibility: hidden;
  max-width: 340px;
  width: 100%;
}
</style>
