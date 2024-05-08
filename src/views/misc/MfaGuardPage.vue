<script setup lang="ts">
import InputOtp from 'primevue/inputotp'
import AnimatedFloaters from '@/components/misc/AnimatedFloaters.vue'
import AppLogo from '@/components/layout/AppLogo.vue'
import Button from 'primevue/button'
import Card from 'primevue/card'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth.store.ts'
import { useToast } from 'primevue/usetoast'
import Message from 'primevue/message'
import { ApiErrorCode } from '@/typings/http-resources.types.ts'

// Handle Logout
const router = useRouter()
const isLoggingOut = ref(false)
const authStore = useAuthStore()
const handleLogout = async () => {
  isLoggingOut.value = true
  await authStore.logout()
  isLoggingOut.value = false
  await router.replace({ name: 'login' })
}

// Handle MFA code verification
const mfaCode = ref<string>('')
const mfaCodeIsBeingVerified = ref(false)
const showIncorrectMfaCodeAlert = ref(false)
const handleMfaCodeVerification = async () => {
  mfaCodeIsBeingVerified.value = true
  const response = await authStore.verifyMfaCode(mfaCode.value)
  mfaCodeIsBeingVerified.value = false

  if (!response.success && response.error_code !== ApiErrorCode.TOO_MANY_REQUESTS_ERROR) {
    return toast.add({
      severity: 'error',
      summary: 'Multi-Factor Authentication',
      detail: 'The OTP entered is incorrect',
      life: 5000,
    })
  }
}

// Handle MFA code delivery lockout
// Prevent the user from submitting too many OTPs
const resendMfaCodeButtonIsLocked = ref(false)
const resendMfaCodeButtonTimer = ref(60)
let resendMfaCodeButtonTimerId: NodeJS.Timeout | undefined = undefined

const resetResendMfaCodeButtonLock = () => {
  clearInterval(resendMfaCodeButtonTimerId)
  resendMfaCodeButtonIsLocked.value = false
  resendMfaCodeButtonTimer.value = 60
}

const toast = useToast()
const mfaCodeIsBeingResent = ref(false)
const handleResendMfaCode = async () => {
  if (resendMfaCodeButtonIsLocked.value) return

  mfaCodeIsBeingResent.value = true
  const response = await authStore.resendMfaCode()
  mfaCodeIsBeingResent.value = false

  // If it's a validation error, then the email is incorrect (or someone is trying to guess an email)
  if (!response.success) {
    return toast.add({
      severity: 'error',
      summary: 'Multi-Factor Authentication',
      detail: 'Unable to resend OTP',
      life: 5000,
    })
  }

  toast.add({
    severity: 'success',
    summary: 'Multi-Factor Authentication',
    detail: "We've sent you another OTP",
    life: 5000,
  })

  // Lock the send email button for 60 seconds
  resendMfaCodeButtonIsLocked.value = true
  resendMfaCodeButtonTimerId = setInterval(async () => {
    resendMfaCodeButtonTimer.value -= 1
    if (resendMfaCodeButtonTimer.value <= 0) {
      resetResendMfaCodeButtonLock()
    }
  }, 1000)
}
</script>

