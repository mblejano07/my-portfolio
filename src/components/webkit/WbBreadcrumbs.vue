<template>
  <Breadcrumb v-if="show" :model="items">
    <template #separator><i class="pi pi-angle-right"></i></template>
  </Breadcrumb>
</template>
<script setup lang="ts">
import Breadcrumb from 'primevue/breadcrumb'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const show = ref(true)
const items = ref<Array<{ label?: string }>>()

watch(
  () => route.name,
  () => {
    if (!route.meta.isSidebarMenu) {
      show.value = false
      return
    }

    items.value = [{ label: route.meta.group }, { label: route.meta.label }]
  }
)
</script>
