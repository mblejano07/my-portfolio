<script setup lang="ts">
import Message from 'primevue/message'
import Button from 'primevue/button'
import { reactive, ref } from 'vue'
import { MfaUnEnrollUserPayload, useAuthStore } from '@/stores/auth.store.ts'
import { parseApiResponseError } from '@/utils/error-handle.ts'
import { useToast } from 'primevue/usetoast'

/** Emits */
const emit = defineEmits<{
  (e: 'mfa-config-updated', value: boolean): void
}>()

const props = defineProps<{ userId: string | number; userFullName: string }>()

/** Payload */
const payload = reactive<MfaUnEnrollUserPayload>({
  user_id: props.userId || '',
  mfa_step: '',
})

/** Handle Form Submission */
const formIsSubmitting = ref(false)
const showErrorAlert = ref(false)
const errorMessage = ref<string | null>(null)
const errorDetails = ref<string[]>([])
const authStore = useAuthStore()
const toast = useToast()
const handleFormSubmission = async () => {
  formIsSubmitting.value = true
  const response = await authStore.unEnrollUserFromMfaMethod(payload)
  formIsSubmitting.value = false

  if (!response.success) {
    const result = parseApiResponseError(response)
    if (!result) return (formIsSubmitting.value = false)

    showErrorAlert.value = true
    errorMessage.value = result.message
    errorDetails.value = result.errors
    return
  }

  toast.add({
    severity: 'success',
    summary: 'Create User',
    detail: "You've successfully created a user",
    life: 5000,
  })

  emit('mfa-config-updated', true)
}
</script>

<template>
  <form autocomplete="off" @submit.prevent>
    <div class="flex w-full flex-col gap-4 pb-4">
      <!-- Start Alert Message -->
      <transition enter-active-class="transition duration-200" enter-from-class="scale-50 opacity-0" leave-to-class="opacity-0">
        <Message v-if="showErrorAlert" :closable="false" severity="error" class="mb-2">
          <span>{{ errorMessage }}</span>
        </Message>
      </transition>
      <!-- End Alert Message -->
      <!-- Start Un-enroll Section -->
      <p class="create-user-creds-section text-xs font-medium uppercase">Un-enroll User</p>
      <Button @click="handleFormSubmission" label="Save"></Button>
      <!-- End Un-enroll Section -->
    </div>
  </form>
</template>
