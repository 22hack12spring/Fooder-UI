<template>
  <q-layout view="hHh lpr fff" class="shadow-2 rounded-borders note-sans">
    <AppHeaderVue />
    <q-footer class="transparent">
      <q-toolbar-title class="text-secondary footer">
        Powered by
        <a href="http://webservice.recruit.co.jp/" class="text-secondary link">
          ホットペッパー Webサービス
        </a></q-toolbar-title
      >
    </q-footer>

    <q-page-container>
      <q-page class="q-pa-md">
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
</style>
