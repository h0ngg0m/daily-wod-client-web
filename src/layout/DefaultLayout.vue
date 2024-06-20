<template>
  <v-app-bar title="Daily WOD" class="bg-grey-darken-3"></v-app-bar>

  <v-main class="w-100">
    <slot />
  </v-main>

  <v-footer class="bg-grey-darken-4">Footer</v-footer>
</template>
<script setup lang="ts"></script>
