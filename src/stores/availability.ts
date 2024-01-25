import { defineStore } from 'pinia'
import { useApiCall } from '@/composables/network.ts'
import { parsePhoneNumber } from 'libphonenumber-js'
import { ApiResponse } from '@/typings/http-resources.ts'

export const useAvailabilitiesStore = defineStore('availabilities', () => {
  const checkUserUniqueIdentifierAvailability = async (
    key: 'mobile_number' | 'email',
    value: string,
    excludeId: string | null = null
  ) => {
    if (key === 'mobile_number') {
      value = encodeURIComponent(parsePhoneNumber(value, 'PH').number)
    }

    let url = `/availability/${key}?value=${value}`
    if (excludeId) url += `&excluded_id=${excludeId}`

    const { data } = await useApiCall(url).get().json()
    return data.value as ApiResponse & { data: { is_available: boolean } }
  }

  return {
    checkUserUniqueIdentifierAvailability,
  }
})
