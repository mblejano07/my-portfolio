<template>
  <div id="app-container" class="font-content flex bg-surface-200 tracking-wide md:h-screen">
    <AppSideBar class="col w-64"></AppSideBar>
    <div class="flex flex-grow flex-col">
      <AppMenu />
      <!-- Start Main Content -->
      <div class="mt-4 flex-grow">
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
      <AppFooter></AppFooter>
      <!-- End Footer -->
    </div>
  </div>
</template>
<script setup lang="ts">
import AppFooter from '@/components/MainFooter.vue'
import AppMenu from '@/components/MainToolbar.vue'
import AppSideBar from '@/components/MainSidebar.vue'
</script>
