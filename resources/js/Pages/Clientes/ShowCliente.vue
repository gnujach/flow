<script setup>
import { computed, ref } from "vue";
import AppLayout from "@/Layouts/AppLayout.vue";
import JetNavLink from "@/Jetstream/NavLink.vue";
import {
    ClipboardIcon,
    UserIcon,
    PhoneIcon,
    GlobeAltIcon,
    EnvelopeIcon,
    AcademicCapIcon,
    UserCircleIcon,
    PencilIcon,
} from "@heroicons/vue/24/outline";
import { toRefs, defineProps } from "vue";
import ModalShowOrderNotes from "@/modules/Dialog/Components/ModalShowOrderNotes.vue";
import Breadcrumb from "@/Components/Breadcrumb.vue";

const breadcrumbs = computed(() => {
    return [
        {
            label: "Inicio",
            url: route("dashboard.list"),
        },
        {
            label: "Clientes",
            url: route("admin.clientes/"),
        },
        {
            label: "Ver",
        },
    ];
});

const openModal = ref(false);
const order = ref(null);
const props = defineProps(["cliente"]);
const { cliente } = toRefs(props);

const closeModal = () => {
    openModal.value = false;
};
const actionModal = (o) => {
    order.value = o;
    openModal.value = true;
};
</script>
<template>
    <app-layout>
        <template #header>
            <div class="sm:flex  lg:flex-row justify-between items-center">
                <div>
                    <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                        <Breadcrumb :items="breadcrumbs" />
                    </h2>
                </div>
                <span class="sm:text-sm lg:text-xl  font-semibold text-gray-800 leading-tight">
                    <p>Ultima actualización: {{ cliente.data.attributes.updated_at }}</p>
                </span>
            </div>
        </template>
        <div v-if="openModal">
            <ModalShowOrderNotes :order="order" :open="openModal" @closeModal="closeModal"></ModalShowOrderNotes>
        </div>
        <div class="py-12">
            <div
                class="max-w-full mx-auto sm:px-6 lg:px-8 sm:flex lg:grid md:grid-cols-2 sm:gap-2 gap-4 border-b-amber-200 border-gray-300 p-4 rounded-md">
                <div class="overflow-hidden sm:rounded-lg w-full">
                    <div class="p-6 sm:px-20 bg-white  border-gray-200 w-full">
                        <div class="flex flex-row w-full gap-4">
                            <div class="flex flex-row bg-white w-full">
                                <div class="border border-blue-400 rounded w-full">
                                    <div class="w-full flex bg-blue-700 h-20 justify-center items-center mb-2">
                                        <span class="text-white sm:text-xl lg:text-3xl text-center font-bold">Datos
                                            Personales</span>
                                        <jet-nav-link :href="route(
                                            'admin.clientes/edit',
                                            {
                                                cliente:
                                                    cliente.data
                                                        .uuid,
                                            }
                                        )
                                            ">
                                            <PencilIcon class="sm:w-6 sm:h-6 lg:w-6 lg:h-6 lg:ml-3 pointer-events-none text-white" />
                                        </jet-nav-link>
                                    </div>
                                    <div class="w-full flex">
                                        <div class="w-1/3">
                                            <span class="pl-2">Nombre</span>
                                        </div>
                                        <div class="w-2/3 flex flex-row justify-start">
                                            <UserIcon class="w-5 h-5 ml-1 pointer-events-none" />
                                            <span class="capitalize">{{
                                                cliente.data.attributes
                                                    .full_name
                                            }}</span>
                                        </div>
                                    </div>
                                    <div class="w-full flex">
                                        <div class="w-1/3">
                                            <span class="pl-2">Correo Electrónico</span>
                                        </div>
                                        <div class="flex w-2/3 flex-row justify-start">
                                            <EnvelopeIcon class="w-5 h-5 ml-1 pointer-events-none" />
                                            <span class="lowercase italic" v-if="
                                                cliente.data.attributes
                                                    .email
                                            ">{{
                                                    cliente.data.attributes
                                                        .email
                                                }}</span>
                                        </div>
                                    </div>
                                    <div class="w-full flex">
                                        <div class="w-1/3">
                                            <span class="pl-2">Teléfono</span>
                                        </div>
                                        <div class="flex flex-row w-2/3 justify-start">
                                            <PhoneIcon class="w-5 h-5 ml-1 pointer-events-none" />
                                            <span class="capitalize" v-if="
                                                cliente.data.attributes
                                                    .telefono
                                            ">{{
                                                    cliente.data.attributes.telefono.replace(
                                                        /(\d{3})(\d{3})(\d{2})(\d{2})/,
                                                        "$1.$2.$3.$4"
                                                    )
                                                }}</span>
                                        </div>
                                    </div>
                                    <div class="w-full flex">
                                        <div class="w-1/3">
                                            <span class="pl-2">Usuario Interno</span>
                                        </div>
                                        <div class="flex flex-row w-2/3 justify-start">
                                            <ClipboardIcon class="w-5 h-5 ml-1 pointer-events-none" />
                                            <span>{{
                                                cliente.data.attributes
                                                    .interno == 1
                                                    ? "Si"
                                                    : "No"
                                            }}</span>
                                        </div>
                                    </div>
                                    <div class="w-full flex">
                                        <div class="w-1/3">
                                            <span class="pl-2">Puesto</span>
                                        </div>
                                        <div class="flex flex-row w-2/3 justify-start">
                                            <PhoneIcon class="w-5 h-5 ml-1 pointer-events-none" />
                                            <span class="capitalize" v-if="
                                                cliente.data.puesto.data.attributes
                                                    .nombre
                                            ">{{ cliente.data.puesto.data.attributes
                                                    .nombre }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="overflow-hidden rounded-md sm:rounded-lg">
                    <div class="p-6 sm:px-20 bg-white border-gray-200">
                        <div class="flex flex-row w-full gap-4">
                            <div class="flex flex-row bg-white w-full">
                                <div class="border border-green-400 rounded w-full">
                                    <div class="w-full flex bg-green-500 h-20 justify-center items-center mb-2">
                                        <span class="text-white text-3xl text-center font-bold">Centro de trabajo</span>
                                    </div>
                                    <div class="w-full flex">
                                        <div class="w-1/3">
                                            <span class="pl-2">CCT</span>
                                        </div>
                                        <div class="w-2/3 flex flex-row justify-start px-1">
                                            <AcademicCapIcon class="w-5 h-5 ml-1 pointer-events-none" />
                                            <span class="capitalize italic overflow-hidden">{{
                                                cliente.data.cct.data.attributes
                                                    .cct
                                            }}</span>
                                        </div>
                                    </div>
                                    <div class="w-full flex">
                                        <div class="w-1/3">
                                            <span class="pl-2">Nombre</span>
                                        </div>
                                        <div class="w-2/3 flex flex-row justify-start px-1">
                                            <AcademicCapIcon class="w-5 h-5 ml-1 pointer-events-none" />
                                            <span class="capitalize italic overflow-hidden">{{
                                                cliente.data.cct.data.attributes
                                                    .nombre_ct
                                            }}</span>
                                        </div>
                                    </div>
                                    <div class="w-full flex" v-if="cliente.data.cct.data.attributes
                                        .zona">
                                        <div class="w-1/3">
                                            <span class="pl-2">Zona escolar</span>
                                        </div>
                                        <div class="flex w-2/3 flex-row justify-start">
                                            <AcademicCapIcon class="w-5 h-5 ml-1 pointer-events-none" />
                                            <span class="lowercase italic">{{
                                                cliente.data.cct.data.attributes
                                                    .zona
                                            }}</span>
                                        </div>
                                    </div>
                                    <div class="w-full flex">
                                        <div class="w-1/3">
                                            <span class="pl-2">Localidad</span>
                                        </div>
                                        <div class="flex flex-row w-2/3 justify-start">
                                            <GlobeAltIcon class="w-5 h-5 ml-1 pointer-events-none" />
                                            <span class="capitalize">{{
                                                cliente.data.cct.data.attributes
                                                    .descripcion_localidad
                                            }}</span>
                                        </div>
                                    </div>
                                    <div class="w-full flex">
                                        <div class="w-1/3">
                                            <span class="pl-2">Municipio</span>
                                        </div>
                                        <div class="flex flex-row w-2/3 justify-start">
                                            <GlobeAltIcon class="w-5 h-5 ml-1 pointer-events-none" />
                                            <span class="capitalize">{{
                                                cliente.data.cct.data.attributes
                                                    .descripcion_municipio
                                            }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-4 grid-flow-row mt-8 rounded col-span-2 overflow-auto" v-if="
                    cliente.data.solicitudes.solicitudes
                        .length > 0
                ">
                    <div class="flex flex-row col-span-4 bg-gray-100 rounded">
                        <span class="w-1/5">Trámite</span>
                        <span class="w-1/5">Medio de atención</span>
                        <span class="w-1/5">Fecha</span>
                        <span class="w-1/5">Atendió</span>
                        <span class="w-1/5">Observaciones</span>
                    </div>
                    <div class="flex flex-row col-span-4 rounded" v-for="solicitud in cliente.data.solicitudes
                        .solicitudes">
                        <span class="w-1/5">{{
                            solicitud.data.tramite.data.attributes
                                .nombre
                        }}</span>
                        <span class="w-1/5">{{
                            solicitud.data.medio.data.attributes
                                .nombre
                        }}</span>
                        <span class="w-1/5">{{
                            `${solicitud.data.attributes.created}
                            (${solicitud.data.attributes.diffForHumans})`
                        }}</span>
                        <span class="w-1/5">{{
                            solicitud.data.user.data.attributes.name
                        }}</span>
                        <div class="w-15">
                            <button class="rounded bg-green-300 m-2" @click="actionModal(solicitud)">
                                <span class="p-2">Ver</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </app-layout>
</template>



<style></style>
