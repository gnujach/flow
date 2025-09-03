<template>
    <app-layout title="Dashboard">
        <div class="py-12">
            <div class="max-w-6xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                    <Actions />
                    <Stats v-if="$page.props.auth.roles.includes('Admin')" :total="dataYearAll[0]"
                        :concluidas="dataConcluidasAll[0]" :today="dataTodayAll[0].total" :week="weekAll[0].total" />
                    <Stats v-else-if="
                        $page.props.auth.roles.includes('capturista')
                    " :total="dataYear[0]" :concluidas="dataConcluidas[0]" :today="dataToday[0].total"
                        :week="week[0].total" />
                    <div class="flex flex-col md:flex-row p-6 justify-around"
                        v-if="$page.props.auth.roles.includes('capturista')">
                        <div
                            class="flex flex-col col-span-full sm:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
                            <header class="px-5 py-4 border-b border-slate-100">
                                <h2 class="font-semibold text-slate-800">
                                    Solicitadas vs Concluidas
                                </h2>
                            </header>
                            <ChartAnual class="w-full" :chart-data="chartData" />
                        </div>
                        <div
                            class="flex flex-col col-span-full sm:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
                            <header class="px-5 py-4 border-b border-slate-100">
                                <h2 class="font-semibold text-slate-800">
                                    Solicitudes por Trámite
                                </h2>
                            </header>
                            <PieTramite class="w-full" :chart-data="charDataPie" />
                        </div>
                    </div>
                    <div class="flex flex-col md:flex-row p-6 justify-around"
                        v-else-if="$page.props.auth.roles.includes('Admin')">
                        <p>Graficos de centro de trabajo</p>
                    </div>
                </div>
            </div>
        </div>
    </app-layout>
</template>

<script setup>
import { defineProps, ref } from "vue";
import AppLayout from "@/Layouts/AppLayout.vue";
import Welcome from "@/Jetstream/Welcome.vue";
import ChartAnual from "@/Components/Charts/Anual.vue";
import PieTramite from "@/Components/Charts/PieTramite.vue";
import Stats from "@/Components/Stats.vue";
import Actions from "@/Components/Actions.vue";

const props = defineProps([
    "dataset",
    "datasetAll",
    "concluidas",
    "concluidasAll",
    "byTramite",
    "today",
    "todayAll",
    "week",
    "weekAll",
]);

const dataYear = ref(props.dataset);
const dataYearAll = ref(props.datasetAll);
const dataConcluidas = ref(props.concluidas);
const dataConcluidasAll = ref(props.concluidasAll);
const dataTramite = ref(props.byTramite);
const dataToday = ref(props.today);
const dataTodayAll = ref(props.todayAll);
const dataTramiteNombre = ref(props.byTramite);
const tramitesNombre = props.byTramite.map((item) => item.tramite.slice(0, 20));
const tramitesTotal = props.byTramite.map((item) => item.total);
const chartData = {
    labels: ["Solicitadas", "Concluidas"],
    datasets: [
        {
            label: "Tramites solicitados este mes",
            data: [dataYear.value[0], dataConcluidas.value[0]],
            // data: [48, 44],
            backgroundColor: ["#f87979", "lightgreen"],
        },
    ],
};

const charDataPie = {
    // labels: ['Solicitud Correo', 'Asistencia Técnica'],
    labels: tramitesNombre,
    datasets: [
        {
            // data: [dataTramite.value[0].total, dataTramite.value[1].total],
            data: tramitesTotal,
            backgroundColor: ["#F65988", "#F78B73", "#F2AEF0"],
        },
    ],
};
</script>
