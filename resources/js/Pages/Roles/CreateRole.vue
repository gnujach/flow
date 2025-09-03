<template>
    <app-layout title="Profile">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Nuevo rol
            </h2>
        </template>
        <div>
            <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
                <div v-if="$page.props.jetstream.canUpdateProfileInformation">
                    <CreateRoleForm :permissions="props.permissions.data" />
                    <jet-section-border />
                </div>
            </div>
        </div>
    </app-layout>
</template>

<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import CreateRoleForm from "@/Pages/Profile/Partials/CreateRoleForm.vue";
import JetSectionBorder from "@/Jetstream/SectionBorder.vue";

const props = defineProps({
    permissions: Object,
});
</script>
