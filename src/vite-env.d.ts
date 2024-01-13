/// <reference types="vite/client" />

/**
 * Stop the IDE from complaining about missing types for Vuelidate
 * @see https://github.com/vuelidate/vuelidate/issues/1189
 */
declare module '@vuelidate/core'
declare module '@vuelidate/validators'
