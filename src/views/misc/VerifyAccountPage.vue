<script setup lang="ts">
import Card from 'primevue/card'
import Button from 'primevue/button'
import AppLogo from '@/components/layout/AppLogo.vue'
import AnimatedFloaters from '@/components/misc/AnimatedFloaters.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth.ts'
import Tag from 'primevue/tag'
import { ref } from 'vue'

/** Component States */
const activeStep = ref(0)

// Handle Logout
const router = useRouter()
const authStore = useAuthStore()
const handleLogout = async () => {
  await authStore.logout()
  await router.replace({ name: 'login' })
}
</script>

<template>
  <div class="flex h-full justify-center bg-gradient-to-b from-primary-500 to-primary-900 ring-2 ring-red-100 lg:mx-0">
    <div class="relative z-10">
      <!-- Start Header Icon -->
      <div
        class="absolute left-1/2 top-6 hidden h-28 w-28 -translate-x-1/2 transform items-center justify-center rounded-full bg-surface-0 ring-2 ring-primary-500 lg:flex"
      >
        <FontAwesomeIcon icon="fa-solid fa-user-astronaut" class="h-16 text-primary-500"></FontAwesomeIcon>
      </div>
      <!-- End Header Icon -->
      <Card class="mx-4 mt-4 ring-2 ring-primary-500 md:mx-4 md:mt-8 lg:mt-16">
        <template #content>
          <div class="mx-2 flex max-w-2xl flex-col items-center">
            <div class="mb-8 flex w-full items-center justify-between">
              <AppLogo />
              <Button label="Logout" text size="small" @click="handleLogout" class="text-xs">
                <template #icon><i class="pi pi-arrow-left mr-2 hidden md:block" /></template>
              </Button>
            </div>
            <div class="flex items-center self-start font-menu text-xl text-surface-800">
              Verify Your Account
              <Tag class="ml-3 h-fit">{{ activeStep + 1 + '/3' }}</Tag>
            </div>
            <!-- Start 1st Section (Instructions) -->
            <div class="mt-2 flex w-full flex-col text-surface-600">
              <p class="text-sm leading-relaxed md:mt-2">
                In order to proceed further and secure your account, you will need to set-up your profile information and change
                your password.
              </p>
              <!-- Start Action Buttons -->
              <div class="mt-6 flex flex-col justify-end md:flex-row lg:mt-8">
                <div class="mt-4 flex w-full justify-end md:mt-0">
                  <Button label="Next">
                    <template #icon>
                      <i class="pi pi-arrow-right mr-2" />
                    </template>
                  </Button>
                </div>
              </div>
              <!-- End Action Buttons -->
            </div>
            <!-- End 1st Section (Instructions) -->
          </div>
        </template>
      </Card>
    </div>
    <AnimatedFloaters class="opacity-75" />
  </div>
</template>

<style scoped></style>
