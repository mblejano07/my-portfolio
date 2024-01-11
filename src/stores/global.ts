import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useGlobalStore = defineStore('global', () => {
  const sidebarMinimized = ref(false)
  const toggleSidebar = (): boolean => {
    sidebarMinimized.value = !sidebarMinimized.value
    return sidebarMinimized.value
  }

  return {
    sidebarMinimized,
    toggleSidebar,
  }
})
