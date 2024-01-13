<script setup lang="ts">
import AppLogo from '@/components/AppLogo.vue'
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const navItems = ref([
  {
    group: 'home',
    links: [
      { label: 'Dashboard', icon: 'pi pi-desktop', route: 'dashboard' },
      { label: 'Profile Information', icon: 'pi pi-id-card', route: 'profile' },
      { label: 'Announcements', icon: 'pi pi-megaphone', route: 'announcements' },
    ],
  },
  {
    group: 'admin tools',
    links: [
      { label: 'Manage Users', icon: 'pi pi-users', route: 'user-management' },
      { label: 'Settings', icon: 'pi pi-cog', route: 'settings' },
    ],
  },
  {
    group: 'misc',
    links: [
      { label: 'Help & Support', icon: 'pi pi-phone', route: 'support' },
      { label: 'About Us', icon: 'pi pi-heart', route: 'about-us' },
    ],
  },
])
</script>

<template>
  <div class="h-100% flex flex-col bg-surface-0">
    <!-- Start Logo -->
    <div class="flex justify-center border-b border-surface-200 px-12 py-6">
      <AppLogo />
    </div>
    <!-- End Logo -->
    <!-- Start Nav Items -->
    <aside class="flex flex-col overflow-y-auto bg-surface-0 px-5 pt-4 dark:border-gray-700 dark:bg-gray-900">
      <div class="flex flex-1 flex-col justify-between">
        <nav class="-mx-3 space-y-6">
          <div v-for="item in navItems" :key="item.group" class="space-y-3">
            <label class="px-3 text-xs uppercase dark:text-gray-400">
              {{ item.group }}
            </label>
            <RouterLink
              as="div"
              v-for="link in item.links"
              :key="link.label"
              :to="{ name: link.route }"
              :class="`flex transform items-center rounded-lg px-3 py-2 transition-colors duration-300 hover:bg-surface-200 hover:text-surface-900 ${
                route.name === link.route ? 'bg-surface-200' : ''
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
