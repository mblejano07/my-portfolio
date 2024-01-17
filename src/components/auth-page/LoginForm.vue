<script setup lang="ts">
import WbInputText from '@/components/webkit/WbInputText.vue'
import Button from 'primevue/button'
import WbPassword from '@/components/webkit/WbPassword.vue'
import Divider from 'primevue/divider'
import { reactive, ref } from 'vue'
import useVuelidate from '@vuelidate/core'
import { helpers, required } from '@vuelidate/validators'
import { useRouter } from 'vue-router'
import { sleep } from '@/utils/helpers.ts'

/** Component States */
const payload = reactive({
  email: '',
  password: '',
})
const formIsSubmitting = ref(false)

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
const validator = useVuelidate(formRules, payload)

/** Form Submission */
const router = useRouter()
const handleFormSubmit = async () => {
  formIsSubmitting.value = true
  const valid = await validator.value.$validate()
  await sleep(2)
  if (!valid) return (formIsSubmitting.value = false)

  formIsSubmitting.value = false
  return await router.replace({ name: 'dashboard' })
}
</script>

<template>
  <section>
    <div class="text-center">
      <h2 class="mt-6 font-menu text-3xl font-bold">Account Login</h2>
      <p class="mb-4 mt-2 text-sm text-gray-500">Sign in to your existing account</p>
    </div>
    <form class="mt-8 flex flex-col space-y-6" @submit.prevent>
      <WbInputText
        v-model="payload.email"
        label="Email or mobile number"
        :invalid="validator.email.$invalid"
        :invalid-text="validator.email.$invalid ? validator.email.$errors[0].$message : null"
      >
        <template #prepend-icon>
          <i class="pi pi-envelope text-surface-500" />
        </template>
      </WbInputText>
      <WbPassword
        v-model="payload.password"
        label="Password"
        :feedback="false"
        toggleMask
        :invalid="validator.password.$invalid"
        :invalid-text="validator.password.$invalid ? validator.password.$errors[0].$message : null"
      >
        <template #prepend-icon>
          <i class="pi pi-lock text-surface-500" />
        </template>
      </WbPassword>
      <div>
        <Button
          @click="handleFormSubmit"
          label="Sign in"
          size="large"
          class="w-full font-menu"
          :loading="formIsSubmitting"
        ></Button>
      </div>
      <Divider class="text-xs text-surface-400">or</Divider>
      <p class="flex justify-center text-center">
        <RouterLink
          :to="{ name: 'sign-up' }"
          class="cursor-pointer text-sm text-primary-500 no-underline transition duration-300 ease-in hover:text-blue-500 hover:underline"
          >Create an account
        </RouterLink>
      </p>
    </form>
  </section>
</template>

<style scoped></style>
