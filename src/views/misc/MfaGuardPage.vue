<script setup lang="ts">
import { ref } from 'vue'
import InputOtp from 'primevue/inputotp'
const mfaCode = ref('123456')
</script>

<template>
  <h1>This is the MFA guard page</h1>
  <InputOtp v-model="mfaCode" integerOnly />
</template>
