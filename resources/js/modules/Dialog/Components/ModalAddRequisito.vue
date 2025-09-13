<template>
    <div class="flex items-center justify-center">
        <button v-bind="$attrs" type="button" @click="openModalAddRequisito"
            class="flex items-center space-x-2 border border-gray-300 shadow-sm px-3 py-1.5 hover:border-gray-600 focus:outline-none focus:border-gray-600 rounded-lg">
            <DocumentIcon class="flex-none text-blue-800 -ml-1 w-5 h-5" aria-hidden="true" />
            <span class="text-sm text-blue-800 flex-1 text-left">Agregar Requisito</span>
            <span class="flex-none text-xs font-semibold text-blue-800">{{
                keyboardShortcutaddUser
                }}</span>
        </button>
        <TransitionRoot :show="isOpenCreate" as="template">
            <Dialog :open="isOpenCreate" @close="closeModalCreate"
                class="fixed inset-0 z-50 flex justify-center items-start">
                <TransitionChild enter="duration-200 ease-out" enter-from="opacity-0" enter-to="opacity-100"
                    leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0" as="template">
                    <DialogOverlay class="fixed inset-0 bg-black bg-opacity-75"></DialogOverlay>
                </TransitionChild>

                <TransitionChild as="template" enter="duration-200 ease-out" enter-from="opacity-0 scale-95"
                    enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                    leave-to="opacity-0 scale-95">
                    <div
                        class="flex flex-col overflow-hidden w-full max-w-2xl bg-white rounded-lg mx-4 max-h-[80vh] mt-[10vh] relative">
                        <div class="flex flex-row justify-between items-center border-b border-gray-300">
                            <div class="inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                                <DocumentIcon class="flex-none text-gray-700 -ml-1 w-5 h-5" aria-hidden="true" />
                            </div>
                            <p>Registrar nuevo requisito en el sistema</p>
                            <div class="inset-y-0 right-0 flex items-center pr-3 my-2">
                                <button @click="toggleModalAddRequisito" type="button"
                                    class="flex items-center p-1.5 uppercase font-semibold tracking-wider text-gray-700 rounded-md border border-gray-200 focus:outline-none focus:border-gray-300 text-xxs">
                                    Esc
                                </button>
                            </div>
                        </div>
                        <div class="overflow-auto">
                            <form @focusout="validate" @submitted="onSubmit">
                                <div class="flex justify-between items-start my-4 mx-2 col-span-6 sm:col-span-4">
                                    <jet-label for="nombre" value="Nombre"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" />
                                    <div class="flex flex-col w-2/3 justify-center items-center">
                                        <jet-input id="nombre" type="text"
                                            class="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            v-model="form.nombre" autofocus aria-autocomplete="none"
                                            autocomplete="off" />
                                        <jet-input-error :message="form.errors.nombre"
                                            class="mt-2 flex justify-center" />
                                    </div>
                                </div>

                                <!-- ap1 -->
                                <div class="flex justify-between items-start my-4 mx-2 col-span-6 sm:col-span-4">
                                    <jet-label for="ap1" value="Objetivo" />
                                    <div class="flex flex-col w-2/3 justify-center items-center">
                                        <jet-input id="ap1" type="text"
                                            class="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            v-model="form.objetivo" />
                                        <jet-input-error :message="form.errors.objetivo" class="mt-2" />
                                    </div>
                                </div>
                                <!-- buttons -->
                                <div class="flex justify-around items-start my-4 mx-2 col-span-6 sm:col-span-4">
                                    <button type="button" @click="toggleModalAddRequisito"
                                        class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                                        Cancelar
                                    </button>
                                    <jet-button type="button" @Click="onSubmit"
                                        class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Guardar
                                    </jet-button>
                                </div>
                            </form>
                        </div>
                    </div>
                </TransitionChild>
            </Dialog>
        </TransitionRoot>
    </div>
</template>

<script>
import { DocumentIcon, MagnifyingGlassCircleIcon} from "@heroicons/vue/24/solid";
import JetNavLink from "@/Jetstream/NavLink.vue";
import JetFormSection from "@/Jetstream/FormSection.vue";
import JetInput from "@/Jetstream/Input.vue";
import JetInputError from "@/Jetstream/InputError.vue";
import JetLabel from "@/Jetstream/Label.vue";
import JetButton from "@/Jetstream/Button.vue";
import {
    nextTick,
    onMounted,
    onUnmounted,
    onUpdated,
    ref,
    computed,
} from "vue";
import { useStore, mapActions } from "vuex";
import { usePrevalidate } from "@/Composables/usePrevalidate";
import {
    Dialog,
    DialogOverlay,
    TransitionRoot,
    TransitionChild,
} from "@headlessui/vue";
// import {useForm} from "@inertiajs/inertia-vue3";
import { useForm } from '@inertiajs/vue3'

export default {
    components: {
        Dialog,
        DialogOverlay,
        TransitionRoot,
        TransitionChild,
        JetNavLink,
        JetFormSection,
        JetInput,
        JetInputError,
        JetLabel,
        JetButton,
        DocumentIcon
    },
    props: {},

    setup(props) {
        const store = useStore();
        const isAppleOS = () => {
            const platform =
                navigator?.userAgentData?.platform ||
                navigator?.platform ||
                "unknown";
            return /(Mac|iPhone|iPod|iPad)/i.test(platform);
        };
        const keyboardShortcutaddUser = isAppleOS() ? "⌘R" : "Alt+N";
        const isOpenCreate = computed(
            () => store.getters["requisitosStore/getOpenCreate"]
        );
        const results = ref([]);
        const resultsRefs = ref([]);

        const closeModalCreate = () => {
            store.dispatch("requisitosStore/openModalAddRequisito");
        };
        const onKeydownAddRequisito = (event) => {
            // event.preventDefault();
            // if (isOpenCreate.value) return;

            if ((event.metaKey || event.altKey) && event.key === "n") {
                event.preventDefault();
                store.dispatch("requisitosStore/toggleModalAddRequisito");
            }
            return;
        };

        onMounted(() => {
            window.addEventListener("keydown", onKeydownAddRequisito);
        });
        onUnmounted(() =>
            window.removeEventListener("keydown", onKeydownAddRequisito)
        );
        const onSubmit = () => {
            form.transform((data) => ({
                ...data,
            })).post(route("admin.requisitos/store"), {
                preserveScroll: true,
                preserveState: true,
            });
            store.dispatch("requisitosStore/toggleModalAddRequisito");
        };
        const form = useForm('CreateRequisito', {
            nombre: "",
            objetivo: "",
            modal: true,
        });
        const { validate } = usePrevalidate(form, {
            method: "post",
            url: route("admin.requisitos/store"),
        });
        return {
            ...mapActions("requisitosStore", [
                "toggleModalAddRequisito",
                "openModalAddRequisito",
            ]),

            form,
            isOpenCreate,
            results,
            resultsRefs,
            keyboardShortcutaddUser,
            validate,
            onSubmit,
            closeModalCreate,
            openModalCreate() {
                isOpenCreate.value = true;
            },
        };
    },
};
</script>
