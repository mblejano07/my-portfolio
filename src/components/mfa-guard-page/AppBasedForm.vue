<script setup lang="ts">
import InputOtp from 'primevue/inputotp'
import { ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Button from 'primevue/button'

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
        Enter the six-digit code shown in your {{ props.mfaName }} app to proceed.
      </p>
    </div>
    <!-- End Form Caption -->
    <!-- Start Code Input -->
    <div class="mt-4 flex justify-center">
      <InputOtp v-model="mfaCode" :length="6" style="gap: 0">
        <template #default="{ attrs, events, index }">
          <input type="text" v-bind="attrs" v-on="events" class="otp-input" />
          <div v-if="index === 3" class="px-3">
            <i class="pi pi-minus" />
          </div>
        </template>
      </InputOtp>
    </div>
    <!-- End Code Input -->
    <!-- Start Action Buttons -->
    <div class="mt-6 flex flex-col items-start justify-between gap-y-4 md:flex-row lg:mt-8">
      <div class="mt-4 flex w-full flex-col sm:items-start md:mt-0">
        <Button @click="() => console.log('backup codes')" severity="secondary" label="Use Backup Code" class="w-full sm:w-fit">
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