<template>
  <div class="flex h-full w-full justify-center bg-gradient-to-b from-warn-500 to-warn-900 lg:mx-0">
    <!-- Start MFA Code Incorrect Alert Message -->
    <transition enter-active-class="transition duration-200" enter-from-class="scale-50 opacity-0" leave-to-class="opacity-0">
      <Message v-if="showIncorrectMfaCodeAlert" :closable="false" severity="error" class="mx-4 mb-6 md:mx-0">
        <span>You've entered an invalid OTP Code</span>
      </Message>
    </transition>
    <!-- End MFA Code Incorrect Alert Message -->

    <div class="relative z-10 min-w-[96%] md:min-w-[65%] lg:min-w-[50%]">
      <!-- Start Header Icon -->
      <div
        class="absolute left-1/2 top-6 hidden h-28 w-28 -translate-x-1/2 transform items-center justify-center rounded-full bg-primary-500 lg:flex"
      >
        <FontAwesomeIcon icon="fa-solid fa-lock" class="h-16 text-surface-0"></FontAwesomeIcon>
      </div>
      <!-- End Header Icon -->
      <Card class="mt-4 ring-2 ring-primary-500 md:mt-8 lg:mt-16">
        <template #content>
          <div class="mx-2 flex flex-col items-center">
            <div class="mb-8 flex w-full items-center justify-between">
              <AppLogo />
              <Button
                label="Logout"
                text
                size="small"
                @click="handleLogout"
                :loading="isLoggingOut"
                :disabled="isLoggingOut"
                class="text-xs"
              >
                <template #icon><i class="pi pi-arrow-left mr-2 hidden md:block" /></template>
              </Button>
            </div>
            <h1 class="self-start font-menu text-xl text-surface-800 dark:text-surface-100">Multi-Factor Authentication</h1>
            <div class="flex w-full flex-col text-surface-600">
              <p class="my-2 text-sm leading-relaxed dark:text-surface-100">
                Please enter the six digit one-time-password to proceed
              </p>
              <div class="mt-4 flex justify-center">
                <InputOtp v-model="mfaCode" :length="6" style="gap: 0">
                  <template #default="{ attrs, events, index }">
                    <input type="text" v-bind="attrs" v-on="events" class="custom-otp-input" />
                    <div v-if="index === 3" class="px-3">
                      <i class="pi pi-minus" />
                    </div>
                  </template>
                </InputOtp>
              </div>
              <!-- Start Action Buttons -->
              <div class="mt-6 flex flex-col items-start justify-between gap-y-4 md:flex-row lg:mt-8">
                <div class="mt-4 flex w-full flex-col sm:items-start md:mt-0">
                  <Button
                    :disabled="resendMfaCodeButtonIsLocked"
                    :loading="mfaCodeIsBeingResent"
                    @click="handleResendMfaCode"
                    severity="secondary"
                    label="Re-send OTP"
                    class="w-full sm:w-fit"
                  >
                    <template #icon>
                      <FontAwesomeIcon icon="fa-solid fa-paper-plane" class="mr-2" />
                    </template>
                  </Button>
                  <p
                    v-if="resendMfaCodeButtonIsLocked"
                    class="mt-1 text-center text-xs italic text-surface-600 sm:mt-3 lg:text-sm"
                  >
                    You can send again after <span class="font-bold">{{ resendMfaCodeButtonTimer }}</span> seconds
                  </p>
                </div>
                <Button
                  :loading="mfaCodeIsBeingVerified"
                  @click="handleMfaCodeVerification"
                  label="Verify Code"
                  class="w-full sm:w-40"
                >
                  <template #icon>
                    <FontAwesomeIcon icon="fa-solid fa-key" class="mr-2" />
                  </template>
                </Button>
              </div>
              <!-- End Action Buttons -->
            </div>
          </div>
        </template>
      </Card>
    </div>
    <AnimatedFloaters class="opacity-75" />
  </div>
</template>
<style scoped>
.custom-otp-input {
  width: 48px;
  height: 48px;
  font-size: 24px;
  appearance: none;
  text-align: center;
  border-radius: 0;
  border: 1px solid rgb(var(--surface-400));
  background: transparent;
  outline-offset: -2px;
  outline-color: transparent;
  border-right: 0 none;
  transition: outline-color 0.3s;
  color: var(--text-color);
}

.custom-otp-input:focus {
  outline: 2px solid rgb(var(--primary-500));
}

.custom-otp-input:first-child,
.custom-otp-input:nth-child(5) {
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
}

.custom-otp-input:nth-child(3),
.custom-otp-input:last-child {
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  border-right-width: 1px;
  border-right-style: solid;
  border-color: rgb(var(--surface-400));
}
</style>
