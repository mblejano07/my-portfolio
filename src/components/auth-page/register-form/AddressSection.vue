<script setup lang="ts">
import WbInputText from '@/components/webkit/WbInputText.vue'
import WbAutoComplete from '@/components/webkit/WbAutoComplete.vue'
import { reactive, ref, watch } from 'vue'
import useVuelidate from '@vuelidate/core'
import { helpers, maxLength } from '@vuelidate/validators'
import { digitCountRule } from '@/utils/custom-validations.ts'
import Button from 'primevue/button'

/** Component States */
const payload = reactive({
  home_address: null,
  barangay_id: null,
  city_id: null,
  region_id: null,
  province_id: null,
  postal_code: null,
})

/** Events */
const emits = defineEmits(['saveButtonClicked', 'previousButtonClicked'])

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
const validator = useVuelidate(formRules, payload)
console.log('validator', validator)

const selectedRegion = ref()
const regionsList = ref([
  { value: 1, label: 'Manila' },
  { value: 2, label: 'Cebu' },
  { value: 3, label: 'Davao' },
])

watch(
  () => selectedRegion.value,
  () => console.log('selectedregion', selectedRegion.value)
)
</script>
<template>
  <div class="flex flex-col gap-4">
    <!-- Start Region and Province -->
    <div class="flex gap-4">
      <WbAutoComplete
        v-model="selectedRegion"
        :suggestions="regionsList"
        label="Region"
        optionLabel="label"
        forceSelection
        @true-value="(value) => (payload.region_id = value)"
        loading
      >
        <template #prepend-icon>
          <i class="pi pi-map text-surface-500" />
        </template>
      </WbAutoComplete>
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
    <!-- Start Action Buttons -->
    <div class="mt-4 flex justify-between">
      <Button @click="emits('previousButtonClicked')" label="Back" size="large" severity="secondary" class="px-10">
        <template #icon>
          <i class="pi pi-arrow-left mr-2"></i>
        </template>
      </Button>
      <Button @click="emits('saveButtonClicked')" label="Save" size="large" class="px-10">
        <template #icon>
          <i class="pi pi-save mr-2"></i>
        </template>
      </Button>
    </div>
    <!-- End Action Buttons -->
  </div>
</template>
