import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  // States
  const selectedTheme = ref('light')

  const availableThemes = ref([
    { key: 'light', name: 'Light' },
    { key: 'dark', name: 'Dark' },
  ])

  // Actions
  const switchTheme = (theme: string) => {
    selectedTheme.value = theme
  }

  return { selectedTheme, availableThemes, switchTheme }
})
