<template>
  <Toolbar
    :pt="{
      root: {
        class: [
          // Flex & Alignment
          'flex items-center justify-between flex-wrap',
          'gap-6',

          // Spacing
          'px-6 py-6',
          'min-h-[4rem]',

          // Color
          'bg-surface-200 dark:bg-surface-900',
        ],
      },
    }"
  >
    <template #start>
      <Button icon="pi pi-bars" severity="secondary" text rounded aria-label="Menu" class="mr-4" />
      <Breadcrumb :home="home" :model="items">
        <template #separator><i class="pi pi-angle-right"></i></template>
      </Breadcrumb>
    </template>

    <template #end>
      <span class="relative mr-4">
        <i class="pi pi-search absolute left-3 top-2/4 -mt-2 text-surface-400 dark:text-surface-600" />
        <InputText placeholder="Search" class="pl-10" />
      </span>
      <Avatar image="https://i.pravatar.cc/300" shape="circle" class="overflow-hidden" />
    </template>
  </Toolbar>
</template>

<script setup>
import Toolbar from 'primevue/toolbar'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Breadcrumb from 'primevue/breadcrumb'
import { ref } from 'vue'

const home = ref({
  icon: 'pi pi-home',
})

const items = ref([{ label: 'Home' }, { label: 'Page 1' }])
</script>
