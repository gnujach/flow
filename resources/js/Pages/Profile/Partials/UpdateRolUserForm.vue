<template>
    <jet-form-section @submitted="updateRolesInformation">
        <template #title> Rol de Usuario en sistema </template>

        <template #description> Actualizar Rol o Roles de Usuario </template>

        <template #form>
            <!-- Roles-->
            <div class="col-span-6 sm:col-span-4" v-if="roles && roles.length > 0">
                <jet-label for="roles" value="Roles" />
                <BaseListbox :options="roles" placeholder="Seleccione Rol de Usuario" v-model="formRoles.roles_id" />
            </div>
        </template>

        <template #actions>
            <jet-action-message :on="formRoles.recentlySuccessful" class="mr-3">
                Guardar.
            </jet-action-message>

            <jet-button :class="{ 'opacity-25': formRoles.processing }" :disabled="formRoles.processing">
                Guardar
            </jet-button>
        </template>
    </jet-form-section>
</template>

<script>
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
import { CheckCircleIcon } from "@heroicons/vue/24/solid";

export default {
    props: ["roles", "user", "rolesUsuario"],
    components: {
        JetActionMessage,
        JetButton,
        JetFormSection,
        JetInputError,
        JetLabel,
        JetSecondaryButton,
        Listbox,
        ListboxButton,
        ListboxOption,
        ListboxOptions,
        CheckCircleIcon,
        BaseListbox,
    },

    setup(props) {
        const rolesActual = ref(props.roles.find((rol) => rol.id === 1));
        const formRoles = useForm({
            roles_id: rolesActual.value.id,
            // (rol) => rol. === props.rolesName
        });
        function updateRolesInformation() {
            formRoles.put(
                route("admin.usuarios/updateroles", {
                    user: props.user.data.uuid,
                })
            );
        }
        return {
            updateRolesInformation,
            formRoles,
            rolesActual,
        };
    },
};
</script>
