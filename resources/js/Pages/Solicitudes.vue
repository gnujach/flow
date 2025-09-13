<script setup>
import { ref, computed, toRefs, defineProps, watch, onMounted } from "vue";
import {
    TabGroup,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    RadioGroup,
    RadioGroupLabel,
    RadioGroupDescription,
    RadioGroupOption,
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
} from "@headlessui/vue";
import AppLayout from "@/Layouts/AppLayout.vue";
import ToolBar from "@/Components/ToolBar.vue";
import ModalSearch from "@/modules/Dialog/Components/ModalSearch.vue";
import ModalAddUser from "@/modules/Dialog/Components/ModalAddUser.vue";
import ModalInfoTramite from "@/modules/Dialog/Components/ModalInfoTramite.vue";
import SaveDialog from "@/modules/Dialog/Components/SaveDialog.vue";
import { useStore, mapGetters } from "vuex";
import {
    MagnifyingGlassIcon,
    ChevronUpIcon,
    CheckIcon,
    SwatchIcon,
    CheckCircleIcon,
    PlusCircleIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
} from "@heroicons/vue/24/outline";
import { useForm } from '@inertiajs/vue3'
import JetInput from "@/Jetstream/Input.vue";
import JetButton from "@/Jetstream/Button.vue";

const props = defineProps(["tramites", "departamentos", "medios"]);
let listaTramites = ref(props.tramites);
const { departamentos, tramites, medios } = toRefs(props);
const medioAtencion = ref(null);
const selectedDepartamento = ref(departamentos.value[0]);
const showModalAddUser = ref(false);
const store = useStore();
const getSelectedUsuario = computed(
    () => store.getters["solicitudesStore/getSelectedUsuario"]
);
const getSelectedCliente = computed(
    () => store.getters["solicitudesStore/getSelectedCliente"]
);
const getSelectedTask = computed(
    () => store.getters["solicitudesStore/getSelectedTask"]
);

const getNote = computed(() => store.getters["solicitudesStore/getNote"]);

onMounted(() => {
    // medioAtencion.value = medios.value[0];
});
const form = useForm({
    cliente_id: null,
    tramite_id: null,
    concluido: false,
    medio_id: null,
    nota: null,
    tareas: [],
});
const formClientTel = useForm({
    telefono: null,
});
const selected = ref(null);
const text = ref("");
let selectIndexTab = ref(0);
// const tramites = ref([]);
let tabs = ref({
    Trámite: "",
    Usuario: [],
    Tareas: [],
});
const updateTel = () => {
    formClientTel.put(
        route("admin.clientes/updatephone", {
            cliente: getSelectedCliente.value.uuid,
        }),
        {
            preserveState: true,
            preserveScroll: true,
            resetOnSuccess: false,
        }
    );
};
const saveSolicitud = (id, concluido) => {
    store.dispatch("solicitudesStore/setTask", {
        id: id,
        concluido: concluido,
    });
    store.dispatch("infoTramiteStore/openModalSaveDialog");
};
const selectByName = () => {
    listaTramites.value = tramites.value.filter((tramite) => {
        return tramite.nombre.toLowerCase().includes(text.value.toLowerCase());
    });
    text.value = "";
};
const SelectDeptoId = (id) => {
    console.log(id);
    listaTramites.value = props.tramites;
    if (id === 1) return listaTramites;
    listaTramites.value = listaTramites.value.filter((tramite) => {
        if (tramite.departamento_id === id) return true;
    });
};
const changeNextTab = () => {
    if (selectIndexTab.value < 2)
        selectIndexTab.value = selectIndexTab.value + 1;
};
const changePrevTab = () => {
    if (selectIndexTab.value > 0)
        selectIndexTab.value = selectIndexTab.value - 1;
};
watch(getSelectedCliente, () => {
    formClientTel.telefono = getSelectedCliente.value.telefono;
});

