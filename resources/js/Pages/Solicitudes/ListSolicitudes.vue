<template>
    <app-layout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Solicitudes
            </h2>
            <div class="py-12">
                <div class="max-w-full mx-auto sm:px-6 lg:px-8">
                    <div class="overflow-hidden shadow-xl sm:rounded-lg">
                        <div
                            class="p-6 sm:px-20 bg-white border-b border-gray-200"
                        >
                            <AlertToast />
                            <div class="mt-8 flex flex-row m-2 justify-between">
                                <p class="text-2xl ml-4 w-1/2">
                                    Solicitudes por usuario
                                </p>
                                <div class="flex flex-row justify-end pb-4">
                                    <div class="flex justify-end">
                                        <jet-nav-link
                                            :href="route('solicitudes', {})"
                                        >
                                            <button
                                                class="border-green-700 border bg-white rounded mr-4 w-32 mb:w-42 p-1 hover:bg-aqua transition duration-500"
                                            >
                                                <div class="flex flex-row">
                                                    <icon
                                                        name="plus"
                                                        class="block w-6 h-6 fill-gray-400"
                                                    />
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
                                                class="border-green-700 border bg-white rounded mr-4 w-32 mb:w-42 p-1 hover:bg-aqua transition duration-500"
                                            >
                                                <div
                                                    class="flex flex-row justify-between"
                                                >
                                                    <DocumentDownloadIcon
                                                        class="h-5 w-5"
                                                    />
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
                                <vue-good-table
                                    :columns="columns"
                                    :rows="rows"
                                    :search-options="{
                                        enabled: true,
                                        placeholder: 'Buscar en tabla',
                                    }"
                                >
                                    <template #table-row="props">
                                        <jet-nav-link
                                            v-if="
                                                props.column.field == 'cliente'
                                            "
                                            :href="
                                                route('admin.clientes/show', {
                                                    cliente:
                                                        props.row.cliente_uuid,
                                                })
                                            "
                                            ><p
                                                class="font-bold text-blue-500 hover:underline capitalize"
                                            >
                                                {{ props.row.cliente }}
                                            </p>
                                        </jet-nav-link>
                                        <span
                                            v-else-if="
                                                props.column.field ==
                                                'm_atencion'
                                            "
                                            class="p-1.5 text-xs font-thin text-green-800 bg-green-200 rounded-lg bg-opacity-50 truncate"
                                        >
                                            {{ props.row.m_atencion }}
                                        </span>

                                        <div
                                            v-else-if="
                                                props.column.field == 'acciones'
                                            "
                                        >
                                            <ModalUpdateSolicitud
                                                v-if="
                                                    props.row.concluida == false
                                                "
                                                :uuid="props.row.id"
                                            />
                                        </div>
                                        <div
                                            v-else-if="
                                                props.column.field ==
                                                'concluida'
                                            "
                                        >
                                            <span
                                                v-if="
                                                    props.row.concluida == false
                                                "
                                            >
                                                No
                                            </span>
                                            <span
                                                v-else-if="
                                                    props.row.concluida == true
                                                "
                                            >
                                                Si
                                            </span>
                                        </div>
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
                            <!--            <div
                                class="overflow-auto rounded-lg shadow md:block"
                            >
                                <table class="w-full table-fixed">
                                    <thead
                                        class="bg-gray-50 border-b-2 border-gray-200"
                                    >
                                        <tr
                                            class="p-3 text-sm font-semibold tracking-wide text-left"
                                        >
                                            <th
                                                class="p-3 text-sm font-semibold tracking-wide text-left w-32"
                                            >
                                                Realizado
                                            </th>
                                            <th
                                                class="p-3 text-sm font-semibold tracking-wide text-left w-32"
                                            >
                                                Atendió
                                            </th>
                                            <th
                                                class="p-3 text-sm font-semibold tracking-wide text-left w-32"
                                            >
                                                Usuario
                                            </th>
                                            <th
                                                class="p-3 text-sm font-semibold tracking-wide text-center w-32"
                                            >
                                                Trámite
                                            </th>
                                            <th
                                                class="p-3 text-sm font-semibold tracking-wide text-center w-20"
                                            >
                                                Medio de Atención
                                            </th>
                                            <th
                                                class="p-3 text-sm font-semibold tracking-wide text-center w-12"
                                            >
                                                Concluida
                                            </th>
                                            <th
                                                class="w-32 p-3 text-sm font-semibold tracking-wide text-center w-12"
                                            >
                                                <div
                                                    class="content-center items-center"
                                                >
                                                    <icon
                                                        name="sun"
                                                        class="w-8 h-8 mr-2 text-indigo-900"
                                                    />
                                                    Acciones
                                                </div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody class="divide-y divide-gray-100">
                                        <tr
                                            v-for="solicitud in solicitudes.data
                                                .solicitudes"
                                            :key="solicitud.data.id"
                                            class="hover:bg-gray-100 focus-within:bg-gray-100"
                                            :class="[
                                                solicitud.data.attributes
                                                    .concluido == 0
                                                    ? 'text-gray-400'
                                                    : '',
                                            ]"
                                        >
                                            <td
                                                class="p-3 text-sm text-gray-700"
                                            >
                                                <p
                                                    class="pl-2 font-bold italic whitespace-pre-line"
                                                >
                                                    {{
                                                        `${solicitud.data.attributes.created}`
                                                    }}
                                                </p>
                                            </td>
                                            <td
                                                class="p-3 text-sm text-gray-700"
                                            >
                                                <p
                                                    class="font-bold text-blue-500 truncate uppercase"
                                                >
                                                    {{
                                                        `${solicitud.data.user.data.attributes.name}`
                                                    }}
                                                </p>
                                            </td>
                                            <td
                                                class="p-3 text-sm text-gray-700"
                                            >
                                                <jet-nav-link
                                                    :href="
                                                        route(
                                                            'admin.clientes/show',
                                                            {
                                                                cliente:
                                                                    solicitud
                                                                        .data
                                                                        .cliente
                                                                        .data
                                                                        .uuid,
                                                            }
                                                        )
                                                    "
                                                >
                                                    <p
                                                        class="font-bold text-blue-500 hover:underline"
                                                    >
                                                        {{
                                                            `${
                                                                solicitud.data
                                                                    .cliente
                                                                    .data
                                                                    .attributes
                                                                    .nombre
                                                            } ${
                                                                solicitud.data
                                                                    .cliente
                                                                    .data
                                                                    .attributes
                                                                    .apellido1
                                                            } ${
                                                                solicitud.data
                                                                    .cliente
                                                                    .data
                                                                    .attributes
                                                                    .apellido2 ==
                                                                "NULL"
                                                                    ? ""
                                                                    : solicitud
                                                                          .data
                                                                          .cliente
                                                                          .data
                                                                          .attributes
                                                                          .apellido2
                                                            }`
                                                        }}
                                                    </p>
                                                </jet-nav-link>
                                            </td>
                                            <td
                                                class="p-3 text-sm text-gray-700"
                                            >
                                                <p
                                                    class="pl-4 font-bold uppercase whitespace-pre-line"
                                                >
                                                    {{
                                                        `${solicitud.data.tramite.data.attributes.nombre}`
                                                    }}
                                                </p>
                                            </td>

                                            <td
                                                class="p-3 text-sm text-gray-700 whitespace-nowrap truncate"
                                            >
                                                <span
                                                    class="p-1.5 text-xs font-thin text-green-800 bg-green-200 rounded-lg bg-opacity-50 truncate"
                                                >
                                                    {{
                                                        solicitud.data.medio
                                                            .data.attributes
                                                            .nombre
                                                    }}
                                                </span>
                                            </td>
                                            <td
                                                class="p-3 text-sm text-gray-700 whitespace-nowrap text-center"
                                            >
                                                <p
                                                    class="pl-4 font-bold uppercase"
                                                >
                                                    {{
                                                        solicitud.data
                                                            .attributes
                                                            .concluido == 1
                                                            ? "SI"
                                                            : "No"
                                                    }}
                                                </p>
                                            </td>
                                            <td
                                                class="p-3 text-sm text-gray-700 whitespace-nowrap"
                                            >
                                                <div
                                                    class="flex flex-row items-end justify-center text-gray-400 focus-within:text-gray-600"
                                                >
                                                    <ModalUpdateSolicitud
                                                        :uuid="
                                                            solicitud.data.id
                                                        "
                                                        v-if="
                                                            !solicitud.data
                                                                .attributes
                                                                .concluido
                                                        "
                                                    />
                                                    <button
                                                        v-else
                                                        type="button"
                                                        disabled
                                                        class="flex items-center space-x-2 border border-gray-300 shadow-sm px-3 py-1.5 hover:border-gray-600 focus:outline-none focus:border-gray-600 rounded-lg"
                                                    >
                                                        <PencilAltIcon
                                                            class="flex-none text-gray-200 ml-1 w-5 h-5"
                                                            aria-hidden="true"
                                                        />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            -->
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
import AppLayout from "@/Layouts/AppLayout";
import JetNavLink from "@/Jetstream/NavLink";
import { ref, onMounted } from "vue";
import Pagination from "@/Shared/Pagination";
import Icon from "@/Shared/Icon";
import { PencilAltIcon, DocumentDownloadIcon } from "@heroicons/vue/outline";
import ModalUpdateSolicitud from "@/modules/Dialog/Components/ModalUpdateSolicitud";
import AlertToast from "@/modules/Dialog/Components/AlertToast";
import { VueGoodTable } from "vue-good-table-next";
// import the styles
import "vue-good-table-next/dist/vue-good-table-next.css";

