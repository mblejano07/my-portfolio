<script setup lang="ts">
import GeneralReportCard from '@/components/dashboard/GeneralReportCard.vue'
import TreeMap from '@/components/dashboard/TreeMap.vue'
import { computed, ref } from 'vue'
import TimelineChart from '@/components/dashboard/TimelineChart.vue'
import DonutChart from '@/components/dashboard/DonutChart.vue'

/** General Report Cards */
const formatNumber = (number: number) => {
  return new Intl.NumberFormat().format(number)
}

const peopleReachedCategories = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8']
const peopleReachedSeriesData = ref([78, 250, 400, 215, 199, 380, 750, 222])
const peopleReachedTotal = computed(() => {
  return formatNumber(peopleReachedSeriesData.value.reduce((partialSum, n) => partialSum + n, 0))
})
const expensesCategories = ['Month 1', 'Month 2', 'Month 3', 'Month 4', 'Month 5']
const expensesSeriesData = ref([13_234, 10_324, 11_999, 27_000, 5_000])
const expensesTotal = computed(() => {
  return formatNumber(expensesSeriesData.value.reduce((partialSum, n) => partialSum + n, 0))
})
const onboardedCategories = ['January', 'February', 'March', 'April', 'May']
const onboardedSeriesData = ref([200, 90, 70, 90, 39])
const onboardedTotal = computed(() => {
  return formatNumber(onboardedSeriesData.value.reduce((partialSum, n) => partialSum + n, 0))
})

/** National Breakdown (Treemap) */
const nationalBreakdownSeries = ref([
  {
    name: 'Luzon',
    data: [
      { x: 'Pampanga', y: 10 },
      { x: 'Central Luzon', y: 60 },
      { x: 'Aurora', y: 41 },
      { x: 'Cagayan Valley', y: 41 },
      { x: 'Ilocos', y: 41 },
    ],
  },
  {
    name: 'Visayas',
    data: [
      { x: 'Western Visayas', y: 10 },
      { x: 'Central Visayas', y: 20 },
      { x: 'Eastern Visayas', y: 51 },
    ],
  },
  {
    name: 'Mindanao',
    data: [
      { x: 'Davao Occidental', y: 10 },
      { x: 'Basilan', y: 9 },
      { x: 'Lanao Del Sur', y: 31 },
      { x: 'Sulu', y: 27 },
      { x: 'CARAGA', y: 15 },
    ],
  },
])

/** Deployment Timeline */
const deploymentTimelineSeries = ref([
  {
    data: [
      {
        x: 'Training',
        y: [new Date('2023-02-27').getTime(), new Date('2023-03-04').getTime()],
        fillColor: '#008FFB',
      },
      {
        x: 'Pilot',
        y: [new Date('2023-03-02').getTime(), new Date('2023-03-15').getTime()],
        fillColor: '#00E396',
      },
      {
        x: 'Regional',
        y: [new Date('2023-03-15').getTime(), new Date('2023-03-30').getTime()],
        fillColor: '#775DD0',
      },
      {
        x: 'National',
        y: [new Date('2023-04-01').getTime(), new Date('2023-04-20').getTime()],
        fillColor: '#FEB019',
      },
    ],
  },
])

/** Programs Donut Chart */
const programsDonutChartSeries = ref([44, 55, 41, 17, 15])
const programsDonutChartLabels = ref([
  'Community Care Initiative',
  'Health Equity Initiative',
  'Food Security Program',
  'Youth Empowerment Program',
  'Senior Citizen Support Scheme',
])
const programsDonutChartColors = ref(['#524ebb', '#2d724f', '#046ac5', '#af510a', '#07b1c0'])

/** Simulate Live Data Changes */
setInterval(() => {
  peopleReachedSeriesData.value[peopleReachedSeriesData.value.length - 1] += Math.floor(Math.random() * 20 + 1)
  expensesSeriesData.value[expensesSeriesData.value.length - 1] += Math.floor(Math.random() * 1000 + 100)
  onboardedSeriesData.value[onboardedSeriesData.value.length - 1] += Math.floor(Math.random() * 10 + 1)

  nationalBreakdownSeries.value[0].data[Math.floor(Math.random() * 5)].y += 1
  nationalBreakdownSeries.value[1].data[Math.floor(Math.random() * 3)].y += 1
  nationalBreakdownSeries.value[2].data[Math.floor(Math.random() * 5)].y += 1

  programsDonutChartSeries.value[Math.floor(Math.random() * programsDonutChartSeries.value.length)] += 5
}, 5000)
</script>

<template>
  <div class="mx-auto h-[100%] w-full">
    <!-- Start General Report Cards -->
    <p class="mb-4 text-xs font-semibold uppercase text-surface-600">General Reports</p>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      <GeneralReportCard
        :id="$.uid + '-people-reached'"
        :categories="peopleReachedCategories"
        :series-data="peopleReachedSeriesData"
        color="#1976d2"
        series-name="People Reached"
        title="Total Beneficiaries Reached"
        :total="peopleReachedTotal"
      />
      <GeneralReportCard
        :id="$.uid + '-expenses'"
        :categories="expensesCategories"
        :series-data="expensesSeriesData"
        color="#CD5C5C"
        series-name="Expenses (PHP)"
        title="Total Expenses"
        :total="'₱' + expensesTotal"
      />
      <GeneralReportCard
        :id="$.uid + '-onboarded'"
        :categories="onboardedCategories"
        :series-data="onboardedSeriesData"
        color="#088F8F"
        series-name="Onboarded Beneficiaries"
        title="Total On-Boarded"
        :total="onboardedTotal"
      />
    </div>
    <!-- End General Report Cards -->
    <!-- Start Heatmap -->
    <p class="mb-4 mt-8 text-xs font-semibold uppercase text-surface-600">Regional Breakdown</p>
    <div class="flex max-h-96 w-full">
      <TreeMap :series="nationalBreakdownSeries" :colors="['#524ebb', '#2d724f', '#0a4177']" />
    </div>
    <!-- End Heatmap -->
    <!-- Start Programs & Timeline -->
    <div class="grid grid-cols-1 items-stretch gap-4 md:grid-cols-2">
      <div class="flex h-full w-full flex-col">
        <p class="mb-4 mt-8 text-xs font-semibold uppercase text-surface-600">Beneficiaries Per Program</p>
        <DonutChart :series="programsDonutChartSeries" :labels="programsDonutChartLabels" :colors="programsDonutChartColors" />
      </div>
      <div class="flex w-full flex-col">
        <p class="mb-4 mt-8 text-xs font-semibold uppercase text-surface-600">Deployment Timeline</p>
        <TimelineChart :series="deploymentTimelineSeries" />
      </div>
    </div>
    <!-- End Programs & Timeline -->
  </div>
</template>
