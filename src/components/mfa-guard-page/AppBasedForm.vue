<script setup lang="ts">
import InputOtp from 'primevue/inputotp'
import Image from 'primevue/image'
import { onBeforeMount, ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Button from 'primevue/button'
import { useAuthStore } from '@/stores/auth.store.ts'

const props = defineProps({
  mfaName: String,
  stepsStatus: String,
  verifyCode: Function,
})

/** Handle MFA code verification **/
const mfaCode = ref('')
const mfaCodeIsBeingVerified = ref(false)

const handleCodeVerification = async (code: string) => {
  mfaCodeIsBeingVerified.value = true
  let isVerified = false
  if (props.verifyCode) {
    isVerified = await props.verifyCode(code)
  }
  mfaCodeIsBeingVerified.value = false

  if (isVerified) mfaCode.value = ''
}

/** Handle Backup Codes */
const showBackupCodesInput = ref(false)

/** Handle QR Code (and code backups) and OTP input visibility */
const authStore = useAuthStore()
const showQrCode = ref(!authStore.currentMfaStep?.enrolled && !showBackupCodesInput.value)
const showOtpInput = ref(authStore.currentMfaStep?.enrolled && !showBackupCodesInput.value)

const qrCodeBase64 = ref<null | string>(null)
onBeforeMount(async () => {
  if (showQrCode.value) {
    const responseData = await authStore.fetchQrCode()

    if (!responseData) {
      showOtpInput.value = true
      showQrCode.value = false
      return
    }

    qrCodeBase64.value = responseData.qr_code
  }
})
</script>

<template>
  <div class="w-full">
    <!-- Start Form Title -->
    <h1 class="self-start font-menu text-xl text-surface-800 dark:text-surface-100">
      <span>{{ props.stepsStatus }}</span>
      {{ props.mfaName }}: Multi-Factor Authentication
    </h1>
    <!-- End Form Title -->
    <!-- Start Form Caption -->
    <div class="flex w-full flex-col text-surface-600">
      <p class="my-2 text-sm leading-relaxed dark:text-surface-100">
        <span v-if="showOtpInput">
          Enter the six-digit code shown in your <span class="font-bold text-primary-500">{{ props.mfaName }}</span> app to
          proceed.
        </span>
        <span v-if="showQrCode">
          <span class="font-bold">Scan</span> the QR code with the
          <span class="font-bold text-primary-500">{{ props.mfaName }}</span> app.
          <br class="mb-2 sm:mb-0" />
          <span class="font-bold text-primary-500">Important:</span> Backup codes are essential for regaining access. Store them
          securely.
        </span>
      </p>
    </div>
    <!-- End Form Caption -->
    <div class="mt-4 flex justify-center">
      <!-- Start show the QR code first if the user has not enrolled yet -->
      <div v-if="showQrCode">
        <Image :src="qrCodeBase64 || undefined" alt="MFA QR Code" width="250"> </Image>
      </div>
      <!-- End show the QR code first if the user has not enrolled yet -->
      <!-- Start Code Input -->
      <InputOtp v-if="showOtpInput" v-model="mfaCode" :length="6" style="gap: 0">
        <template #default="{ attrs, events, index }">
          <input type="text" v-bind="attrs" v-on="events" class="otp-input" />
          <div v-if="index === 3" class="px-3">
            <i class="pi pi-minus" />
          </div>
        </template>
      </InputOtp>
      <!-- End Code Input -->
    </div>
    <!-- Start Action Buttons -->
    <div class="mt-6 flex flex-col items-start justify-between gap-y-4 md:flex-row lg:mt-8">
      <div class="mt-4 flex w-full flex-col sm:items-start md:mt-0">
        <Button @click="() => (showBackupCodesInput = true)" severity="secondary" label="Use Backup Code" class="w-full sm:w-fit">
          <template #icon>
            <FontAwesomeIcon icon="fa-solid fa-database" class="mr-2" />
          </template>
        </Button>
      </div>
      <Button
        :loading="mfaCodeIsBeingVerified"
        @click="handleCodeVerification(mfaCode)"
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
</template>
