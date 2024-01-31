<script setup lang="ts">
import { useAuthStore } from '@/stores/auth.ts'
import { ref } from 'vue'
import Skeleton from 'primevue/skeleton'

const authStore = useAuthStore()
const imageSource = ref(authStore.authenticatedUser?.user_profile?.profile_picture_url)

import { useImage } from '@vueuse/core'

const { isLoading } = useImage({ src: imageSource.value || '' })
</script>

<template>
  <div class="group rounded-md drop-shadow-sm transition-all hover:scale-105">
    <template v-if="imageSource">
      <!-- Start Avatar Input -->
      <div v-if="!isLoading" class="relative h-24 w-24 lg:h-28 lg:w-28">
        <img :src="imageSource" alt="Profile Picture" class="h-full w-full rounded-lg bg-primary-500 object-cover shadow-md" />
        <button
          class="absolute inset-0 hidden h-full w-full items-center justify-center rounded-lg bg-surface-900 opacity-80 group-hover:flex group-hover:cursor-pointer"
        >
          <i class="pi pi-camera text-xl text-surface-0"></i>
        </button>
      </div>
      <!-- End Avatar Input -->
      <!-- Start Avatar Loader -->
      <div v-if="isLoading" class="h-24 w-24 lg:h-28 lg:w-28">
        <Skeleton height="100%" width="100%" />
      </div>
      <!-- End Avatar Loader -->
    </template>
  </div>
</template>
