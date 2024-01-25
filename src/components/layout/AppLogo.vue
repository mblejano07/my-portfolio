<script setup lang="ts">
const props = defineProps({
  iconOnly: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div class="flex text-primary-500">
    <i
      :class="`pi pi-prime mr-2 h-6 w-6 rounded-full p-1 ${
        props.iconOnly ? 'mb-1.5 mr-0 h-12 w-12 p-0 text-[1.5em]' : 'ring-2 ring-primary-500'
      }`"
    ></i>
    <h1 v-if="!props.iconOnly" class="font-menu text-xl font-bold">WebkitPrime</h1>
  </div>
</template>
