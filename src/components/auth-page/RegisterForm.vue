<script setup lang="ts">
import WbInputText from '@/components/webkit/WbInputText.vue'
import Button from 'primevue/button'
import WbPassword from '@/components/webkit/WbPassword.vue'
import WbCalendar from '@/components/webkit/WbCalendar.vue'
import WbDropdown from '@/components/webkit/WbDropdown.vue'
import Divider from 'primevue/divider'
import { reactive, ref, computed } from 'vue'
import useVuelidate from '@vuelidate/core'
import { helpers, required, maxLength, email, minLength, sameAs } from '@vuelidate/validators'
import { digitCountRule, passwordRule, mobilePhoneRule } from '@/utils/custom-validations.ts'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

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
const formIsSubmitting = ref(false)
const genderOptions = ref([
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
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
  console.log(payload)
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
          :invalid="validator.mobile_number.$invalid"
          :invalid-text="validator.mobile_number.$invalid ? validator.mobile_number.$errors[0].$message : null"
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
          label="Password"
          :feedback="false"
          toggleMask
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
          :invalid="validator.password_confirmation.$invalid"
          :invalid-text="validator.password_confirmation.$invalid ? validator.password_confirmation.$errors[0].$message : null"
        >
          <template #prepend-icon>
            <i class="pi pi-lock text-surface-500" />
          </template>
        </WbPassword>
      </div>
      <!-- End Password and Password Confirmation -->
      <Divider />
      <!-- Start First name and Middle name -->
      <div class="flex gap-4">
        <WbInputText
          v-model="payload.first_name"
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
          :invalid="validator.ext_name.$invalid"
          :invalid-text="validator.ext_name.$invalid ? validator.ext_name.$errors[0].$message : null"
        >
          <template #prepend-icon>
            <i class="pi pi-id-card text-surface-500" />
          </template>
        </WbInputText>
      </div>
      <!-- End Last name and Extension name -->
      <!-- Start Sex and Birthday -->
      <div class="flex gap-4">
        <WbDropdown v-model="payload.sex" :options="genderOptions" optionLabel="label" optionValue="value" label="Sex">
          <template #prepend-icon>
            <FontAwesomeIcon icon="fa-solid fa-mars-and-venus" class="text-surface-500" />
          </template>
        </WbDropdown>
        <WbCalendar v-model="payload.birthday" dateFormat="MM dd, yy" :maxDate="new Date()" label="Birthday">
          <template #prepend-icon>
            <i class="pi pi-gift text-surface-500" />
          </template>
        </WbCalendar>
      </div>
      <!-- End Sex and Birthday -->
      <Divider />
      <!-- Start Region and Province -->
      <div class="flex gap-4">
        <WbInputText v-model="payload.region_id" label="Region">
          <template #prepend-icon>
            <i class="pi pi-map text-surface-500" />
          </template>
        </WbInputText>
        <WbInputText v-model="payload.province_id" label="Province">
          <template #prepend-icon>
            <i class="pi pi-map text-surface-500" />
          </template>
        </WbInputText>
      </div>
      <!-- End Region and Province -->
      <!-- Start City and Barangay -->
      <div class="flex gap-4">
        <WbInputText v-model="payload.city_id" label="City or Municipality">
          <template #prepend-icon>
            <i class="pi pi-map text-surface-500" />
          </template>
        </WbInputText>
        <WbInputText v-model="payload.barangay_id" label="Barangay">
          <template #prepend-icon>
            <i class="pi pi-map text-surface-500" />
          </template>
        </WbInputText>
      </div>
      <!-- End City and Barangay -->
      <!-- Start Home Address and Zip Code -->
      <div class="flex gap-4">
        <WbInputText v-model="payload.home_address" label="Home Address">
          <template #prepend-icon>
            <i class="pi pi-map text-surface-500" />
          </template>
        </WbInputText>
        <WbInputText v-model="payload.postal_code" label="Zip Code">
          <template #prepend-icon>
            <i class="pi pi-map text-surface-500" />
          </template>
        </WbInputText>
      </div>
      <!-- End Home Address and Zip Code -->
      <div>
        <Button @click="handleFormSubmit" label="Sign in" size="large" class="mt-4 w-full font-menu"></Button>
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
