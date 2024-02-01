<script setup lang="ts">
import Card from 'primevue/card'
import { useAuthStore } from '@/stores/auth.ts'
import { ref } from 'vue'
import WbAvatarFileInput from '@/components/webkit/WbAvatarFileInput.vue'
import UpdateProfileForm from '@/components/profile-page/UpdateProfileForm.vue'

const authStore = useAuthStore()

/** Tab Menu Items */
const profileInfoShown = ref(true)
</script>

<template>
  <div class="mx-auto flex h-[100%] w-full flex-col">
    <Card>
      <template #header>
        <div class="h-2 w-full rounded-t-lg bg-primary-500"></div>
      </template>
      <template #content>
        <div class="flex flex-col px-4">
          <div class="flex items-center">
            <template v-if="authStore.isAuthenticated">
              <WbAvatarFileInput />
            </template>
            <div class="ml-8 flex flex-col text-lg lg:text-2xl">
              <span class="font-bold">{{ authStore.authFullName }}</span>
              <span class="text-xs sm:text-sm">{{ authStore.authFullAddress }}</span>
            </div>
          </div>
        </div>
      </template>
      <template #footer>
        <!-- Start Tab Buttons -->
        <div class="flex justify-center gap-x-1 text-sm md:justify-end">
          <button
            :class="`mr-6 rounded-lg px-2 py-1 transition hover:scale-105 hover:bg-surface-200 ${
              profileInfoShown ? 'bg-surface-200' : ''
            }`"
            @click="profileInfoShown = true"
          >
            Profile Details
          </button>
          <button
            :class="`mr-6 rounded-lg px-2 py-1 transition hover:scale-105 hover:bg-surface-200 ${
              !profileInfoShown ? 'bg-surface-200' : ''
            }`"
            @click="profileInfoShown = false"
          >
            Change Password
          </button>
        </div>
        <!-- End Tab Buttons -->
      </template>
    </Card>
    <Card class="mt-3">
      <template #content>
        <UpdateProfileForm />
      </template>
    </Card>
  </div>
</template>
