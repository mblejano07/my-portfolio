import { defineStore } from 'pinia'
import { ref } from 'vue'
import {
  RegistrationAddressSection,
  RegistrationCredentialsSection,
  RegistrationModel,
  RegistrationPersonalInfoSection,
} from '@/types/models/auth.ts'

export const useFormsStore = defineStore('forms', () => {
  const registrationInfo = ref<RegistrationModel>({
    credentials: null,
    personal_info: null,
    address: null,
  })

  const saveRegistrationCredentialsSection = (model: RegistrationCredentialsSection) => {
    registrationInfo.value.credentials = model
  }

  const saveRegistrationPersonalInfoSection = (model: RegistrationPersonalInfoSection) => {
    registrationInfo.value.personal_info = model
  }

  const saveRegistrationAddressSection = (model: RegistrationAddressSection) => {
    registrationInfo.value.address = model
  }

  const resetRegistrationInfo = () => {
    registrationInfo.value.personal_info = null
    registrationInfo.value.credentials = null
    registrationInfo.value.address = null
  }

  return {
    registrationInfo,
    resetRegistrationInfo,
    saveRegistrationCredentialsSection,
    saveRegistrationPersonalInfoSection,
    saveRegistrationAddressSection,
  }
})
