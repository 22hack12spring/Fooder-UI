<template>
  <q-layout view="hHh lpr fFf" class="shadow-2 rounded-borders note-sans">
    <AppHeader />
    <q-footer elevated>
      <q-toolbar-title>Powered by ホットペッパー Webサービス</q-toolbar-title>
    </q-footer>

    <q-page-container>
      <q-page class="q-pa-md">
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import AppHeader from "./components/AppHeader.vue";
</script>
