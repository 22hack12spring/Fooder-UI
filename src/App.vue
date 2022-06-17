<template>
  <q-layout view="hHh lpr fFf" class="shadow-2 rounded-borders note-sans">
    <AppHeader />

    <q-page-container>
      <q-page class="q-pa-md container">
        <router-view />
        <q-toolbar-title class="text-secondary footer">
          Powered by
          <a
            href="http://webservice.recruit.co.jp/"
            class="text-secondary link"
          >
            ホットペッパー Webサービス
          </a></q-toolbar-title
        >
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import AppHeader from "./components/AppHeader.vue";
</script>

<style scoped>
.container {
  position: relative;
  padding-bottom: 20px;
}
.footer {
  /* TODO: いい感じの書き方求む */
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 12px;
  padding: 4px;
}

.link {
  text-decoration: none;
}
</style>
