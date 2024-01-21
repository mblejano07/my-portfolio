import { useFetch } from '@vueuse/core'
import { useGlobalStore } from '@/stores/global.ts'
import { useAuthStore } from '@/stores/auth.ts'

/**
 * @description Make an HTTP request to an endpoint
 *
 * @param uri
 * @param authToken
 */
export const apiCall = (uri: string, authToken: string | null = null) => {
  const baseUrl = import.meta.env.VITE_API_ROOT_URL

  // Remove the first char of the uri if it starts with a '/'
  if (uri.charAt(0) === '/') uri = uri.substring(1)

  return useFetch(`${baseUrl}/${uri}`, {
    async beforeFetch({ url, options }) {
      if (!authToken) return { url, options }

      // We add the auth token if the request needs authentication
      options.headers = {
        ...options.headers,
        Authorization: `Bearer ${authToken}`,
      }

      return { options, url }
    },
    // Intercept when the auth token expires
    onFetchError(ctx) {
      // Handle auth or token expiration
      const authStore = useAuthStore()
      const authToken = authStore.authenticationToken
      if (authToken && ctx?.data?.error_code === 'UNAUTHORIZED_ERROR' && ctx?.response?.status === 401) {
        const authStore = useAuthStore()
        if (authStore.authenticatedUser !== null) authStore.authExpired = true
      }

      // Handle Rate limit
      const globalStore = useGlobalStore()
      if (ctx?.response?.status === 429) {
        globalStore.showRateLimitToast = true
      }

      return ctx
    },
  })
}
