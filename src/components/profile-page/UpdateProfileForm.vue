<script setup lang="ts">
import { reactive, ref, watch } from 'vue'
import { useProfileStore, UserProfilePayload } from '@/stores/profile.ts'
import { useAuthStore } from '@/stores/auth.ts'
import useVuelidate from '@vuelidate/core'
import { email, helpers, required, maxLength } from '@vuelidate/validators'
import { digitCountRule, mobilePhoneRule, uniqueUserIdentifierRule } from '@/utils/custom-validations.ts'
import { parseApiResponseError } from '@/utils/error-handle.ts'
import { sleep } from '@/utils/helpers.ts'
import { useToast } from 'primevue/usetoast'
import WbInputText from '@/components/webkit/WbInputText.vue'
import WbCalendar from '@/components/webkit/WbCalendar.vue'
import WbDropdown from '@/components/webkit/WbDropdown.vue'
import Button from 'primevue/button'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/** Component States */
const authStore = useAuthStore()
const payload = reactive<Partial<UserProfilePayload>>({
  email: authStore.authenticatedUser?.email,
  mobile_number: authStore.authenticatedUser?.user_profile?.mobile_number || null,
  first_name: authStore.authenticatedUser?.user_profile?.first_name,
  last_name: authStore.authenticatedUser?.user_profile?.last_name,
  middle_name: authStore.authenticatedUser?.user_profile?.middle_name,
  ext_name: authStore.authenticatedUser?.user_profile?.ext_name,
  birthday: authStore.authenticatedUser?.user_profile?.birthday || null,
  sex: authStore.authenticatedUser?.user_profile?.sex || null,
  home_address: authStore.authenticatedUser?.user_profile?.address?.home_address || null,
  city_id: authStore.authenticatedUser?.user_profile?.address?.city?.id || null,
  province_id: authStore.authenticatedUser?.user_profile?.address?.province?.id || null,
  region_id: authStore.authenticatedUser?.user_profile?.address?.region?.id || null,
  postal_code: authStore.authenticatedUser?.user_profile?.address?.postal_code || null,
  barangay_id: authStore.authenticatedUser?.user_profile?.address?.barangay?.id || null,
})
// Start combo and select box options
const genderOptions = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' },
]

/** Form Validation */
const globalStringMaxLength = import.meta.env.VITE_GLOBAL_STRING_MAX_LENGTH
const globalStringMaxLengthRule = helpers.withMessage(
  `Must not exceed ${globalStringMaxLength} characters`,
  maxLength(globalStringMaxLength)
)
const formRules = {
  $lazy: true,
  email: {
    required: helpers.withMessage('Please enter your email address', required),
    email: helpers.withMessage('Email format is invalid', email),
    unique: helpers.withAsync(
      helpers.withMessage('This email is already taken', uniqueUserIdentifierRule('email', authStore.authenticatedUser?.id))
    ),
  },
  mobile_number: {
    mobile_number: helpers.withMessage('Must be a valid PH mobile number', mobilePhoneRule),
    unique: helpers.withAsync(
      helpers.withMessage(
        'This mobile number is already taken',
        uniqueUserIdentifierRule('mobile_number', authStore.authenticatedUser?.id)
      )
    ),
  },
  first_name: {
    required: helpers.withMessage('Please enter your first name', required),
    maxLength: globalStringMaxLengthRule,
  },
  last_name: {
    required: helpers.withMessage('Please enter your last name', required),
    maxLength: globalStringMaxLengthRule,
  },
  middle_name: {
    maxLength: globalStringMaxLengthRule,
  },
  ext_name: {
    maxLength: globalStringMaxLengthRule,
  },
  home_address: {
    maxLength: globalStringMaxLengthRule,
  },
  postal_code: {
    digitCount: helpers.withMessage('Enter your 4-digit zip code', digitCountRule(4)),
  },
}

const validator = useVuelidate<Partial<UserProfilePayload>>(formRules, payload)

