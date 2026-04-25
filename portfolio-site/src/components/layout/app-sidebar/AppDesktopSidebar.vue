<script setup lang="ts">
import AppLogo from '@/components/layout/AppLogo.vue'
import { RouterLink } from 'vue-router'
import { useSidebarNavLinks } from '@/composables/sidebar.ts'

const { navLinks } = useSidebarNavLinks()
</script>

<template>
  <div class="h-100% bg-surface-0 dark:bg-surface-900 flex flex-col">
    <!-- Start Logo -->
    <div class="border-surface-200 dark:border-surface-900 flex justify-center border-b px-12 py-6">
      <AppLogo />
    </div>
    <!-- End Logo -->
    <!-- Start Nav Items -->
    <aside class="bg-surface-0 dark:border-surface-700 dark:bg-surface-900 flex flex-col overflow-y-auto px-5 pt-4">
      <div class="flex flex-1 flex-col justify-between">
        <nav class="-mx-3 space-y-6">
          <div v-for="item in navLinks" :key="item.group" class="space-y-3">
            <label class="text-surface-600 dark:text-surface-400 px-3 text-xs font-bold uppercase">
              {{ item.group }}
            </label>
            <RouterLink
              as="div"
              v-for="link in item.links"
              :key="link.label"
              :to="{ name: link.name }"
              :class="`hover:bg-primary-100 hover:text-primary-900 dark:text-surface-200 dark:hover:bg-primary-400/70 flex transform items-center rounded-lg px-3 py-2 transition-colors duration-300 ${
                $route.name === link.name ? 'bg-primary-100 text-primary-900 dark:!bg-primary-400/70 dark:!text-surface-200' : ''
              }`"
            >
              <i :class="link.icon"></i>
              <span class="mx-2 text-sm font-medium">{{ link.label }}</span>
            </RouterLink>
          </div>
        </nav>
      </div>
    </aside>
    <!-- End Nav Items -->
  </div>
</template>
