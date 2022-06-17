<script setup lang="ts">
import Icon from "../assets/fooder_icon.png";
</script>

<template>
  <q-header>
    <q-toolbar class="max-width">
      <q-avatar square>
        <img :src="Icon" />
      </q-avatar>
      <q-toolbar-title class="do-hyeon title"> Fooder </q-toolbar-title>

      <q-btn flat round dense icon="question_mark" />
    </q-toolbar>
  </q-header>
</template>

<style scoped>
.title {
  font-size: 30px;
}

.max-width {
  max-width: calc(600px - 32px);
  margin: auto;
}
</style>
