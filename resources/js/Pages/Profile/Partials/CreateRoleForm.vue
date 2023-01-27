<template>
    <jet-form-section @submitted="createRolInformation">
        <template #title> Información de Rol</template>

        <template #description> Nuevo rol de usuario</template>

        <template #form>
            <!-- Name -->
            <div class="col-span-6 sm:col-span-4">
                <jet-label for="name" value="Nombre"/>
                <jet-input
                    id="name"
                    type="text"
                    class="mt-1 block w-full"
                    v-model="form.name"
                    max-length="12"
                />
                <jet-input-error :message="form.errors.name" class="mt-2"/>
            </div>
            <!-- Permissions-->
            <div class="col-span-6 sm:col-span-4" v-if="permissions">
                <jet-label for="permission" value="Permisos"/>
                <BaseListboxName
                    :options="permissions"
                    :multiple="multiple"
                    placeholder="Selecciona Permisos del Rol"
                    v-model="form.permissions"
                />
                <jet-input-error
                    :message="form.errors.permissions"
                    class="mt-2"
                />
            </div>
        </template>
        <template #actions>
            <jet-action-message :on="form.recentlySuccessful" class="mr-3">
                Guardar.
            </jet-action-message>

            <jet-button
                :class="{ 'opacity-25': form.processing }"
                :disabled="form.processing"
            >
                Guardar
            </jet-button>
        </template>
    </jet-form-section>
</template>

<script setup>
import JetButton from "@/Jetstream/Button.vue";
import JetFormSection from "@/Jetstream/FormSection.vue";
import JetInput from "@/Jetstream/Input.vue";
import JetInputError from "@/Jetstream/InputError.vue";
import JetLabel from "@/Jetstream/Label.vue";
import JetActionMessage from "@/Jetstream/ActionMessage.vue";
import JetSecondaryButton from "@/Jetstream/Button.vue";
import JetSectionBorder from "@/Jetstream/SectionBorder.vue";
import BaseListboxName from "@/Shared/BaseListBoxName.vue";
import {useForm} from "@inertiajs/inertia-vue3";
import {ref} from "vue";

const multiple = ref(true);
const props = defineProps({
    permissions: Object,
});

const form = useForm({
    name: null,
    permissions: [],
});

const createRolInformation = () => {
    form.transform((data) => ({
        ...data,
    })).post(route("admin.roles/store"), {
        preserveState: true,
    });
    if (form.wasSuccessful) {
        form.reset();
    }
};
</script>
