import { defineStore } from 'pinia'
import { RemovableRef, StorageSerializers, useStorage } from '@vueuse/core'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  // States. We use localStorage to hydrate state when the page reloads
  // @see https://github.com/vueuse/vueuse/pull/614#issuecomment-875450160 on why we need a serializer for `null` defaults
  const authenticationToken: RemovableRef<string> = useStorage('auth-token', null, localStorage, {
    serializer: StorageSerializers.string,
  })
  const authenticatedUser = useStorage('auth-user', null, localStorage, {
    serializer: StorageSerializers.object,
    deep: true,
    mergeDefaults: true,
  })
  const authExpired = ref(false)

  return {
    authenticationToken,
    authenticatedUser,
    authExpired,
  }
})
