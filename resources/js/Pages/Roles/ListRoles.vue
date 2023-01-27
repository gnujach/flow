<template>
    <app-layout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Roles en el sistema
            </h2>
            <div class="py-12">
                <div class="max-w-full mx-auto sm:px-6 lg:px-8">
                    <div class="overflow-hidden shadow-xl sm:rounded-lg">
                        <div
                            class="p-6 sm:px-20 bg-white border-b border-gray-200"
                        >
                            <div class="mt-8 flex flex-row m-2">
                                <p class="text-2xl ml-4 w-1/2">
                                    Gestión de roles en el sistema
                                </p>
                                <div class="w-1/2 flex justify-end">
                                    <jet-nav-link
                                        :href="route('admin.roles/create')"
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
                                                    Agregar Rol
                                                </p>
                                            </div>
                                        </button>
                                    </jet-nav-link>
                                </div>
                            </div>
                            <div
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
                                            class="p-3 text-sm font-semibold tracking-wide text-left"
                                        >
                                            <div
                                                class="flex content-center items-center"
                                            >
                                                <PencilIcon
                                                    class="w-4 h-4 mr-2"
                                                />
                                                Rol
                                            </div>
                                        </th>
                                        <th
                                            class="p-3 text-sm font-semibold tracking-wide text-left"
                                        >
                                            <div
                                                class="flex content-center items-center"
                                            >
                                                <ViewListIcon
                                                    class="w-4 h-4 mr-2"
                                                />
                                                Permisos
                                            </div>
                                        </th>
                                        <th
                                            class="p-3 text-sm font-semibold tracking-wide text-left"
                                        >
                                            <div
                                                class="flex content-center items-center justify-end"
                                            >
                                                <BadgeCheckIcon
                                                    class="w-4 h-4 mr-2"
                                                />
                                                Acciones
                                            </div>
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody class="divide-y divide-gray-100">
                                    <tr
                                        v-for="rol in roles.data.roles"
                                        :key="rol.data.uuid"
                                        class="hover:bg-gray-100 focus-within:bg-gray-100"
                                    >
                                        <td
                                            class="p-3 text-sm text-gray-700"
                                        >
                                            <p
                                                class="font-bold text-blue-500 hover:underline"
                                            >
                                                {{
                                                    rol.data.attributes
                                                        .nombre
                                                }}
                                            </p>
                                        </td>
                                        <td
                                            class="p-3 text-sm text-gray-700"
                                        >
                                            <ul>
                                                <li
                                                    v-for="p in rol.data
                                                            .permission"
                                                    :key="p.name"
                                                >
                                                    {{ p.name }}
                                                </li>
                                            </ul>
                                        </td>
                                        <td
                                            class="p-3 text-sm text-gray-700"
                                        >
                                            <div
                                                class="flex flex-row items-center justify-center"
                                            >
                                                <jet-nav-link
                                                    :href="
                                                            route(
                                                                'admin.roles/edit',
                                                                {
                                                                    role: rol
                                                                        .data
                                                                        .id,
                                                                }
                                                            )
                                                        "
                                                >
                                                    <PencilIcon
                                                        class="w-5 h-5 ml-3 pointer-events-none"
                                                    />
                                                </jet-nav-link>
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
        </template>
    </app-layout>
</template>
<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import JetNavLink from "@/Jetstream/NavLink";
import Pagination from "@/Shared/Pagination";
import Icon from "@/Shared/Icon";
import {
    ViewListIcon,
    PencilIcon,
    BadgeCheckIcon,
} from "@heroicons/vue/outline";


const props = defineProps({
    roles: Object,
});
</script>
