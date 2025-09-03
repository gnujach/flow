<script setup>
import { computed, ref } from "vue";
import AppLayout from "@/Layouts/AppLayout.vue";
import JetNavLink from "@/Jetstream/NavLink.vue";
import {
    ClipboardIcon,
    UserIcon,
    PhoneIcon,
    BriefcaseIcon,
    EnvelopeIcon,
    CalendarIcon,
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
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                <Breadcrumb :items="breadcrumbs" />
            </h2>
            <div v-if="openModal">
                <ModalShowOrderNotes :order="order" :open="openModal" @closeModal="closeModal"></ModalShowOrderNotes>
            </div>
            <div class="py-12">
                <div class="max-w-full mx-auto sm:px-6 lg:px-8">
                    <div class="overflow-hidden shadow-xl sm:rounded-lg">
                        <div class="p-6 sm:px-20 bg-white border-b border-gray-200">
                            <div class="mt-8 flex flex-row m-2">
                                <p class="text-2xl ml-4 w-1/2">
                                    Información de Usuario
                                </p>
                            </div>
                            <div class="flex flex-row w-full gap-4">
                                <div class="flex flex-row bg-white w-1/2">
                                    <div class="border border-1 border-blue-400 rounded w-full">
                                        <div class="w-full flex bg-blue-700 h-20 justify-center items-center mb-2">
                                            <span class="text-white text-3xl text-center font-bold">Datos
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
                                                <PencilIcon class="w-6 h-6 ml-3 pointer-events-none text-white" />
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
                                                ">{{  cliente.data.puesto.data.attributes
                                                        .nombre }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex flex-row bg-white w-1/2" v-if="
                                    cliente.data.solicitudes.solicitudes
                                        .length > 0
                                ">
                                    <div class="border border-1 border-blue-400 rounded w-full">
                                        <div class="w-full flex bg-blue-700 h-20 justify-center items-center mb-2">
                                            <span class="text-white text-3xl text-center font-bold">Última Solicitud de
                                                Atención</span>
                                        </div>
                                        <div class="w-full flex">
                                            <div class="w-1/3">
                                                <span class="pl-2">Trámite</span>
                                            </div>
                                            <div class="w-2/3 flex flex-row justify-start">
                                                <UserIcon class="w-5 h-5 ml-1 pointer-events-none" />
                                                <span class="capitalize">{{
                                                    cliente.data.solicitudes
                                                        .solicitudes[0].data
                                                        .tramite.data.attributes
                                                        .nombre
                                                }}</span>
                                            </div>
                                        </div>
                                        <div class="w-full flex">
                                            <div class="w-1/3">
                                                <span class="pl-2">Medio de atención</span>
                                            </div>
                                            <div class="flex w-2/3 flex-row justify-start">
                                                <UserIcon class="w-5 h-5 ml-1 pointer-events-none" />
                                                <span class="lowercase italic">
                                                    {{
                                                        cliente.data.solicitudes
                                                            .solicitudes[0].data
                                                            .medio.data
                                                            .attributes.nombre
                                                    }}</span>
                                            </div>
                                        </div>
                                        <div class="w-full flex">
                                            <div class="w-1/3">
                                                <span class="pl-2">Fecha</span>
                                            </div>
                                            <div class="flex flex-row w-2/3 justify-start">
                                                <CalendarIcon class="w-5 h-5 ml-1 pointer-events-none" />
                                                <span class="capitalize">
                                                    {{
                                                        cliente.data.solicitudes
                                                            .solicitudes[0].data
                                                            .attributes.created
                                                    }}</span><span>({{
                                                        cliente.data.solicitudes
                                                            .solicitudes[0].data
                                                            .attributes
                                                            .diffForHumans
                                                    }})</span>
                                            </div>
                                        </div>
                                        <div class="w-full flex">
                                            <div class="w-1/3">
                                                <span class="pl-2">Atendió</span>
                                            </div>
                                            <div class="flex flex-row w-2/3 justify-start">
                                                <UserCircleIcon class="w-5 h-5 ml-1 pointer-events-none" />
                                                <span>{{
                                                    cliente.data.solicitudes
                                                        .solicitudes[0].data
                                                        .user.data.attributes
                                                        .name
                                                }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="grid grid-cols-4 grid-flow-row mt-8 rounded" v-if="
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
                </div>
            </div>
        </template>
    </app-layout>
</template>



<style></style>
