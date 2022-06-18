<template>
  <q-layout view="hHh lpr fff" class="note-sans">
    <AppHeaderVue />
    <q-footer class="transparent">
      <q-toolbar-title class="lt-md text-secondary footer q-py-xs">
        【画像提供：ホットペッパー グルメ】<br />
        Powered by
        <a href="http://webservice.recruit.co.jp/" class="text-secondary link">
          ホットペッパー Webサービス
        </a></q-toolbar-title
      >
      <q-toolbar-title class="gt-sm text-secondary footer q-py-xs">
        【画像提供：ホットペッパー グルメ】 Powered by
        <a href="http://webservice.recruit.co.jp/" class="text-secondary link">
          ホットペッパー Webサービス
        </a></q-toolbar-title
      >
    </q-footer>

    <q-page-container class="page-container">
      <q-page class="q-pa-md page">
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import AppHeaderVue from "./components/AppHeader.vue";
</script>

<style scoped>
.footer {
  font-size: 10px;
}
@media (min-width: 1023px) {
  .footer {
    font-size: 12px;
  }
}

.link {
  text-decoration: none;
}
.page {
  max-width: 600px;
  margin: auto;
}

.page-container {
  overflow: hidden;
}
</style>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

html,
body,
#app {
  font-size: 16px;
}
</style>