/** Handle Form Submission */
const formIsSubmitting = ref(false)
const profileStore = useProfileStore()
const showErrorAlert = ref(false)
const errorMessage = ref<string | null>(null)
const errorDetails = ref<string[]>([])
const toast = useToast()
const handleFormSubmission = async () => {
  const valid = await validator.value.$validate()
  if (!valid) return window.scrollTo({ top: 0, behavior: 'smooth' })
  formIsSubmitting.value = true

  const response = await profileStore.updateProfile(payload)

  // Handle the API error
  if (!response.success) {
    const result = parseApiResponseError(response)
    if (!result) return (formIsSubmitting.value = false)

    showErrorAlert.value = true
    errorMessage.value = result.message
    errorDetails.value = result.errors
    await sleep(0.2)
    formIsSubmitting.value = false
    return window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  formIsSubmitting.value = false
  toast.add({
    severity: 'success',
    summary: 'Update profile',
    detail: "You've successfully updated your profile",
    life: 5000,
  })
}

watch(
  () => payload.sex,
  () => {
    console.log('sex', payload.sex)
  }
)
</script>

<template>
  <form @submit.prevent>
    <div class="flex flex-col gap-4">
      <!-- Start First name and Middle name -->
      <div class="flex flex-col gap-4 md:flex-row">
        <WbInputText
          v-model="payload.first_name"
          label="First name *"
          :invalid="validator.first_name.$invalid"
          :invalid-text="validator.first_name.$errors[0]?.$message"
          label-class="text-xs text-surface-0 lg:text-surface-500"
          validation-error-message-class="text-xs text-error-300 font-bold lg:font-normal lg:text-error-500"
        >
          <template #prepend-icon>
            <i class="pi pi-id-card" />
          </template>
        </WbInputText>
        <WbInputText
          v-model="payload.middle_name"
          label="Middle name"
          :invalid="validator.middle_name.$invalid"
          :invalid-text="validator.middle_name.$errors[0]?.$message"
          label-class="text-xs text-surface-0 lg:text-surface-500"
          validation-error-message-class="text-xs text-error-300 font-bold lg:font-normal lg:text-error-500"
        >
          <template #prepend-icon>
            <i class="pi pi-id-card" />
          </template>
        </WbInputText>
      </div>
      <!-- End First name and Middle name -->
      <!-- Start Last name and Extension name -->
      <div class="flex flex-col gap-4 md:flex-row">
        <WbInputText
          v-model="payload.last_name"
          label="Last name *"
          :invalid="validator.last_name.$invalid"
          :invalid-text="validator.last_name.$errors[0]?.$message"
          label-class="text-xs text-surface-0 lg:text-surface-500"
          validation-error-message-class="text-xs text-error-300 font-bold lg:font-normal lg:text-error-500"
        >
          <template #prepend-icon>
            <i class="pi pi-id-card" />
          </template>
        </WbInputText>
        <WbInputText
          v-model="payload.ext_name"
          label="Ext. name"
          :invalid="validator.ext_name.$invalid"
          :invalid-text="validator.ext_name.$errors[0]?.$message"
          label-class="text-xs text-surface-0 lg:text-surface-500"
          validation-error-message-class="text-xs text-error-300 font-bold lg:font-normal lg:text-error-500"
        >
          <template #prepend-icon>
            <i class="pi pi-id-card" />
          </template>
        </WbInputText>
      </div>
      <!-- End Last name and Extension name -->
      <!-- Start Sex and Birthday -->
      <div class="flex flex-col gap-4 md:flex-row">
        <WbDropdown
          v-model="payload.sex"
          :options="genderOptions"
          optionLabel="label"
          label="Sex"
          label-class="text-xs text-surface-0 lg:text-surface-500"
        >
          <template #prepend-icon>
            <FontAwesomeIcon icon="fa-solid fa-mars-and-venus" />
          </template>
        </WbDropdown>
        <WbCalendar
          v-model="payload.birthday"
          dateFormat="MM dd, yy"
          :maxDate="new Date()"
          label="Birthday"
          label-class="text-xs text-surface-0 lg:text-surface-500"
        >
          <template #prepend-icon>
            <i class="pi pi-gift" />
          </template>
        </WbCalendar>
      </div>
      <!-- End Sex and Birthday -->
      <div class="mt-3 flex justify-end">
        <Button @click="handleFormSubmission" label="Save" :loading="formIsSubmitting" :disabled="formIsSubmitting">
          <template #icon>
            <i class="pi pi-save mr-2"></i>
          </template>
        </Button>
      </div>
    </div>
  </form>
</template>

<style scoped></style>
