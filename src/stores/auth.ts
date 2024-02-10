import { defineStore } from 'pinia'
import { StorageSerializers, useDateFormat, useStorage } from '@vueuse/core'
import { computed, ref } from 'vue'
import { useApiCall } from '@/composables/network.ts'
import { ApiResponse } from '@/typings/http-resources.ts'
import { UserResponse } from '@/typings/models.ts'
import { RegistrationPayload } from '@/stores/forms.ts'

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

  const authRoles = computed(() => {
    return authenticatedUser?.value?.roles.map((role) => role.name)
  })

  const authFullName = computed(() => {
    return authenticatedUser?.value?.user_profile?.full_name
  })

  const authEmailIsVerified = computed(() => {
    return !!authenticatedUser?.value?.email_verified_at
  })

  const authAvatarDisplayNamePlaceholder = computed(() => {
    if (!authenticatedUser.value?.user_profile?.full_name) return null

    // we'll display the initials for the fake avatar
    const names = authenticatedUser.value.user_profile.full_name.split(' ')
    let initials = names[0].substring(0, 1).toUpperCase()

    if (names.length > 1) {
      initials += names[names.length - 1].substring(0, 1).toUpperCase()
    }

    return initials
  })

  const authFullAddress = computed(() => {
    if (!authenticatedUser.value) return null

    let address = ''
    address += authenticatedUser.value?.user_profile?.address?.home_address
      ? authenticatedUser.value.user_profile.address.home_address + ', '
      : ''
    address += authenticatedUser.value?.user_profile?.address?.barangay?.name
      ? authenticatedUser.value.user_profile.address.barangay.name + ', '
      : ''
    address += authenticatedUser.value?.user_profile?.address?.city?.name
      ? authenticatedUser.value.user_profile.address.city.name + ', '
      : ''
    address += authenticatedUser.value?.user_profile?.address?.province?.name
      ? authenticatedUser.value.user_profile.address.province.name + ', '
      : ''
    address += authenticatedUser.value?.user_profile?.address?.region?.name
      ? authenticatedUser.value.user_profile.address.region.name
      : ''

    return address
  })

  /** Actions */
  const login = async (payload: LoginPayload) => {
    payload.with_user = true
    payload.client_name = 'Web Browser'

    const { data } = await useApiCall('auth/tokens').post(payload).json()
    const responseData: ApiResponse = data.value

    if (responseData.success) {
      const authResponse = responseData.data as AuthResponse
      authenticationToken.value = authResponse.token
      authenticatedUser.value = authResponse.user
    }

    return responseData
  }

  const register = async (payload: RegistrationPayload) => {
    const unWrappedPayload = {
      ...payload.credentials,
      ...payload.personal_info,
      ...payload.address,
      client_name: 'Web Browser',
    }

    // The API only accepts Y-m-d format (2024-01-31)
    if (unWrappedPayload.birthday) {
      unWrappedPayload.birthday = useDateFormat(unWrappedPayload.birthday, 'YYYY-MM-DD').value.toString()
    }

    const { data } = await useApiCall('auth/register').post(unWrappedPayload).json()

    const responseBody: ApiResponse = data.value
    if (responseBody.success) {
      const authResponse = responseBody.data as AuthResponse
      authenticationToken.value = authResponse.token
      authenticatedUser.value = authResponse.user
    }

    return responseBody
  }

  const logout = async () => {
    await useApiCall('auth/tokens', authenticationToken.value).delete()
    authenticatedUser.value = null
    authenticationToken.value = null
  }

  const requestForgotPassword = async (email: string) => {
    const { data } = await useApiCall('auth/forgot-password').post({ email }).json()
    return data.value as ApiResponse
  }

  const resetPassword = async ({ email, token, password, password_confirmation }: ResetPasswordPayload) => {
    const { data } = await useApiCall('auth/reset-password')
      .post({
        email,
        token,
        password,
        password_confirmation,
      })
      .json()

    return data.value as ApiResponse
  }

  const resendEmailVerification = async () => {
    const { data } = await useApiCall('auth/email/send-verification', authenticationToken.value).get().json()
    return data.value as ApiResponse
  }

  const verifyEmail = async ({ id, hash, signature, expires }: VerifyEmailPayload) => {
    const url = `auth/email/verify/${id}/${hash}?expires=${expires}&signature=${signature}`
    const { data } = await useApiCall(url, authenticationToken.value).get().json()
    return data.value as ApiResponse
  }

  const authHasRequiredRole = (requiredRoles: string[]) => {
    const userRoles = authenticatedUser.value.roles.map((role) => role.name)
    return requiredRoles.some((r: string) => userRoles.includes(r))
  }

  return {
    authenticationToken,
    authenticatedUser,
    authExpired,
    isAuthenticated,
    authEmailIsVerified,
    avatarDisplayNamePlaceholder: authAvatarDisplayNamePlaceholder,
    authRoles,
    authHasRequiredRole,
    authFullName,
    authFullAddress,
    login,
    register,
    logout,
    requestForgotPassword,
    resetPassword,
    resendEmailVerification,
    verifyEmail,
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

export type AuthResponse = {
  token: string
  token_name: string
  expires_at: string
  user: UserResponse
}

export type ResetPasswordPayload = {
  email: string
  token: string
  password: string
  password_confirmation: string
}

export type VerifyEmailPayload = {
  id: string
  hash: string
  signature: string
  expires: string
}
