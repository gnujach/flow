<script setup>
import { computed, onMounted, ref } from "vue";
import AppLayout from "@/Layouts/AppLayout.vue";
import JetNavLink from "@/Jetstream/NavLink.vue";
import Pagination from "@/Shared/Pagination.vue";
import ModalSearchClient from "@/modules/Dialog/Components/ModalSeachClient.vue";
import Icon from "@/Shared/Icon.vue";
import {
    Bars4Icon,
    PencilIcon,
    ExclamationCircleIcon,
    CheckBadgeIcon,
} from "@heroicons/vue/24/outline";
import { toRefs, defineProps } from "vue";
import Breadcrumb from "@/Components/Breadcrumb.vue";
import { VueGoodTable } from "vue-good-table-next";
// import the styles
import "vue-good-table-next/dist/vue-good-table-next.css";

const breadcrumbs = computed(() => {
    return [
        {
            label: "Inicio",
            url: route("dashboard.list"),
        },
        {
            label: "Clientes",
        },
    ];
});
const props = defineProps(["clientes"]);
const rows = ref([]);
const columns = ref([
    {
        label: "Nombre",
        field: "created_at",
    },
    {
        label: "Apellido 1",
        field: "user",
    },
    {
        label: "Apellido 2",
        field: "cliente",
    },
    {
        label: "Teléfono",
        field: "departamento",
    },
    {
        label: "Correo",
        field: "tramite",
    },
    {
        label: "Centro de Trabajo",
        field: "ct",
    },
    {
        label: "Acciones",
        field: "acciones",
        sortable: false,
    },
]);
onMounted(() => {
    rows.value = props.clientes.data.clientes.map((item) => {
        return {
            uuid: item.data.uuid,
            created_at: item.data.attributes.nombre,
            user: item.data.attributes.apellido1,
            cliente: item.data.attributes.apellido2,
            departamento: item.data.attributes.telefono,
            tramite: item.data.attributes.email,
            ct: item.data.cct.data.attributes.nombre_ct,
            acciones: "acciones",
        };
    });
});
const { clientes } = toRefs(props);
</script>
<template>
    <app-layout>
        <template #header>
            <div class="flex flex-row justify-between items-center">
                <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                    <Breadcrumb :items="breadcrumbs" />
                </h2>
            </div>
            <div class="py-12">
                <div class="max-w-full mx-auto sm:px-6 lg:px-8">
                    <div class="overflow-hidden shadow-xl sm:rounded-lg">
                        <div class="p-6 sm:px-20 bg-white border-b border-gray-200">
                            <div class="mt-8 flex flex-row m-2">
                                <p class="text-2xl ml-4 w-1/2">
                                    Usuarios en el sistema
                                </p>
                                <div class="w-1/2 flex justify-end">
                                    <jet-nav-link :href="route('admin.clientes/create', {})
                                        ">
                                        <button
                                            class="border-green-700 border bg-white rounded mr-4 w-32 mb:w-42 p-1 hover:bg-aqua transition duration-500 btn btn-md">
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
                            <div class="flex justify-start m-4">
                                <ModalSearchClient />
                            </div>
                            <div class="bg-white rounded shadow overflow-x-auto">
                                <!-- tabla de clientes -->
                                <vue-good-table :columns="columns" :rows="rows" styleClass="vgt-table striped">
                                    <template #table-row="props">
                                        <span v-if="props.column.field === 'acciones'">
                                            <div class="flex space-x-2">
                                                <jet-nav-link
                                                    :href="route('admin.clientes/edit', { cliente: props.row.uuid })"
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
                                <pagination :meta="clientes.meta" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </app-layout>
</template>



<style></style>
