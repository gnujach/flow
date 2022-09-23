<template>
    <div class="flex items-center justify-center">
        <button
            v-bind="$attrs"
            type="button"
            @click="openModalUpdateUser(uuid)"
            class="flex items-center space-x-2 border border-gray-300 shadow-sm px-3 py-1.5 hover:border-gray-600 focus:outline-none focus:border-gray-600 rounded-lg"
        >
            <PencilAltIcon
                class="flex-none text-blue-800 ml-1 w-5 h-5"
                aria-hidden="true"
            />
        </button>
        <TransitionRoot :show="isOpenCreate" as="template">
            <Dialog
                :open="isOpenCreate"
                @close="closeModalCreate"
                class="fixed inset-0 z-50 flex justify-center items-start"
            >
                <TransitionChild
                    enter="duration-200 ease-out"
                    enter-from="opacity-0"
                    enter-to="opacity-100"
                    leave="duration-200 ease-in"
                    leave-from="opacity-100"
                    leave-to="opacity-0"
                    as="template"
                >
                    <DialogOverlay
                        class="fixed inset-0 bg-black bg-opacity-75"
                    ></DialogOverlay>
                </TransitionChild>

                <TransitionChild
                    as="template"
                    enter="duration-200 ease-out"
                    enter-from="opacity-0 scale-95"
                    enter-to="opacity-100 scale-100"
                    leave="duration-200 ease-in"
                    leave-from="opacity-100 scale-100"
                    leave-to="opacity-0 scale-95"
                >
                    <div
                        class="flex flex-col overflow-hidden w-full max-w-2xl bg-white rounded-lg mx-4 max-h-[80vh] mt-[10vh] relative"
                    >
                        <div
                            class="flex flex-row justify-between items-center border-b border-gray-300"
                        >
                            <div
                                class="inset-y-0 left-0 flex items-center pl-4 pointer-events-none"
                            >
                                <p class="mb-2 text-lg font-bold">Saúl Sanchez López {{ uuid }} </p>
                            </div>
                            <div
                                class="inset-y-0 right-0 flex items-center pr-3 my-2"
                            >
                                <button
                                    @click="closeModalCreate"
                                    type="button"
                                    class="flex items-center p-1.5 uppercase font-semibold tracking-wider text-gray-700 rounded-md border border-gray-200 focus:outline-none focus:border-gray-300 text-xxs"
                                >
                                    Esc
                                </button>
                            </div>
                        </div>
                        <div class="overflow-auto">
                            <div
                                class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                                <div class="grid gap-6 row-gap-10 lg:grid-cols-2">
                                    <div class="lg:py-6 lg:pr-16">
                                        <div class="flex" v-for="tarea in solicitud.tareas" :key="tarea.id">
                                            <div class="flex flex-col items-center mr-4">
                                                <div>
                                                    <div
                                                        class="flex items-center justify-center w-10 h-10 border rounded-full">
                                                        <ArrowDownIcon class="h-5 w-5"/>
                                                    </div>
                                                </div>
                                                <div class="w-px h-full bg-gray-300"></div>
                                            </div>
                                            <div class="pt-1 pb-8">
                                                <p class="mb-2 text-lg font-bold">{{ tarea.nombre }}</p>
                                            </div>
                                        </div>
                                        <div class="flex">
                                            <div class="flex flex-col items-center mr-4">
                                                <div>
                                                    <div
                                                        class="flex items-center justify-center w-10 h-10 border rounded-full">
                                                        <check-icon class="h-5 w-5"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="pt-1">
                                                <p class="mb-2 text-lg font-bold">Success</p>
                                                <p class="text-gray-700"></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="relative">
                                        <img
                                            class="inset-0 object-cover object-bottom w-full rounded shadow-lg h-96 lg:absolute lg:h-full"
                                            src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </TransitionChild>
            </Dialog>
        </TransitionRoot>
    </div>
</template>

<script setup>
import {
    Dialog,
    DialogOverlay,
    TransitionRoot,
    TransitionChild,
} from "@headlessui/vue";
import axios from "axios";
import {
    ref,
} from "vue";
import {ArrowDownIcon, CheckIcon} from "@heroicons/vue/solid";
import {PencilAltIcon} from "@heroicons/vue/outline"


const props = defineProps({
    uuid: {
        type: Number,
        required: true
    }
})

const isOpenCreate = ref(false);
const solicitud = ref(null);
const openModalUpdateUser = async (uuid) => {
    try {
        const data = await axios.get(`/solicitudes/${uuid}/edit`)
        solicitud.value = data.data;
    } catch (error) {
        console.log(error)
    }
    isOpenCreate.value = true
}
const closeModalCreate = () => isOpenCreate.value = false


</script>
