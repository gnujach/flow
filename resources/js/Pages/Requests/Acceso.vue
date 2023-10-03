<template>
    <AppLayout>
        <template #header>
            <div class="mx-auto w-full">
                <p class="text-3xl text-blue-400 text-center">
                    Estatus de Solicitud
                </p>
            </div>
            <div class="py-12">
                <div class="max-w-full mx-auto sm:px-6 lg:px-8">
                    <div class="overflow-hidden shadow-xl sm:rounded-lg">
                        <div
                            class="p-6 sm:px-20 bg-white border-b border-gray-200"
                        >
                            <div class="grid gap-4 row-gap-4 lg:grid-cols-2">
                                <div class="lg:py-6 lg:pr-16">
                                    <div
                                        class="flex"
                                        v-for="tarea in solicitud.tramite
                                            .tareastramite"
                                        :key="tarea.id"
                                    >
                                        <div
                                            class="flex flex-col items-center mr-4"
                                        >
                                            <div>
                                                <div
                                                    class="flex items-center justify-center w-10 h-10 border rounded-full"
                                                    :class="[
                                                        tarea.id <=
                                                        lastElement.task_id
                                                            ? 'bg-gray-400'
                                                            : '',
                                                    ]"
                                                >
                                                    <ArrowDownIcon
                                                        class="h-5 w-5"
                                                    />
                                                </div>
                                            </div>
                                            <div
                                                class="w-px h-full bg-gray-300"
                                            ></div>
                                        </div>
                                        <div
                                            class="pt-1 pb-8 flex flex-row justify-around"
                                        >
                                            <p
                                                class="mb-2 text-lg font-bold"
                                                :class="[
                                                    tarea.id <=
                                                    lastElement.task_id
                                                        ? 'line-through text-gray-300'
                                                        : '',
                                                ]"
                                            >
                                                {{ tarea.nombre }}
                                            </p>
                                        </div>
                                    </div>
                                    <div class="flex">
                                        <div
                                            class="flex flex-row items-center mr-4"
                                        >
                                            <div>
                                                <div
                                                    class="flex flex-row items-center justify-start"
                                                >
                                                    <div
                                                        class="flex items-center justify-center w-10 h-10 border rounded-full"
                                                        :class="[
                                                            solicitud.concluido
                                                                ? 'bg-gray-400'
                                                                : '',
                                                        ]"
                                                    >
                                                        <check-icon
                                                            class="h-5 w-5"
                                                        />
                                                    </div>
                                                    <div
                                                        v-if="
                                                            solicitud.concluido
                                                        "
                                                    >
                                                        <p
                                                            class="m-2 text-lg font-bold"
                                                        >
                                                            Finalizado
                                                        </p>
                                                    </div>
                                                    <div v-else>
                                                        <p
                                                            class="m-2 text-lg font-bold"
                                                        >
                                                            No Finalizado
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="relative">
                                    <div class="grid grid-rows-2 grid-cols-1">
                                        <div class="border-b border-blue-500">
                                            <h3 class="text-center">
                                                Observaciones
                                            </h3>
                                        </div>
                                        <div>
                                            <p
                                                class="uppercase indent-2 text-lg text-gray-600 italic"
                                                v-if="solicitud.nota"
                                            >
                                                {{ solicitud.nota }}
                                            </p>
                                            <p
                                                v-else
                                                class="uppercase indent-2 text-lg text-gray-600 italic"
                                            >
                                                No se tienen observaciones
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </AppLayout>
</template>
<script setup>
import AppLayout from "@/Layouts/LayoutInvitado.vue";
import { ref } from "vue";

const props = defineProps({
    solicitud: Object,
});
const lastElement = ref(
    props.solicitud.historysolicitud[
        props.solicitud.historysolicitud.length - 1
    ]
);
</script>
