<script setup lang="ts">
import VueApexCharts from 'vue3-apexcharts'

type TreeMapProps = {
  series: Array<{ name: string; data: Array<{ x: string; y: number }> }>
  colors: string[]
  darkMode: boolean
}

const props = defineProps<TreeMapProps>()

const options = {
  theme: {
    mode: props.darkMode ? 'dark' : 'light',
  },
  chart: {
    sparkline: {
      enabled: true,
    },
    background: 'transparent',
    useFillColorAsStroke: props.darkMode,
  },
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: true,
  },
  colors: props.colors,
  stroke: {
    colors: props.darkMode ? ['#2d3748'] : ['#FFFFFF'],
  },
}
</script>

<template>
  <div class="bg-surface-0 dark:bg-surface-700 flex w-full rounded-lg shadow-md">
    <VueApexCharts class="w-full" height="300px" type="treemap" :series="props.series" :options="options" />
  </div>
</template>
