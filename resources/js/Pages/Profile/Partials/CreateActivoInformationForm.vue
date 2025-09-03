<template>
    <jet-form-section @submitted="createProfileInformation">
        <template #title> Información de Usuario</template>

        <template #description> Actualizar información de usuario</template>

        <template #form>
            <!-- Name -->
            <div class="col-span-6 sm:col-span-4">
                <jet-label for="name" value="Nombre" />
                <jet-input id="name" type="text" class="mt-1 block w-full" v-model="form.name" autocomplete="name" />
                <jet-input-error :message="form.errors.name" class="mt-2" />
            </div>
            <!-- Email -->
            <div class="col-span-6 sm:col-span-4">
                <jet-label for="email" value="Email" />
                <jet-input id="email" type="email" class="mt-1 block w-full" v-model="form.email" />
                <jet-input-error :message="form.errors.email" class="mt-2" />
            </div>
            <!-- Password -->
            <div class="col-span-6 sm:col-span-4">
                <jet-label for="name" value="Contraseña" />
                <jet-input id="password" type="password" class="mt-1 block w-full" v-model="form.password" />
                <jet-input-error :message="form.errors.password" class="mt-2" />
            </div>
            <!-- Password Confirm -->
            <div class="col-span-6 sm:col-span-4">
                <jet-label for="name" value="Confirmar contraseña" />
                <jet-input id="password_confirm" type="password" class="mt-1 block w-full"
                    v-model="form.password_confirmation" />
                <jet-input-error :message="form.errors.password" class="mt-2" />
            </div>
            <!-- Departamentos-->
            <div class="col-span-6 sm:col-span-4" v-if="departamentos && departamentos.length > 0">
                <jet-label for="puesto" value="Departamentos" />
                <BaseListbox :options="departamentos" placeholder="Seleccione Departamentos de Trabajo"
                    v-model="form.departamento_id" />
                <jet-input-error :message="form.errors.departamento_id" class="mt-2" />
            </div>
            <!-- Puesto -->
            <div class="col-span-6 sm:col-span-4" v-if="puestos && puestos.length > 0">
                <jet-label for="puesto" value="Puesto" />
                <BaseListbox :options="puestos" placeholder="Seleccione Puesto de Trabajo" v-model="form.puesto_id" />
                <jet-input-error :message="form.errors.puesto_id" class="mt-2" />
            </div>
            <!-- Centro de Trabajo-->
            <div class="col-span-6 sm:col-span-4" v-if="roles && roles.length > 0">
                <jet-label for="centros" value="Centro de Trabajo" />
                <BaseListbox :options="centros" placeholder="Seleccione Centro de Trabajo" v-model="form.centro_id" />
                <jet-input-error :message="form.errors.roles_id" class="mt-2" />
            </div>
            <!-- Roles-->
            <div class="col-span-6 sm:col-span-4" v-if="roles && roles.length > 0">
                <jet-label for="roles" value="Roles" />
                <BaseListbox :options="roles" placeholder="Seleccione Rol de Usuario" v-model="form.roles_id" />
                <jet-input-error :message="form.errors.roles_id" class="mt-2" />
            </div>
            <!-- Activo -->
            <div class="col-span-6 sm:col-span-4">
                <jet-label for="Activo" value="Activo" />
                <Switch v-model="form.activo" name="enabled" :class="form.activo ? 'bg-teal-900' : 'bg-gray-200'"
                    class="relative inline-flex h-6 w-11 items-center rounded-full">
                    <span class="sr-only">Activar</span>
                    <span :class="form.activo ? 'translate-x-6' : 'translate-x-1'"
                        class="inline-block h-4 w-4 transform rounded-full bg-white" />
                </Switch>
            </div>
        </template>
        <template #actions>
            <jet-action-message :on="form.recentlySuccessful" class="mr-3">
                Guardar.
            </jet-action-message>

            <jet-button :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                Guardar
            </jet-button>
        </template>
    </jet-form-section>
</template>

<script>
import JetButton from "@/Jetstream/Button.vue";
import JetFormSection from "@/Jetstream/FormSection.vue";
import JetInput from "@/Jetstream/Input.vue";
import JetInputError from "@/Jetstream/InputError.vue";
import JetLabel from "@/Jetstream/Label.vue";
import JetActionMessage from "@/Jetstream/ActionMessage.vue";
import JetSecondaryButton from "@/Jetstream/SecondaryButton.vue";
import JetSectionBorder from "@/Jetstream/SectionBorder.vue";
// import { useForm } from "@inertiajs/inertia-vue3";
import { useForm } from '@inertiajs/vue3'
import { Switch } from "@headlessui/vue";
import BaseListbox from "@/Shared/BaseListbox.vue";

export default {
    props: ["departamentos", "puestos", "roles", "centros"],
    components: {
        JetActionMessage,
        JetButton,
        JetFormSection,
        JetInput,
        JetInputError,
        JetLabel,
        JetSecondaryButton,
        JetSectionBorder,
        Switch,
        BaseListbox,
    },

    setup(props) {
        const form = useForm({
            name: null,
            email: null,
            password: null,
            password_confirmation: null,
            departamento_id: null,
            puesto_id: null,
            centro_id: null,
            roles_id: null,
            activo: true,
        });

        const createProfileInformation = () => {
            form.transform((data) => ({
                ...data,
            })).post(route("admin.usuarios/store"), {
                preserveState: true,
            });
            // if (form.wasSuccessful) {
            //     form.reset();
            // }
        };
        return {
            createProfileInformation,
            form,
        };
    },
};
</script>
