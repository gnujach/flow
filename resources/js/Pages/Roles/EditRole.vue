<template>
    <app-layout title="Profile">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Editar Rol
            </h2>
        </template>
        <div>
            <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
                <div v-if="$page.props.jetstream.canUpdateProfileInformation">
                    <UpdateRoleForm :permissions="props.permissions.data" :role="props.role"
                        :permisosUsuario="permisosActual" />
                    <jet-section-border />
                </div>
            </div>
        </div>
    </app-layout>
</template>

<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import UpdateRoleForm from "@/Pages/Profile/Partials/UpdateRoleForm.vue";
import JetSectionBorder from "@/Jetstream/SectionBorder.vue";
import { computed } from "vue";

const props = defineProps({
    permissions: Object,
    role: Object,
    permisosUsuario: Object,
});
const permisosActual = computed(() => {
    return props.permisosUsuario.data
        .filter((permiso) => permiso.name)
        .map((option) => option.name);
});
</script>
