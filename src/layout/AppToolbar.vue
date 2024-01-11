<template>
  <Toolbar
    :pt="{
      root: {
        class: [
          // Flex & Alignment
          'flex items-center justify-between flex-wrap',
          'gap-6',

          // Spacing
          'px-6 py-6',
          'min-h-[4rem]',

          // Color
          'bg-surface-200 dark:bg-surface-900',
        ],
      },
    }"
  >
    <template #start>
      <WbLogo v-if="globalStore.sidebarMinimized" icon-only class="mr-4"></WbLogo>
      <Button
        icon="pi pi-th-large"
        severity="secondary"
        text
        rounded
        aria-label="Menu"
        class="mr-4 hover:text-primary-500"
        @click="globalStore.toggleSidebar()"
      />
      <WbBreadcrumbs />
    </template>

    <template #end>
      <span class="relative mr-4">
        <i class="pi pi-search absolute left-3 top-2/4 -mt-2 text-surface-400 dark:text-surface-600" />
        <InputText placeholder="Search" class="pl-10" />
      </span>
      <Avatar image="https://i.pravatar.cc/300" shape="circle" class="overflow-hidden" />
    </template>
  </Toolbar>
</template>

<script setup lang="ts">
import Toolbar from 'primevue/toolbar'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import WbBreadcrumbs from '@/components/webkit/WbBreadcrumbs.vue'
import { useGlobalStore } from '@/stores/global.ts'
import WbLogo from '@/components/webkit/WbLogo.vue'

const globalStore = useGlobalStore()
</script>
