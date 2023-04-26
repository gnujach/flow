<template>
    <app-layout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Trámites
            </h2>
            <div class="py-12">
                <div class="max-w-full mx-auto sm:px-6 lg:px-8">
                    <div class="overflow-hidden shadow-xl sm:rounded-lg">
                        <div
                            class="p-6 sm:px-20 bg-white border-b border-gray-200"
                        >
                            <div class="mt-8 flex flex-row m-2">
                                <p class="text-2xl ml-4 w-1/2">Trámites</p>
                                <div class="w-1/2 flex justify-end">
                                    Editar...
                                </div>
                            </div>
                        </div>
                        <div
                            class="max-w-7xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800"
                        >
                            <img
                                class="object-cover w-full h-64"
                                src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                                alt="Article"
                            />

                            <div class="p-6">
                                <div class="flex md:flex-row flex-col">
                                    <div class="w-full md:w-1/2">
                                        <span
                                            class="text-xs font-medium text-blue-600 uppercase dark:text-blue-400"
                                            >{{
                                                tramite.data.departamento.data
                                                    .attributes.nombre
                                            }}</span
                                        >
                                        <a
                                            href="#"
                                            class="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline uppercase"
                                            tabindex="0"
                                            role="link"
                                            >{{
                                                tramite.data.attributes.nombre
                                            }}</a
                                        >
                                        <p
                                            class="mt-2 text-sm text-gray-600 italic uppercase"
                                        >
                                            {{
                                                tramite.data.attributes.objetivo
                                            }}
                                        </p>
                                        <div class="flex flex-row">
                                            <p
                                                class="mt-2 mx-2 text-sm font-semibold text-gray-600 uppercase"
                                            >
                                                Costo:
                                            </p>
                                            <p
                                                class="mt-2 text-sm text-gray-600 uppercase"
                                            >
                                                ${{
                                                    tramite.data.attributes
                                                        .costo
                                                }}
                                            </p>
                                        </div>
                                        <div class="flex flex-row">
                                            <p
                                                class="mt-2 mx-2 text-sm font-semibold text-gray-600 uppercase"
                                            >
                                                Tiempo de Respuesta:
                                            </p>
                                            <p
                                                class="mt-2 text-sm text-gray-600 uppercase"
                                            >
                                                {{
                                                    tramite.data.attributes
                                                        .plazo_respuesta
                                                }}
                                                (dias)
                                            </p>
                                        </div>
                                        <div class="flex flex-row">
                                            <p
                                                class="mt-2 mx-2 text-sm font-semibold text-gray-600 uppercase"
                                            >
                                                Dirigido a:
                                            </p>
                                            <p
                                                class="mt-2 text-sm text-gray-600 uppercase"
                                            >
                                                {{
                                                    tramite.data.attributes
                                                        .tipo_usuario
                                                }}
                                            </p>
                                        </div>
                                        <div class="flex flex-row">
                                            <p
                                                class="mt-2 mx-2 text-sm font-semibold text-gray-600 uppercase"
                                            >
                                                Fundamento Jurídico:
                                            </p>
                                            <p
                                                class="mt-2 text-sm text-gray-600 uppercase"
                                            >
                                                {{
                                                    tramite.data.attributes
                                                        .fundamento_jur
                                                }}
                                            </p>
                                        </div>
                                    </div>
                                    <div class="md:w-1/2 w-full">
                                        <h2>Requisitos</h2>
                                        <div class="flex flex-col mt-6">
                                            <div
                                                class="-mx-2 -my-2 overflow-x-auto overflow-y-auto sm:-mx-6 lg:-mx-8"
                                            >
                                                <div
                                                    class="inline-block py-2 align-middle md:px-6 lg:px-8 w-full"
                                                >
                                                    <div
                                                        class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg w-full"
                                                    >
                                                        <table
                                                            class="divide-y divide-gray-200 dark:divide-gray-700 w-full"
                                                        >
                                                            <thead
                                                                class="bg-gray-50 dark:bg-gray-800"
                                                            >
                                                                <tr>
                                                                    <th
                                                                        scope="col"
                                                                        class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500"
                                                                    >
                                                                        <span
                                                                            >Nombre</span
                                                                        >
                                                                    </th>
                                                                    <th
                                                                        scope="col"
                                                                        class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500"
                                                                    >
                                                                        <span
                                                                            >Objetivo</span
                                                                        >
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody
                                                                class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900"
                                                            >
                                                                <tr
                                                                    v-for="requisito in tramite
                                                                        .data
                                                                        .requisitos
                                                                        .requisitos"
                                                                >
                                                                    <td
                                                                        class="px-4 py-4 text-sm font-medium break-normal"
                                                                    >
                                                                        <div>
                                                                            <h2
                                                                                class="font-medium text-gray-800 dark:text-white overflow-hidden"
                                                                            >
                                                                                {{
                                                                                    requisito
                                                                                        .data
                                                                                        .attributes
                                                                                        .nombre
                                                                                }}
                                                                            </h2>
                                                                        </div>
                                                                    </td>
                                                                    <td
                                                                        class="px-4 py-4 text-sm font-medium break-normal"
                                                                    >
                                                                        <div>
                                                                            <h2
                                                                                class="font-medium text-gray-800 dark:text-white"
                                                                            >
                                                                                {{
                                                                                    requisito
                                                                                        .data
                                                                                        .attributes
                                                                                        .objetivo
                                                                                }}
                                                                            </h2>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="mt-4">
                                    <div class="flex items-center">
                                        <p
                                            class="mx-2 font-semibold text-gray-700 dark:text-gray-200"
                                        >
                                            Ultima Actualización:
                                        </p>
                                        <span
                                            class="mx-1 text-xs text-gray-600 dark:text-gray-300"
                                            >{{
                                                tramite.data.attributes.updated
                                            }}</span
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template></app-layout
    >
</template>

<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
const props = defineProps({
    tramite: Object,
});
</script>
