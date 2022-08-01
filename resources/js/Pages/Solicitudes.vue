<template>
    <app-layout title="Dashboard">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Solicitudes
            </h2>
        </template>
        <div class="py-4 flex mx-auto max-w-7xl">
            <div
                class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto"
            >
                <div class="animate-pulse flex flex-col space-x-4">
                    <div class="flex-1 mx-auto"><span>Trámite</span></div>
                    <div class="flex-1 space-y-6 py-1" v-if="!selected">
                        <div class="h-2 bg-slate-200 rounded"></div>
                        <div class="space-y-3">
                            <div class="grid grid-cols-3 gap-4">
                                <div
                                    class="h-2 bg-slate-200 rounded col-span-2"
                                ></div>
                                <div
                                    class="h-2 bg-slate-200 rounded col-span-1"
                                ></div>
                            </div>
                            <div class="h-2 bg-slate-200 rounded"></div>
                        </div>
                    </div>
                    <div class="flex-1 space-y-6 py-1" v-else>
                        {{ selected.name }}
                    </div>
                </div>
            </div>
            <div
                class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto"
            >
                <div
                    class="flex flex-col space-x-4 justify-items-center items-center"
                    :class="{ 'animate-pulse': selectIndexTab == 1 }"
                >
                    <div class="flex-1 mx-auto"><span>Usuario</span></div>
                    <div class="rounded-full bg-slate-200 h-16 w-16"></div>
                </div>
            </div>

            <div
                class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto"
            >
                <div
                    class="flex space-x-4"
                    :class="{ 'animate-pulse': selectIndexTab == 2 }"
                >
                    <div class="rounded-full bg-slate-200 h-10 w-10"></div>
                    <div class="flex-1 space-y-6 py-1">
                        <div class="h-2 bg-slate-200 rounded"></div>
                        <div class="space-y-3">
                            <div class="grid grid-cols-3 gap-4">
                                <div
                                    class="h-2 bg-slate-200 rounded col-span-2"
                                ></div>
                                <div
                                    class="h-2 bg-slate-200 rounded col-span-1"
                                ></div>
                            </div>
                            <div class="h-2 bg-slate-200 rounded"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="shadow-xl sm:rounded-lg mb-4 w-full max-w-full">
                    <TabGroup :selectedIndex="selectIndexTab">
                        <TabList class="flex p-1 space-x-1 rounded-xl">
                            <Tab
                                v-for="(category, key) in Object.keys(
                                    categories
                                )"
                                as="template"
                                :key="category"
                                v-slot="{ selected }"
                                @click="
                                    {
                                        {
                                            selectIndexTab = key;
                                        }
                                    }
                                "
                            >
                                <button
                                    :class="[
                                        'w-full py-2.5 text-lg leading-5 font-medium text-blue-700 font-semibold bg-white',
                                        'focus:outline-none ',
                                        selected
                                            ? 'bg-green-400  border-b-2 border-blue-800'
                                            : 'text-blue-100 hover:bg-white/[0.12] hover:text-gray-200 font-bold',
                                    ]"
                                >
                                    {{ category }}
                                </button>
                            </Tab>
                        </TabList>

                        <TabPanels class="mt-8 mx-4 bg-blue-300/70 pb-8">
                            <TabPanel>
                                <div
                                    class="grid auto-rows-max auto-cols-auto mt-2 border-2"
                                >
                                    <div
                                        class="flex flex-row rounded-lg justify-between my-2"
                                    >
                                        <div
                                            class="flex flex-row items-center space-x-5"
                                        >
                                            <ColorSwatchIcon
                                                class="w-5 h-5 ml-4"
                                                aria-hidden="true"
                                            />
                                            <div class="w-44">
                                                <Listbox
                                                    v-model="selectedPerson"
                                                >
                                                    <div
                                                        class="relative mt-1 z-20"
                                                    >
                                                        <ListboxButton
                                                            class="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm"
                                                        >
                                                            <span
                                                                class="block truncate"
                                                                >{{
                                                                    selectedPerson.nombre
                                                                }}</span
                                                            >
                                                            <span
                                                                class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
                                                            >
                                                                <SelectorIcon
                                                                    class="w-5 h-5 text-gray-400"
                                                                    aria-hidden="true"
                                                                />
                                                            </span>
                                                        </ListboxButton>

                                                        <transition
                                                            leave-active-class="transition duration-100 ease-in"
                                                            leave-from-class="opacity-100"
                                                            leave-to-class="opacity-0"
                                                        >
                                                            <ListboxOptions
                                                                class="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                                                            >
                                                                <ListboxOption
                                                                    v-slot="{
                                                                        active,
                                                                        selected,
                                                                    }"
                                                                    v-for="person in people"
                                                                    :key="
                                                                        person.name
                                                                    "
                                                                    :value="
                                                                        person
                                                                    "
                                                                    as="template"
                                                                >
                                                                    <li
                                                                        @click="
                                                                            SelectDeptoId(
                                                                                person.id
                                                                            )
                                                                        "
                                                                        :class="[
                                                                            active
                                                                                ? 'text-amber-900 bg-amber-100'
                                                                                : 'text-gray-900',
                                                                            'cursor-default select-none relative py-2 pl-10 pr-4',
                                                                        ]"
                                                                    >
                                                                        <span
                                                                            :class="[
                                                                                selected
                                                                                    ? 'font-medium'
                                                                                    : 'font-normal',
                                                                                'block truncate',
                                                                            ]"
                                                                            >{{
                                                                                person.name
                                                                            }}</span
                                                                        >
                                                                        <span
                                                                            v-if="
                                                                                selected
                                                                            "
                                                                            class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"
                                                                        >
                                                                            <CheckIcon
                                                                                class="w-5 h-5"
                                                                                aria-hidden="true"
                                                                            />
                                                                        </span>
                                                                    </li>
                                                                </ListboxOption>
                                                            </ListboxOptions>
                                                        </transition>
                                                    </div>
                                                </Listbox>
                                            </div>
                                        </div>
                                        <div class="flex items-center">
                                            <h2>Catálogo de Trámites</h2>
                                        </div>
                                        <div class="flex flex-row ml-2">
                                            <form
                                                action=""
                                                @submit.prevent="selectByName"
                                            >
                                                <div
                                                    class="relative flex items-center text-gray-400 focus-within:text-gray-600"
                                                >
                                                    <SearchIcon
                                                        class="w-5 h-5 absolute ml-3 pointer-events-none"
                                                    />
                                                    <input
                                                        v-model="text"
                                                        type="text"
                                                        name="buscar"
                                                        placeholder="Buscar"
                                                        autocomplete="off"
                                                        arial-label="buscar trámite"
                                                        class="pl-10 pr-3 py-2 font-semibold placeholder-gray-500 rounded-2xl border-none ring-2 ring-gray-300 focus:ring-2 focus:ring-gray-500"
                                                    />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div
                                        class="mx-4 px-4 bg-gradient-to-r from-blue-500 overflow-y-auto max-h-96"
                                    >
                                        <RadioGroup v-model="selected">
                                            <RadioGroupLabel class="sr-only"
                                                >Trámite</RadioGroupLabel
                                            >
                                            <div
                                                class="grid justify-between justify-items-center md:grid-rows-4 md:grid-flow-col gap-4 my-4"
                                            >
                                                <RadioGroupOption
                                                    as="template"
                                                    v-for="plan in tramites"
                                                    :key="plan.name"
                                                    :value="plan"
                                                    v-slot="{ active, checked }"
                                                >
                                                    <div
                                                        :class="[
                                                            active
                                                                ? 'ring-2 ring-offset-2 ring-offset-sky-300 ring-white ring-opacity-60'
                                                                : '',
                                                            checked
                                                                ? 'bg-sky-900 bg-opacity-75 text-white '
                                                                : 'bg-white ',
                                                        ]"
                                                        class="relative px-5 py-4 rounded-lg shadow-md cursor-pointer focus:outline-none md:w-64"
                                                    >
                                                        <div
                                                            class="flex items-center justify-between"
                                                        >
                                                            <div
                                                                class="flex items-center"
                                                            >
                                                                <div
                                                                    class="text-sm"
                                                                >
                                                                    <RadioGroupLabel
                                                                        as="p"
                                                                        :class="
                                                                            checked
                                                                                ? 'text-white'
                                                                                : 'text-gray-900'
                                                                        "
                                                                        class="font-medium"
                                                                    >
                                                                        {{
                                                                            plan.name
                                                                        }}
                                                                    </RadioGroupLabel>
                                                                    <RadioGroupDescription
                                                                        as="span"
                                                                        :class="
                                                                            checked
                                                                                ? 'text-sky-100'
                                                                                : 'text-gray-500'
                                                                        "
                                                                        class="inline"
                                                                    >
                                                                        <span>
                                                                            {{
                                                                                plan.departamento
                                                                            }}/{{
                                                                                plan.ct
                                                                            }}</span
                                                                        >
                                                                        <span
                                                                            aria-hidden="true"
                                                                        >
                                                                            &middot;
                                                                        </span>
                                                                        <span>{{
                                                                            plan.dirijido
                                                                        }}</span>
                                                                    </RadioGroupDescription>
                                                                </div>
                                                            </div>
                                                            <div
                                                                v-show="checked"
                                                                class="flex-shrink-0 text-white"
                                                            >
                                                                <svg
                                                                    class="w-6 h-6"
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                >
                                                                    <circle
                                                                        cx="12"
                                                                        cy="12"
                                                                        r="12"
                                                                        fill="#fff"
                                                                        fill-opacity="0.2"
                                                                    />
                                                                    <path
                                                                        d="M7 13l3 3 7-7"
                                                                        stroke="#fff"
                                                                        stroke-width="1.5"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
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
                            <TabPanel>
                                <div
                                    class="grid grid-rows-3 grid-flow-col gap-4 h-96 bg-gray-200"
                                >
                                    <div class="flex justify-around">
                                        <ModalSearch />
                                        <ModalAddUser />
                                    </div>
                                    <div class="flex">
                                        <div
                                            class="block mx-auto p-2 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                                        >
                                            <h5
                                                class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                                            >
                                                Información de usuario
                                            </h5>
                                            <p
                                                v-if="
                                                    getSelectedUsuario.id !=
                                                    null
                                                "
                                            >
                                                {{
                                                    `${getSelectedUsuario.nombre} ${getSelectedUsuario.apellido1} ${getSelectedUsuario.apellido2}`
                                                }}
                                            </p>
                                        </div>
                                        <div
                                            class="block mx-auto p-2 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                                        >
                                            <h5
                                                class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                                            >
                                                Medio de atención
                                            </h5>
                                            <p>Interno</p>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div
                                    class="grid grid-rows-3 grid-flow-col gap-4 h-96 bg-gradient-to-r from-blue-500"
                                >
                                    <h2>Tareas ...</h2>
                                </div>
                            </TabPanel>
                        </TabPanels>
                        <div class="flex m-2 justify-around">
                            <button
                                @click="changePrevTab"
                                :disabled="selectIndexTab <= 0"
                            >
                                Anterior
                            </button>
                            <button
                                @click="changeNextTab"
                                :disabled="selectIndexTab >= 2"
                            >
                                Siguiente
                            </button>
                        </div>
                    </TabGroup>
                </div>
                <span>TabIndex: {{ selectIndexTab }}</span>
            </div>
        </div>
    </app-layout>
