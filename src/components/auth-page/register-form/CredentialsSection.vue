<script setup lang="ts">
import WbInputText from '@/components/webkit/WbInputText.vue'
import WbPassword from '@/components/webkit/WbPassword.vue'
import { reactive, computed } from 'vue'
import useVuelidate from '@vuelidate/core'
import { helpers, required, email, minLength, maxLength, sameAs } from '@vuelidate/validators'
import { mobilePhoneRule, passwordRule, uniqueUserIdentifierRule } from '@/utils/custom-validations.ts'
import Button from 'primevue/button'
import Divider from 'primevue/divider'
import { useRouter } from 'vue-router'
import WbInputMask from '@/components/webkit/WbInputMask.vue'

/** Component States */
const payload = reactive({
  email: null,
  mobile_number: null,
  password: null,
  password_confirmation: null,
})
const router = useRouter()

/** Events */
const emits = defineEmits(['nextButtonClicked'])

/** Form Validation */
const formRules = {
  $lazy: true,
  email: {
    required: helpers.withMessage('Please enter your email address', required),
    email: helpers.withMessage('Email format is invalid', email),
    unique: helpers.withAsync(helpers.withMessage('This email is already taken', uniqueUserIdentifierRule('email'))),
  },
  mobile_number: {
    unique: helpers.withAsync(
      helpers.withMessage('This mobile number is already taken', uniqueUserIdentifierRule('mobile_number'))
    ),
    mobile_number: helpers.withMessage('Must be a valid PH mobile number', mobilePhoneRule()),
  },
  password: {
    required: helpers.withMessage('Please enter your password', required),
    minLength: helpers.withMessage('Must be at least 8 characters long', minLength(8)),
    maxLength: helpers.withMessage('Must be a maximum of 50 characters', maxLength(50)),
    password: helpers.withMessage('Must include at least one number, and one uppercase and lowercase letter', passwordRule()),
  },
  password_confirmation: {
    required: helpers.withMessage('Please confirm your password', required),
    sameAsPassword: helpers.withMessage('Must match the password field', sameAs(computed(() => payload.password))),
  },
}

/** Handle Next Section */
const validator = useVuelidate(formRules, payload)
const handleNextSection = async () => {
  const valid = await validator.value.$validate()
  if (!valid) return false
  emits('nextButtonClicked')
}
</script>
<template>
  <div class="flex flex-col gap-4">
    <!-- Start Email and Mobile Number -->
    <div class="flex gap-4">
      <WbInputText
        v-model="payload.email"
        placeholder="you@example.com"
        label="Email or mobile number"
        :invalid="validator.email.$invalid"
        :invalid-text="validator.email.$errors[0]?.$message"
        @blur="validator.email.$touch"
        @focusin="validator.email.$dirty = false"
      >
        <template #prepend-icon>
          <i class="pi pi-envelope text-surface-500" />
        </template>
      </WbInputText>
      <WbInputMask
        v-model="payload.mobile_number"
        label="Mobile Number"
        mask="+63 999 999 9999"
        placeholder="+63 XXX XXX XXXX"
        :invalid="validator.mobile_number.$invalid"
        :invalid-text="validator.mobile_number.$errors[0]?.$message"
        @blur="validator.mobile_number.$touch"
        @focusin="validator.mobile_number.$dirty = false"
      >
        <template #prepend-icon>
          <i class="pi pi-phone text-surface-500" />
        </template>
      </WbInputMask>
    </div>
    <!-- End Email and Mobile Number -->
    <!-- Start Password and Password Confirmation -->
    <div class="flex gap-4">
      <WbPassword
        v-model="payload.password"
        label="Password"
        toggleMask
        :invalid="validator.password.$invalid"
        :invalid-text="validator.password.$errors[0]?.$message"
        @blur="validator.password.$touch"
        @focusin="validator.password.$dirty = false"
      >
        <template #prepend-icon>
          <i class="pi pi-lock text-surface-500" />
        </template>
        <template #footer-panel>
          <Divider />
          <p class="mb-2 font-bold">Requirements</p>
          <ul class="ml-2 pl-2 font-normal">
            <li class="mb-1">At least one lowercase</li>
            <li class="mb-1">At least one uppercase</li>
            <li class="mb-1">At least one numeric</li>
            <li class="mb-1">Minimum 8 characters</li>
          </ul>
        </template>
      </WbPassword>
      <WbPassword
        v-model="payload.password_confirmation"
        label="Confirm Password"
        :feedback="false"
        toggleMask
        :invalid="validator.password_confirmation.$invalid"
        :invalid-text="validator.password_confirmation.$errors[0]?.$message"
      >
        <template #prepend-icon>
          <i class="pi pi-lock text-surface-500" />
        </template>
      </WbPassword>
    </div>
    <!-- End Password and Password Confirmation -->
    <!-- Start Action Buttons -->
    <div class="mt-4 flex justify-between">
      <Button @click="router.push({ name: 'login' })" label="Login instead" size="large" severity="secondary" class="px-6" />
      <Button @click="handleNextSection" label="Next" size="large" class="px-10">
        <template #icon>
          <i class="pi pi-arrow-right mr-2"></i>
        </template>
      </Button>
    </div>
    <!-- End Action Buttons -->
  </div>
</template>
