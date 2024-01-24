<script setup lang="ts">
import Toolbar from 'primevue/toolbar'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import WbBreadcrumbs from '@/components/layout/AppBreadcrumbs.vue'
import Menu from 'primevue/menu'
import { useGlobalStore } from '@/stores/global.ts'
import AppLogo from '@/components/layout/AppLogo.vue'
import { useAuthStore } from '@/stores/auth.ts'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { MenuItem } from 'primevue/menuitem'

const globalStore = useGlobalStore()
const authStore = useAuthStore()
const router = useRouter()

/** Avatar Menu */
const avatarMenu = ref()
const avatarMenuItems = ref<MenuItem[]>([
  {
    label: 'Profile',
    items: [
      {
        label: 'My Information',
        icon: 'pi pi-id-card',
      },
      {
        label: 'Logout',
        icon: 'pi pi-sign-out',
        command: async () => {
          await handleLogout()
        },
      },
    ],
  },
])

const toggleAvatarMenu = (event: Event) => {
  avatarMenu.value.toggle(event)
}

const handleLogout = async () => {
  await authStore.logout()
  await router.replace({ name: 'login' })
}
</script>

<template>
  <Toolbar class="min-h-[4rem] bg-surface-200 px-6 py-6 shadow-none ring-0">
    <template #start>
      <AppLogo v-if="globalStore.sidebarMinimized" icon-only class="mr-4"></AppLogo>
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
      <!-- Start Profile Section -->
      <template v-if="authStore.isAuthenticated">
        <Avatar
          :image="authStore.authenticatedUser.user_profile?.profile_picture_url"
          shape="circle"
          class="cursor-pointer overflow-hidden transition-transform hover:scale-105 hover:ring-1 hover:ring-primary-500"
          :label="`${
            !authStore.authenticatedUser.user_profile?.profile_picture_url ? authStore.avatarDisplayNamePlaceholder : ''
          }`"
          @click="toggleAvatarMenu"
          aria-haspopup="true"
          aria-controls="avatar-menu"
        />
        <Menu ref="avatarMenu" id="avatar-menu" :model="avatarMenuItems" :popup="true" />
      </template>
      <!-- End Profile Section -->
    </template>
  </Toolbar>
</template>
