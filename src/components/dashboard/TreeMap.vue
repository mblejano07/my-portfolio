<script setup lang="ts">
import VueApexCharts from 'vue3-apexcharts'

type TreeMapProps = {
  series: Array<{ name: 'string'; data: Array<{ x: string; y: number }> }>
  colors: string[]
}

const props = defineProps<TreeMapProps>()

const options = {
  chart: {
    sparkline: {
      enabled: true,
    },
  },
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: true,
  },
  colors: props.colors,
}
</script>

<template>
  <div class="flex w-full rounded-lg bg-surface-0 shadow-md">
    <VueApexCharts class="w-full" height="300px" type="treemap" :series="props.series" :options="options" />
  </div>
</template>
