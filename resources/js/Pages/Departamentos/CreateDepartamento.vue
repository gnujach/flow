<template>
    <app-layout>
        <template #header class="mb-2">
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Alta de Departamento de Trabajo
            </h2>
        </template>
        <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
            <div v-if="form.isDirty">There are unsaved form changes.</div>
            <jet-form-section
                @focusout="validate"
                @submitted="saveDepartamentoInformation"
            >
                <template #title> Departamento</template>
                <template #description> Alta de Departamento</template>
                <!-- nombre -->
                <template #form>
                    <div class="col-span-6 sm:col-span-4">
                        <jet-label for="nombre" value="Nombre"/>
                        <jet-input
                            id="nombre"
                            type="text"
                            class="mt-1 block w-full"
                            v-model="form.nombre"
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

<script>
import AppLayout from "@/Layouts/AppLayout";
import JetButton from "@/Jetstream/Button";
import JetFormSection from "@/Jetstream/FormSection";
import JetInput from "@/Jetstream/Input";
import JetInputError from "@/Jetstream/InputError";
import JetSectionBorder from "@/Jetstream/SectionBorder";
import JetLabel from "@/Jetstream/Label";
import JetActionMessage from "@/Jetstream/ActionMessage";
import {useForm} from "@inertiajs/inertia-vue3";
import {usePrevalidate} from "@/Composables/usePrevalidate";

const form = useForm({
    nombre: null,
});
const {validate} = usePrevalidate(form, {
    method: "post",
    url: route("admin.departamentos/store"),
});
const saveDepartamentoInformation = () => {
    form.transform((data) => ({
        ...data,
    })).post(route("admin.departamentos/store"), {
        errorBag: "saveDepartamentoInformation",
        preserveScroll: false,
        isDirty: false,
        preserveState: (page) => Object.keys(page.props.errors).length,
        onBefore: () => confirm('Estás seguro(a) que quieres guardar este departamento?'),
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
        JetSectionBorder,
    },
    setup() {
        form.defaults({
            nombre: 'departamento'
        });
        return {
            form,
            saveDepartamentoInformation,
            validate,
        };
    },
};
</script>

<style></style>
