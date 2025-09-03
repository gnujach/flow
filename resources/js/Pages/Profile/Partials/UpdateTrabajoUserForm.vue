<template>
    <jet-form-section @submit.prevent="updateTrabajoInformation">
        <template #title> Información de Servidor Público </template>

        <template #description>
            Actualizar información refente al trabajo
        </template>

        <template #form>
            <!-- Departamentos-->
            <div class="col-span-6 sm:col-span-4" v-if="departamentos && departamentos.length > 0">
                <jet-label for="puesto" value="Departamentos" />
                <BaseListbox :options="departamentos" placeholder="Seleccione Departamentos de Trabajo"
                    v-model="formTrabajo.departamento_id" />
            </div>
            <!-- Puesto -->
            <div class="col-span-6 sm:col-span-4" v-if="puestos && puestos.length > 0">
                <jet-label for="puesto" value="Puesto" />
                <BaseListbox :options="puestos" placeholder="Seleccione Puesto de Trabajo"
                    v-model="formTrabajo.puesto_id" />
            </div>
            <!-- Centro -->
            <div class="col-span-6 sm:col-span-4" v-if="centros && centros.length > 0">
                <jet-label for="centro" value="Centro" />
                <BaseListbox :options="centros" placeholder="Seleccione Puesto de Trabajo"
                    v-model="formTrabajo.centro_id" />
            </div>
        </template>

        <template #actions>
            <jet-action-message :on="formTrabajo.recentlySuccessful" class="mr-3">
                Actualizar.
            </jet-action-message>

            <jet-button :class="{ 'opacity-25': formTrabajo.processing }" :disabled="formTrabajo.processing">
                Actualizar
            </jet-button>
        </template>
    </jet-form-section>
</template>

<script setup>
import JetButton from "@/Jetstream/Button.vue";
import JetFormSection from "@/Jetstream/FormSection.vue";
import JetInputError from "@/Jetstream/InputError.vue";
import JetLabel from "@/Jetstream/Label.vue";
import JetActionMessage from "@/Jetstream/ActionMessage.vue";
import JetSecondaryButton from "@/Jetstream/SecondaryButton.vue";
import BaseListbox from "@/Shared/BaseListbox.vue";
// import { useForm } from "@inertiajs/inertia-vue3";
import { useForm } from '@inertiajs/vue3'
import { ref } from "vue";
import {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
} from "@headlessui/vue";


const props = defineProps(["departamentos", "puestos", "user", "centros"]);
const departamentoActual = ref(
    props.departamentos.find(
        (departamento) =>
            departamento.id === props.user.data.attributes.departamento_id
    )
);
const puestoActual = ref(
    props.puestos.find(
        (puesto) => puesto.id === props.user.data.attributes.puesto_id
    )
);
const centroActual = ref(
    props.centros.find(
        (centro) => centro.id === props.user.data.attributes.centro_id
    )
);
const formTrabajo = useForm({
    departamento_id: departamentoActual.value.id,
    puesto_id: puestoActual.value.id,
    centro_id: centroActual.value.id,
});
function updateTrabajoInformation() {
    formTrabajo.put(
        route("admin.usuarios/updatetrabajo", {
            user: props.user.data.uuid,
        })
    );
}
</script>
