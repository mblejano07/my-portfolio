import { defineStore } from 'pinia'
import { apiCall } from '@/utils/network'
import { parsePhoneNumber } from 'libphonenumber-js'
import { ref } from 'vue'
import { ApiResponse } from '@/typings/http.ts'
import { WbAutoCompleteOption } from '@/components/webkit/WbAutoComplete.vue'
import { ApiResponseData } from '@/typings/http.ts'

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

    if (res.success) {
      regionOptions.value = []
      const regionsListResponse = res.data as RegionResponse[]
      regionsListResponse.forEach((region: RegionResponse) => {
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

    if (res.success) {
      provinceOptions.value = []
      const provinceListResponse = res.data as ProvinceResponse[]
      provinceListResponse.forEach((province: ProvinceResponse) => {
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

    if (res.success) {
      cityOptions.value = []
      const citiesListResponse = res.data as CityResponse[]
      citiesListResponse.forEach((city: CityResponse) => {
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

    if (res.success) {
      barangayOptions.value = []
      const barangaysListResponse = res.data as BarangayResponse[]
      barangaysListResponse.forEach((barangay: BarangayResponse) => {
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
    return data.value as ApiResponse
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

/** Typings */
export type AvailabilityResponse = {
  is_available: boolean
} & ApiResponseData

export type RegionResponse = {
  code_correspondence: string
  code: string
  name: string
  alt_name: string
  geo_level: string
} & ApiResponseData

export type ProvinceResponse = {
  code_correspondence: string
  code: string
  name: string
  alt_name: string
  geo_level: string
  region_id: number
  old_name?: string
  income_classification: string
} & ApiResponseData

export type CityResponse = {
  code_correspondence: string
  code: string
  name: string
  alt_name: string
  province_id: number
  old_name?: string
  income_classification: string
  classification: 'city' | 'municipality'
  city_class?: string
} & ApiResponseData

export type BarangayResponse = {
  code_correspondence: string
  city_id: number
  name: string
} & ApiResponseData

export type AddressResponse = {
  home_address: string | null
  postal_code: string | null
  barangay_id: string | number | null
  city_id: string | number | null
  province_id: string | number | null
  region_id: string | number | null
  barangay: BarangayResponse | null
  city: CityResponse | null
  province: ProvinceResponse | null
  region: RegionResponse | null
} & ApiResponseData
