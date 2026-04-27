<script setup lang="ts">
import PortfolioPage from '@/components/portfolio/PortfolioPage.vue'
</script>

<template>
  <div id="app" class="min-h-screen">
    <PortfolioPage />
  </div>
</template>

<style>
/* Global app styles */
html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  padding: 0;
  font-family:
    'Inter',
    system-ui,
    -apple-system,
    sans-serif;
}

#app {
  min-height: 100vh;
}
</style>
