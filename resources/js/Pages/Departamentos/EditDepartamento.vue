<template>
    <app-layout>
        <template #header class="mb-2">
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Modificación de Departamento
            </h2>
        </template>
        <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
            <jet-form-section
                @submit.prevent="
                    form.put(
                        route('admin.departamentos/update', {
                            departamento: form.uuid,
                        })
                    )
                "
            >
                <template #title> Departamento </template>
                <template #description>
                    Modificación de Departamento <canvas></canvas>
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

<script>
import AppLayout from "@/Layouts/AppLayout";
import JetButton from "@/Jetstream/Button";
import JetFormSection from "@/Jetstream/FormSection";
import JetInput from "@/Jetstream/Input";
import JetInputError from "@/Jetstream/InputError";
import JetLabel from "@/Jetstream/Label";
import JetActionMessage from "@/Jetstream/ActionMessage";
import JetSectionBorder from "@/Jetstream/SectionBorder";
import { useForm } from "@inertiajs/inertia-vue3";
import { ref } from "vue";
import { Switch } from "@headlessui/vue";
const form = useForm({
    nombre: "",
    activo: false,
    uuid: "",
    id: "",
});
const enabled = ref(false);
const uuid = ref(null);
function rellena(form, departamento) {
    form.nombre = departamento.data.attributes.nombre;
    form.uuid = departamento.data.uuid;
    form.activo = Boolean(departamento.data.attributes.activo);
    form.id = departamento.data.id;
}
export default {
    props: ["departamento"],
    components: {
        AppLayout,
        JetActionMessage,
        JetButton,
        JetFormSection,
        JetInput,
        JetInputError,
        JetLabel,
        Switch,
        JetSectionBorder,
    },
    setup(props) {
        const savedepartamentoInformation = () => {
            form.transform((data) => ({
                ...data,
                activo: enabled,
            })).put(
                route("admin.departamentos/update", {
                    departamento: uuid,
                }),
                {
                    errorBag: "updateDepartamentoInformation",
                    preserveScroll: false,
                }
            );
        };
        rellena(form, props.departamento);
        uuid.value = props.departamento.data.uuid;
        return {
            form,
            enabled,
            savedepartamentoInformation,
        };
    },
};
</script>

<style></style>
