<template>
    <app-layout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                <Breadcrumb :items="breadcrumbs" />
            </h2>
            <div class="py-12">
                <div class="max-w-full mx-auto sm:px-6 lg:px-8">
                    <div class="overflow-hidden shadow-xl sm:rounded-lg">
                        <div
                            class="p-6 sm:px-20 bg-white border-b border-gray-200"
                        >
                            <div class="mt-8 flex flex-row m-2">
                                <p class="text-2xl ml-4 w-1/2">
                                    Centros de Trabajo
                                </p>
                                <div class="w-1/2 flex justify-end">
                                    <jet-nav-link
                                        :href="
                                            route('admin.centros/create', {})
                                        "
                                        ><button
                                            class="border-green-700 border bg-white rounded mr-4 w-32 mb:w-42 p-1 hover:bg-aqua transition duration-500"
                                        >
                                            <div class="flex flex-row">
                                                <icon
                                                    name="plus"
                                                    class="block w-6 h-6 fill-gray-400"
                                                />
                                                <p class="font-bold">
                                                    Agregar Centro
                                                </p>
                                            </div>
                                        </button>
                                    </jet-nav-link>
                                </div>
                            </div>
                            <div
                                class="bg-white rounded shadow overflow-x-auto ml-4 mr-4"
                            >
                                <table class="w-full">
                                    <tr class="text-left font-bold bg-aqua">
                                        <th class="px-6 pt-6 pb-4">
                                            <div
                                                class="flex content-center items-center"
                                            >
                                                <icon
                                                    name="sun"
                                                    class="w-8 h-8 mr-2 text-indigo-900"
                                                />Nombre
                                            </div>
                                        </th>
                                        <th class="px-6 pt-6 pb-4">
                                            <div
                                                class="flex content-center items-center"
                                            >
                                                <icon
                                                    name="sun"
                                                    class="w-8 h-8 mr-2 text-indigo-900"
                                                />Acciones
                                            </div>
                                        </th>
                                    </tr>
                                    <tr
                                        v-for="centro in centros.data.centros"
                                        :key="centro.data.id"
                                        class="hover:bg-gray-100 focus-within:bg-gray-100"
                                        :class="[
                                            centro.data.attributes.activo == 0
                                                ? 'text-gray-400'
                                                : '',
                                        ]"
                                    >
                                        <td class="border-t">
                                            <p class="pl-4 font-bold uppercase">
                                                {{
                                                    centro.data.attributes
                                                        .nombre
                                                }}
                                            </p>
                                        </td>
                                        <td class="border-t">
                                            <div
                                                class="flex flex-row items-center text-gray-400 focus-within:text-gray-600"
                                            >
                                                <ViewListIcon
                                                    class="w-5 h-5 ml-3 pointer-events-none"
                                                />
                                                <jet-nav-link
                                                    :href="
                                                        route(
                                                            'admin.centros/edit',
                                                            {
                                                                centro: centro
                                                                    .data.uuid,
                                                            }
                                                        )
                                                    "
                                                >
                                                    <PencilIcon
                                                        class="w-5 h-5 ml-3 pointer-events-none"
                                                    />
                                                </jet-nav-link>
                                                <BanIcon
                                                    v-if="
                                                        centro.data.attributes
                                                            .activo
                                                    "
                                                    class="w-5 h-5 ml-3 pointer-events-none"
                                                />
                                                <BadgeCheckIcon
                                                    v-else
                                                    class="w-5 h-5 ml-3 pointer-events-none"
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                            <div class="max-w-3xl mx-auto sm:px-6 lg:px-8 pt-4">
                                <pagination :meta="centros.meta" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </app-layout>
</template>

<script setup>
import { computed } from "vue";
import AppLayout from "@/Layouts/AppLayout";
import JetNavLink from "@/Jetstream/NavLink";
import Pagination from "@/Shared/Pagination";
import Icon from "@/Shared/Icon";
import {
    ViewListIcon,
    PencilIcon,
    BanIcon,
    BadgeCheckIcon,
} from "@heroicons/vue/outline";
import Breadcrumb from "@/Components/Breadcrumb.vue";
const breadcrumbs = computed(() => {
    return [
        {
            label: "Inicio",
            url: route("dashboard.list"),
        },
        {
            label: "Centros de trabajo",
        },
    ];
});
const props = defineProps({
    centros: Object,
});
</script>

<style></style>
