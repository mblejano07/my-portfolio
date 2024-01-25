import { defineStore } from 'pinia'
import { StorageSerializers, useStorage } from '@vueuse/core'
import { ref, computed } from 'vue'
import { useApiCall } from '@/composables/network.ts'
import { ApiResponse, ApiResponseData } from '@/typings/http.ts'
import { UserResponse } from '@/stores/users.ts'

export const useAuthStore = defineStore('auth', () => {
  /**
   * States
   * We use sessionStorage to hydrate state when the page reloads
   * @see https://vueuse.org/core/useStorage/#custom-serialization on why we need a serializer for `null` defaults
   */
  const authenticationToken = useStorage<string>('auth-token', null, sessionStorage, {
    serializer: StorageSerializers.string,
  })
  const authenticatedUser = useStorage<UserResponse>('auth-user', null, sessionStorage, {
    serializer: StorageSerializers.object,
    deep: true,
    mergeDefaults: true,
  })
  const authExpired = ref(false)

  /** Computed / Getters */
  const isAuthenticated = computed(() => {
    return !!authenticatedUser.value && !!authenticationToken.value && !authExpired.value
  })

  const avatarDisplayNamePlaceholder = computed(() => {
    if (!authenticatedUser.value?.user_profile?.full_name) return null

    // we'll display the initials for the fake avatar
    const names = authenticatedUser.value.user_profile.full_name.split(' ')
    let initials = names[0].substring(0, 1).toUpperCase()

    if (names.length > 1) {
      initials += names[names.length - 1].substring(0, 1).toUpperCase()
    }

    return initials
  })

  /** Actions */
  const login = async (payload: LoginPayload) => {
    payload.with_user = true
    payload.client_name = 'Web Browser'

    const { data } = await useApiCall('auth/tokens').post(payload).json()
    const res: ApiResponse = data.value

    if (res.success) {
      const loginResponse = res.data as LoginResponse
      authenticationToken.value = loginResponse.token
      authenticatedUser.value = loginResponse.user
    }

    return res
  }

  const logout = async () => {
    await useApiCall('auth/tokens', authenticationToken.value).delete()
    authenticatedUser.value = null
    authenticationToken.value = null
  }

  return {
    authenticationToken,
    authenticatedUser,
    authExpired,
    isAuthenticated,
    avatarDisplayNamePlaceholder,
    login,
    logout,
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
