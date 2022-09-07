<template>
    <app-layout>
        <template #header class="mb-2">
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Alta de Clientes
            </h2>
        </template>
        <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
            <jet-form-section
                @focusout="validate"
                @submitted="onSubmit"
            >
                <template #title> Clientes</template>
                <template #description> Alta de Cliente</template>
                <!-- nombre -->
                <template #form>
                    <div class="col-span-6 sm:col-span-4">
                        <jet-label for="nombre" value="Nombre"/>
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
                    <div class="col-span-6 sm:col-span-4">
                        <jet-label for="apellido1" value="Primer Apellido"/>
                        <jet-input
                            id="apellido1"
                            type="text"
                            class="mt-1 block w-full"
                            v-model="form.apellido1"
                            autocomplete="apellido1"
                        />
                        <jet-input-error
                            :message="form.errors.apellido1"
                            class="mt-2"
                        />
                    </div>
                    <div class="col-span-6 sm:col-span-4">
                        <jet-label for="apellido2" value="Segundo Apellido"/>
                        <jet-input
                            id="apellido2"
                            type="text"
                            class="mt-1 block w-full"
                            v-model="form.apellido2"
                        />
                        <jet-input-error
                            :message="form.errors.apellido2"
                            class="mt-2"
                        />
                    </div>
                    <div class="col-span-6 sm:col-span-4">
                        <jet-label for="email" value="Correo Electrónico"/>
                        <jet-input
                            id="email"
                            type="text"
                            class="mt-1 block w-full"
                            v-model="form.email"
                        />
                        <jet-input-error
                            :message="form.errors.email"
                            class="mt-2"
                        />
                    </div>
                    <div class="col-span-6 sm:col-span-4">
                        <jet-label for="telefono" value="Teléfono"/>
                        <jet-input
                            id="telefono"
                            type="text"
                            class="mt-1 block w-full"
                            v-model="form.telefono"
                        />
                        <jet-input-error
                            :message="form.errors.telefono"
                            class="mt-2"
                        />
                    </div>
                    <div class="col-span-6 sm:col-span-4 flex flex-row justify-between">
                        <jet-label for="interno" value="El usuario pertenece a SEG"/>
                        <jet-checkbox
                            id="interno"
                            type="checkbox"
                            class="mt-1 block"
                            checked
                            v-model="form.interno"
                        />
                        <jet-input-error
                            :message="form.errors.interno"
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
                    <jet-section-border/>
                    <jet-button
                        :class="{ 'opacity-25': form.processing }"
                        :disabled="form.processing"
                    >
                        Guardar
                    </jet-button>
                </template>
            </jet-form-section>
        </div>
    </app-layout>
</template>

<script setup>
import AppLayout from "@/Layouts/AppLayout";
import JetButton from "@/Jetstream/Button";
import JetFormSection from "@/Jetstream/FormSection";
import JetInput from "@/Jetstream/Input";
import JetCheckbox from "@/Jetstream/Checkbox";
import JetInputError from "@/Jetstream/InputError";
import JetSectionBorder from "@/Jetstream/SectionBorder";
import JetLabel from "@/Jetstream/Label";
import JetActionMessage from "@/Jetstream/ActionMessage";
import {useForm} from "@inertiajs/inertia-vue3";
import {usePrevalidate} from "@/Composables/usePrevalidate";

const form = useForm({
    nombre: null,
    apellido1: null,
    apellido2: null,
    email: null,
    cct_id: 1,
    interno: 1
});
const {validate} = usePrevalidate(form, {
    method: "post",
    url: route("admin.clientes/store"),
});
const onSubmit = () => form.transform((data) => ({
    ...data,
    interno: data.interno ? 1 : 0
})).post(route("admin.clientes/store"), {
    errorBag: "saveRequisitoInformation",
    preserveScroll: true,
});
</script>

<style></style>
