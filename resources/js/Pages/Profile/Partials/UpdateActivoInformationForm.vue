<template>
    <jet-form-section @submitted="updateProfileInformation">
        <template #title> Información de Usuario </template>

        <template #description> Actualizar información de usuario </template>

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
                <jet-label for="password" value="Nuevo Password" />
                <jet-input id="password" type="password" class="mt-1 block w-full" v-model="form.password" />
                <jet-input-error :message="form.errors.password" class="mt-2" />
            </div>
            <!-- Activo -->
            <div class="col-span-6 sm:col-span-4">
                <jet-label for="Activo" value="Activo" />
                <Switch v-model="form.activo" name="enabled" :class="form.activo ? 'bg-teal-900' : 'bg-teal-200'"
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
import { useForm } from '@inertiajs/vue3'
import { Switch } from "@headlessui/vue";

export default {
    props: ["user"],
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
    },

    setup(props) {
        const form = useForm({
            name: props.user.data.attributes.name,
            email: props.user.data.attributes.email,
            password: null,
            activo: Boolean(props.user.data.attributes.activo),
        });
        function updateProfileInformation() {
            form.put(
                route("admin.usuarios/update", {
                    user: props.user.data.uuid,
                })
            );
        }
        return {
            updateProfileInformation,
            form,
        };
    },
};
</script>