const props = defineProps({
    solicitudes: Object,
});
const rows = ref([]);
onMounted(() => {
    props.solicitudes.data.solicitudes.forEach((element) => {
        let solicitud = {
            id: element.data.id,
            user: element.data.user.data.attributes.name,
            created_at: element.data.attributes.created,
            cliente: element.data.cliente.data.attributes.full_name,
            cliente_uuid: element.data.cliente.data.uuid,
            // centro: element.data.centro.data.attributes.nombre,
            tramite: element.data.tramite.data.attributes.nombre,
            departamento:
                element.data.tramite.data.departamento.data.attributes.nombre,
            m_atencion: element.data.medio.data.attributes.nombre,
            concluida: element.data.attributes.concluido,
        };
        rows.value.push(solicitud);
    });
});
const columns = ref([
    {
        label: "Realizado",
        field: "created_at",
    },
    {
        label: "Atendió",
        field: "user",
    },
    {
        label: "Usuario",
        field: "cliente",
    },
    {
        label: "Departamento",
        field: "departamento",
    },
    {
        label: "Trámite",
        field: "tramite",
    },
    {
        label: "Medio de atención",
        field: "m_atencion",
    },
    {
        label: "Concluída",
        field: "concluida",
    },
    {
        label: "Acciones",
        field: "acciones",
        sortable: false,
    },
]);
</script>
