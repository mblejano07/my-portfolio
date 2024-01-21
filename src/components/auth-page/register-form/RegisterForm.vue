<script setup lang="ts">
import Steps from 'primevue/steps'
import { reactive, ref, computed } from 'vue'
import useVuelidate from '@vuelidate/core'
import { helpers, required, maxLength, email, minLength, sameAs } from '@vuelidate/validators'
import { digitCountRule, passwordRule, mobilePhoneRule, uniqueUserIdentifierRule } from '@/utils/custom-validations.ts'
import CredentialsSection from '@/components/auth-page/register-form/CredentialsSection.vue'
import PersonalSection from '@/components/auth-page/register-form/PersonalSection.vue'
import AddressSection from '@/components/auth-page/register-form/AddressSection.vue'

/** Component States */
const payload = reactive({
  email: null,
  mobile_number: null,
  first_name: null,
  last_name: null,
  middle_name: null,
  ext_name: null,
  birthday: null,
  sex: null,
  password: null,
  password_confirmation: null,
  home_address: null,
  barangay_id: null,
  city_id: null,
  province_id: null,
  region_id: null,
  postal_code: null,
})
const activeStep = ref(2)
const registrationSteps = ref([
  {
    label: 'Credentials',
    icon: 'pi pi-home',
  },
  {
    label: 'Basic Information',
  },
  {
    label: 'Address',
  },
])

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
    unique: helpers.withAsync(helpers.withMessage('This email is already taken', uniqueUserIdentifierRule('email'))),
  },
  mobile_number: {
    unique: helpers.withAsync(
      helpers.withMessage('This mobile number is already taken', uniqueUserIdentifierRule('mobile_number'))
    ),
    mobile_number: helpers.withMessage('Must be a valid PH mobile number', mobilePhoneRule()),
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
  home_address: {
    maxLength: globalStringMaxLengthRule,
  },
  postal_code: {
    digitCount: helpers.withMessage('Enter your 4-digit zip code', digitCountRule(4)),
  },
}
const validator = useVuelidate(formRules, payload)

/** Form Submission */
const handleFormSubmit = async () => {
  const valid = await validator.value.$validate()
  if (!valid) return false
}

/** UI Handlers */
const handleNextButtonClicked = () => {
  activeStep.value++
}
const handlePreviousButtonClicked = () => {
  activeStep.value--
}
</script>

<template>
  <section class="flex w-full flex-col">
    <div class="text-center">
      <h2 class="mt-6 font-menu text-3xl font-bold">Account Registration</h2>
      <p class="mb-4 mt-2 text-sm text-gray-500">Complete the form to create your account</p>
    </div>
    <Steps v-model:active-step="activeStep" :model="registrationSteps" />
    <form class="mt-8 flex w-full flex-col space-y-6" @submit.prevent>
      <transition
        enter-active-class="transition duration-200"
        enter-from-class="translate-x-[20%] opacity-0"
        leave-active-class="opacity-0"
        leave-to-class="opacity-0"
      >
        <CredentialsSection v-if="activeStep === 0" @next-button-clicked="handleNextButtonClicked" class="mt-4" />
        <PersonalSection
          v-else-if="activeStep === 1"
          @next-button-clicked="handleNextButtonClicked"
          @previous-button-clicked="handlePreviousButtonClicked"
          class="mt-4"
        />
        <AddressSection
          v-else-if="activeStep === 2"
          @previous-button-clicked="handlePreviousButtonClicked"
          @save-button-clicked="handleFormSubmit"
          class="mt-4"
        />
      </transition>
    </form>
  </section>
</template>