function buttonClickSave(id, cerrado) {
    // console.log(selected.value.id, getSelectedCliente.value.id, medioAtencion.value.id);
    form.transform((data) => ({
        ...data,
        cliente_id: getSelectedCliente.value.id,
        tramite_id: selected.value.id,
        medio_id: medioAtencion.value.id,
        concluido: cerrado,
        tareas: { id: id },
        nota: store.getters["solicitudesStore/getNote"],
    })).post(route("solicitudes/store"), {
        errorBag: "saveRequisitoInformation",
        preserveScroll: true,
    });
    store.dispatch("infoTramiteStore/closeModalSaveDialog");
}
</script>

<template>
    <app-layout title="Dashboard">
        <template #header>
                <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                    Ordenes de servicio
                </h2>
        </template>
        <div class="py-4 flex mx-auto max-w-7xl">
            <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                <div class="flex flex-col space-x-4" :class="{ 'animate-pulse': !selected }">
                    <div class="flex-1 mx-auto"><span>Trámite</span></div>
                    <div class="flex-1 space-y-6 py-1" v-if="!selected">
                        <div class="h-2 bg-slate-200 rounded"></div>
                        <div class="space-y-3">
                            <div class="grid grid-cols-3 gap-4">
                                <div class="h-2 bg-slate-200 rounded col-span-2"></div>
                                <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                            </div>
                            <div class="h-2 bg-slate-200 rounded"></div>
                        </div>
                    </div>
                    <div class="flex flex-row justify-around space-y-6 py-1" v-else>
                        <p class="font-bold">{{ selected.nombre }}</p>
                        <ModalInfoTramite :tram="selected" />
                    </div>
                </div>
            </div>
            <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                <div class="flex flex-col space-x-4 justify-items-center items-center" :class="{
                    'animate-pulse':
                        selectIndexTab == 1 &&
                        getSelectedCliente.id == null,
                }">
                    <div class="flex-1 mx-auto"><span>Usuario</span></div>
                    <div v-if="getSelectedCliente.id != null" class="flex flex-row justify-between items-center">
                        <span class="block rounded-full w-20 h-20 bg-gray-200 bg-no-repeat bg-center ring-2 mx-2">
                            <p class="text-center font-bold text-5xl mt-3 text-blue-400">
                                {{ getSelectedCliente.nombre[0] }}
                            </p>
                        </span>
                        <p class="font-bold">
                            {{
                                `${getSelectedCliente.nombre} ${getSelectedCliente.apellido1}
                            ${getSelectedCliente.apellido2}`
                            }}
                        </p>
                    </div>
                    <div v-else class="flex flex-row justify-around items-center">
                        <span class="block rounded-full w-20 h-20 bg-gray-200 bg-no-repeat bg-center ring-2 mx-2">
                        </span>
                        <p class="font-bold">No seleccionado</p>
                    </div>
                </div>
            </div>

            <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                <div class="flex space-x-4" :class="{ 'animate-pulse': selectIndexTab == 2 }">
                    <div class="rounded-full bg-slate-200 h-10 w-10"></div>
                    <div class="flex-1 space-y-6 py-1">
                        <div class="h-2 bg-slate-200 rounded"></div>
                        <div class="space-y-3">
                            <div class="grid grid-cols-3 gap-4">
                                <div class="h-2 bg-slate-200 rounded col-span-2"></div>
                                <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                            </div>
                            <div class="h-2 bg-slate-200 rounded"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="py-12">
            <div class="mx-auto @sm:max-w-7xl sm:px-6 lg:px-8 xl:max-w-[100rem]">
                <div class="shadow-xl sm:rounded-lg mb-4 w-full max-w-full">
                    <TabGroup :selectedIndex="selectIndexTab">
                        <TabList class="flex p-1 space-x-1 rounded-xl">
                            <Tab v-for="(category, key) in Object.keys(tabs)" as="template" :key="category"
                                v-slot="{ selected }" @click="selectIndexTab = key">
                                <button :class="[
                                    'w-full py-2.5 text-lg leading-5 font-semibold ',
                                    'hover:ring-2 hover:ring-sky-900 hover:bg-sky-900 hover:text-white',
                                    selected
                                        ? 'bg-sky-900  border-b-2 border-blue-800 text-white italic'
                                        : 'text-blue-100 hover:bg-sky-900 hover:text-gray-200 font-bold bg-blue-400',
                                ]">
                                    {{ category }}
                                </button>
                            </Tab>
                        </TabList>
                        <ToolBar />
                        <TabPanels class="mt-8 mx-4 bg-blue-300/70 pb-8">
                            <TabPanel>
                                <div class="grid auto-rows-max auto-cols-auto mt-2 border-2 border-blue-300">
                                    <div class="flex flex-row rounded-lg justify-between my-2">
                                        <div class="flex flex-row items-center space-x-5 w-1/2">
                                            <SwatchIcon class="w-5 h-5 ml-4" aria-hidden="true" />
                                            <div class="w-2/3">
                                                <Listbox v-model="selectedDepartamento
                                                    ">
                                                    <div class="relative mt-1 z-20">
                                                        <ListboxButton
                                                            class="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                                                            <span class="block truncate">{{
                                                                selectedDepartamento.nombre
                                                            }}</span>
                                                            <span
                                                                class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                                                <ChevronUpIcon class="w-5 h-5 text-gray-400"
                                                                    aria-hidden="true" />
                                                            </span>
                                                        </ListboxButton>

                                                        <transition leave-active-class="transition duration-100 ease-in"
                                                            leave-from-class="opacity-100" leave-to-class="opacity-0">
                                                            <ListboxOptions
                                                                class="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-96  ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                                <ListboxOption v-slot="{
                                                                    active,
                                                                    selected,
                                                                }" v-for="departamento in $page
                                                                    .props
                                                                    .departamentos" :key="departamento.id
                                                                        " :value="departamento
                                                                            " as="template">
                                                                    <li @click="
                                                                        SelectDeptoId(
                                                                            departamento.id
                                                                        )
                                                                        " :class="[
                                                                            active
                                                                                ? 'text-amber-900 bg-amber-100'
                                                                                : 'text-gray-900',
                                                                            'cursor-default select-none relative py-2 pl-10 pr-4',
                                                                        ]">
                                                                        <span class="capitalize" :class="[
                                                                            selected
                                                                                ? 'font-medium'
                                                                                : 'font-normal',
                                                                            'block truncate',
                                                                        ]">{{
                                                                            departamento.nombre
                                                                            }}</span>
                                                                        <span v-if="
                                                                            selected
                                                                        "
                                                                            class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                                            <CheckIcon class="w-5 h-5"
                                                                                aria-hidden="true" />
                                                                        </span>
                                                                    </li>
                                                                </ListboxOption>
                                                            </ListboxOptions>
                                                        </transition>
                                                    </div>
                                                </Listbox>
                                            </div>
                                        </div>
                                        <div class="flex items-center justify-start w-64">
                                            <h2 class="text-center font-semibold">
                                                Catálogo de Trámites
                                            </h2>
                                        </div>
                                        <div class="flex flex-row ml-2">
                                            <form action="" @submit.prevent="selectByName">
                                                <div
                                                    class="relative flex items-center text-gray-400 focus-within:text-gray-600">
                                                    <MagnifyingGlassIcon
                                                        class="w-5 h-5 absolute ml-3 pointer-events-none" />
                                                    <input v-model="text" type="text" name="buscar" placeholder="Buscar"
                                                        autocomplete="off" arial-label="buscar trámite"
                                                        class="bg-white pl-10 pr-3 py-2 font-semibold placeholder-gray-500 rounded-2xl border-none ring-2 ring-gray-300 focus:ring-2 focus:ring-gray-500" />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div
                                        class="mx-4 px-4 bg-gradient-to-r from-blue-500 overflow-y-auto max-h-96 overflow-x-auto">
                                        <RadioGroup v-model="selected">
                                            <RadioGroupLabel class="sr-only">Trámite
                                            </RadioGroupLabel>
                                            <div
                                                class="grid grid-cols-4 justify-between justify-items-center md:grid-rows-2 md:grid-flow-row-dense gap-4 my-4 overflow-y-auto">
                                                <RadioGroupOption as="template" v-for="tramite in listaTramites"
                                                    :key="tramite.nombre" :value="tramite" v-slot="{ active, checked }">
                                                    <div :class="[
                                                        active
                                                            ? 'ring-2 ring-offset-2 ring-offset-sky-300 ring-white ring-opacity-60'
                                                            : '',
                                                        checked
                                                            ? 'bg-sky-900 bg-opacity-75 text-white '
                                                            : 'bg-white ',
                                                    ]"
                                                        class="relative px-5 py-4 rounded-lg shadow-md cursor-pointer focus:outline-none md:w-64">
                                                        <div class="flex items-center justify-between">
                                                            <div class="flex items-center">
                                                                <div class="text-sm">
                                                                    <RadioGroupLabel as="p" :class="checked
                                                                        ? 'text-white'
                                                                        : 'text-gray-900'
                                                                        " class="font-medium uppercase">"{{
                                                                            tramite.nombre
                                                                        }}"
                                                                    </RadioGroupLabel>
                                                                    <RadioGroupDescription as="span" :class="checked
                                                                        ? 'text-sky-100'
                                                                        : 'text-gray-500'
                                                                        " class="inline">
                                                                        <span>
                                                                            {{
                                                                                tramite.objetivo
                                                                            }}/{{
                                                                                tramite
                                                                                    .departamento
                                                                                    .nombre
                                                                            }}</span>
                                                                    </RadioGroupDescription>
                                                                </div>
                                                            </div>
                                                            <div v-show="checked" class="flex-shrink-0 text-white">
                                                                <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none">
                                                                    <circle cx="12" cy="12" r="12" fill="#fff"
                                                                        fill-opacity="0.2" />
                                                                    <path d="M7 13l3 3 7-7" stroke="#fff"
                                                                        stroke-width="1.5" stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </RadioGroupOption>
                                            </div>
                                        </RadioGroup>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel class="bg-gradient-to-r from-blue-500">
                                <div class="grid grid-rows-3 grid-flow-col gap-4 h-96">
                                    <div class="flex justify-around">
                                        <ModalSearch />
                                        <ModalAddUser />
                                    </div>
                                    <div class="flex flex-row justify-around row-span-2 mb-2 pb-2">
                                        <div
                                            class="w-1/3 block mx-auto p-2 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
                                            <h5
                                                class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                Información de usuario
                                            </h5>
                                            <div v-if="
                                                getSelectedCliente.id !=
                                                null
                                            ">
                                                <p v-if="
                                                    getSelectedCliente.id !=
                                                    null
                                                ">
                                                    {{
                                                        `${getSelectedCliente.nombre
                                                        } ${getSelectedCliente.apellido1
                                                        } ${getSelectedCliente.apellido2 ==
                                                            "NULL"
                                                            ? ""
                                                            : getSelectedCliente.apellido2
                                                        }`
                                                    }}
                                                </p>
                                                <hr />
                                                <span>{{
                                                    getSelectedCliente.email
                                                    }}</span>
                                                <hr />
                                                <div class="flex flex-row m-2">
                                                    <jet-input v-model="formClientTel.telefono
                                                        " class="m-2"></jet-input>
                                                    <button type="button"
                                                        class="h-8 inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-1 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                        @click="updateTel">
                                                        Actualizar
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            class="w-1/3 bg-white p-2 mx-auto rounded-lg shadow-md overflow-y-auto h-auto">
                                            <h5
                                                class="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center">
                                                Medios de Atención
                                            </h5>
                                            <RadioGroup v-model="medioAtencion">
                                                <RadioGroupLabel class="sr-only">Medios de Atención
                                                </RadioGroupLabel>
                                                <div class="space-y-2">
                                                    <RadioGroupOption as="template" v-for="medio in medios"
                                                        :key="medio.nombre" :value="medio" v-slot="{
                                                            active,
                                                            checked,
                                                        }">
                                                        <div :class="[
                                                            active
                                                                ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300'
                                                                : '',
                                                            checked
                                                                ? 'bg-sky-900 bg-opacity-75 text-white '
                                                                : 'bg-sky-100 ',
                                                        ]"
                                                            class="flex cursor-pointer rounded-lg px-2 py-2 shadow-md focus:outline-none w-full">
                                                            <div class="flex w-full items-center justify-between">
                                                                <div v-show="checked
                                                                    " class="shrink-0 text-white">
                                                                    <CheckCircleIcon class="h-6 w-6" />
                                                                </div>
                                                                <div v-show="!checked
                                                                    " class="shrink-0 text-gray-600">
                                                                    <PlusCircleIcon class="h-6 w-6" />
                                                                </div>
                                                                <div class="flex items-center">
                                                                    <div class="text-sm">
                                                                        <RadioGroupLabel as="p" :class="checked
                                                                            ? 'text-white'
                                                                            : 'text-gray-900'
                                                                            " class="font-medium">
                                                                            {{
                                                                                medio.nombre
                                                                            }}
                                                                        </RadioGroupLabel>
                                                                        <RadioGroupDescription as="span" :class="checked
                                                                            ? 'text-sky-100'
                                                                            : 'text-gray-500'
                                                                            " class="inline">
                                                                        </RadioGroupDescription>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </RadioGroupOption>
                                                </div>
                                            </RadioGroup>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <h2 class="text-center uppercase text-2xl">
                                    Selecciona tareas concluidas de este trámite
                                </h2>
                                <div
                                    class="grid grid-rows-1 grid-flow-col gap-4 h-96 bg-gradient-to-r from-blue-500 items-center">
                                    <div class="flex flex-row shrink-0 mx-auto items-center justify-around"
                                        v-if="selected">
                                        <div v-for="(
