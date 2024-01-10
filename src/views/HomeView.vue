<template>
  <Toast />
  <Card>
    <template #title> Simple Card</template>
    <template #content>
      <p class="m-0">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam
        deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate
        neque quas!
      </p>
    </template>
  </Card>
  <Button label="Sample" class="flex bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3"></Button>
  <button class="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3"></button>
</template>

<script setup lang="ts">
import Toast from 'primevue/toast'
import Card from 'primevue/card'
import Button from 'primevue/button'
</script>
