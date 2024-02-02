<script setup lang="ts">
import { reactive, ref, onBeforeMount, toRef, toRefs } from 'vue'
import { useProfileStore, UserProfilePayload } from '@/stores/profile.ts'
import { storeToRefs } from 'pinia'
import { useFilterByParentId, useClearSelectedAddressIfNotInParentList } from '@/composables/address.options.ts'
import { useAuthStore } from '@/stores/auth.ts'
import { useAddressStore } from '@/stores/address.ts'
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
import InputSwitch from 'primevue/inputswitch'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import WbInputMask from '@/components/webkit/WbInputMask.vue'
import WbAutoComplete from '@/components/webkit/WbAutoComplete.vue'
import { WbAutoCompleteOption, WbAutoCompleteOptionTrueValue } from '@/components/webkit/WbAutoComplete.vue'

/** Component States */
const authStore = useAuthStore()
const payload = reactive<UserProfilePayload>({
  email: authStore.authenticatedUser?.email || '',
  mobile_number: authStore.authenticatedUser?.user_profile?.mobile_number || null,
  first_name: authStore.authenticatedUser?.user_profile?.first_name || '',
  last_name: authStore.authenticatedUser?.user_profile?.last_name || '',
  middle_name: authStore.authenticatedUser?.user_profile?.middle_name || null,
  ext_name: authStore.authenticatedUser?.user_profile?.ext_name || null,
  birthday: authStore.authenticatedUser?.user_profile?.birthday || null,
  sex: authStore.authenticatedUser?.user_profile?.sex || null,
  home_address: authStore.authenticatedUser?.user_profile?.address?.home_address || null,
  city_id: authStore.authenticatedUser?.user_profile?.address?.city?.id || null,
  province_id: authStore.authenticatedUser?.user_profile?.address?.province?.id || null,
  region_id: authStore.authenticatedUser?.user_profile?.address?.region?.id || null,
  postal_code: authStore.authenticatedUser?.user_profile?.address?.postal_code || null,
  barangay_id: authStore.authenticatedUser?.user_profile?.address?.barangay?.id || null,
})

// Toggle Edit Button
const editingEnabled = ref(false)

// Start combo and select box options
const genderOptions = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' },
]

/** Address Section **/
/** Address WbAutoComplete Object References */
const selectedRegion = ref<WbAutoCompleteOption | null>(null)
const selectedProvince = ref<WbAutoCompleteOption | null>(null)
const selectedCity = ref<WbAutoCompleteOption | null>(null)
const selectedBarangay = ref<WbAutoCompleteOption | null>(null)

/** Initialize Address Options List */
const publicStore = useAddressStore()
const addressesAreLoading = ref(false)
onBeforeMount(async () => {
  addressesAreLoading.value = true
  await Promise.allSettled([
    publicStore.fetchRegions(),
    publicStore.fetchProvinces(),
    publicStore.fetchCities(),
    publicStore.fetchBarangays(),
  ])

  // Set the initial value of the selected addresses
  selectedRegion.value =
    publicStore.regionOptions.find((r) => r.value === authStore.authenticatedUser?.user_profile?.address?.region?.id) || null
  selectedProvince.value =
    publicStore.provinceOptions.find((p) => p.value === authStore.authenticatedUser?.user_profile?.address?.province?.id) || null
  selectedCity.value =
    publicStore.cityOptions.find((c) => c.value === authStore.authenticatedUser?.user_profile?.address?.city?.id) || null
  selectedBarangay.value =
    publicStore.barangayOptions.find((b) => b.value === authStore.authenticatedUser?.user_profile?.address?.barangay?.id) || null

  addressesAreLoading.value = false
})

/** Address WbAutoComplete True Value */
const handleTrueValue = (addressType: 'region' | 'province' | 'city' | 'barangay', value: WbAutoCompleteOptionTrueValue) => {
  switch (addressType) {
    case 'region':
      payload.region_id = value
      break
    case 'province':
      payload.province_id = value
      break
    case 'city':
      payload.city_id = value
      break
    case 'barangay':
      payload.barangay_id = value
      break
    default:
      break
  }
}

