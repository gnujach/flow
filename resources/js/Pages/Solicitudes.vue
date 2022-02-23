<template>
    <app-layout title="Dashboard">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Solicitudes
            </h2>
        </template>
        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="shadow-xl sm:rounded-lg mb-4 w-full max-w-full">
                    <TabGroup :selectedIndex="selectIndexTab">
                        <TabList class="flex p-1 space-x-1 rounded-xl">
                            <Tab
                                v-for="category in Object.keys(categories)"
                                as="template"
                                :key="category"
                                v-slot="{ selected }"
                            >
                                <button
                                    :class="[
                                        'w-full py-2.5 text-lg leading-5 font-medium text-blue-700 font-semibold bg-white',
                                        'focus:outline-none ',
                                        selected
                                            ? 'bg-white  border-b-2 border-blue-800'
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
                                                                    selectedPerson.name
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
                            <TabPanel
                                v-for="(posts, idx) in Object.values(
                                    categories
                                )"
                                :key="idx"
                                :class="[
                                    'rounded-xl p-3',
                                    'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
                                ]"
                            >
                                <div
                                    class="grid grid-rows-3 grid-flow-col gap-4 h-96"
                                >
                                    <ModalSearch />
                                </div>
                            </TabPanel>
                        </TabPanels>
                        <div class="flex m-2 justify-around">
                            <button>Anterior</button>
                            <button @click="changeTab">Siguiente</button>
                        </div>
                    </TabGroup>
                </div>
            </div>
        </div>
    </app-layout>
</template>

<script>
import { defineComponent, ref, computed, onMounted } from "vue";
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

export default defineComponent({
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
    },

    setup() {
        onMounted(() => {
            tramites.value = plans;
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
                departamento_id: 2,
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
        const selected = ref(plans[0]);
        ref(plans);
        const text = ref("");
        let selectIndexTab = ref(0);
        const tramites = ref([]);
        let categories = ref({
            Tramite: "",
            Usuario: [
                {
                    id: 1,
                    title: "Is tech making coffee better or worse?",
                    date: "Jan 7",
                    commentCount: 29,
                    shareCount: 16,
                },
                {
                    id: 2,
                    title: "The most innovative things happening in coffee",
                    date: "Mar 19",
                    commentCount: 24,
                    shareCount: 12,
                },
            ],
            "Medio de Atención": [
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
        const changeTab = () => {
            selectIndexTab.value = selectIndexTab.value + 1;
            console.log(selectIndexTab.value);
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
            changeTab,
            selectIndexTab,
        };
    },
});
</script>

<style></style>
