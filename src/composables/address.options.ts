import { computed, Ref } from 'vue'
import { WbAutoCompleteOption } from '@/types/ui.types.ts'

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
