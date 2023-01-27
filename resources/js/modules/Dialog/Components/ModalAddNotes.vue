<template>
    <div class="flex items-center justify-center">
        <button
            v-bind="$attrs"
            type="button"
            @click="toggleModalAddNote"
            class="flex items-center space-x-2 border border-gray-50 shadow-sm px-3 py-1.5 hover:border-gray-600 focus:outline-none focus:border-gray-600 rounded-lg"
        >
            <AnnotationIcon
                class="flex-none text-blue-800 -ml-2.5 w-5 h-5"
                aria-hidden="true"
            />
        </button>
        <TransitionRoot :show="isOpen" as="template">
            <Dialog
                :open="isOpen"
                @close="closeModal"
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
                        class="flex flex-row overflow-hidden w-full max-w-2xl bg-white rounded-lg mx-4 max-h-[80vh] mt-[10vh] relative"
                    >
                        <form
                            action="#"
                            @submit.prevent="onSubmit"
                            class="w-full grid grid-rows-8 grid-cols-1 gap-1 items-start"
                        >
                            <div class="flex flex-row w-full h-12 bg-blue-400 justify-around">
                                <div class="flex justify-start items-center w-1/4">
                                    <button
                                        @click="closeModal"
                                        type="button"
                                        class="flex items-center p-1.5 uppercase font-semibold tracking-wider text-gray-700 rounded-md border border-gray-200 focus:outline-none focus:border-gray-300 text-xxs"
                                    >
                                        Esc
                                    </button>
                                </div>
                                <div class="flex justify-center items-center w-1/2">
                                    <p class="text-white text-xl">Agregar Nota</p>
                                </div>
                                <div class="flex justify-end items-center w-1/4">
                                    <button
                                        @click="closeModal"
                                        type="button"
                                        class="flex items-center p-1.5 uppercase font-semibold tracking-wider text-gray-700 rounded-md border border-gray-200 focus:outline-none focus:border-gray-300 text-xxs"
                                    >
                                        <XIcon class="h-5 w-5"/>
                                    </button>
                                </div>
                            </div>
                            <div class="flex flex-row w-full row-span-6">
                                <textarea rows="5" v-model="note" placeholder="Agregar observaciones" ref="noteRef"
                                          maxlength="250"
                                          class="block m-2 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 uppercase focus:ring-blue-500 focus:border-blue-500"></textarea>
                            </div>
                            <div class="flex flex-row w-full h-12 justify-center my-2">
                                <button type="submit"
                                        class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
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
import {nextTick, computed, onMounted, onUnmounted, ref} from "vue";
import {AnnotationIcon, XIcon,} from "@heroicons/vue/outline";
import {useStore, mapActions} from "vuex";
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

