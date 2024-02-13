<script setup lang="ts">
import VueApexCharts from 'vue3-apexcharts'
import { toRaw } from 'vue'

type TimelineChartProps = {
  series: Array<{ data: Array<{ x: string; y: Array<Date>; fillColor: string }> }>
}

const props = defineProps<TimelineChartProps>()

const options = {
  chart: {
    sparkline: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  xaxis: {
    type: 'datetime',
  },
  fill: {
    type: 'solid',
    opacity: 0.6,
  },
  plotOptions: {
    bar: {
      horizontal: true,
      distributed: true,
      dataLabels: {
        hideOverflowingLabels: false,
      },
    },
  },
}
</script>

<template>
  <div class="flex h-full w-full items-center rounded-lg bg-surface-0 shadow-md">
    <!-- toRaw(): @see https://stackoverflow.com/questions/77458993/vue-warn-maximum-recursive-updates-exceeded -->
    <VueApexCharts class="w-full" type="rangeBar" :series="toRaw(props.series)" :options="options" />
  </div>
</template>
