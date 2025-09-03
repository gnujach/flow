<template>
    <app-layout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Pacientes
            </h2>
        </template>
        <div class="py-12">
            <div class="max-w-full mx-auto sm:px-6 lg:px-8">
                <div class="bg-red-300 overflow-hidden shadow-xl sm:rounded-lg">
                    <div class="p-6 sm:px-20 bg-white border-b border-gray-200">
                        <div>
                            <search-filter v-model="form.search" class="ml-4 w-full max-w-md mr-4" @reset="reset">
                                <div slot="dropdown">
                                    <select v-model="form.field" class="mt-1 w-full form-select"
                                        @change.prevent="searcher">
                                        <option value="ap1" default>
                                            Apellido 1
                                        </option>
                                        <option value="ap2">Apellido 2</option>
                                        <option value="rfc">RFC</option>
                                    </select>
                                </div>
                            </search-filter>
                        </div>
                        <div class="mt-8 flex flex-row m-2">
                            <p class="text-2xl ml-4 w-1/2">
                                Pacientes activos en el sistema
                            </p>
                            <div class="w-1/2 flex justify-end">
                                <div class="w-1/2 flex justify-end">
                                    <jet-nav-link :href="route('admin.pacientes/create', {})
                                        "><button
                                            class="border-green-700 border bg-white rounded mr-4 w-32 mb:w-42 p-1 hover:bg-aqua transition duration-500">
                                            <div class="flex flex-row">
                                                <icon name="plus" class="block w-6 h-6 fill-gray-400" />
                                                <p class="font-bold">
                                                    Agregar Pacientes
                                                </p>
                                            </div>
                                        </button>
                                    </jet-nav-link>
                                </div>
                            </div>
                        </div>
                        <div class="bg-white rounded shadow overflow-x-auto ml-4 mr-4">
                            <table class="w-full">
                                <tr class="text-left font-bold bg-aqua">
                                    <th class="px-6 pt-6 pb-4">
                                        <div class="flex content-center items-center">
                                            <icon name="sun" class="w-8 h-8 mr-2 text-indigo-900" />Nombre
                                        </div>
                                    </th>

                                    <th class="px-6 pt-6 pb-4">
                                        <div class="flex content-center items-center">
                                            <icon name="sun" class="w-8 h-8 mr-2 text-indigo-900" />Apellido Paterno
                                        </div>
                                    </th>

                                    <th class="px-6 pt-6 pb-4">
                                        <div class="flex content-center items-center">
                                            <icon name="sun" class="w-8 h-8 mr-2 text-indigo-900" />Apellido Materno
                                        </div>
                                    </th>
                                    <th class="px-6 pt-6 pb-4">
                                        <div class="flex content-center items-center">
                                            <icon name="sun" class="w-8 h-8 mr-2 text-indigo-900" />Teléfono
                                        </div>
                                    </th>
                                    <th class="px-6 pt-6 pb-4">
                                        <div class="flex content-center items-center">
                                            <icon name="sun" class="w-8 h-8 mr-2 text-indigo-900" />Email
                                        </div>
                                    </th>
                                    <th class="px-6 pt-6 pb-4">
                                        <div class="flex content-center items-center">
                                            <icon name="sun" class="w-8 h-8 mr-2 text-indigo-900" />Aciones
                                        </div>
                                    </th>
                                </tr>
                                <tr v-for="paciente in pacientes.data.pacientes" :key="paciente.data.id"
                                    class="hover:bg-gray-100 focus-within:bg-gray-100" :class="[
                                        paciente.data.attributes.activo == 0
                                            ? 'text-gray-400'
                                            : '',
                                    ]">
                                    <td class="border-t">
                                        <p class="pl-4 font-bold uppercase">
                                            {{ paciente.data.attributes.name }}
                                        </p>
                                    </td>
                                    <td class="border-t">
                                        <p class="pl-4 font-bold uppercase">
                                            {{ paciente.data.attributes.ap1 }}
                                        </p>
                                    </td>
                                    <td class="border-t">
                                        <p class="pl-4 font-bold uppercase">
                                            {{ paciente.data.attributes.ap2 }}
                                        </p>
                                    </td>
                                    <td class="border-t">
                                        <p class="pl-4 font-bold uppercase">
                                            {{ paciente.data.attributes.tel }}
                                        </p>
                                    </td>
                                    <td class="border-t">
                                        <p class="pl-4 font-bold">
                                            {{ paciente.data.attributes.email }}
                                        </p>
                                    </td>
                                    <td class="border-t">
                                        <jet-nav-link :href="route('admin.pacientes/', {
                                            paciente: paciente.data.id,
                                        })
                                            ">
                                            <icon name="edit" class="block w-6 h-6 fill-gray-400" />
                                        </jet-nav-link>
                                        <jet-nav-link :href="route('admin.pacientes/', {
                                            paciente: paciente.data.id,
                                        })
                                            ">
                                            <icon name="user-remove" class="block w-6 h-6 fill-gray-400" />
                                        </jet-nav-link>
                                    </td>
                                    <!-- Show-->
                                </tr>
                            </table>
                        </div>
                        <div class="max-w-3xl mx-auto sm:px-6 lg:px-8 pt-4">
                            <pagination :meta="pacientes.meta" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </app-layout>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout.vue";
import SearchFilter from "@/Shared/SearchFilter.vue";
import JetNavLink from "@/Jetstream/NavLink.vue";
import Icon from "@/Shared/Icon.vue";
import Pagination from "@/Shared/Pagination.vue";
import mapValues from "lodash/mapValues";
import pickBy from "lodash/pickBy";

import debounce from "lodash/debounce";
export default {
    components: {
        AppLayout,
        Icon,
        JetNavLink,
        Pagination,
        SearchFilter,
    },
    props: ["pacientes", "tokens"],
    data() {
        return {
            showModal: false,
            displayingToken: true,
            loading: false,
            form: {
                search: "",
                field: "ap1",
                referer: "list-pacientes",
            },
        };
    },
    watch: {
        form: {
            handler: debounce(function () {
                let query = pickBy(this.form);
                console.log("Query: ", query);
                if (query.hasOwnProperty("search")) {
                    this.findFilter(
                        Object.keys(query).length
                            ? query
                            : { remember: "forget" }
                    );
                } else {
                }
            }, 500),
            deep: true,
        },
    },
    mounted() { },
    methods: {
        click() {
            this.showModal = !this.showModal;
            console.log("Modal", this.showModal);
        },
        reset() {
            this.form = mapValues(this.form, () => null);
            this.$inertia.visit("/admin/pacientes/", {
                method: "get",
            });
        },
        findFilter(query) {
            let _this = this;
            console.log("find-filter", query);
            if (_this.form.search !== null)
                this.$inertia.visit("/admin/pacientes/findbyap1/", {
                    method: "get",
                    data: {
                        params: query,
                    },
                });
        },
        searcher(event) {
            // this.form.field = "ap2";
            // this.form.search = "term";
            console.log(1);
            // this.findFilter();
        },
    },
};
</script>
