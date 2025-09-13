<template>
    <div class="flex items-center justify-center">
        <button v-bind="$attrs" type="button" @click="toggleModalAddNote" alt="Agregar Nota"
            class="flex items-center space-x-1 border-gray-50 shadow-sm px-3 py-1.5 hover:border-gray-600 focus:outline-none focus:border-gray-600 rounded-lg">
            <span class="flex-none text-blue-800 -ml-2.5 w-8 h-8" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#0f8bff">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path
                            d="M20 8.25V18C20 21 18.21 22 16 22H8C5.79 22 4 21 4 18V8.25C4 5 5.79 4.25 8 4.25C8 4.87 8.24997 5.43 8.65997 5.84C9.06997 6.25 9.63 6.5 10.25 6.5H13.75C14.99 6.5 16 5.49 16 4.25C18.21 4.25 20 5 20 8.25Z"
                            stroke="#1172e8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path
                            d="M16 4.25C16 5.49 14.99 6.5 13.75 6.5H10.25C9.63 6.5 9.06997 6.25 8.65997 5.84C8.24997 5.43 8 4.87 8 4.25C8 3.01 9.01 2 10.25 2H13.75C14.37 2 14.93 2.25 15.34 2.66C15.75 3.07 16 3.63 16 4.25Z"
                            stroke="#1172e8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path opacity="0.4" d="M8 13H12" stroke="#1172e8" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round"></path>
                        <path opacity="0.4" d="M8 17H16" stroke="#1172e8" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round"></path>
                    </g>
                </svg>
            </span>
        </button>
        <TransitionRoot :show="isOpen" as="template">
            <Dialog :open="isOpen" @close="closeModal" class="fixed inset-0 z-50 flex justify-center items-start">
                <TransitionChild enter="duration-200 ease-out" enter-from="opacity-0" enter-to="opacity-100"
                    leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0" as="template">
                    <DialogOverlay class="fixed inset-0 bg-black bg-opacity-75"></DialogOverlay>
                </TransitionChild>

                <TransitionChild as="template" enter="duration-200 ease-out" enter-from="opacity-0 scale-95"
                    enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                    leave-to="opacity-0 scale-95">
                    <div
                        class="flex flex-row overflow-hidden w-full max-w-2xl bg-white rounded-lg mx-4 max-h-[80vh] mt-[10vh] relative">
                        <form action="#" @submit.prevent="onSubmit"
                            class="w-full grid grid-rows-8 grid-cols-1 gap-1 items-start">
                            <div class="flex flex-row w-full h-12 bg-blue-400 justify-around">
                                <div class="flex justify-start items-center w-1/4">
                                    <button @click="closeModal" type="button"
                                        class="flex items-center p-1.5 uppercase font-semibold tracking-wider text-gray-700 rounded-md border border-gray-200 focus:outline-none focus:border-gray-300 text-xxs">
                                        Esc
                                    </button>
                                </div>
                                <div class="flex justify-center items-center w-1/2">
                                    <p class="text-white text-xl">Agregar Nota</p>
                                </div>
                                <div class="flex justify-end items-center w-1/4">
                                    <button @click="closeModal" type="button"
                                        class="flex items-center p-1.5 uppercase font-semibold tracking-wider text-gray-700 rounded-md border border-gray-200 focus:outline-none focus:border-gray-300 text-xxs">
                                        <XMarkIcon class="h-5 w-5" />
                                    </button>
                                </div>
                            </div>
                            <div class="flex flex-row w-full row-span-6">
                                <textarea rows="5" v-model="note" placeholder="Agregar observaciones" ref="noteRef"
                                    maxlength="240"
                                    class="block m-2 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 uppercase focus:ring-blue-500 focus:border-blue-500"></textarea>
                            </div>
                            <div class="flex flex-row w-full h-12 justify-center my-2">
                                <button type="submit"
                                    class="btn btn-secondary font-medium text-white px-4 py-2 rounded hover:bg-pink-600 hover:text-white transition duration-500">
                                    Guardar
                                </button>
                            </div>
                        </form>
                    </div>
                </TransitionChild>
            </Dialog>
        </TransitionRoot>
    </div>
</template>
<script setup>
import { nextTick, computed, onMounted, onUnmounted, ref } from "vue";
import { ChatBubbleBottomCenterTextIcon, XMarkIcon, } from "@heroicons/vue/24/outline";
import { useStore, mapActions } from "vuex";
import {
    Dialog,
    DialogOverlay,
    TransitionRoot,
    TransitionChild,
} from "@headlessui/vue";


const store = useStore();

const note = ref(null);
const noteRef = ref(null);
// const isOpen = ref(false);
const isOpen = computed(
    () => store.getters["solicitudesStore/getOpenAddNote"]
);
const activeNote = computed(
    () => store.getters["solicitudesStore/getNote"]
)
const toggleModalAddNote = () => {
    store.dispatch("solicitudesStore/toggleModalAddNote");
    nextTick(() => {
        noteRef.value.focus();
    })
}
const onSubmit = () => {
    store.dispatch("solicitudesStore/loadNote", note.value);
    store.dispatch("solicitudesStore/toggleModalAddNote");
};

const closeModal = () => {
    store.dispatch("solicitudesStore/toggleModalAddNote");
};
</script>
