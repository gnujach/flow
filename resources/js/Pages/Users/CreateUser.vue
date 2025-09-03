<template>
    <app-layout title="Profile">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                <Breadcrumb :items="breadcrumbs" />
            </h2>
        </template>
        <div>
            <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
                <div v-if="$page.props.jetstream.canUpdateProfileInformation">
                    <CreateActivoInformationForm :departamentos="$page.props.departamentos"
                        :puestos="$page.props.puestos" :roles="$page.props.roles" :centros="$page.props.centros" />
                    <jet-section-border />
                </div>
            </div>
        </div>
    </app-layout>
</template>

<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import CreateActivoInformationForm from "@/Pages/Profile/Partials/CreateActivoInformationForm.vue";
import JetSectionBorder from "@/Jetstream/SectionBorder.vue";
import { computed } from "vue";
// import { usePage } from "@inertiajs/inertia-vue3";
import { usePage } from '@inertiajs/vue3'
import Breadcrumb from "@/Components/Breadcrumb.vue";

const appName = computed(() => usePage().props.appName);
const url = computed(() => usePage().url);

props: ["departamentos", "puestos", "roles"];
const breadcrumbs = computed(() => {
    return [
        {
            label: "Inicio",
            url: route("dashboard.list"),
        },
        {
            label: "Usuarios",
            url: route("admin.usuarios/"),
        },
        {
            label: "Nuevo usuario",
        },
    ];
});
</script>
