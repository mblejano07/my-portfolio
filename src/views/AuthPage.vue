<script setup lang="ts">
import AnimatedFloaters from '@/components/misc/AnimatedFloaters.vue'
import LoginForm from '@/components/auth-page/LoginForm.vue'
import { useRoute } from 'vue-router'
import { onMounted, ref, watch } from 'vue'
import RegisterForm from '@/components/auth-page/register-form/RegisterForm.vue'

/** We either show the Login Form or the Create Account Form based on the route */
const route = useRoute()
const showLogin = ref(true)

// We check route when DOM mounts
onMounted(() => {
  showLogin.value = route.name === 'login' ? (showLogin.value = true) : (showLogin.value = false)
})

// We also watch for route changes
watch(
  () => route.name,
  (name) => (showLogin.value = name === 'login')
)
</script>

<template>
  <div class="relative flex min-h-screen transition">
    <div
      class="flex min-w-0 flex-auto flex-col items-center bg-surface-0 sm:flex-row sm:justify-center md:items-start md:justify-start"
    >
      <div
        class="relative hidden h-full flex-auto items-center justify-center overflow-hidden bg-primary-900 p-10 text-surface-0 sm:w-1/2 md:flex xl:w-3/5"
      >
        <div class="absolute inset-0 z-0 bg-gradient-to-b from-primary-500 to-primary-900 opacity-75"></div>
        <!-- Start Webkit Text -->
        <div class="z-10 w-full max-w-md">
          <div class="mb-6 font-menu font-bold leading-tight sm:text-4xl xl:text-5xl">Webkit (Prime)</div>
          <div class="xl:text-md font-normal text-gray-200 sm:text-sm">
            Nipper holystone six pounders barkadeer rutters Privateer hail-shot warp black spot fore. Knave six pounders
            quarterdeck crack Jennys tea cup starboard aye league lass Sink me heave down.
          </div>
        </div>
        <!-- End Webkit Text -->
        <AnimatedFloaters />
      </div>
      <div
        :class="`h-full w-full bg-surface-0 p-8 transition-all duration-500 sm:w-auto sm:rounded-lg md:flex md:h-full md:items-center md:justify-center md:rounded-none md:p-10 lg:p-14 ${
          showLogin ? 'md:w-2/5' : 'md:w-2/4'
        }`"
      >
        <!-- Start Login Form -->
        <transition
          enter-active-class="transition duration-500"
          enter-from-class="translate-y-40 opacity-0"
          leave-active-class="opacity-0"
          leave-to-class="opacity-0"
        >
          <template v-if="showLogin">
            <LoginForm class="w-full space-y-8" />
          </template>
          <template v-else>
            <RegisterForm class="w-full space-y-8" />
          </template>
        </transition>
        <!-- End Login Form -->
      </div>
    </div>
  </div>
</template>
