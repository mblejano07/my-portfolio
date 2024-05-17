<script setup lang="ts">
import Card from 'primevue/card'
import Button from 'primevue/button'
import SelectButton from 'primevue/selectbutton'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { onUnmounted, ref } from 'vue'
import { useSettingsStore } from '@/stores/settings.store.ts'
import { useToast } from 'primevue/usetoast'

/** Handle MFA Enabled/Disabled Options */
const options = ref([
  { icon: 'fa-solid fa-check', label: 'On', value: true },
  { icon: 'fa-solid fa-xmark', label: 'Off', value: false },
])
const settingsStore = useSettingsStore()
const selectedOption = ref<boolean>(settingsStore.mfaIsEnabled)

/** Handle Save Settings */
const formIsLoading = ref(false)
const mfaConfigIsSaved = ref(false)
const toast = useToast()
const handleSaveSettings = async () => {
  formIsLoading.value = true
  const res = await settingsStore.storeSettings({
    mfa: {
      enabled: selectedOption.value,
    },
  })

  if (res.success) {
    console.log(res.data)
    mfaConfigIsSaved.value = true
  }

  formIsLoading.value = false
  toast.add({
    severity: 'success',
    summary: 'App Settings',
    detail: 'MFA configurations saved',
    life: 4000,
  })
}

// Show a toast notification if settings were changed but were not changed
onUnmounted(() => {
  if (selectedOption.value !== settingsStore.mfaIsEnabled && !mfaConfigIsSaved.value) {
    toast.add({
      severity: 'warn',
      summary: 'App Settings',
      detail: 'MFA configuration changes were not saved',
      life: 4000,
    })
  }
})
</script>

<template>
  <Card>
    <template #content>
      <div class="w-full">
        <h1 class="font-menu text-lg font-bold dark:text-surface-200 md:text-xl">Multi-Factor Authentication</h1>
        <p class="md:text-medium mt-1 text-sm text-surface-700 dark:text-surface-400">
          You can enable or disable MFA for all users. You may also select multiple MFA factors and order them.
        </p>
        <div class="justify-left mt-6 flex">
          <SelectButton v-model="selectedOption" :options="options" optionLabel="label" optionValue="value">
            <template #option="slotProps">
              <div class="flex items-center p-2">
                <FontAwesomeIcon :icon="slotProps.option.icon" class="h-4 w-4 md:h-6 md:w-6" />
                <span class="ml-2 uppercase">{{ slotProps.option.label }}</span>
              </div>
            </template>
          </SelectButton>
        </div>
      </div>
    </template>
    <template #footer>
      <div class="mx-6 flex justify-end">
        <Button label="Save" @click="handleSaveSettings" :loading="formIsLoading" :disabled="formIsLoading">
          <template #icon>
            <i class="pi pi-save mr-1"></i>
          </template>
        </Button>
      </div>
    </template>
  </Card>
</template>
