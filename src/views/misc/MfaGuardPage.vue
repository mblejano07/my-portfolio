<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import AnimatedFloaters from '@/components/misc/AnimatedFloaters.vue'
import AppLogo from '@/components/layout/AppLogo.vue'
import Button from 'primevue/button'
import Card from 'primevue/card'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { useAuthStore } from '@/stores/auth.store.ts'
import { useToast } from 'primevue/usetoast'
import { ApiErrorCode } from '@/typings/http-resources.types.ts'
import { snakeCaseToTitleCase } from '@/utils/helpers.ts'
import DeliveryBasedForm from '@/components/mfa-guard-page/DeliveryBasedForm.vue'
import AppBasedForm from '@/components/mfa-guard-page/AppBasedForm.vue'

/** Handle Logout **/
const router = useRouter()
const isLoggingOut = ref(false)
const authStore = useAuthStore()
const handleLogout = async () => {
  isLoggingOut.value = true
  await authStore.logout()
  isLoggingOut.value = false
  await router.replace({ name: 'login' })
}

/** Handle MFA code verification **/
const toast = useToast()
const handleMfaCodeVerification = async (mfaCode: string) => {
  const response = await authStore.verifyMfaCode(mfaCode)

  if (!response.success && response.error_code !== ApiErrorCode.TOO_MANY_REQUESTS_ERROR) {
    toast.add({
      severity: 'error',
      summary: 'Multi-Factor Authentication',
      detail: 'The OTP entered is incorrect',
      life: 5000,
    })

    return false
  }

  if (!response.success && response.error_code === ApiErrorCode.TOO_MANY_REQUESTS_ERROR) {
    return false
  }

  toast.add({
    severity: 'success',
    summary: 'Multi-Factor Authentication',
    detail: 'OTP verification success',
    life: 3000,
  })

  return true
}

/** Handle MFA Step Management **/
watch(
  () => authStore.mfaSteps,
  (newStep) => {
    console.log('step change', newStep)
  }
)

const totalSteps = computed(() => {
  if (!authStore.mfaSteps) return null

  return authStore.mfaSteps.length
})

const currentStepNumber = computed(() => {
  if (!authStore.mfaSteps) return null

  return authStore.mfaSteps.reduce((count, step) => {
    return count + (step.completed ? 1 : 0)
  }, 1)
})
</script>

<template>
  <div class="flex h-full w-full justify-center bg-gradient-to-b from-warn-500 to-warn-900 lg:mx-0">
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
            <!-- Start MFA Form -->
            <DeliveryBasedForm
              v-if="authStore.currentMfaStep?.type === 'delivery'"
              :mfa-name="snakeCaseToTitleCase(authStore.currentMfaStep?.name ?? '')"
              :steps-status="`(${currentStepNumber}/${totalSteps})`"
              :verify-code="handleMfaCodeVerification"
            />
            <AppBasedForm
              v-else
              :mfa-name="snakeCaseToTitleCase(authStore.currentMfaStep?.name ?? '')"
              :steps-status="`(${currentStepNumber}/${totalSteps})`"
              :verify-code="handleMfaCodeVerification"
            />
            <!-- End MFA Form -->
          </div>
        </template>
      </Card>
    </div>
    <AnimatedFloaters class="opacity-75" />
  </div>
</template>
