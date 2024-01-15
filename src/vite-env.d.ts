/// <reference types="vite/client" />

/**
 * Stop the IDE from complaining about missing type declarations for Vuelidate
 * @see https://github.com/vuelidate/vuelidate/issues/1189
 */
declare module '@vuelidate/core'
declare module '@vuelidate/validators'

/**
 * Stop the IDE from complaining about missing type declarations for libphonenumber-js
 */
declare module 'libphonenumber-js/max'
