<script setup lang="ts">
import WbInputText from '@/components/webkit/WbInputText.vue'
import WbAutoComplete from '@/components/webkit/WbAutoComplete.vue'
import WbInputMask from '@/components/webkit/WbInputMask.vue'
import { onBeforeMount, reactive, ref, toRef, toRefs } from 'vue'
import useVuelidate from '@vuelidate/core'
import { helpers, maxLength } from '@vuelidate/validators'
import { digitCountRule } from '@/utils/custom-validations.ts'
import Button from 'primevue/button'
import { usePublicStore } from '@/stores/public.ts'
import { useClearSelectedAddressIfNotInParentList, useFilterByParentId } from '@/composables/address.options.ts'
import { WbAutoCompleteOption } from '@/types/ui.types.ts'
import { storeToRefs } from 'pinia'
import { RegistrationAddressSection } from '@/types/models/auth.ts'
import { useFormsStore } from '@/stores/forms.ts'

/** Events */
const emit = defineEmits(['saveButtonClicked', 'previousButtonClicked'])

/** Component States */
const formStore = useFormsStore()
const model = reactive<RegistrationAddressSection>({
  home_address: formStore.registrationInfo.address?.home_address || null,
  barangay_id: formStore.registrationInfo.address?.barangay_id || null,
  city_id: formStore.registrationInfo.address?.city_id || null,
  region_id: formStore.registrationInfo.address?.region_id || null,
  province_id: formStore.registrationInfo.address?.province_id || null,
  postal_code: formStore.registrationInfo.address?.postal_code || null,
})

/** Initialize Address Options List */
const publicStore = usePublicStore()
onBeforeMount(async () => {
  await Promise.allSettled([
    publicStore.fetchRegions(),
    publicStore.fetchProvinces(),
    publicStore.fetchCities(),
    publicStore.fetchBarangays(),
  ])
})

/** Address WbAutoComplete Object References */
const selectedRegion = ref<WbAutoCompleteOption | null>(null)
const selectedProvince = ref<WbAutoCompleteOption | null>(null)
const selectedCity = ref<WbAutoCompleteOption | null>(null)
const selectedBarangay = ref<WbAutoCompleteOption | null>(null)

/** Address WbAutoComplete True Value */
const handleTrueValue = (addressType: 'region' | 'province' | 'city' | 'barangay', value: number | string | null) => {
  switch (addressType) {
    case 'region':
      model.region_id = value
      break
    case 'province':
      model.province_id = value
      break
    case 'city':
      model.city_id = value
      break
    case 'barangay':
      model.barangay_id = value
      break
    default:
      break
  }
}

/** We only display a list based on parent address */
const { provinceOptions, cityOptions, barangayOptions } = storeToRefs(publicStore)
const filteredProvinceOptionsByRegion = useFilterByParentId(toRef(model, 'region_id'), provinceOptions)
const filteredCityOptionsByProvince = useFilterByParentId(toRef(model, 'province_id'), cityOptions)
const filteredBarangayOptionsByCity = useFilterByParentId(toRef(model, 'city_id'), barangayOptions)

/** We set the `selected<Address>` and `payload.<address>_id` to null if the parent is changed */
useClearSelectedAddressIfNotInParentList(
  toRefs(model),
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
  home_address: {
    maxLength: globalStringMaxLengthRule,
  },
  postal_code: {
    digitCount: helpers.withMessage('Enter your 4-digit zip code', digitCountRule(4)),
  },
}

/** Handle Save */
const validator = useVuelidate(formRules, model)
const handleSaveButtonClicked = async () => {
  const valid = await validator.value.$validate()
  if (!valid) return false

  formStore.saveRegistrationAddressSection(model)
  emit('saveButtonClicked')
}
</script>
<template>
  <div class="flex flex-col gap-4">
    <!-- Start Region and Province -->
    <div class="flex gap-4">
      <WbAutoComplete
        v-model="selectedRegion"
        :suggestions="publicStore.regionOptions"
        label="Region"
        optionLabel="label"
        forceSelection
        @true-value="(value) => handleTrueValue('region', value)"
        :loading="publicStore.regionOptionsIsLoading"
        :disabled="publicStore.regionOptionsIsLoading"
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
        @true-value="(value) => handleTrueValue('province', value)"
        :loading="publicStore.provinceOptionsIsLoading"
        :disabled="publicStore.provinceOptionsIsLoading"
      >
        <template #prepend-icon>
          <i class="pi pi-map" />
        </template>
      </WbAutoComplete>
    </div>
    <!-- End Region and Province -->
    <!-- Start City and Barangay -->
    <div class="flex gap-4">
      <WbAutoComplete
        v-model="selectedCity"
        :suggestions="filteredCityOptionsByProvince"
        label="City"
        optionLabel="label"
        forceSelection
        @true-value="(value) => handleTrueValue('city', value)"
        :loading="publicStore.cityOptionsIsLoading"
        :disabled="publicStore.cityOptionsIsLoading"
        :virtualScrollerOptions="{ itemSize: 38 }"
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
        @true-value="(value) => handleTrueValue('barangay', value)"
        :loading="publicStore.barangayOptionsIsLoading"
        :disabled="publicStore.barangayOptionsIsLoading"
        :virtualScrollerOptions="{ itemSize: 38 }"
      >
        <template #prepend-icon>
          <i class="pi pi-map" />
        </template>
      </WbAutoComplete>
    </div>
    <!-- End City and Barangay -->
    <!-- Start Home Address and Zip Code -->
    <div class="flex gap-4">
      <WbInputText v-model="model.home_address" label="Home Address">
        <template #prepend-icon>
          <i class="pi pi-map" />
        </template>
      </WbInputText>
      <WbInputMask v-model="model.postal_code" label="Zip Code" mask="9999">
        <template #prepend-icon>
          <i class="pi pi-map" />
        </template>
      </WbInputMask>
    </div>
    <!-- End Home Address and Zip Code -->
    <!-- Start Action Buttons -->
    <div class="mt-4 flex justify-between">
      <Button @click="emit('previousButtonClicked')" label="Back" size="large" severity="secondary" class="px-10">
        <template #icon>
          <i class="pi pi-arrow-left mr-2"></i>
        </template>
      </Button>
      <Button @click="handleSaveButtonClicked" label="Save" size="large" class="px-10">
        <template #icon>
          <i class="pi pi-save mr-2"></i>
        </template>
      </Button>
    </div>
    <!-- End Action Buttons -->
  </div>
</template>
