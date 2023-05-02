<template>
    <app-layout>
        <template #header class="mb-2">
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                <Breadcrumb :items="breadcrumbs" />
            </h2>
        </template>
        <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
            <jet-form-section
                @submit.prevent="
                    form.put(route('admin.medios/update', { medio: form.uuid }))
                "
            >
                <template #title> Canal de comunicación </template>
                <template #description>
                    Modificación de medios de comunicación <canvas></canvas>
                </template>
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
                        />
                        <jet-input-error
                            :message="form.errors.nombre"
                            class="mt-2"
                        />
                    </div>
                    <div class="col-span-6 sm:col-span-4">
                        <jet-label for="Activo" value="Activo" />
                        <Switch
                            v-model="form.activo"
                            name="enabled"
                            :class="form.activo ? 'bg-teal-900' : 'bg-teal-200'"
                            class="relative inline-flex h-6 w-11 items-center rounded-full"
                        >
                            <span class="sr-only">Activar</span>
                            <span
                                :class="
                                    form.activo
                                        ? 'translate-x-6'
                                        : 'translate-x-1'
                                "
                                class="inline-block h-4 w-4 transform rounded-full bg-white"
                            />
                        </Switch>
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
import { Switch } from "@headlessui/vue";
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
            label: "Editar medio",
        },
    ];
});

const form = useForm({
    nombre: props.medio.data.attributes.nombre,
    activo: Boolean(props.medio.data.attributes.activo),
    uuid: props.medio.data.uuid,
});

const props = defineProps({
    medio: Object,
});

const saveMedioInformation = () => {
    form.transform((data) => ({
        ...data,
        activo: enabled,
    })).put(
        route("admin.medios/update", {
            medio: uuid,
        }),
        {
            errorBag: "updateMedioInformation",
            preserveScroll: false,
        }
    );
};
</script>

<style></style>
