<template>
    <app-layout>
        <template #header class="mb-2">
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                <Breadcrumb :items="breadcrumbs" />
            </h2>
        </template>
        <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
            <jet-form-section
                @focusout="validate"
                @submitted="saveMedioInformation"
            >
                <template #title> Canal de comunicación </template>
                <template #description> Alta de <canvas></canvas> </template>
                <!-- nombre -->
                <template #form>
                    <div class="col-span-6 sm:col-span-4">
                        <jet-label for="nombre" value="Nombre" />
                        <jet-input
                            id="nombre"
                            type="text"
                            class="mt-1 block w-full"
                            v-model="form.nombre"
                            autocomplete="nombre"
                            autofocus
                        />
                        <jet-input-error
                            :message="form.errors.nombre"
                            class="mt-2"
                        />
                    </div>
                </template>
                <template #actions>
                    <jet-action-message
                        :on="form.recentlySuccessful"
                        class="mr-3"
                    >
                        Guardado!!
                    </jet-action-message>
                    <jet-section-border />
                    <jet-button
                        :class="{ 'opacity-25': form.processing }"
                        :disabled="form.processing"
                    >
                        Guardar
                    </jet-button>
                </template>
            </jet-form-section>
        </div>
        <div class="max-w-3xl mx-auto sm:px-6 lg:px-8 pt-4"></div>
    </app-layout>
</template>

<script setup>
import { computed } from "vue";
import AppLayout from "@/Layouts/AppLayout";
import JetButton from "@/Jetstream/Button";
import JetFormSection from "@/Jetstream/FormSection";
import JetInput from "@/Jetstream/Input";
import JetInputError from "@/Jetstream/InputError";
import JetLabel from "@/Jetstream/Label";
import JetActionMessage from "@/Jetstream/ActionMessage";
import JetSectionBorder from "@/Jetstream/SectionBorder";
import { useForm } from "@inertiajs/inertia-vue3";
import { usePrevalidate } from "@/Composables/usePrevalidate";
import Breadcrumb from "@/Components/Breadcrumb.vue";
const breadcrumbs = computed(() => {
    return [
        {
            label: "Inicio",
            url: route("dashboard.list"),
        },
        {
            label: "Medios",
            url: route("admin.medios/"),
        },
        {
            label: "Nuevo medio de atención",
        },
    ];
});
const form = useForm({
    nombre: "",
});
const { validate } = usePrevalidate(form, {
    method: "post",
    url: route("admin.medios/store"),
});
const saveMedioInformation = () => {
    form.transform((data) => ({
        ...data,
    })).post(route("admin.medios/store"), {
        errorBag: "saveMedioInformation",
        preserveScroll: true,
    });
};
</script>

<style></style>
