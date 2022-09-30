<template>
    <Pie
        :chart-options="chartOptions"
        :chart-data="chartData"
        :chart-id="chartId"
        :dataset-id-key="datasetIdKey"
        :plugins="plugins"
        :css-classes="cssClasses"
        :styles="styles"
        :width="width"
        :height="height"
    />
</template>

<script setup>
import {Pie} from 'vue-chartjs'
import {Chart as ChartJS, Title, Tooltip, ArcElement, Legend, CategoryScale,} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)
const props = defineProps({
    chartId: {
        type: String,
        default: 'pie-chart'
    },
    datasetIdKey: {
        type: String,
        default: 'label'
    },
    width: {
        type: Number,
        default: 400
    },
    height: {
        type: Number,
        default: 400
    },
    cssClasses: {
        default: '',
        type: String
    },
    styles: {
        type: Object,
        default: () => {
        }
    },
    plugins: {
        type: Array,
        default: () => []
    },
    chartData: {
        type: Object,
        required: true
    },
});
// const chartData = {
//     labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
//     datasets: [
//         {
//             backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
//             data: [40, 20, 80, 10]
//         }
//     ]
// }
const chartOptions = {
    responsive: true,
    maintainAspectRatio: false
}
</script>

