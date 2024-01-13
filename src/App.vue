<script setup lang="ts">
import AppFooter from '@/layout/AppFooter.vue'
import AppToolbar from '@/layout/AppToolbar.vue'
import AppSideBar from '@/layout/AppSidebar.vue'
import { useGlobalStore } from '@/stores/global.ts'
import { useRoute } from 'vue-router'

const globalStore = useGlobalStore()
const route = useRoute()
</script>

<template>
  <div id="app-container" class="flex min-h-screen bg-surface-200 font-content">
    <!-- Start Sidebar -->
    <AppSideBar
      v-if="!route.meta.hideNavigation"
      :class="`${
        !globalStore.sidebarMinimized ? 'w-[20%]' : 'w-[0%] -translate-x-96 transform'
      } overflow-hidden transition-all duration-200`"
    ></AppSideBar>
    <!-- End Sidebar -->
    <div class="flex flex-1 flex-col">
      <AppToolbar v-if="!route.meta.hideNavigation" />
      <!-- Start Main Content -->
      <div :class="`${route.meta.hideNavigation ? '' : 'mx-4 mt-4 '} flex-1`">
        <RouterView v-slot="{ Component }">
          <transition
            enter-active-class="transition duration-300"
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
