import { computed, Ref, ToRefs, UnwrapNestedRefs, watch } from 'vue'
import { WbAutoCompleteOption } from '@/types/ui.types.ts'
import { AddressFormPayload } from '@/components/auth-page/register-form/AddressSection.vue'

/**
 * @description Filter the list of address based on the parent.
 * If NCR is selected as the region (parentId), then the four districts in NCR
 * should only be available for selection in the Province Options. Same goes for
 * City and Barangays
 *
 * @example
 * const { provinceOptions, cityOptions, barangayOptions } = storeToRefs(publicStore)
 * const filteredProvinces = useFilterByParentId(toRef(payload, 'region_id'), provinceOptions)
 * const filteredCities = useFilterByParentId(toRef(payload, 'province_id'), cityOptions)
 * const filteredBarangays = useFilterByParentId(toRef(payload, 'city_id'), barangayOptions)
 *
 */
export const useFilterByParentId = (parentId: Ref<number | string | null>, fullOptionsList: Ref<WbAutoCompleteOption[]>) => {
  return computed(() => {
    if (!parentId.value) return fullOptionsList.value
    return fullOptionsList.value.filter((province: WbAutoCompleteOption) => province.parent_value === parentId.value)
  })
}

export const useClearSelectedAddressIfNotInParentList = (
  payload: ToRefs<UnwrapNestedRefs<AddressFormPayload>>,
  selectedProvinceObjRef: Ref<WbAutoCompleteOption | null>,
  selectedCityObjectRef: Ref<WbAutoCompleteOption | null>,
  selectedBarangayObjectRef: Ref<WbAutoCompleteOption | null>,
  provinceOptionsList: Ref<WbAutoCompleteOption[]>,
  cityOptionsList: Ref<WbAutoCompleteOption[]>,
  barangayOptionsList: Ref<WbAutoCompleteOption[]>
) => {
  // Check if selected province is still in the filtered list when region is changed
  watch(
    () => payload.region_id,
    (newRegionId) => {
      if (!newRegionId.value) return clearProvinceAndDown()

      const provinceStillInList = !!provinceOptionsList.value.find((p) => p.value === payload.province_id.value)
      if (!provinceStillInList) clearProvinceAndDown()
    },
    { deep: true }
  )

  // Check if selected city is still in the filtered list when province is changed
  watch(
    () => payload.province_id,
    (newProvinceId) => {
      if (!newProvinceId.value) return clearCityAndDown()

      const cityStillInList = !!cityOptionsList.value.find((c) => c.value === payload.city_id.value)
      if (!cityStillInList) clearCityAndDown()
    },
    { deep: true }
  )

  // Check if selected barangay is still in the filtered list when city is changed
  watch(
    () => payload.city_id,
    (newCityId) => {
      if (!newCityId.value) return clearBarangay()

      const barangayStillInList = !!barangayOptionsList.value.find((b) => b.value === payload.barangay_id.value)
      if (!barangayStillInList) clearBarangay()
    },
    { deep: true }
  )

  const clearProvinceAndDown = () => {
    // Clear current selection for province, city, and barangay
    payload.province_id.value = null
    selectedProvinceObjRef.value = null
    payload.city_id.value = null
    selectedCityObjectRef.value = null
    payload.barangay_id.value = null
    selectedBarangayObjectRef.value = null
  }

  const clearCityAndDown = () => {
    // Clear current selection for city, and barangay
    payload.city_id.value = null
    selectedCityObjectRef.value = null
    payload.barangay_id.value = null
    selectedBarangayObjectRef.value = null
  }

  const clearBarangay = () => {
    // Clear current selection for barangay
    payload.barangay_id.value = null
    selectedBarangayObjectRef.value = null
  }
}
