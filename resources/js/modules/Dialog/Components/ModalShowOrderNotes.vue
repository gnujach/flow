<template>
    <div class="flex items-center justify-center">
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
                                <p class="mb-2 text-lg font-bold uppercase">
                                    {{
                                        order.data.tramite.data.attributes
                                            .nombre
                                    }}
                                </p>
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
                                class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10"
                            >
                                <div
                                    class="grid gap-2 lg:grid-cols-1 items-start"
                                >
                                    <div
                                        class="lg:py-6 lg:pr-16 italic items-start"
                                    >
                                        {{ order.data.attributes.nota }}
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

<script setup (props)>
import {
    Dialog,
    DialogOverlay,
    TransitionRoot,
    TransitionChild,
} from "@headlessui/vue";
import { ref } from "vue";

const props = defineProps({
    order: {
        type: Object,
        required: true,
    },
    open: {
        type: Boolean,
        required: true,
    },
});
const emit = defineEmits(["closeModal"]);
const isOpenCreate = ref(true);
const lastElement = ref(0);
const data = ref({
    task_id: 100,
    concluido: false,
});
const openModalNotes = () => (isOpenCreate.value = true);

const closeModalCreate = () => {
    isOpenCreate.value = false;
    closeOffCanvas();
};

const closeOffCanvas = () => {
    emit("closeModal");
};
</script>
