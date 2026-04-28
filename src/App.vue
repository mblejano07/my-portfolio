<script setup lang="ts">
import PortfolioPage from '@/components/portfolio/PortfolioPage.vue'
</script>

<template>
  <div id="app" class="theme-senate min-h-screen" lang="en">
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
    'Source Sans Pro',
    system-ui,
    -apple-system,
    sans-serif;
}

#app {
  min-height: 100vh;
}
</style>
