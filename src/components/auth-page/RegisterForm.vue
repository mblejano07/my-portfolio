<script setup lang="ts">
import WbInputText from '@/components/webkit/WbInputText.vue'
import Button from 'primevue/button'
import WbPassword from '@/components/webkit/WbPassword.vue'
import Divider from 'primevue/divider'
import { reactive, ref, computed } from 'vue'
import useVuelidate from '@vuelidate/core'
import { helpers, required, maxLength, email, minLength, sameAs } from '@vuelidate/validators'
import { digitCountRule, passwordRule, mobilePhoneRule } from '@/utils/custom-validations.ts'

/** Component States */
const payload = reactive({
  email: '',
  mobile_number: '',
  first_name: '',
  last_name: '',
  middle_name: '',
  ext_name: '',
  birthday: '',
  sex: '',
  password: '',
  password_confirmation: '',
  home_address: '',
  barangay_id: '',
  city_id: '',
  province_id: '',
  region_id: '',
  postal_code: '',
})
const formIsSubmitting = ref(false)

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
    // unique: helpers.withAsync(helpers.withMessage('This email is already taken', useUniqueUserIdentifierRule('email'))),
  },
  mobile_number: {
    // unique: helpers.withAsync(
    //   helpers.withMessage('This mobile number is already taken', useUniqueUserIdentifierRule('mobile_number'))
    // ),
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
  birthday: {
    // date_format: helpers.withMessage('Valid format is yyyy-mm-dd (1997-12-31)', useDateFormatRule),
    // max_date: helpers.withMessage('Must not be greater than today', useMaxDateTodayRule),
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
  formIsSubmitting.value = true
  const valid = await validator.value.$validate()
  if (!valid) return (formIsSubmitting.value = false)
}
</script>

<template>
  <section class="flex w-full flex-col">
    <div class="text-center">
      <h2 class="mt-6 font-menu text-3xl font-bold">Account Registration</h2>
      <p class="mt-2 text-sm text-gray-500">Create your account</p>
    </div>
    <form class="mt-8 flex w-full flex-col space-y-6" @submit.prevent>
      <!-- Start Email and Mobile Number -->
      <div class="flex gap-4">
        <WbInputText
          v-model="payload.email"
          placeholder="you@example.com"
          class="w-full"
          label="Email or mobile number"
          :invalid="validator.email.$invalid"
          :invalid-text="validator.email.$invalid ? validator.email.$errors[0].$message : null"
        >
          <template #prepend-icon>
            <i class="pi pi-envelope text-surface-500" />
          </template>
        </WbInputText>
        <WbInputText
          v-model="payload.mobile_number"
          label="Mobile Number"
          placeholder="+63 XXXXXXXXXX"
          class="w-full"
          :invalid="validator.password.$invalid"
          :invalid-text="validator.password.$invalid ? validator.password.$errors[0].$message : null"
        >
          <template #prepend-icon>
            <i class="pi pi-phone text-surface-500" />
          </template>
        </WbInputText>
      </div>
      <!-- End Email and Mobile Number -->
      <!-- Start Password and Password Confirmation -->
      <div class="flex gap-4">
        <WbPassword
          v-model="payload.password"
          label="Confirm Password"
          :feedback="false"
          toggleMask
          class="w-full"
          inputClass="w-full"
          :invalid="validator.password.$invalid"
          :invalid-text="validator.password.$invalid ? validator.password.$errors[0].$message : null"
        >
          <template #prepend-icon>
            <i class="pi pi-lock text-surface-500" />
          </template>
        </WbPassword>
        <WbPassword
          v-model="payload.password_confirmation"
          label="Confirm Password"
          :feedback="false"
          toggleMask
          class="w-full"
          inputClass="w-full"
          :invalid="validator.password_confirmation.$invalid"
          :invalid-text="validator.password_confirmation.$invalid ? validator.password_confirmation.$errors[0].$message : null"
        >
          <template #prepend-icon>
            <i class="pi pi-lock text-surface-500" />
          </template>
        </WbPassword>
      </div>
      <!-- Start Password and Password Confirmation -->
      <!-- Start First name and Middle name -->
      <div class="flex gap-4">
        <WbInputText
          v-model="payload.first_name"
          class="w-full"
          label="First name"
          :invalid="validator.first_name.$invalid"
          :invalid-text="validator.first_name.$invalid ? validator.first_name.$errors[0].$message : null"
        >
          <template #prepend-icon>
            <i class="pi pi-id-card text-surface-500" />
          </template>
        </WbInputText>
        <WbInputText
          v-model="payload.middle_name"
          label="Middle name"
          class="w-full"
          :invalid="validator.middle_name.$invalid"
          :invalid-text="validator.middle_name.$invalid ? validator.middle_name.$errors[0].$message : null"
        >
          <template #prepend-icon>
            <i class="pi pi-id-card text-surface-500" />
          </template>
        </WbInputText>
      </div>
      <!-- End First name and Middle name -->
      <!-- Start Last name and Extension name -->
      <div class="flex gap-4">
        <WbInputText
          v-model="payload.last_name"
          class="w-full"
          label="Last name"
          :invalid="validator.last_name.$invalid"
          :invalid-text="validator.last_name.$invalid ? validator.last_name.$errors[0].$message : null"
        >
          <template #prepend-icon>
            <i class="pi pi-id-card text-surface-500" />
          </template>
        </WbInputText>
        <WbInputText
          v-model="payload.ext_name"
          label="Ext. name"
          class="w-full"
          :invalid="validator.ext_name.$invalid"
          :invalid-text="validator.ext_name.$invalid ? validator.ext_name.$errors[0].$message : null"
        >
          <template #prepend-icon>
            <i class="pi pi-id-card text-surface-500" />
          </template>
        </WbInputText>
      </div>
      <!-- End Last name and Extension name -->
      <div>
        <Button @click="handleFormSubmit" label="Sign in" size="large" class="w-full font-menu"></Button>
      </div>
      <Divider class="text-xs text-surface-400">or</Divider>
      <p class="flex justify-center text-center">
        <RouterLink
          :to="{ name: 'login' }"
          class="cursor-pointer text-sm text-primary-500 no-underline transition duration-300 ease-in hover:text-blue-500 hover:underline"
          >Login instead
        </RouterLink>
      </p>
    </form>
  </section>
</template>

<style scoped></style>
