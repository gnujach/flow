<template>
    <div class="flex items-center justify-center">
        <button
            v-bind="$attrs"
            type="button"
            @click="showTramite(tram)"
            class="flex items-center space-x-2 border border-gray-300 shadow-sm px-3 py-1.5 hover:border-gray-600 focus:outline-none focus:border-gray-600 rounded-lg"
        >
            <DotsHorizontalIcon
                class="flex-none text-blue-800 -ml-1 w-5 h-5 rounded-md"
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
                                <InformationCircleIcon
                                    class="flex-none text-gray-700 -ml-1 w-5 h-5 ring-1"
                                    aria-hidden="true"
                                />
                            </div>
                            <p class="uppercase">{{ tram.nombre }}</p>
                            <div
                                class="inset-y-0 right-0 flex items-center pr-3 my-2"
                            >
                                <button
                                    @click="toggleModalInfoTramite"
                                    type="button"
                                    class="flex items-center p-1.5  tracking-wider  rounded-md border border-gray-200 focus:outline-none focus:border-gray-300 text-xxs"
                                >
                                    Esc
                                </button>
                            </div>
                        </div>
                        <div class="overflow-auto">
                            <div class="ring-1 border border-blue-500 rounded-md m-4">
                                <div class="flex flex-row m-4 rounded-md">
                                    <div class="flex w-1/4">
                                    <span
                                        class="pl-4 inline-block text-lg font-semibold capitalize bg-gradient-to-r align-middle h-14">
                                        Objetivo
                                    </span>
                                    </div>
                                    <div class="w-3/4 rounded-md">
                                        <p
                                            class=" text-lg font-semibold lowercase antialiased italic decoration-slate-200 indent-4 bg-gray-100 rounded-md">
                                            {{ tram.objetivo }}
                                        </p>
                                    </div>
                                </div>
                                <div class="flex flex-row m-4 ">
                                    <div class="flex w-1/4">
                                    <span
                                        class="pl-4 inline-block text-lg font-semibold capitalize bg-gradient-to-r align-middle h-14 rounded-md">
                                        Tiempo de respuesta:
                                    </span>
                                    </div>
                                    <div class="w-3/4">
                                        <p
                                            class="text-lg font-semibold lowercase antialiased italic decoration-slate-200 indent-4 bg-gray-100 rounded-md align-middle">
                                            {{ tram.plazo_respuesta }} días
                                        </p>
                                    </div>
                                </div>
                                <div class="flex flex-row m-4 ">
                                    <div class="flex w-1/4">
                                    <span
                                        class="pl-4 inline-block text-lg font-semibold capitalize bg-gradient-to-r align-middle h-14 rounded-md">
                                        Requisitos:
                                    </span>
                                    </div>
                                    <div class="w-3/4">
                                        <ul
                                            class="text-lg font-semibold lowercase antialiased italic decoration-slate-200 indent-4 bg-gray-100 rounded-md">
                                            <li v-for="requisito in tram.requisitos"
                                                :key="requisito.id">
                                                <div class="flex flex-row items-center">
                                                    <span class="pl-4"> <BadgeCheckIcon class="h-4"/> </span>
                                                    <p>{{ requisito.nombre }}</p>
                                                </div>
                                            </li>
                                        </ul>
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
    SearchIcon,
    InformationCircleIcon,
    DocumentAddIcon,
    BadgeCheckIcon,
    DotsHorizontalIcon
} from "@heroicons/vue/solid";
import JetInput from "@/Jetstream/Input";
import JetInputError from "@/Jetstream/InputError";
import JetLabel from "@/Jetstream/Label";
import JetButton from "@/Jetstream/Button";
import {
    onMounted,
    onUnmounted,
    ref,
    computed,
    defineProps
} from "vue";
import {useStore, mapActions} from "vuex";
import {usePrevalidate} from "@/Composables/usePrevalidate";
import {
    Dialog,
    DialogOverlay,
    TransitionRoot,
    TransitionChild,
} from "@headlessui/vue";
import {useForm} from "@inertiajs/inertia-vue3";

const store = useStore();
const props = defineProps({
    tram: {
        type: Object,
        required: true
    }

});
const isAppleOS = () => {
    const platform =
        navigator?.userAgentData?.platform ||
        navigator?.platform ||
        "unknown";
    return /(Mac|iPhone|iPod|iPad)/i.test(platform);
};
const keyboardShortcutaddUser = isAppleOS() ? "⌘R" : "Alt+N";
const isOpenCreate = computed(
    () => store.getters["infoTramiteStore/getInfoTramite"]
);
const results = ref([]);
const resultsRefs = ref([]);
const getTramiteSelected = computed(() => store.getters["infoTramiteStore/getTramiteSelected"]);

const getTramite = (uuid) => store.dispatch("infoTramiteStore/getTramite", uuid);
const showTramite = (tram) => {
    console.log(tram);
    store.dispatch("infoTramiteStore/openModalInfoTramite");
}
const openModalInfoTramite = () => store.dispatch("infoTramiteStore/openModalInfoTramite");
const toggleModalInfoTramite = () => store.dispatch("infoTramiteStore/toggleModalInfoTramite");


const closeModalCreate = () => {
    store.dispatch("infoTramiteStore/openModalInfoTramite");
};
const onKeydownAddRequisito = (event) => {
    // event.preventDefault();
    // if (isOpenCreate.value) return;

    if ((event.metaKey || event.altKey) && event.key === "n") {
        event.preventDefault();
        store.dispatch("infoTramiteStore/toggleModalInfoTramite");
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
    store.dispatch("infoTramiteStore/openModalInfoTramite");
};
const form = useForm('CreateRequisito', {
    nombre: "",
    objetivo: "",
    modal: true,
});
const {validate} = usePrevalidate(form, {
    method: "post",
    url: route("admin.requisitos/store"),
});
</script>
