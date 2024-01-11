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
            What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of
            type and scrambled it to make a type specimen book it has?
          </div>
        </div>
        <!-- End Webkit Text -->
        <!-- Start Animated Circles -->
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
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
          <form class="mt-8 flex flex-col space-y-6">
            <span class="relative">
              <i class="pi pi-at absolute left-3 top-6 -mt-2 text-surface-400 dark:text-surface-600" />
              <InputText v-model="payload.email" placeholder="Email or Mobile Number" class="h-12 w-full pl-10" />
            </span>
            <span class="relative">
              <i class="pi pi-lock absolute left-3 top-6 -mt-2 text-surface-400 dark:text-surface-600" />
              <InputText type="password" v-model="payload.password" placeholder="Password" class="h-12 w-full pl-10" />
            </span>
            <div>
              <Button label="Sign in" class="w-full"></Button>
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

<script setup lang="ts">
import { ref } from 'vue'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import Divider from 'primevue/divider'

const payload = ref({
  email: '',
  password: '',
})
</script>

<style scoped>
.circles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.circles li {
  position: absolute;
  display: block;
  list-style: none;
  width: 20px;
  height: 20px;
  background: rgba(255, 255, 255, 0.2);
  animation: animate 25s linear infinite;
  bottom: -150px;
}

.circles li:nth-child(1) {
  left: 25%;
  width: 80px;
  height: 80px;
  animation-delay: 0s;
}

.circles li:nth-child(2) {
  left: 10%;
  width: 20px;
  height: 20px;
  animation-delay: 2s;
  animation-duration: 12s;
}

.circles li:nth-child(3) {
  left: 70%;
  width: 20px;
  height: 20px;
  animation-delay: 4s;
}

.circles li:nth-child(4) {
  left: 40%;
  width: 60px;
  height: 60px;
  animation-delay: 0s;
  animation-duration: 18s;
}

.circles li:nth-child(5) {
  left: 65%;
  width: 20px;
  height: 20px;
  animation-delay: 0s;
}

.circles li:nth-child(6) {
  left: 75%;
  width: 110px;
  height: 110px;
  animation-delay: 3s;
}

.circles li:nth-child(7) {
  left: 35%;
  width: 150px;
  height: 150px;
  animation-delay: 7s;
}

.circles li:nth-child(8) {
  left: 50%;
  width: 25px;
  height: 25px;
  animation-delay: 15s;
  animation-duration: 45s;
}

.circles li:nth-child(9) {
  left: 20%;
  width: 15px;
  height: 15px;
  animation-delay: 2s;
  animation-duration: 35s;
}

.circles li:nth-child(10) {
  left: 85%;
  width: 150px;
  height: 150px;
  animation-delay: 0s;
  animation-duration: 11s;
}

@keyframes animate {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
    border-radius: 0;
  }

  100% {
    transform: translateY(-1000px) rotate(720deg);
    opacity: 0;
    border-radius: 50%;
  }
}
</style>
