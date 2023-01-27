<template>
    <app-layout title="Profile">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Nuevo usuario
            </h2>
        </template>
        <div>
            <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
                <div v-if="$page.props.jetstream.canUpdateProfileInformation">
                    <CreateActivoInformationForm
                        :departamentos="$page.props.departamentos"
                        :puestos="$page.props.puestos"
                        :roles="$page.props.roles"
                        :centros="$page.props.centros"
                    />
                    <jet-section-border />
                </div>
            </div>
        </div>
    </app-layout>
</template>

<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import CreateActivoInformationForm from "@/Pages/Profile/Partials/CreateActivoInformationForm.vue";
import JetSectionBorder from "@/Jetstream/SectionBorder";
import { ref } from "vue";

props: ["departamentos", "puestos", "roles"];
</script>
