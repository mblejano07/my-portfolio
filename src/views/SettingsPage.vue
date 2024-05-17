<script setup lang="ts">
import Card from 'primevue/card'
import ThemeConfigCard from '@/components/settings-page/ThemeConfigCard.vue'
import MfaConfigCard from '@/components/settings-page/MfaConfigCard.vue'
import { useSettingsStore } from '@/stores/settings.store.ts'

const settingsStore = useSettingsStore()
</script>

<template>
  <div class="mx-auto h-[100%] w-full">
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
      <MfaConfigCard v-if="settingsStore.mfaIsConfigurable" />
      <ThemeConfigCard />
      <!-- Start Placeholder -->
      <Card class="flex h-80 items-center justify-center">
        <template #content>
          <div class="flex flex-col items-center justify-center text-center text-surface-700 dark:text-surface-400">
            <i class="pi pi-cog mb-2 text-2xl"></i>
            <h1 class="font-menu">More Configurations Coming Soon...</h1>
          </div>
        </template>
      </Card>
      <!-- End Placeholder -->
    </div>
  </div>
</template>
