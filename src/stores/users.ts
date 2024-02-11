import { defineStore } from 'pinia'
import { useApiCall } from '@/composables/network'
import { useAuthStore } from '@/stores/auth'
import { UserResponse } from '@/typings/models.ts'
import { ApiResponseBody } from '@/typings/http-resources.ts'
import { ref } from 'vue'

export const useUsersStore = defineStore('users', () => {
  const authStore = useAuthStore()

  /** States */
  const users = ref<UserResponse[]>([])

  /** Actions */
  const fetchUsers = async (roleFilter: string | number | null = null, limit: number = 15, page: number | null = null) => {
    let uri = `/users?limit=${limit}&sort=desc&`
    if (roleFilter) uri += `role=${roleFilter}&`
    if (page) uri += `page=${page}`

    const { data } = await useApiCall(uri, authStore.authenticationToken).get().json()
    const responseBody: ApiResponseBody = data.value

    if (responseBody.success) {
      const usersList = responseBody.data as UserResponse[]
      users.value = [...usersList]
    }

    return responseBody
  }

  const searchUsers = async (query: string | null) => {
    let uri = '/users/search?'
    if (query) uri += `query=${query}`

    const { data } = await useApiCall(uri, authStore.authenticationToken).get().json()
    const responseBody: ApiResponseBody = data.value

    if (responseBody.success) {
      const usersList = responseBody.data as UserResponse[]
      users.value = [...usersList]
    }

    return responseBody
  }

  return {
    users,
    fetchUsers,
    searchUsers,
  }
})
