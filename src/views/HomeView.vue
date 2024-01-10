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
  <Button label="Sample" class="text-white px-4 sm:px-8 py-2 sm:py-3 bg-sky-700 hover:bg-sky-800"></Button>
</template>

<script setup lang="ts">
import Toast from 'primevue/toast'
import Card from 'primevue/card'
import Button from 'primevue/button'
</script>
