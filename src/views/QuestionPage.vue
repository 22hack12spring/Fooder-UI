<script setup lang="ts">
import gsap from "gsap";
import { GourmetAnswer, GourmetQuestion } from "../apis/generated";
import QuestionInfoCard from "../components/QuestionInfoCard.vue";
import { useStore } from "../store";
import { ref } from "vue";
import { gourmetAnswerRequest } from "../apis";
import PageTitle from "../components/PageTitle.vue";

const store = useStore();
const questions: Array<GourmetQuestion> | null = store.state.questions;

const questionLength = 7;

// 便宜上1-indexedなので, 配列のindexとして利用するときに-1する
const currentQuestionNum = ref<number>(1);

const gourmetAnswers = ref<Array<GourmetAnswer>>([]);

const yesButtonAnimate = ref<boolean>(false);
const noButtonAnimate = ref<boolean>(false);

let currentAnswer = "no";
function onNoClicked() {
  noButtonAnimate.value = false;
  noButtonAnimate.value = true;
  setTimeout(() => {
    noButtonAnimate.value = false;
  }, 700);

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
  yesButtonAnimate.value = false;
  yesButtonAnimate.value = true;
  setTimeout(() => {
    yesButtonAnimate.value = false;
  }, 700);

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

let scrollStartY: number | null = null;
let scrollEndY: number | null = null;

function onSwipeStart(e: TouchEvent) {
  swipeStartX = e.touches[0].clientX;
  scrollStartY = e.touches[0].clientY;
}

function onSwipeMove(e: TouchEvent) {
  if (swipeStartX == null) {
    return;
  }
  swipeEndX = e.touches[0].clientX;
  scrollEndY = e.touches[0].clientY;
}

function onSwipeEnd() {
  if (
    swipeStartX == null ||
    swipeEndX == null ||
    scrollStartY == null ||
    scrollEndY == null
  ) {
    return;
  }
  const scrollDistance = scrollEndY - scrollStartY;
  const diff = swipeEndX - swipeStartX;
  if (diff > 10 && Math.abs(scrollDistance) < Math.abs(diff)) {
    onYesClicked();
  } else if (diff < -10 && Math.abs(scrollDistance) < Math.abs(diff)) {
    onNoClicked();
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
  <page-title title="Discover" subtitle="今日の気分は?" />
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
        class="card-space"
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
    <div class="full-width row button-container">
      <div class="col">
        <div :class="{ animate: noButtonAnimate }" class="bubbly-button-no">
          <q-btn
            round
            dense
            icon="close"
            class="close-button"
            size="28px"
            @click="onNoClicked"
          />
        </div>
      </div>
      <div class="col">
        <div :class="{ animate: yesButtonAnimate }" class="bubbly-button">
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
  </div>
  <div v-else>質問の取得に失敗しました</div>
</template>

<style scoped lang="scss">
.button-container {
  max-width: 340px;
  margin-top: 16px;
}
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
  padding: 16px;
  position: absolute;
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
}
.card-space {
  visibility: hidden;
  max-width: 372px;
  width: 100%;
}
</style>
