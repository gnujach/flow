<template>
    <Bar
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
import {Bar} from 'vue-chartjs'
import {Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
const props = defineProps({
    chartId: {
        type: String,
        default: 'bar-chart'
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
        type: Object,
        default: () => {
        }
    },
    chartData: {
        type: Object,
        required: true
    },
});
// const chartData = {
//     labels: ['Septiembre', 'Octubre', 'Noviembre'],
//     datasets: [{
//         data: [34, 20, 22],
//         backgroundColor: '#f87979',
//     }],
// }
const chartOptions = {
    responsive: true
}
</script>

