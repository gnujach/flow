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
                    <update-activo-information-form :user="$page.props.user" />
                    <jet-section-border />
                </div>
                <div v-if="$page.props.jetstream.canUpdateProfileInformation">
                    <update-trabajo-user-form
                        :user="$page.props.user"
                        :departamentos="$page.props.departamentos"
                        :puestos="$page.props.puestos"
                        :centros="$page.props.centros"
                    />
                    <jet-section-border />
                </div>
                <div v-if="$page.props.jetstream.canUpdateProfileInformation">
                    <update-rol-user-form
                        :user="$page.props.user"
                        :roles="$page.props.roles"
                    />
                    <jet-section-border />
                </div>
            </div>
        </div>
    </app-layout>
</template>

<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import UpdateActivoInformationForm from "@/Pages/Profile/Partials/UpdateActivoInformationForm.vue";
import UpdateTrabajoUserForm from "@/Pages/Profile/Partials/UpdateTrabajoUserForm.vue";
import UpdateRolUserForm from "@/Pages/Profile/Partials/UpdateRolUserForm.vue";
import JetSectionBorder from "@/Jetstream/SectionBorder";
import Breadcrumb from "@/Components/Breadcrumb.vue";
import { ref, computed } from "vue";

props: ["user", "departamentos", "puestos", "roles", "rolesUsuario"];
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
            label: "Editar usuario",
        },
    ];
});
</script>
