<script setup lang="ts">
import AnimatedFloaters from '@/components/misc/AnimatedFloaters.vue'
import LoginForm from '@/components/auth-page/LoginForm.vue'
import { useRoute } from 'vue-router'
import { computed, onMounted, ref, watch } from 'vue'
import RegisterForm from '@/components/auth-page/register-form/RegisterForm.vue'
import { useAuthStore } from '@/stores/auth.store.ts'

/** We either show the Login Form or the Create Account Form based on the route */
const route = useRoute()
const showLogin = ref(true)

// We check route when DOM mounts
onMounted(() => {
  showLogin.value = route.name === 'login' ? (showLogin.value = true) : (showLogin.value = false)
})

// We toggle background color of the Webkit text on the left side based on form errors and warnings
const formHasError = ref(false)
const formHasWarning = ref(false)

// We also watch for route changes
watch(
  () => route.name,
  (name) => {
    showLogin.value = name === 'login'
    formHasError.value = false
    formHasWarning.value = false
  }
)

// Handle Login Expiration
const authStore = useAuthStore()
const showLoginExpiredAlert = computed(() => {
  return authStore.authExpired
})
</script>

<template>
  <div class="relative flex min-h-screen">
    <AnimatedFloaters class="lg:hidden" />
    <div class="flex min-w-0 flex-auto flex-col items-center lg:flex-row">
      <div
        :class="`bg-primary-900 text-surface-0 relative hidden h-full flex-auto items-center justify-center overflow-hidden p-10 transition-colors duration-500 md:hidden lg:flex ${
          formHasWarning || showLoginExpiredAlert ? '!bg-warn-500' : ''
        } ${formHasError ? '!bg-error-500' : ''}`"
      >
        <div
          :class="`from-primary-500 to-primary-900 dark:from-primary-900 dark:to-primary-950 absolute inset-0 z-0 bg-gradient-to-b transition-colors duration-500 ${
            formHasWarning || showLoginExpiredAlert ? '!from-warn-500 !to-warn-900 dark:!from-warn-800' : ''
          } ${formHasError ? '!from-error-500 !to-error-900 dark:!from-error-800' : ''}`"
        ></div>
        <!-- Start Webkit Text -->
        <div :class="`z-10 w-full max-w-md ${formHasError || formHasWarning || showLoginExpiredAlert ? 'animate-shake' : ''}`">
          <div class="font-menu dark:text-surface-0 mb-6 leading-tight font-bold sm:text-4xl xl:text-5xl">Webkit (Prime)</div>
          <div class="xl:text-md text-surface-200 dark:text-surface-0 font-normal sm:text-sm">
            Nipper holystone six pounders barkadeer rutters Privateer hail-shot warp black spot fore. Knave six pounders
            quarterdeck crack Jennys tea cup starboard aye league lass Sink me heave down.
          </div>
        </div>
        <!-- End Webkit Text -->
        <AnimatedFloaters class="hidden lg:flex" />
      </div>
      <div
        :class="`from-primary-500 to-primary-900 dark:from-primary-900 dark:to-primary-950 lg:from-surface-0 lg:to-surface-0 dark:lg:from-surface-950 dark:lg:to-surface-950 h-full w-full bg-gradient-to-b p-8 transition-all duration-500 sm:w-auto md:rounded-none lg:flex lg:h-full lg:items-center lg:justify-center lg:bg-gradient-to-b lg:p-10 xl:p-14 ${showLogin ? 'md:w-[100%] md:px-16 lg:w-[40%]' : 'md:w-[100%] md:px-16 lg:w-[60%]'}`"
      >
        <!-- Start Login Form -->
        <transition
          enter-active-class="transition duration-500"
          enter-from-class="translate-y-40 opacity-0"
          leave-active-class="opacity-0"
          leave-to-class="opacity-0"
        >
          <template v-if="showLogin">
            <LoginForm
              class="mt-6 w-full lg:mt-0"
              @on-credentials-error="formHasError = true"
              :show-login-expired-alert="showLoginExpiredAlert"
            />
          </template>
          <template v-else>
            <RegisterForm class="mt-6 w-full lg:mt-0" />
          </template>
        </transition>
        <!-- End Login Form -->
      </div>
    </div>
  </div>
</template>