/** We only display a list based on parent address */
const { provinceOptions, cityOptions, barangayOptions } = storeToRefs(publicStore)
const filteredProvinceOptionsByRegion = useFilterByParentId(toRef(payload, 'region_id', null), provinceOptions)
const filteredCityOptionsByProvince = useFilterByParentId(toRef(payload, 'province_id', null), cityOptions)
const filteredBarangayOptionsByCity = useFilterByParentId(toRef(payload, 'city_id', null), barangayOptions)

/** We set the `selected<Address>` and `payload.<address>_id` to null if the parent is changed */
useClearSelectedAddressIfNotInParentList(
  toRefs(payload),
  selectedProvince,
  selectedCity,
  selectedBarangay,
  filteredProvinceOptionsByRegion,
  filteredCityOptionsByProvince,
  filteredBarangayOptionsByCity
)

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
  if (!valid) {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    toast.add({
      severity: 'error',
      summary: 'Update profile',
      detail: 'Please see the validation messages',
      life: 5000,
    })
    return
  }
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
  return window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <form @submit.prevent>
    <!-- Start Toggle Edit Switch -->
    <div class="flex items-center justify-end lg:mb-2">
      <span class="mr-3 text-xs text-surface-500">{{ !editingEnabled ? 'Enable Editing' : 'Disabled Editing' }}</span>
      <InputSwitch v-model="editingEnabled"> </InputSwitch>
    </div>
    <!-- End Toggle Edit Switch -->
    <div class="flex flex-col gap-4">
      <!-- Start Credentials -->
      <!-- Start Email and Mobile Number -->
      <div class="flex flex-col gap-4 md:flex-row">
        <WbInputText
          v-model="payload.email"
          label="Email *"
          :invalid="validator.email.$invalid"
          :invalid-text="validator.email.$errors[0]?.$message"
          @blur="validator.email.$touch"
          @focusin="validator.email.$dirty = false"
          label-class="text-xs text-surface-0 lg:text-surface-500"
          validation-error-message-class="text-xs text-error-300 font-bold lg:font-normal lg:text-error-500"
          :disabled="!editingEnabled"
        >
          <template #prepend-icon>
            <i class="pi pi-envelope" />
          </template>
        </WbInputText>
        <WbInputMask
          v-model="payload.mobile_number"
          label="Mobile Number"
          mask="+639999999999"
          placeholder="+63 XXX XXX XXXX"
          :invalid="validator.mobile_number.$invalid"
          :invalid-text="validator.mobile_number.$errors[0]?.$message"
          @blur="validator.mobile_number.$touch"
          @focusin="validator.mobile_number.$dirty = false"
          label-class="text-xs text-surface-0 lg:text-surface-500"
          validation-error-message-class="text-xs text-error-300 font-bold lg:font-normal lg:text-error-500"
          :disabled="!editingEnabled"
        >
          <template #prepend-icon>
            <i class="pi pi-phone" />
          </template>
        </WbInputMask>
      </div>
      <!-- End Email and Mobile Number -->
      <!-- End Credentials -->

      <!-- Start Personal Information -->
      <!-- Start First name and Middle name -->
      <div class="flex flex-col gap-4 md:flex-row">
        <WbInputText
          v-model="payload.first_name"
          label="First name *"
          :invalid="validator.first_name.$invalid"
          :invalid-text="validator.first_name.$errors[0]?.$message"
          label-class="text-xs text-surface-0 lg:text-surface-500"
          validation-error-message-class="text-xs text-error-300 font-bold lg:font-normal lg:text-error-500"
          :disabled="!editingEnabled"
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
          :disabled="!editingEnabled"
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
          :disabled="!editingEnabled"
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
          :disabled="!editingEnabled"
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
          optionValue="value"
          label="Sex"
          label-class="text-xs text-surface-0 lg:text-surface-500"
          :disabled="!editingEnabled"
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
          :disabled="!editingEnabled"
        >
          <template #prepend-icon>
            <i class="pi pi-gift" />
          </template>
        </WbCalendar>
      </div>
      <!-- End Sex and Birthday -->
      <!-- End Personal Information -->

      <!-- Start Address -->
      <!-- Start Region and Province -->
      <div class="flex flex-col gap-4 md:flex-row">
        <WbAutoComplete
          v-model="selectedRegion"
          :suggestions="publicStore.regionOptions"
          label="Region"
          optionLabel="label"
          forceSelection
          @on-true-value-computed="(value: WbAutoCompleteOptionTrueValue) => handleTrueValue('region', value)"
          :loading="publicStore.regionOptionsIsLoading"
          :disabled="publicStore.regionOptionsIsLoading || !editingEnabled"
          label-class="text-xs text-surface-0 lg:text-surface-500"
        >
          <template #prepend-icon>
            <i class="pi pi-map" />
          </template>
        </WbAutoComplete>
        <WbAutoComplete
          v-model="selectedProvince"
          :suggestions="filteredProvinceOptionsByRegion"
          label="Province"
          optionLabel="label"
          forceSelection
          @on-true-value-computed="(value: WbAutoCompleteOptionTrueValue) => handleTrueValue('province', value)"
          :loading="publicStore.provinceOptionsIsLoading"
          :disabled="publicStore.provinceOptionsIsLoading || !editingEnabled"
          label-class="text-xs text-surface-0 lg:text-surface-500"
        >
          <template #prepend-icon>
            <i class="pi pi-map" />
          </template>
        </WbAutoComplete>
      </div>
      <!-- End Region and Province -->
      <!-- Start City and Barangay -->
      <div class="flex flex-col gap-4 md:flex-row">
        <WbAutoComplete
          v-model="selectedCity"
          :suggestions="filteredCityOptionsByProvince"
          label="City"
          optionLabel="label"
          forceSelection
          @on-true-value-computed="(value: WbAutoCompleteOptionTrueValue) => handleTrueValue('city', value)"
          :loading="publicStore.cityOptionsIsLoading"
          :disabled="publicStore.cityOptionsIsLoading || !editingEnabled"
          :virtualScrollerOptions="{ itemSize: 38 }"
          label-class="text-xs text-surface-0 lg:text-surface-500"
        >
          <template #prepend-icon>
            <i class="pi pi-map" />
          </template>
        </WbAutoComplete>
        <WbAutoComplete
          v-model="selectedBarangay"
          :suggestions="filteredBarangayOptionsByCity"
          label="Barangay"
          optionLabel="label"
          forceSelection
          @on-true-value-computed="(value: WbAutoCompleteOptionTrueValue) => handleTrueValue('barangay', value)"
          :loading="publicStore.barangayOptionsIsLoading"
          :disabled="publicStore.barangayOptionsIsLoading || !editingEnabled"
          :virtualScrollerOptions="{ itemSize: 38 }"
          label-class="text-xs text-surface-0 lg:text-surface-500"
        >
          <template #prepend-icon>
            <i class="pi pi-map" />
          </template>
        </WbAutoComplete>
      </div>
      <!-- End City and Barangay -->
      <!-- Start Home Address and Zip Code -->
      <div class="flex flex-col gap-4 md:flex-row">
        <WbInputText
          v-model="payload.home_address"
          label="Home Address"
          :invalid="validator.home_address.$invalid"
          :invalid-text="validator.home_address.$errors[0]?.$message"
          label-class="text-xs text-surface-0 lg:text-surface-500"
          validation-error-message-class="text-xs text-error-300 font-bold lg:font-normal lg:text-error-500"
          :disabled="!editingEnabled"
        >
          <template #prepend-icon>
            <i class="pi pi-map" />
          </template>
        </WbInputText>
        <WbInputMask
          v-model="payload.postal_code"
          label="Zip Code"
          mask="9999"
          :invalid="validator.postal_code.$invalid"
          :invalid-text="validator.postal_code.$errors[0]?.$message"
          label-class="text-xs text-surface-0 lg:text-surface-500"
          validation-error-message-class="text-xs text-error-300 font-bold lg:font-normal lg:text-error-500"
          :disabled="!editingEnabled"
        >
          <template #prepend-icon>
            <i class="pi pi-map" />
          </template>
        </WbInputMask>
      </div>
      <!-- End Home Address and Zip Code -->
      <!-- End Address -->
      <div class="mt-3 flex justify-end">
        <Button
          @click="handleFormSubmission"
          label="Save"
          :loading="formIsSubmitting"
          :disabled="formIsSubmitting || addressesAreLoading || !editingEnabled"
        >
          <template #icon>
            <i class="pi pi-save mr-2"></i>
          </template>
        </Button>
      </div>
    </div>
  </form>
</template>

<style scoped></style>