</template>

<script>
import { ref, computed, onMounted } from "vue";
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
import ModalSearch from "@/modules/Dialog/Components/ModalSearch.vue";
import ModalAddUser from "@/modules/Dialog/Components/ModalAddUser";
import { useStore, mapGetters } from "vuex";
import {
    SearchIcon,
    SelectorIcon,
    CheckIcon,
    ColorSwatchIcon,
} from "@heroicons/vue/outline";

const people = [
    { id: 0, name: "Todos", unavailable: false },
    { id: 1, name: "Informática", unavailable: false },
    { id: 4, name: "Serv. Financieros", unavailable: true },
    { id: 3, name: "Serv. al Personal", unavailable: false },
    { id: 2, name: "Control Escolar", unavailable: false },
];
const selectedPerson = ref(people[0]);
const showModalAddUser = ref(false);
export default {
    emits: ["btn-click"],
    components: {
        AppLayout,
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
        SearchIcon,
        SelectorIcon,
        CheckIcon,
        ColorSwatchIcon,
        ModalSearch,
        ModalAddUser,
    },

    setup(props, context) {
        const store = useStore();
        const getSelectedUsuario = computed(
            () => store.getters["solicitudesStore/getSelectedUsuario"]
        );
        onMounted(() => {
            tramites.value = plans;
            // useKeyboard();
        });

        const plans = [
            {
                departamento_id: 1,
                name: "Solicitud de Correo Electrónico",
                departamento: "Informática",
                ct: "Usae San José Iturbide",
                dirijido: "Empleados activos de SEG",
            },
            {
                departamento_id: 1,
                name: "Asesoría Técnica",
                departamento: "Informática",
                ct: "Usae San José Iturbide",
                dirijido: "Empleados activos de SEG",
            },
            {
                departamento_id: 1,
                name: "Mantenimiento Correctivo de Equipo de Informática",
                departamento: "Informática",
                ct: "Usae San José Iturbide",
                dirijido: "Empleados activos de SEG",
            },
            {
                departamento_id: 1,
                name: "Mantenimiento Preventivo de Equipo de Informática",
                departamento: "Informática",
                ct: "Usae San José Iturbide",
                dirijido: "Empleados activos de SEG",
            },
            {
                departamento_id: 1,
                name: "Solicitud de Cambio de escuela",
                departamento: "Control Escolar",
                ct: "Usae San José Iturbide",
                dirijido: "Padres de Familia",
            },
            {
                departamento_id: 2,
                name: "Solicitud de Adscripción",
                departamento: "Control Escolar",
                ct: "Usae San José Iturbide",
                dirijido: "Padres de Familia",
            },
            {
                departamento_id: 3,
                name: "Cotejo de Documentos",
                departamento: "Servicios al Personal",
                ct: "Usae San José Iturbide",
                dirijido: "Empleados y Ciudadanía en General",
            },
            {
                departamento_id: 3,
                name: "Credencial de Empleado",
                departamento: "Servicios al Personal",
                ct: "Usae San José Iturbide",
                dirijido: "Empleados de SEG",
            },
            {
                departamento_id: 3,
                name: "Licencias Médicas",
                departamento: "Servicios al Personal",
                ct: "Usae San José Iturbide",
                dirijido: "Empleados de SEG",
            },
            {
                departamento_id: 4,
                name: "Actualicación de SINA",
                departamento: "Servicios Financieros y Materiales",
                ct: "Usae San José Iturbide",
                dirijido: "Empleados de SEG",
            },
            {
                departamento_id: 4,
                name: "Fiscalización de Ingresos Propios",
                departamento: "Servicios Financieros y Materiales",
                ct: "Usae San José Iturbide",
                dirijido: "Escuelas con Tienda Escolar",
            },
        ];
        const selected = ref(null);
        ref(plans);
        const text = ref("");
        let selectIndexTab = ref(0);
        const tramites = ref([]);
        let categories = ref({
            Trámite: "",
            Usuario: [
                {
                    id: 1,
                    title: "Is tech making coffee better or worse?",
                    date: "Jan 7",
                    commentCount: 29,
                    shareCount: 16,
                },
            ],
            Tareas: [
                {
                    id: 1,
                    title: "Ask Me Anything: 10 answers to your questions about coffee",
                    date: "2d ago",
                    commentCount: 9,
                    shareCount: 5,
                },
                {
                    id: 2,
                    title: "The worst advice we've ever heard about coffee",
                    date: "4d ago",
                    commentCount: 1,
                    shareCount: 2,
                },
            ],
        });
        const selectByName = () => {
            // console.log(text.value);
            tramites.value = plans.filter((plan) => {
                return plan.name
                    .toLowerCase()
                    .includes(text.value.toLowerCase());
            });
        };
        const SelectDeptoId = (id) => {
            text.value = "";
            if (id == 0) return (tramites.value = plans);
            tramites.value = plans.filter((plan) => {
                if (plan.departamento_id === id) return true;
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
        return {
            SelectDeptoId,
            selected,
            plans,
            categories,
            people,
            selectedPerson,
            tramites,
            selectByName,
            text,
            selectIndexTab,
            changeNextTab,
            changePrevTab,
            showModalAddUser,
            getSelectedUsuario,
        };
    },
};
</script>

<style></style>
