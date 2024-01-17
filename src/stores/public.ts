import { defineStore } from 'pinia'
import { useApiCall } from '@/utils/network'
import { parsePhoneNumber } from 'libphonenumber-js'

export const usePublicStore = defineStore('public', () => {
  const checkAvailability = async (key: 'mobile_number' | 'email', value: string, excludeId: string | null = null) => {
    if (key === 'mobile_number') {
      value = encodeURIComponent(parsePhoneNumber(value, 'PH').number)
    }

    let url = `/availability/${key}?value=${value}`
    if (excludeId) url += `&excluded_id=${excludeId}`

    const { data } = await useApiCall(url).get().json()
    return data.value
  }

  return {
    checkAvailability,
  }
})
