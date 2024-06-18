<template>
  <NuxtLoadingIndicator/>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import { useHead } from '#app'

useHead({
  title: 'SneakR Bank'
})
</script>

<style scoped>
/* Vos styles globaux */
</style>