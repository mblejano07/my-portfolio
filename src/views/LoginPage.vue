<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import Divider from 'primevue/divider'
import WbInputText from '@/components/webkit/WbInputText.vue'
import WbPassword from '@/components/webkit/WbPassword.vue'
import { useVuelidate } from '@vuelidate/core'
import { required, helpers } from '@vuelidate/validators'

/** Component States */
const payload = ref({
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
const handleFormSubmit = async () => {
  formIsSubmitting.value = true
  const valid = await validator.value.$validate()
  if (!valid) return (formIsSubmitting.value = false)
}
</script>

<template>
  <div class="relative flex min-h-screen">
    <div
      class="flex min-w-0 flex-auto flex-col items-center bg-white sm:flex-row sm:justify-center md:items-start md:justify-start"
    >
      <div
        class="relative hidden h-full flex-auto items-center justify-center overflow-hidden bg-primary-900 p-10 text-white sm:w-1/2 md:flex xl:w-3/5"
      >
        <div class="absolute inset-0 z-0 bg-gradient-to-b from-primary-500 to-primary-900 opacity-75"></div>
        <!-- Start Webkit Text -->
        <div class="z-10 w-full max-w-md">
          <div class="mb-6 font-menu font-bold leading-tight sm:text-4xl xl:text-5xl">Webkit (Prime)</div>
          <div class="xl:text-md font-normal text-gray-200 sm:text-sm">
            Nipper holystone six pounders barkadeer rutters Privateer hail-shot warp black spot fore. Knave six pounders
            quarterdeck crack Jennys tea cup starboard aye league lass Sink me heave down.
          </div>
        </div>
        <!-- End Webkit Text -->
        <!-- Start Animated Circles -->
        <!--        <ul class="circles">-->
        <ul class="absolute left-0 top-0 h-full w-full overflow-hidden">
          <li
            class="absolute bottom-[-150px] left-[25%] block h-[80px] w-[80px] animate-float-up bg-surface-0 bg-opacity-20"
          />
          <li
            class="absolute bottom-[-150px] left-[55%] block h-[20px] w-[20px] animate-float-up bg-surface-0 bg-opacity-20 animation-delay-[2s] animation-duration-[17s]"
          />
          <li
            class="absolute bottom-[-150px] left-[70%] block h-[150px] w-[150px] animate-float-up bg-surface-0 bg-opacity-20 animation-delay-[4s] animation-duration-[48s]"
          />
          <li
            class="absolute bottom-[-150px] left-[10%] block h-[35px] w-[35px] animate-float-up bg-surface-0 bg-opacity-20 animation-delay-[8s] animation-duration-[27s]"
          />
          <li
            class="absolute bottom-[-150px] left-[40%] block h-[80px] w-[80px] animate-float-up bg-surface-0 bg-opacity-20 animation-delay-[12s] animation-duration-[30s]"
          />
          <li
            class="absolute bottom-[-150px] left-[80%] block h-[50px] w-[50px] animate-float-up bg-surface-0 bg-opacity-20 animation-delay-[15s] animation-duration-[39s]"
          />
          <li
            class="absolute bottom-[-150px] left-[30%] block h-[120px] w-[120px] animate-float-up bg-surface-0 bg-opacity-20 animation-delay-[17s] animation-duration-[42s]"
          />
          <li
            class="absolute bottom-[-150px] left-[14%] block h-[25px] w-[25px] animate-float-up bg-surface-0 bg-opacity-20 animation-delay-[19s] animation-duration-[45s]"
          />
          <li
            class="absolute bottom-[-270px] left-[10%] block h-[200px] w-[200px] animate-float-up bg-surface-0 bg-opacity-20 animation-delay-[22s] animation-duration-[29s]"
          />
          <li
            class="absolute bottom-[-150px] left-[52%] block h-[40px] w-[40px] animate-float-up bg-surface-0 bg-opacity-20 animation-delay-[25s] animation-duration-[39s]"
          />
        </ul>
        <!-- End Animated Circles -->
      </div>
      <div
        class="w-2/5 bg-white p-8 sm:w-auto sm:rounded-lg md:flex md:h-full md:items-center md:justify-center md:rounded-none md:p-10 lg:p-14 xl:w-2/5"
      >
        <div class="w-full max-w-md space-y-8">
          <div class="text-center">
            <h2 class="mt-6 font-menu text-3xl font-bold">Account Login</h2>
            <p class="mt-2 text-sm text-gray-500">Please sign in to your account</p>
          </div>
          <!-- Start Login Form -->
          <form class="mt-8 flex flex-col space-y-6" @submit.prevent>
            <WbInputText
              id="email-input"
              v-model="payload.email"
              placeholder="you@example.com"
              class="w-full"
              label="Email or mobile number"
              unstyled="true"
              :invalid="validator.email.$invalid"
              :invalid-text="validator.email.$invalid ? validator.email.$errors[0].$message : null"
            >
              <template #prepend-icon>
                <i class="pi pi-at text-surface-500" />
              </template>
            </WbInputText>
            <WbPassword
              v-model="payload.password"
              label="Password"
              placeholder="*****"
              :feedback="false"
              toggleMask
              class="w-full"
              inputClass="w-full"
              :invalid="validator.password.$invalid"
              :invalid-text="validator.password.$invalid ? validator.password.$errors[0].$message : null"
            >
              <template #prepend-icon>
                <i class="pi pi-lock text-surface-500" />
              </template>
            </WbPassword>
            <div>
              <Button @click="handleFormSubmit" label="Sign in" class="h-10 w-full font-menu"></Button>
            </div>
            <Divider class="text-xs text-surface-400">or</Divider>
            <p class="flex justify-center text-center">
              <a
                href="#"
                class="cursor-pointer text-sm text-primary-500 no-underline transition duration-300 ease-in hover:text-blue-500 hover:underline"
                >Create an account</a
              >
            </p>
          </form>
          <!-- End Login Form -->
        </div>
      </div>
    </div>
  </div>
</template>
