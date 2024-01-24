<script setup lang="ts">
import WbInputText from '@/components/webkit/WbInputText.vue'
import Message from 'primevue/message'
import Button from 'primevue/button'
import WbPassword from '@/components/webkit/WbPassword.vue'
import { reactive, ref } from 'vue'
import useVuelidate from '@vuelidate/core'
import { helpers, required } from '@vuelidate/validators'
import { useRouter } from 'vue-router'
import { LoginPayload, useAuthStore } from '@/stores/auth.ts'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/** Component States */
const payload = reactive<LoginPayload>({
  email: '',
  password: '',
})
const formIsSubmitting = ref(false)
const showCredsErrorAlert = ref(false)

/** Emits */
const emit = defineEmits<{
  (e: 'onCredentialsError', value: boolean): void
}>()

/** Form Validation */
const formRules = {
  $lazy: true,
  email: {
    required: helpers.withMessage('Enter your email or mobile number', required),
  },
  password: {
    required: helpers.withMessage('Enter your password', required),
  },
}
const validator = useVuelidate<LoginPayload>(formRules, payload)

/** Form Submission */
const router = useRouter()
const authStore = useAuthStore()
const handleFormSubmit = async () => {
  formIsSubmitting.value = true
  const valid = await validator.value.$validate()
  if (!valid) return (formIsSubmitting.value = false)

  const res = await authStore.login(payload)
  if (!res.success) {
    formIsSubmitting.value = false
    showCredsErrorAlert.value = true
    emit('onCredentialsError', true)
    return
  }

  formIsSubmitting.value = false
  return await router.replace({ name: 'dashboard' })
}
</script>

<template>
  <section class="bg-inherit">
    <div class="text-center">
      <h2 class="mt-6 font-menu text-3xl font-bold dark:text-surface-0">Account Login</h2>
      <p class="mb-4 mt-2 text-sm text-gray-500 dark:!text-surface-300">Sign in to your existing account</p>
    </div>
    <!-- Start Alert Message -->
    <transition enter-active-class="transition duration-200" enter-from-class="scale-50 opacity-0" leave-to-class="opacity-0">
      <Message v-if="showCredsErrorAlert" :closable="false" severity="error">
        <span>The credentials you've provided are invalid</span>
      </Message>
    </transition>
    <!-- End Alert Message -->
    <!-- Start Form -->
    <form class="mt-8 flex flex-col space-y-6" @submit.prevent>
      <WbInputText
        v-model="payload.email"
        label="Email or mobile number"
        :invalid="validator.email.$invalid"
        :invalid-text="validator.email.$errors[0]?.$message"
      >
        <template #prepend-icon>
          <i class="pi pi-envelope" />
        </template>
      </WbInputText>
      <WbPassword
        v-model="payload.password"
        label="Password"
        :feedback="false"
        toggleMask
        :invalid="validator.password.$invalid"
        :invalid-text="validator.password.$errors[0]?.$message"
      >
        <template #prepend-icon>
          <i class="pi pi-lock" />
        </template>
      </WbPassword>
      <div>
        <Button
          @click="handleFormSubmit"
          label="Sign in"
          size="large"
          class="mt-3 w-full font-menu"
          :loading="formIsSubmitting"
        ></Button>
      </div>
      <p class="flex justify-between pt-3 text-center">
        <Button
          label="Forgot Password"
          size="small"
          class="text-xs"
          severity="secondary"
          text
          @click="$router.push({ name: 'sign-up' })"
        >
          <template #icon>
            <FontAwesomeIcon icon="fa-solid fa-lock" class="mr-1.5" />
          </template>
        </Button>
        <Button label="Create an account" size="small" class="text-xs" text @click="$router.push({ name: 'sign-up' })">
          <template #icon>
            <FontAwesomeIcon icon="fa-solid fa-right-to-bracket" class="mr-1.5" />
          </template>
        </Button>
      </p>
    </form>
    <!-- End Form -->
  </section>
</template>

<style scoped></style>
