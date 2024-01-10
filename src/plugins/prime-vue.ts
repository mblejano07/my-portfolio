import { vueApp } from '@/app.ts'
import PrimeVue from 'primevue/config'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
/** @ts-expect-error. This was generated from PrimeVue, we'd rather not mess with the typings */
import Wind from '@/assets/css/presets/wind'

import ToastService from 'primevue/toastservice'

const primeVueConfig = { unstyled: true, pt: Wind, ripple: true }
vueApp.use(PrimeVue, primeVueConfig)

vueApp.use(ToastService)
