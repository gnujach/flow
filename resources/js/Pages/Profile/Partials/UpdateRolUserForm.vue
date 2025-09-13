<template>
    <jet-form-section @submitted="updateRolesInformation">
        <template #title> Rol de Usuario en sistema </template>

        <template #description> Actualizar Rol o Roles de Usuario </template>

        <template #form>
            <!-- Roles-->
            <div class="col-span-6 sm:col-span-4" v-if="roles && roles.length > 0">
                <jet-label for="roles" value="Rol o roles de usuario" />
                <VueSelect v-model="formRoles.roles_id" :is-multi="true" :options="options" />
            </div>
        </template>

        <template #actions>
            <jet-action-message :on="formRoles.recentlySuccessful" class="mr-3">
                Actualizar.
            </jet-action-message>

            <jet-button :class="{ 'opacity-25': formRoles.processing }" :disabled="formRoles.processing">
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
import VueSelect from "vue3-select-component";

import { useForm } from '@inertiajs/vue3'
import { ref } from "vue";


const props = defineProps(["roles", "user", "rolesUsuario"]);
const rolesActual = ref(props.user.data.attributes.role);
const formRoles = useForm({
    roles_id: rolesActual.value ? rolesActual.value : null,
});
function updateRolesInformation() {
    formRoles.put(
        route("admin.usuarios/updateroles", {
            user: props.user.data.uuid,
        })
    );
}

const options = props.roles.map((rol) => ({
    label: rol.nombre,
    value: rol.id,
}));
</script>