tarea, id
                                            ) in selected.tareastramite"
                                            class="flex flex-row justify-items-center justify-between items-center w-64 h-64">
                                            <button class="flex flex-col justify-start items-center h-1/3" @click="
                                                saveSolicitud(
                                                    tarea.id,
                                                    false
                                                )
                                                ">
                                                <div
                                                    class="ring-2 w-32 h-32 mx-4 p-2 rounded-full ring-blue-900 hover:bg-blue-900">
                                                    <span
                                                        class="text-center text-white font-bold text-9xl ml-2 hover:text-gray-200">{{
                                                            id + 1 }}</span>
                                                </div>
                                                <section class="block w-full h-1/4">
                                                    <div class="flex ring-1 mx-2 my-2 p-1 rounded-md text-white">
                                                        {{ tarea.nombre }}
                                                    </div>
                                                </section>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="flex flex-row shrink-0 mx-auto items-center justify-around mt-8">
                                        <button class="flex flex-row justify-items-center justify-between h-1/3"
                                            @click="saveSolicitud(100, true)">
                                            <div
                                                class="flex flex-col justify-start items-center ring-2 w-32 h-32 mx-4 p-2 rounded-full ring-blue-900 hover:bg-blue-900">
                                                <span
                                                    class="text-center text-white font-bold text-5xl ml-2 hover:text-gray-200 mt-8">
                                                    Fin
                                                </span>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </TabPanel>
                        </TabPanels>
                        <div class="flex m-2 justify-around pb-1">
                            <button @click="changePrevTab" :disabled="selectIndexTab <= 0"
                                class="flex flex-row justify-center items-center rounded-md ring-2 bg-blue-400 font-medium text-2xl text-white mx-2 p-2 mt-1 hover:bg-blue-900 hover:text-gray-200">
                                <span>
                                    <ChevronLeftIcon class="w-5 h-5" aria-hidden="true" />
                                </span>
                                <span> Anterior </span>
                            </button>
                            <button @click="changeNextTab" :disabled="selectIndexTab >= 2"
                                class="flex flex-row justify-center items-center rounded-md ring-2 bg-blue-400 font-medium text-2xl text-white mx-2 p-2 mt-1 hover:bg-blue-900 hover:text-gray-200">
                                <span> Siguiente </span>
                                <span>
                                    <ChevronRightIcon class="w-5 h-5" aria-hidden="true" />
                                </span>
                            </button>
                        </div>
                    </TabGroup>
                </div>
                <SaveDialog @btn-save="
                    buttonClickSave(
                        getSelectedTask.id,
                        getSelectedTask.concluido
                    )
                    " />
            </div>
        </div>
    </app-layout>
</template>