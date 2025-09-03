<template>
    <app-layout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Solicitudes
            </h2>
            <div class="py-12">
                <div class="max-w-full mx-auto sm:px-6 lg:px-8">
                    <div class="overflow-hidden shadow-xl sm:rounded-lg">
                        <div class="p-6 sm:px-20 bg-white border-b border-gray-200">
                            <AlertToast />
                            <div class="mt-8 flex flex-row m-2 justify-between">
                                <p class="text-2xl ml-4 w-1/2">
                                    Solicitudes por usuario
                                </p>
                                <div class="flex flex-row justify-end">
                                    <div class="flex justify-end">
                                        <jet-nav-link :href="route('solicitudes', {})">
                                            <button
                                                class="border-green-700 border bg-white rounded mr-4 w-32 mb:w-42 p-1 hover:bg-aqua transition duration-500">
                                                <div class="flex flex-row">
                                                    <icon name="plus" class="block w-6 h-6 fill-gray-400" />
                                                    <p class="font-bold">
                                                        Nueva Solicitud
                                                    </p>
                                                </div>
                                            </button>
                                        </jet-nav-link>
                                    </div>
                                    <div class="flex justify-center">
                                        <a href="/solicitudes/export/">
                                            <button
                                                class="border-green-700 border bg-white rounded mr-4 w-32 mb:w-42 p-1 hover:bg-aqua transition duration-500">
                                                <div class="flex flex-row justify-between">
                                                    <DocumentDownloadIcon class="h-5 w-5" />
                                                    <p class="font-bold">
                                                        Excel
                                                    </p>
                                                </div>
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <vue-good-table :columns="columns" :rows="rows" :search-options="{
                                    enabled: true,
                                    placeholder: 'Buscar en la tabla',
                                }">
                                    <template #table-row="props">
                                        <jet-nav-link v-if="
                                            props.column.field == 'cliente'
                                        " :href="route('admin.clientes/show', {
                                            cliente:
                                                props.row.cliente_uuid,
                                        })
                                            ">
                                            <p class="font-bold text-blue-500 hover:underline">
                                                {{ props.row.cliente }}
                                            </p>
                                        </jet-nav-link>
                                        <span v-else>
                                            {{
                                                props.formattedRow[
                                                props.column.field
                                                ]
                                            }}
                                        </span>
                                    </template>
                                </vue-good-table>
                            </div>
                            <div class="max-w-3xl mx-auto sm:px-6 lg:px-8 pt-4">
                                <pagination :meta="solicitudes.meta" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </app-layout>
</template>

<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import JetNavLink from "@/Jetstream/NavLink.vue";
import Pagination from "@/Shared/Pagination.vue";
import { ref, onMounted } from "vue";
import Icon from "@/Shared/Icon.vue";
import { DocumentDownloadIcon } from "@heroicons/vue/outline";
import { VueGoodTable } from "vue-good-table-next";
// import the styles
import "vue-good-table-next/dist/vue-good-table-next.css";
import AlertToast from "@/modules/Dialog/Components/AlertToast.vue";
const props = defineProps({
    solicitudes: Object,
});
const obj = {
    name: "Jean-Luc Picard",
    rank: "Captain",
};
onMounted(() => {
    props.solicitudes.data.solicitudes.forEach((element) => {
        let solicitud = {
            id: element.data.id,
            cliente: element.data.cliente.data.attributes.full_name,
            cliente_uuid: element.data.cliente.data.uuid,
            centro: element.data.centro.data.attributes.nombre,
            tramite: element.data.tramite.data.attributes.nombre,
            m_atencion: element.data.medio.data.attributes.nombre,
        };
        rows.value.push(solicitud);
    });
});
const rows = ref([]);
const columns = ref([
    {
        label: "Usuario",
        field: "cliente",
    },
    {
        label: "Centro de atención",
        field: "centro",
    },
    {
        label: "Trámite",
        field: "tramite",
    },
    {
        label: "Medio de Atención",
        field: "m_atencion",
    },
]);
</script>
