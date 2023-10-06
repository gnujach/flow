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
                    form.put(
                        route('admin.tramites/update', { tramite: form.uuid })
                    )
                "
            >
                <template #title> Trámites </template>
                <template #description>
                    Modificación de Trámites <canvas></canvas>
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
                        <jet-label for="objetivo" value="Objetivo" />
                        <jet-input
                            id="objetivo"
                            type="text"
                            class="mt-1 block w-full"
                            v-model="form.objetivo"
                            autocomplete="objetivo"
                        />
                        <jet-input-error
                            :message="form.errors.objetivo"
                            class="mt-2"
                        />
                    </div>
                    <div class="col-span-6 sm:col-span-4">
                        <jet-label
                            for="fundamento_jur"
                            value="fundamento_jur"
                        />
                        <jet-input
                            id="fundamento_jur"
                            type="text"
                            class="mt-1 block w-full"
                            v-model="form.fundamento_jur"
                            autocomplete="fundamento_jur"
                        />
                        <jet-input-error
                            :message="form.errors.fundamento_jur"
                            class="mt-2"
                        />
                    </div>
                    <div class="col-span-6 sm:col-span-4">
                        <jet-label for="costo" value="Costo del Trámie" />
                        <jet-input
                            id="costo"
                            type="text"
                            class="mt-1 block w-full"
                            v-model="form.costo"
                            autocomplete="costo"
                        />
                        <jet-input-error
                            :message="form.errors.costo"
                            class="mt-2"
                        />
                    </div>
                    <div class="col-span-6 sm:col-span-4">
                        <jet-label
                            for="plazo_respuesta"
                            value="Plazo de Respuesta"
                        />
                        <jet-input
                            id="plazo_respuesta"
                            type="text"
                            class="mt-1 block w-full"
                            v-model="form.plazo_respuesta"
                            autocomplete="plazo_respuesta"
                        />
                        <jet-input-error
                            :message="form.errors.plazo_respuesta"
                            class="mt-2"
                        />
                    </div>
                    <div class="col-span-6 sm:col-span-4">
                        <jet-label for="url_proceso" value="URL Tramite" />
                        <jet-input
                            id="url_proceso"
                            type="text"
                            class="mt-1 block w-full"
                            v-model="form.url_proceso"
                            autocomplete="url_proceso"
                        />
                        <jet-input-error
                            :message="form.errors.url_proceso"
                            class="mt-2"
                        />
                    </div>
                    <div class="col-span-6 sm:col-span-4">
                        <jet-label
                            for="modalidad"
                            value="Modalidad de Atención"
                        />
                        <BaseListbox
                            :options="modalidad"
                            placeholder="Seleccione Modalidad"
                            v-model="form.modalidad"
                        />
                        <jet-input-error
                            :message="form.errors.modalidad"
                            class="mt-2"
                        />
                    </div>
                    <div class="col-span-6 sm:col-span-4">
                        <jet-label
                            for="modalidad"
                            value="Tipo de usuario a quien va dirigido el trámite"
                        />
                        <BaseListbox
                            :options="tipoUsuarios"
                            placeholder="Seleccione Tipo de Usuario"
                            v-model="form.tipo_usuario"
                        />
                        <jet-input-error
                            :message="form.errors.tipo_usuario"
                            class="mt-2"
                        />
                    </div>
                    <div class="col-span-6 sm:col-span-4">
                        <jet-label
                            for="departamento"
                            value="Departamento dueño del trámite"
                        />
                        <BaseListbox
                            :options="departamentosList"
                            placeholder="Seleccione Departamento"
                            v-model="form.departamento_id"
                        />
                        <jet-input-error
                            :message="form.errors.departamento_id"
                            class="mt-2"
                        />
                    </div>
                    <div class="col-span-6 sm:col-span-4">
                        <jet-label for="tipo" value="Tipo de trámite" />
                        <BaseListbox
                            :options="tipos"
                            placeholder="Tipo de Trámite"
                            v-model="form.tipo"
                        />
                        <jet-input-error
                            :message="form.errors.tipo"
                            class="mt-2"
                        />
                    </div>
                    <div class="col-span-6 sm:col-span-4">
                        <jet-label
                            for="departamento"
                            value="Tipo de Respuesta"
                        />
                        <BaseListbox
                            :options="ser_recibo"
                            placeholder="Servicio de Recibido"
                            v-model="form.ser_recibido"
                        />
                        <jet-input-error
                            :message="form.errors.ser_recibido"
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
import { ref, computed } from "vue";
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
import BaseListbox from "@/Shared/BaseListbox.vue";

const form = useForm({
    nombre: props.tramite.data.attributes.nombre,
    objetivo: props.tramite.data.attributes.objetivo,
    fundamento_jur: props.tramite.data.attributes.fundamento_jur,
    modalidad: props.tramite.data.attributes.modalidad,
    plazo_respuesta: props.tramite.data.attributes.plazo_respuesta,
    costo: props.tramite.data.attributes.costo,
    tipo_usuario: props.tramite.data.attributes.tipo_usuario,
    url_proceso: props.tramite.data.attributes.url_proceso,
    departamento_id: props.tramite.data.attributes.departamento_id,
    ser_recibido: props.tramite.data.attributes.ser_recibido,
    tipo: props.tramite.data.attributes.tipo,
    activo: Boolean(props.tramite.data.attributes.activo),
    uuid: props.tramite.data.uuid,
});

const props = defineProps({
    tramite: Object,
    departamentos: Object,
});
const departamentosList = ref(props.departamentos);
const modalidad = [
    {
        id: "presencial",
        nombre: "Presencial",
    },
    {
        id: "semi-presencial",
        nombre: "Semi-presencial",
    },
    {
        id: "virtual",
        nombre: "Virtual",
    },
];
const ser_recibo = [
    {
        id: "documento",
        nombre: "Documento",
    },
    {
        id: "servicio",
        nombre: "Servicio",
    },
];
const tipos = [
    {
        id: "tramite",
        nombre: "Tramite",
    },
    {
        id: "servicio",
        nombre: "Servicio",
    },
];
const tipoUsuarios = [
    {
        id: "interno",
        nombre: "Interno",
    },
    {
        id: "externo",
        nombre: "Externo",
    },
];
const breadcrumbs = computed(() => {
    return [
        {
            label: "Inicio",
            url: route("dashboard.list"),
        },
        {
            label: "Trámites",
            url: route("admin.tramites"),
        },
        {
            label: "Editar trámite",
        },
    ];
});

const updateTramiteInformation = () => {
    form.transform((data) => ({
        ...data,
        activo: enabled,
    })).put(
        route("admin.tramites/update", {
            tramite: uuid,
        }),
        {
            errorBag: "updateTramiteInformation",
            preserveScroll: false,
        }
    );
};
</script>

<style></style>
