<script setup lang="ts">
import Icon from "../assets/fooder_icon.png";
import { RouterLink } from "vue-router";
</script>

<template>
  <q-header>
    <q-toolbar class="max-width">
      <router-link to="/">
        <q-avatar square>
          <img :src="Icon" />
        </q-avatar>
      </router-link>
      <q-toolbar-title class="do-hyeon">
        <router-link to="/" class="title text-white">Fooder</router-link>
      </q-toolbar-title>
      <q-btn flat round dense icon="question_mark" />
    </q-toolbar>
  </q-header>
</template>

<style scoped>
.title {
  font-size: 30px;
  text-decoration: none;
}

.max-width {
  max-width: calc(600px - 32px);
  margin: auto;
}
</style>
