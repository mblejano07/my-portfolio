import { defineStore } from 'pinia'
import { useApiCall } from '@/composables/network'
import { useAuthStore } from '@/stores/auth'
import { UserResponse } from '@/typings/models.ts'
import { ApiResponse } from '@/typings/http-resources.ts'
import { ref } from 'vue'

export const useUsersStore = defineStore('users', () => {
  const authStore = useAuthStore()

  /** States */
  const users = ref<UserResponse[]>([])

  /** Actions */
  const fetchUsers = async (roleFilter: string | number | null = null, limit: number = 15) => {
    let uri = `/users?limit=${limit}&sort=desc&`
    if (roleFilter) uri += `role=${roleFilter}`

    const { data } = await useApiCall(uri, authStore.authenticationToken).get().json()
    const responseBody: ApiResponse = data.value

    if (responseBody.success) {
      const usersList = responseBody.data as UserResponse[]
      users.value = [...usersList]
    }

    return responseBody
  }

  return {
    users,
    fetchUsers,
  }
})
