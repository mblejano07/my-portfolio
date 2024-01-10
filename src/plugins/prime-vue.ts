/** @see https://primevue.org/vite/ */

import { vueApp } from '@/app.ts'
import PrimeVue, { PrimeVueConfiguration } from 'primevue/config'
import Wind from '@/assets/css/presets/wind'
import ToastService from 'primevue/toastservice'

const config: PrimeVueConfiguration = { unstyled: true, pt: Wind, ripple: true }

vueApp.use(PrimeVue, config)
vueApp.use(ToastService)
