<script setup lang="ts">
import AppFooter from '@/components/layout/AppFooter.vue'
import AppDesktopToolbar from '@/components/layout/app-toolbar/AppDesktopToolbar.vue'
import AppDesktopSidebar from '@/components/layout/app-sidebar/AppDesktopSidebar.vue'
import { useGlobalUiStore } from '@/stores/ui.store.ts'
import { useRoute, useRouter } from 'vue-router'
import { onBeforeMount, watch } from 'vue'
import { useAuthStore } from '@/stores/auth.store.ts'
import { useProfileStore } from '@/stores/profile.store.ts'
import AppMobileToolbar from '@/components/layout/app-toolbar/AppMobileToolbar.vue'
import Toast from 'primevue/toast'
import { useToast } from 'primevue/usetoast'
import ConfirmDialog from 'primevue/confirmdialog'
import Button from 'primevue/button'

const globalStore = useGlobalUiStore()
const authStore = useAuthStore()
const profileStore = useProfileStore()
const route = useRoute()

onBeforeMount(async () => {
  // Rehydrate profile info on reload if there is an authenticated user
  if (authStore.isAuthenticated) {
    await profileStore.fetchProfile()
  }
})

// Observe when the token expires, go to login page with `from` (page) query
const router = useRouter()
watch(
  () => authStore.authExpired,
  async (tokenIsExpired) => {
    if (tokenIsExpired) {
      await router.replace({
        name: 'login',
        query: { from: route.name as string },
      })
    }
  }
)

// Handle for Rate Limit
const uiStore = useGlobalUiStore()
const toast = useToast()
watch(
  () => uiStore.showRateLimitToast,
  () => {
    toast.add({
      severity: 'error',
      summary: 'Too Many Requests',
      detail: 'Please wait for a few moments before trying again.',
      life: 5000,
    })
  }
)
</script>

<template>
  <div id="app-container" class="flex min-h-screen bg-surface-200 font-content">
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
        <!-- Start Global Toast -->
        <Toast position="top-right" />
        <!-- End Global Toast -->
        <!-- Start Global ConfirmDialog -->
        <ConfirmDialog group="global" :draggable="false">
          <template
            #container="{
              message,
              acceptCallback,
              rejectCallback,
            }: {
              message: { message: string; header: string }
              acceptCallback: () => {}
              rejectCallback: () => {}
            }"
          >
            <div class="flex flex-col items-center rounded-lg bg-surface-0 p-5">
              <span class="mb-2 mt-4 text-2xl font-bold text-surface-700">{{ message.header }}</span>
              <p class="my-4">{{ message.message }}</p>
              <div class="mt-4 flex items-center gap-6">
                <Button label="Cancel" severity="secondary" outlined @click="rejectCallback" class="flex w-[8rem] gap-1">
                  <template #icon>
                    <i class="pi pi-times"></i>
                  </template>
                </Button>
                <Button label="Confirm" @click="acceptCallback" class="flex w-[8rem] gap-1">
                  <template #icon>
                    <i class="pi pi-check"></i>
                  </template>
                </Button>
              </div>
            </div>
          </template>
        </ConfirmDialog>
        <!-- End Global Confirm Dialog -->
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
      <AppFooter v-if="!route.meta.hideNavigation" class="mt-6"></AppFooter>
      <!-- End Footer -->
    </div>
  </div>
</template>
