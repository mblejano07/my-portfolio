<script setup lang="ts">
import AppFooter from '@/components/layout/AppFooter.vue'
import AppDesktopToolbar from '@/components/layout/app-toolbar/AppDesktopToolbar.vue'
import AppDesktopSidebar from '@/components/layout/app-sidebar/AppDesktopSidebar.vue'
import { useGlobalStore } from '@/stores/ui.ts'
import { useRoute } from 'vue-router'
import { onBeforeMount } from 'vue'
import { useAuthStore } from '@/stores/auth.ts'
import { useProfileStore } from '@/stores/profile.ts'
import AppMobileToolbar from '@/components/layout/app-toolbar/AppMobileToolbar.vue'
import Toast from 'primevue/toast'

const globalStore = useGlobalStore()
const authStore = useAuthStore()
const profileStore = useProfileStore()
const route = useRoute()

onBeforeMount(async () => {
  // Rehydrate profile info on reload if there is an authenticated user
  if (authStore.isAuthenticated && authStore.authenticatedUser.email_verified_at) {
    await profileStore.fetchProfile()
  }
})
</script>

<template>
  <div id="app-container" class="flex min-h-screen bg-surface-200 font-content">
    <Toast />
    <!-- Start Sidebar -->
    <AppDesktopSidebar
      v-if="!route.meta.hideNavigation"
      :class="`${
        !globalStore.sidebarMinimized ? 'w-[20%]' : 'w-[0%] -translate-x-96 transform'
      } hidden overflow-hidden transition-all duration-200 lg:flex`"
    ></AppDesktopSidebar>
    <!-- End Sidebar -->
    <div class="flex flex-1 flex-col">
      <AppDesktopToolbar v-if="!route.meta.hideNavigation" class="hidden lg:flex" />
      <AppMobileToolbar v-if="!route.meta.hideNavigation" class="lg:hidden" />
      <!-- Start Main Content -->
      <div :class="`${route.meta.hideNavigation ? '' : 'mx-4 mt-4 lg:mt-0'} flex-1`">
        <RouterView v-slot="{ Component }">
          <transition
            enter-active-class="transition duration-500"
            enter-from-class="translate-x-[20%] opacity-0"
            leave-to-class="opacity-0"
          >
            <component :is="Component" />
          </transition>
        </RouterView>
      </div>
      <!-- End Main Content -->
      <!-- Start Footer -->
      <AppFooter v-if="!route.meta.hideNavigation"></AppFooter>
      <!-- End Footer -->
    </div>
  </div>
</template>
