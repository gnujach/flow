<script setup>
import { computed, ref, watch } from "vue";
import AppLayout from "@/Layouts/AppLayout.vue";
import JetButton from "@/Jetstream/Button.vue";
import JetFormSection from "@/Jetstream/FormSection.vue";
import JetInput from "@/Jetstream/Input.vue";
import JetCheckbox from "@/Jetstream/Checkbox.vue";
import JetInputError from "@/Jetstream/InputError.vue";
import JetSectionBorder from "@/Jetstream/SectionBorder.vue";
import JetLabel from "@/Jetstream/Label.vue";
import JetActionMessage from "@/Jetstream/ActionMessage.vue";
// import { useForm } from "@inertiajs/inertia-vue3";
import { useForm } from '@inertiajs/vue3'
import { usePrevalidate } from "@/Composables/usePrevalidate";
import Breadcrumb from "@/Components/Breadcrumb.vue";
import BaseListbox from "@/Shared/BaseListbox.vue";
import VueSelect from "vue3-select-component";

const props = defineProps({
    cliente: Object,
    puestos: {
        type: Array,
        required: false,
    },
    ccts: {
        type: Array,
        required: false,
        default: () => [],
    },
});
const options = props.ccts.map((cct) => ({
    label: cct.full_name,
    value: cct.id,
}));
const breadcrumbs = computed(() => {
    return [
        {
            label: "Inicio",
            url: route("dashboard.list"),
        },
        {
            label: "Usuarios",
            url: route("admin.clientes/"),
        },
        {
            label: "Editar cliente",
        },
    ];
});
const form = useForm({
    nombre: props.cliente.data.attributes.nombre.trim(),
    apellido1: props.cliente.data.attributes.apellido1.trim(),
    apellido2: props.cliente.data.attributes.apellido2.trim(),
    email: props.cliente.data.attributes.email || null,
    telefono: props.cliente.data.attributes.telefono,
    cct_id: props.cliente.data.attributes.cct_id,
    interno: props.cliente.data.attributes.interno ? 1 : 0,
    puesto_id: props.cliente.data.attributes.puesto_id,
    uuid: props.cliente.data.uuid,
});
// const { validate } = usePrevalidate(form, {
//     method: "post",
//     url: route("admin.clientes/store"),
// });
const onSubmit = () =>
    form
        .transform((data) => ({
            ...data,
            interno: data.interno ? 1 : 0,
        }))
        .put(
            route("admin.clientes/update", {
                cliente: form.uuid,
            }),
            {
                // errorBag: "saveRequisitoInformation",
                preserveScroll: true,
            }
    );
const isSeg = ref(form.interno === 1);
watch(
    () => form.interno,
    (newVal) => {
        isSeg.value = newVal;    
        if (!newVal) {
            form.cct_id = 1;
        }
    }
);
</script>
<template>
    <app-layout>
        <template #header class="mb-2">
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                <Breadcrumb :items="breadcrumbs" />
            </h2>
        </template>
        <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
            <jet-form-section @focusout="validate" @submitted="onSubmit">
                <template #title> Clientes</template>
                <template #description> Editar Cliente</template>
                <!-- nombre -->
                <template #form>
                    <div class="col-span-6 sm:col-span-4">
                        <jet-label for="nombre" value="Nombre" />
                        <jet-input id="nombre" type="text" class="mt-1 block w-full" v-model="form.nombre"
                            autocomplete="nombre" autofocus />
                        <jet-input-error :message="form.errors.nombre" class="mt-2" />
                    </div>
                    <div class="col-span-6 sm:col-span-4">
                        <jet-label for="apellido1" value="Primer Apellido" />
                        <jet-input id="apellido1" type="text" class="mt-1 block w-full" v-model="form.apellido1"
                            autocomplete="apellido1" />
                        <jet-input-error :message="form.errors.apellido1" class="mt-2" />
                    </div>
                    <div class="col-span-6 sm:col-span-4">
                        <jet-label for="apellido2" value="Segundo Apellido" />
                        <jet-input id="apellido2" type="text" class="mt-1 block w-full" v-model="form.apellido2" />
                        <jet-input-error :message="form.errors.apellido2" class="mt-2" />
                    </div>
                    <div class="col-span-6 sm:col-span-4">
                        <jet-label for="email" value="Correo Electrónico" />
                        <jet-input id="email" type="text" class="mt-1 block w-full" v-model="form.email" />
                        <jet-input-error :message="form.errors.email" class="mt-2" />
                    </div>
                    <div class="col-span-6 sm:col-span-4">
                        <jet-label for="telefono" value="Teléfono" />
                        <jet-input id="telefono" type="text" class="mt-1 block w-full" v-model="form.telefono" />
                        <jet-input-error :message="form.errors.telefono" class="mt-2" />
                    </div>
                    <!-- Puesto -->
                    <div class="col-span-6 sm:col-span-4" v-if="props.puestos && puestos.length > 0">
                        <jet-label for="puesto" value="Puesto" />
                        <BaseListbox :options="puestos" placeholder="Seleccione Puesto de Trabajo"
                            v-model="form.puesto_id" />
                        <jet-input-error :message="form.errors.puesto_id" class="mt-2" />
                    </div>
                    <div class="col-span-6 sm:col-span-4 flex flex-row justify-between">
                        <jet-label for="interno" value="El usuario pertenece a SEG" />
                        <jet-checkbox id="interno" type="checkbox" class="mt-1 block" checked v-model="form.interno" />
                        <jet-input-error :message="form.errors.interno" class="mt-2" />
                    </div>
                     <!-- Cct -->
                    <div class="col-span-6 sm:col-span-4">
                        <jet-label for="cct_id" value="Centro de Trabajo" />
                        <VueSelect :options="options" placeholder="Seleccione Centro de Trabajo"
                            v-model="form.cct_id" :isDisabled="!isSeg"/>
                        <jet-input-error :message="form.errors.cct_id" class="mt-2" />
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
    </app-layout>
</template>
