<template>
    <app-layout>
        <template #header class="mb-2">
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Alta de Paciente
            </h2>
        </template>
        <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
            <jet-form-section @focusout="validate" @submitted="savePacienteInformation">
                <template #title> Informacion de Paciente </template>
                <template #description> Alta de paciente </template>
                <!-- nombre -->
                <template #form>
                    <div class="col-span-6 sm:col-span-4">
                        <jet-label for="nombre" value="Nombre" />
                        <jet-input id="nombre" type="text" class="mt-1 block w-full" v-model="form.name"
                            autocomplete="name" />
                        <jet-input-error :message="form.errors.name" class="mt-2" />
                    </div>

                    <!-- ap1 -->
                    <div class="col-span-6 sm:col-span-4">
                        <jet-label for="ap1" value="Apellido Paterno" />
                        <jet-input id="ap1" type="text" class="mt-1 block w-full" v-model="form.ap1"
                            autocomplete="ap1" />
                        <jet-input-error :message="form.errors.ap1" class="mt-2" />
                    </div>
                    <!-- ap2 -->
                    <div class="col-span-6 sm:col-span-4">
                        <jet-label for="ap2" value="Apellido Materno" />
                        <jet-input id="ap2" type="text" class="mt-1 block w-full" v-model="form.ap2"
                            autocomplete="ap2" />
                        <jet-input-error :message="form.errors.ap2" class="mt-2" />
                    </div>
                    <!-- Email -->
                    <div class="col-span-6 sm:col-span-4">
                        <jet-label for="email" value="Email" />
                        <jet-input id="email" type="text" class="mt-1 block w-full" v-model="form.email"
                            autocomplete="email" />
                        <jet-input-error :message="form.errors.email" class="mt-2" />
                    </div>
                </template>
                <template #actions>
                    <jet-action-message :on="form.recentlySuccessful" class="mr-3">
                        Guardado!!
                    </jet-action-message>
                    <jet-section-border />
                    <jet-button :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                        Guardar
                    </jet-button>
                </template>
            </jet-form-section>
        </div>
        <div class="max-w-3xl mx-auto sm:px-6 lg:px-8 pt-4"></div>
    </app-layout>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout.vue";
import JetButton from "@/Jetstream/Button.vue";
import JetFormSection from "@/Jetstream/FormSection.vue";
import JetInput from "@/Jetstream/Input.vue";
import JetInputError from "@/Jetstream/InputError.vue";
import JetLabel from "@/Jetstream/Label.vue";
import JetActionMessage from "@/Jetstream/ActionMessage.vue";
import JetSecondaryButton from "@/Jetstream/SecondaryButton.vue";
import JetSectionBorder from "@/Jetstream/SectionBorder.vue";
import JetDropdown from "@/Jetstream/Dropdown.vue";
// import { useForm } from "@inertiajs/inertia-vue3";
import { useForm } from '@inertiajs/vue3'

// import { Inertia } from "@inertiajs/inertia";
import { router } from '@inertiajs/vue3'

import { usePrevalidate } from "@/Composables/usePrevalidate";
const form = useForm({
    name: "",
    ap1: "",
    ap2: "",
    email: "",
});
const { validate } = usePrevalidate(form, {
    method: "post",
    url: route("admin.pacientes/store"),
});

const savePacienteInformation = () => {
    form.transform((data) => ({
        ...data,
    })).post(route("admin.pacientes/store"), {
        errorBag: "savePacienteInformation",
        preserveScroll: true,
    });
};

export default {
    components: {
        AppLayout,
        JetActionMessage,
        JetButton,
        JetFormSection,
        JetInput,
        JetInputError,
        JetLabel,
        JetSecondaryButton,
        JetSectionBorder,
        JetDropdown,
    },
    setup() {
        return {
            form,
            savePacienteInformation,
            validate,
        };
    },
};
</script>
