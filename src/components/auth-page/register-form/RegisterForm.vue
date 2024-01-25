<script setup lang="ts">
import Steps from 'primevue/steps'
import { ref } from 'vue'
import CredentialsSection from '@/components/auth-page/register-form/CredentialsSection.vue'
import PersonalSection from '@/components/auth-page/register-form/PersonalSection.vue'
import AddressSection from '@/components/auth-page/register-form/AddressSection.vue'

/** Component States */
const activeStep = ref(1)
const registrationSteps = ref([
  {
    label: 'Credentials',
    icon: 'pi pi-home',
  },
  {
    label: 'Basic Information',
  },
  {
    label: 'Address',
  },
])

/** UI Handlers */
const handleNextButtonClicked = () => {
  activeStep.value++
}
const handlePreviousButtonClicked = () => {
  activeStep.value--
}
</script>

<template>
  <section class="flex w-full flex-col">
    <div class="text-center">
      <h2 class="mt-6 font-menu text-3xl font-bold">Account Registration</h2>
      <p class="mb-4 mt-2 text-sm text-gray-500">Complete the form to create your account</p>
    </div>
    <Steps v-model:active-step="activeStep" :model="registrationSteps" />
    <form class="mt-8 flex w-full flex-col space-y-6" @submit.prevent>
      <transition
        enter-active-class="transition duration-200"
        enter-from-class="translate-x-[20%] opacity-0"
        leave-active-class="opacity-0"
        leave-to-class="opacity-0"
      >
        <CredentialsSection v-if="activeStep === 0" @next-button-clicked="handleNextButtonClicked" class="mt-4" />
        <PersonalSection
          v-else-if="activeStep === 1"
          @next-button-clicked="handleNextButtonClicked"
          @previous-button-clicked="handlePreviousButtonClicked"
          class="mt-4"
        />
        <AddressSection v-else-if="activeStep === 2" @previous-button-clicked="handlePreviousButtonClicked" class="mt-4" />
      </transition>
    </form>
  </section>
</template>
