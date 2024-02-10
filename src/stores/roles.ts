import { defineStore } from 'pinia'
import { useApiCall } from '@/composables/network'
import { useAuthStore } from '@/stores/auth'
import { RoleResponse } from '@/typings/models.ts'
import { ApiResponse } from '@/typings/http-resources.ts'
import { ref } from 'vue'
import { snakeCaseToTitleCase } from '@/utils/helpers.ts'

export const useRolesStore = defineStore('roles', () => {
  const authStore = useAuthStore()

  /** States */
  const roleOptions = ref<Array<{ value: string | number; label: string }>>([])

  /** Actions */
  const fetchRoles = async () => {
    const { data } = await useApiCall('/roles', authStore.authenticationToken).get().json()
    const responseBody = data.value as ApiResponse

    if (responseBody.success) {
      const rolesList = responseBody.data as RoleResponse[]
      roleOptions.value = rolesList.map((r: RoleResponse) => {
        return { value: r.id, label: snakeCaseToTitleCase(r.name) }
      })
    }

    return responseBody
  }

  return {
    fetchRoles,
  }
})
