<script setup lang="ts">
import Card from 'primevue/card'
import Button from 'primevue/button'
import AppLogo from '@/components/layout/AppLogo.vue'
import WbInputText from '@/components/webkit/WbInputText.vue'
import { reactive, ref } from 'vue'
import { email, required, helpers } from '@vuelidate/validators'
import useVuelidate from '@vuelidate/core'
import { useAuthStore } from '@/stores/auth.ts'
import { useToast } from 'primevue/usetoast'
import Message from 'primevue/message'
import AnimatedFloaters from '@/components/misc/AnimatedFloaters.vue'

const payload = reactive<{ email: string }>({
  email: '',
})

/** Handle Validation */
const formRules = {
  $lazy: true,
  email: {
    required: helpers.withMessage('Please enter your email address', required),
    email: helpers.withMessage('Please enter a valid email address', email),
  },
}

const validator = useVuelidate<{ email: string }>(formRules, payload)

// Prevent the user from submitting too many emails
const requestPasswordButtonIsLocked = ref(false)
const requestPasswordButtonTimer = ref(60)
let requestPasswordButtonTimerId: NodeJS.Timeout | undefined = undefined
const resetRequestPasswordButtonLock = () => {
  clearInterval(requestPasswordButtonTimerId)
  requestPasswordButtonIsLocked.value = false
  requestPasswordButtonTimer.value = 60
}

// Handle Form Submission
const authStore = useAuthStore()
const formIsLoading = ref(false)
const showErrorAlert = ref(false)
const toast = useToast()
const handleSubmitForm = async () => {
  const valid = await validator.value.$validate()
  if (!valid || requestPasswordButtonIsLocked.value) return

  formIsLoading.value = true
  const response = await authStore.requestForgotPassword(payload.email)
  formIsLoading.value = false

  // If it's a validation error, then the email is incorrect (or someone is trying to guess an email)
  if (!response.success && response.error_code !== 'VALIDATION_ERROR') {
    return (showErrorAlert.value = true)
  }

  toast.add({
    severity: 'success',
    summary: 'Forgot Password',
    detail: "We've sent a password reset link to your email address",
    life: 5000,
  })

  showErrorAlert.value = false

  // Lock the send email button for 60 seconds
  requestPasswordButtonIsLocked.value = true
  requestPasswordButtonTimerId = setInterval(async () => {
    requestPasswordButtonTimer.value -= 1
    if (requestPasswordButtonTimer.value <= 0) {
      resetRequestPasswordButtonLock()
    }
  }, 1000)
}
</script>

<template>
  <div class="flex h-full w-full flex-col items-center bg-gradient-to-b from-primary-500 to-primary-900">
    <!-- Start Alert Message -->
    <transition enter-active-class="transition duration-200" enter-from-class="scale-50 opacity-0" leave-to-class="opacity-0">
      <Message v-if="showErrorAlert" :closable="false" severity="error" class="mb-6">
        <span
          >We were unable to send you a password reset email, please try again in a few moments or contact our support team.</span
        >
      </Message>
    </transition>
    <!-- End Alert Message -->
    <Card class="z-10 mx-4 mt-6 max-w-3xl px-2 md:mx-0 lg:mt-8">
      <template #content>
        <div class="flex flex-col">
          <form autocomplete="off" @submit.prevent>
            <div class="item-center mb-8 flex justify-between">
              <AppLogo />
              <Button label="Back to Login" text size="small" @click="$router.push({ name: 'login' })" class="text-xs">
                <template #icon><i class="pi pi-arrow-left mr-2" /></template>
              </Button>
            </div>
            <div class="mb-8">
              <h1 class="mb-1 font-menu text-lg text-surface-800 sm:text-xl">FORGOT YOUR PASSWORD?</h1>
              <p class="text-sm leading-relaxed text-surface-600">
                Please enter the email you've used to sign-in to the application. If you've entered a valid email address, you
                will receive the reset link in your inbox.
              </p>
            </div>
            <WbInputText
              v-model="payload.email"
              label="Email Address"
              :invalid="validator.email.$invalid"
              :invalid-text="validator.email.$errors[0]?.$message"
            >
            </WbInputText>
            <div class="mt-6 flex w-full flex-col items-end">
              <Button
                label="Submit"
                :loading="formIsLoading"
                :disabled="requestPasswordButtonIsLocked"
                @click="handleSubmitForm"
                class="w-full md:w-auto"
              >
                <template #icon>
                  <i class="pi pi-send mr-2"></i>
                </template>
              </Button>
              <small
                v-if="requestPasswordButtonIsLocked"
                class="mt-4 w-full text-center text-xs italic text-surface-500 md:text-right"
              >
                You can request again after <span class="font-bold">{{ requestPasswordButtonTimer }}</span> seconds
              </small>
            </div>
          </form>
        </div>
      </template>
    </Card>
    <AnimatedFloaters class="opacity-75" />
  </div>
</template>

<style scoped></style>
