<script setup lang="ts">
import Card from 'primevue/card'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import SelectButton from 'primevue/selectbutton'
import Button from 'primevue/button'
import { ref } from 'vue'

const selectedTheme = ref(null)
const options = ref([
  { icon: 'fa-solid fa-sun', value: 'light' },
  { icon: 'fa-solid fa-moon', value: 'dark' },
])
</script>

<template>
  <Card>
    <template #content>
      <div class="w-full">
        <h1 class="font-menu text-lg font-bold md:text-xl">Application Theme</h1>
        <p class="md:text-medium mt-1 text-sm text-surface-700">
          You can select a theme below to change the look and feel of the website for all users.
        </p>
        <div class="justify-left mt-6 flex">
          <SelectButton v-model="selectedTheme" :options="options" optionLabel="value" dataKey="value">
            <template #option="slotProps">
              <div class="flex items-center p-2">
                <FontAwesomeIcon :icon="slotProps.option.icon" class="h-4 w-4 md:h-6 md:w-6" />
                <span class="ml-2 uppercase">{{ slotProps.option.value }}</span>
              </div>
            </template>
          </SelectButton>
        </div>
      </div>
    </template>
    <template #footer>
      <div class="mx-6 flex justify-end">
        <Button label="Save">
          <template #icon>
            <i class="pi pi-save mr-1"></i>
          </template>
        </Button>
      </div>
    </template>
  </Card>
</template>
