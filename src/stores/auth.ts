import { defineStore } from 'pinia'
import { StorageSerializers, useStorage } from '@vueuse/core'
import { ref } from 'vue'
import { apiCall } from '@/utils/network.ts'
import { ApiResponse, ApiResponseData } from '@/types/http.responses.ts'
import { UserResponse } from '@/stores/users.ts'

export const useAuthStore = defineStore('auth', () => {
  /**
   * States
   * We use sessionStorage to hydrate state when the page reloads
   * @see https://vueuse.org/core/useStorage/#custom-serialization on why we need a serializer for `null` defaults
   */
  const authenticationToken = useStorage('auth-token', null, sessionStorage, {
    serializer: StorageSerializers.string,
  })
  const authenticatedUser = useStorage('auth-user', null, sessionStorage, {
    serializer: StorageSerializers.object,
    deep: true,
    mergeDefaults: true,
  })
  const authExpired = ref(false)

  /** Actions */
  const login = async (payload: LoginPayload) => {
    payload.with_user = true
    payload.client_name = 'Web Browser'

    const { data } = await apiCall('auth/tokens').post(payload).json()
    const res: ApiResponse = data.value

    if (res.success) {
      const loginResponse = res.data as LoginResponse
      authenticationToken.value = loginResponse.token
      authenticatedUser.value = loginResponse.user
    }

    return res
  }

  return {
    authenticationToken,
    authenticatedUser,
    authExpired,
    login,
  }
})

/** Typings */
export type LoginPayload = {
  email?: string
  mobile_number?: string
  password: string
  with_user?: boolean
  client_name?: string
}

export interface LoginResponse extends ApiResponseData {
  token: string
  token_name: string
  expires_at: string
  user: UserResponse
}
