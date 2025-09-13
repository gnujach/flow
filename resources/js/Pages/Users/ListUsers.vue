<script setup>
import { defineComponent, ref, computed, onMounted } from "vue";
import AppLayout from "@/Layouts/AppLayout.vue";
import JetNavLink from "@/Jetstream/NavLink.vue";
import Pagination from "@/Shared/Pagination.vue";
import Icon from "@/Shared/Icon.vue";
import Breadcrumb from "@/Components/Breadcrumb.vue";
import "vue-good-table-next/dist/vue-good-table-next.css";
import { usePage } from '@inertiajs/vue3'
import { VueGoodTable } from "vue-good-table-next";

import {
    Bars4Icon,
    PencilIcon,
    ExclamationCircleIcon,
    CheckBadgeIcon,
} from "@heroicons/vue/24/outline";

const breadcrumbs = computed(() => {
    return [
        {
            label: "Inicio",
            url: route("dashboard.list"),
        },
        {
            label: "Usuarios",
        },
    ];
});
const items = [];
const props = defineProps({
    users: Object,
});
usePage().props.appName = "List";
const appName = computed(() => usePage().props.appName);
const url = computed(() => usePage().url);
const rows = ref([]);
const columns = ref([
    {
        label: "Nombre",
        field: "name",
    },
    {
        label: "Email",
        field: "email",
    },
    {
        label: "Centro de Trabajo",
        field: "centro",
    },
    {
        label: "Departamento",
        field: "departamento",
    },
    {
        label: "Puesto",
        field: "puesto",
        tooltip: 'Puesto de trabajo',
    },
    {
        label: "Acciones",
        field: "acciones",
        sortable: false,
    },
    { label: "Activo", field: "activo" },
]);
onMounted(() => {
    rows.value = props.users.data.usuarios.map((item) => {
        return {
            uuid: item.data.uuid,
            name: item.data.attributes.name,
            email: item.data.attributes.email,
            centro: item.data.centro.data.attributes.nombre,
            departamento: item.data.departamento.data.attributes.nombre,
            puesto: item.data.puesto.data.attributes.nombre,
            acciones: "acciones",
            activo: item.data.attributes.activo?"Si":"No",
        };
    });
});
const rowStyleClassFn = (row) => {
    return row.activo === "No" ? "bg-red-200" : "";
};
</script>

<template>
    <app-layout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                <Breadcrumb :items="breadcrumbs" />
            </h2>
            <div class="py-12">
                <div class="max-w-full mx-auto sm:px-6 lg:px-8">
                    <div class="overflow-hidden shadow-xl sm:rounded-lg">
                        <div class="p-6 sm:px-20 bg-white border-b border-gray-200">
                            <div class="mt-8 flex flex-row m-2">
                                <p class="text-2xl ml-4 w-1/2">
                                    Usuarios activos en el sistema
                                </p>
                                <div class="w-1/2 flex justify-end">
                                    <jet-nav-link :href="route('admin.usuarios/create', {})
                                        ">
                                        <button
                                            class="border-green-700 border bg-white rounded mr-4 w-32 mb:w-42 p-1 hover:bg-aqua transition duration-500">
                                            <div class="flex flex-row">
                                                <icon name="plus" class="block w-6 h-6 fill-gray-400" />
                                                <p class="font-bold">
                                                    Agregar Usuario
                                                </p>
                                            </div>
                                        </button>
                                    </jet-nav-link>
                                </div>
                            </div>
                            <div class="bg-white rounded shadow overflow-x-auto">
                                <vue-good-table :columns="columns" :rows="rows"  :row-style-class="rowStyleClassFn" :search-options="{
                                    enabled: true,
                                    placeholder: 'Buscar en tabla',
                                }">
                                    <template #table-row="props">
                                        <span v-if="props.column.field === 'acciones'">
                                            <div class="flex space-x-2">
                                                <jet-nav-link
                                                    :href="route('admin.usuarios/edit', { user: props.row.uuid })"
                                                    class="text-blue-600 hover:text-blue-900">
                                                    <PencilIcon class="w-5 h-5" />
                                                </jet-nav-link>
                                                <!-- other actions can be added here -->
                                            </div>
                                        </span>
                                    </template>
                                </vue-good-table>
                            </div>
                            <div class="max-w-3xl mx-auto sm:px-6 lg:px-8 pt-4">
                                <pagination :meta="users.meta" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </app-layout>
</template>
