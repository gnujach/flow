<template>
    <app-layout title="Dashboard">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Principal {{ dataConcluidas[0] }}
            </h2>
            <h3>
                Gestión de solicitudes
            </h3>
        </template>
        <div class="py-12">
            <div class="max-w-6xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                    <welcome/>
                    <ChartAnual class="w-64" :chart-data="chartData"/>
                </div>
            </div>
        </div>

    </app-layout>
</template>

<script setup>
import {defineProps, ref} from "vue";
import AppLayout from "@/Layouts/AppLayout.vue";
import Welcome from "@/Jetstream/Welcome.vue";
import ChartAnual from "@/Components/Charts/Anual";


const props = defineProps(['dataset', 'concluidas'])

const dataYear = ref(props.dataset)
const dataConcluidas = ref(props.concluidas)
const chartData = {
    labels: ['Solicitadas', 'concluidas'],
    datasets: [
        {
            label: 'Tramites solicitados Septiembre',
            data: [dataYear.value[0], dataConcluidas.value[0]],
            // data: [48, 44],
            backgroundColor: ['#f87979', 'lightgreen'],
        },

    ],
}
</script>
