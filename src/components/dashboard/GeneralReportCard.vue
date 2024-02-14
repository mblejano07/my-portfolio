<script setup lang="ts">
import { watch } from 'vue'
import VueApexCharts from 'vue3-apexcharts'
import ApexCharts from 'apexcharts'

type GeneralReportCardProps = {
  id: string
  total: number | string
  title: string
  seriesName: string
  seriesData: number[]
  categories: Array<string | number>
  color: string
  darkMode: boolean
}

const props = defineProps<GeneralReportCardProps>()

const series = [
  {
    name: props.seriesName,
    data: props.seriesData,
  },
]

const options = {
  theme: {
    mode: props.darkMode ? 'dark' : 'light',
  },
  chart: {
    id: props.id,
    toolbar: {
      show: false,
    },
    sparkline: {
      enabled: true,
    },
    background: 'transparent',
  },
  title: {
    text: props.total,
    offsetY: 24,
    offsetX: 24,
    style: {
      fontSize: '28px',
    },
  },
  subtitle: {
    text: props.title,
    offsetY: 56,
    offsetX: 24,
    style: {
      fontSize: '18px',
    },
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: props.categories,
  },
  stroke: {
    curve: 'smooth',
  },
  colors: [props.color],
  fill: {
    type: 'gradient',
    gradient: {
      opacityFrom: 0.5,
      opacityTo: 0.9,
      type: 'horizontal',
    },
  },
}

watch(
  () => props.total,
  (newTotal) => {
    ApexCharts.exec(props.id, 'updateOptions', {
      theme: {
        mode: props.darkMode ? 'dark' : 'light',
      },
      chart: {
        id: props.id,
        toolbar: {
          show: false,
        },
        sparkline: {
          enabled: true,
        },
        background: 'transparent',
      },
      title: {
        text: newTotal,
        offsetY: 24,
        offsetX: 24,
        style: {
          fontSize: '28px',
        },
      },
      subtitle: {
        text: props.title,
        offsetY: 56,
        offsetX: 24,
        style: {
          fontSize: '18px',
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: props.categories,
      },
      stroke: {
        curve: 'smooth',
      },
      colors: [props.color],
      fill: {
        type: 'gradient',
        gradient: {
          opacityFrom: 0.5,
          opacityTo: 0.9,
          type: 'horizontal',
        },
      },
    })
  }
)
</script>

<template>
  <div class="relative flex min-h-56 w-full overflow-hidden rounded-lg bg-surface-0 shadow-md dark:bg-surface-700">
    <div class="flex w-full">
      <VueApexCharts class="absolute top-4 h-full w-full md:top-0.5" type="area" :series="series" :options="options" />
    </div>
  </div>
</template>
