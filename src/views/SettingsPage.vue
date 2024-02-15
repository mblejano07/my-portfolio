<script setup lang="ts">
import AppThemeSelection from '@/components/settings-page/AppThemeSelection.vue'
import Card from 'primevue/card'
</script>

<template>
  <div class="mx-auto h-[100%] w-full">
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
      <AppThemeSelection />
      <!-- Start Placeholder -->
      <Card class="flex items-center justify-center">
        <template #content>
          <div class="flex flex-col items-center justify-center text-surface-700 dark:text-surface-400">
            <i class="pi pi-cog mb-2 text-2xl"></i>
            <h1 class="font-menu">More Configurations Coming Soon...</h1>
          </div>
        </template>
      </Card>
      <!-- End Placeholder -->
    </div>
  </div>
</template>
