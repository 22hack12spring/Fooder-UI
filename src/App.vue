<template>
  <q-layout view="hHh lpr fff" class="note-sans">
    <AppHeaderVue />
    <q-footer class="transparent">
      <q-toolbar-title class="text-secondary footer q-py-xs">
        Powered by
        <a href="http://webservice.recruit.co.jp/" class="text-secondary link">
          ホットペッパー Webサービス
        </a></q-toolbar-title
      >
    </q-footer>

    <q-page-container>
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
  font-size: 12px;
}
.link {
  text-decoration: none;
}
.page {
  max-width: 600px;
  margin: auto;
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
