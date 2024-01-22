import { defineStore } from 'pinia'
import { apiCall } from '@/utils/network'
import { parsePhoneNumber } from 'libphonenumber-js'
import { ref } from 'vue'
import { ApiResponse, BarangayResponse, CityResponse, ProvinceResponse, RegionResponse } from '@/types/http.types.ts'
import { WbAutoCompleteOption } from '@/types/ui.types.ts'

export const usePublicStore = defineStore('public', () => {
  /** States */
  const regionOptions = ref<WbAutoCompleteOption[]>([])
  const regionOptionsIsLoading = ref(false)
  const provinceOptions = ref<WbAutoCompleteOption[]>([])
  const provinceOptionsIsLoading = ref(false)
  const barangayOptions = ref<WbAutoCompleteOption[]>([])
  const barangayOptionsIsLoading = ref(false)
  const cityOptions = ref<WbAutoCompleteOption[]>([])
  const cityOptionsIsLoading = ref(false)

  /** Actions */
  const fetchRegions = async () => {
    if (regionOptions.value.length > 0) return null

    regionOptionsIsLoading.value = true
    const { data } = await apiCall('/address/regions').get().json()
    const res: ApiResponse = data.value

    if (res.success && Array.isArray(res.data)) {
      regionOptions.value = []
      res.data.forEach((region: RegionResponse) => {
        regionOptions.value.push({ value: region.id, label: region.name })
      })
    }

    regionOptionsIsLoading.value = false

    return res
  }

  const fetchProvinces = async () => {
    if (provinceOptions.value.length > 0) return null

    provinceOptionsIsLoading.value = true
    const { data } = await apiCall('/address/provinces').get().json()
    const res: ApiResponse = data.value

    if (res.success && Array.isArray(res.data)) {
      provinceOptions.value = []
      res.data.forEach((province: ProvinceResponse) => {
        provinceOptions.value.push({ value: province.id, label: province.name, parent_value: province.region_id })
      })
    }

    provinceOptionsIsLoading.value = false

    return res
  }

  const fetchCities = async () => {
    if (cityOptions.value.length > 0) return

    cityOptionsIsLoading.value = true
    const { data } = await apiCall('/address/cities').get().json()
    const res: ApiResponse = data.value

    if (res.success && Array.isArray(res.data)) {
      cityOptions.value = []
      res.data.forEach((city: CityResponse) => {
        cityOptions.value.push({ value: city.id, label: city.name, parent_value: city.province_id })
      })
    }

    cityOptionsIsLoading.value = false
    return res
  }

  const fetchBarangays = async () => {
    if (barangayOptions.value.length > 0) return

    barangayOptionsIsLoading.value = true

    const { data } = await apiCall('/address/barangays').get().json()
    const res: ApiResponse = data.value

    if (res.success && Array.isArray(res.data)) {
      barangayOptions.value = []
      res.data.forEach((barangay: BarangayResponse) => {
        barangayOptions.value.push({ value: barangay.id, label: barangay.name, parent_value: barangay.city_id })
      })
    }

    barangayOptionsIsLoading.value = false
    return res
  }

  const checkAvailability = async (key: 'mobile_number' | 'email', value: string, excludeId: string | null = null) => {
    if (key === 'mobile_number') {
      value = encodeURIComponent(parsePhoneNumber(value, 'PH').number)
    }

    let url = `/availability/${key}?value=${value}`
    if (excludeId) url += `&excluded_id=${excludeId}`

    const { data } = await apiCall(url).get().json()
    return data.value
  }

  return {
    regionOptions,
    fetchRegions,
    regionOptionsIsLoading,
    provinceOptions,
    fetchProvinces,
    provinceOptionsIsLoading,
    cityOptions,
    fetchCities,
    cityOptionsIsLoading,
    barangayOptions,
    fetchBarangays,
    barangayOptionsIsLoading,
    checkAvailability,
  }
})
