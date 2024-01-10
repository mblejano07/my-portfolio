/** @see https://primevue.org/vite/ */

import { vueApp } from '@/app.ts'
import PrimeVue from 'primevue/config'
import Wind from '@/assets/css/presets/wind'

import ToastService from 'primevue/toastservice'

const primeVueConfig = { unstyled: true, pt: Wind, ripple: true }
vueApp.use(PrimeVue, primeVueConfig)

vueApp.use(ToastService)
