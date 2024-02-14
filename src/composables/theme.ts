import { ref, watch } from 'vue'
import { useSettingsStore } from '@/stores/settings.store.ts'
import { SettingsResponse } from '@/typings/models.types.ts'

const selectedTheme = ref<AvailableTheme | null>(null)

/**
 *  @description Change the current theme of the web-app
 */
export const useThemeConfig = () => {
  selectedTheme.value = getThemeFromAppSettings() as AvailableTheme | null

  // Apply the theme in the <body> tag
  watch(
    () => selectedTheme.value,
    () => {
      // Handle light theme (also the default theme)
      if (!selectedTheme.value || selectedTheme.value.value === 'light') {
        document.body.classList.add('theme-light')
        return document.body.classList.remove('dark')
      }

      // Handle dark theme
      document.body.classList.add('dark')
      document.body.classList.remove('theme-light')
    }
  )

  return { selectedTheme }
}

const getThemeFromAppSettings = () => {
  const settingsStore = useSettingsStore()
  if (!settingsStore.appSettings) return null

  for (const setting of settingsStore.appSettings) {
    if (setting.name === 'theme') return setting.value as SettingsResponse
  }

  return null
}

/** Typings */
export type AvailableTheme = {
  value: 'light' | 'dark'
  label: 'Light' | 'Dark'
}
