<template>
    <app-layout title="Dashboard">
        <div class="py-12">
            <div class="max-w-6xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                    <Actions/>
                    <Stats :total="dataYear[0]" :concluidas="dataConcluidas[0]" :today="dataToday[0].total"
                           :week="week[0].total"/>
                    <div class="flex flex-col md:flex-row p-6 justify-around">
                        <div
                            class="flex flex-col col-span-full sm:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
                            <header class="px-5 py-4 border-b border-slate-100">
                                <h2 class="font-semibold text-slate-800">Solicitadas vs Concluidas</h2>
                            </header>
                            <ChartAnual class="w-full" :chart-data="chartData"/>
                        </div>
                        <div
                            class="flex flex-col col-span-full sm:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
                            <header class="px-5 py-4 border-b border-slate-100">
                                <h2 class="font-semibold text-slate-800">Solicitudes por Trámite</h2>
                            </header>
                            <PieTramite class="w-full" :chart-data="charDataPie"/>
                        </div>
                    </div>
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
import PieTramite from "@/Components/Charts/PieTramite"
import Stats from "@/Components/Stats"
import Actions from "@/Components/Actions";


const props = defineProps(['dataset', 'concluidas', 'byTramite', 'today', 'week'])

const dataYear = ref(props.dataset)
const dataConcluidas = ref(props.concluidas)
const dataTramite = ref(props.byTramite)
const dataToday = ref(props.today)
const dataTramiteNombre = ref((props.byTramite))
const tramitesNombre = props.byTramite.map((item) => item.tramite.slice(0, 20));
const tramitesTotal = props.byTramite.map((item) => item.total);
const chartData = {
    labels: ['Solicitadas', 'Concluidas'],
    datasets: [
        {
            label: 'Tramites solicitados este mes',
            data: [dataYear.value[0], dataConcluidas.value[0]],
            // data: [48, 44],
            backgroundColor: ['#f87979', 'lightgreen'],
        },

    ],
}

const charDataPie = {
    // labels: ['Solicitud Correo', 'Asistencia Técnica'],
    labels: tramitesNombre,
    datasets: [
        {
            // data: [dataTramite.value[0].total, dataTramite.value[1].total],
            data: tramitesTotal,
            backgroundColor: ['#F65988', '#F78B73', '#F2AEF0']
        }
    ]
}
</script>
