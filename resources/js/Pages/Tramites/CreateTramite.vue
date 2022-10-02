<template>
    <app-layout>
        <template #header>
            <div
                class="flex flex-col bg-white p-1 ring-1 max-w-full mx-auto sm:px-6 lg:px-8 items-center rounded-md space-x-1">
                <div>
                    <h1 class="text-blue-400 font-bold text-2xl">Nuevo Trámite</h1>
                </div>
                <div class="flex flex-row">
                    <div class="flex">
                        <DotsCircleHorizontalIcon class="h-5 text-gray-200"
                                                  :class="{'h-6 text-blue-400':selectIndexTab==0}"/>
                        <span :class="{'border-b-2 border-b-blue-400 text-lg font-semibold':selectIndexTab==0}">
                            Información del Trámite </span>
                        <MinusIcon class="h-5"/>
                    </div>
                    <div class="flex">
                        <DotsCircleHorizontalIcon class="h-5 text-gray-200"
                                                  :class="{'text-blue-400 h-6':selectIndexTab==1}"
                        />
                        <span :class="{'border-b-2 border-b-blue-400 text-lg font-semibold':selectIndexTab==1}">
                            Requisitos </span>
                        <MinusIcon class="h-5"/>
                    </div>
                    <div class="flex">
                        <DotsCircleHorizontalIcon class="h-5 text-gray-400"
                                                  :class="{'text-blue-400 h-6':selectIndexTab==2}"/>
                        <span :class="{'border-b-2 border-b-blue-400 text-lg font-semibold':selectIndexTab==2}">
                            Actividades</span>
                    </div>
                </div>
            </div>
            <Alert v-if="form.hasErrors "/>
        </template>
        <div class="max-w-7xl  mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div
                class="flex flex-col bg-white p-1 ring-1 max-w-full mx-auto sm:px-6 lg:px-8 items-center rounded-md space-x-1">
                <TabGroup :selectedIndex="selectIndexTab">
                    <TabList>
                        <Tab><p class="text-2xl font-bold center"
                                :class="{'visible ':selectIndexTab==0, 'hidden':selectIndexTab!= 0}">
                            Información General
                            del Trámite</p></Tab>
                        <Tab>
                            <div class="flex flex-row justify-around"
                                 :class="{'visible':selectIndexTab==1, 'hidden':selectIndexTab!= 1}">
                                <div class="w-2/3">
                                    <p class="text-2xl font-bold "
                                    >
                                        Requisitos</p>
                                </div>
                            </div>
                        </Tab>
                        <Tab><p class="text-2xl font-bold "
                                :class="{'visible':selectIndexTab==2, 'hidden':selectIndexTab!= 2}">Tareas</p>
                        </Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <div class="max-w-7xl">
                                <div
                                    class="grid grid-cols-1 md:grid-cols-4 grid-rows-1 md:grid-rows-4 gap-4 place-content-around">
                                    <div class="col-span-1 md:col-span-2">
                                        <div class="flex flex-col w-full items-start justify-start">
                                            <jet-label for="nombre" value="Nombre"
                                                       class="text-lg font-semibold"/>
                                            <jet-input
                                                id="nombre"
                                                type="text"
                                                class="mt-1 w-full mx-auto border-blue-500"
                                                autofocus
                                                v-model="form.nombre"
                                                autocomplete="nombre"
                                                @blur="validate"
                                            />
                                            <jet-input-error
                                                :message="form.errors.nombre"
                                                class="mt-2"
                                            />
                                        </div>
                                    </div>
                                    <div class="col-span-1 md:col-span-2">
                                        <div class="flex flex-col w-full col-span-2">
                                            <jet-label for="objetivo" value="Objetivo" class="text-lg font-semibold"/>
                                            <jet-input
                                                id="objetivo"
                                                type="text"
                                                class="mt-1 border-blue-500"
                                                v-model="form.objetivo"
                                                @blur="validate"
                                            />
                                            <jet-input-error
                                                :message="form.errors.objetivo"
                                                class="mt-2"
                                            />
                                        </div>
                                    </div>
                                    <div class="col-span-3">
                                        <div class="flex flex-col w-full">
                                            <jet-label for="fundamento_jur" value="Fundamento Jurídico"
                                                       class="text-lg font-semibold"/>
                                            <jet-input
                                                id="fundamento_jur"
                                                type="text"
                                                class="mt-1 w-full border-blue-500"
                                                v-model="form.fundamento_jur"
                                            />
                                            <jet-input-error
                                                :message="form.errors.fundamento_jur"
                                                class="mt-2"
                                            />
                                        </div>
                                    </div>
                                    <div class="flex flex-col w-full items-end">
                                        <jet-label for="costo" value="Costo"
                                                   class="w-full text-lg font-semibold"/>
                                        <jet-input
                                            id="costo"
                                            type="text"
                                            class="mt-1 w-full border-blue-500"
                                            v-model="form.costo"
                                        />
                                        <jet-input-error
                                            :message="form.errors.costo"
                                            class="mt-2"
                                        />

                                    </div>
                                    <div class="flex flex-col w-full">
                                        <jet-label for="plazo" value="Plazo de Respuesta"
                                                   class="text-lg font-semibold"/>
                                        <jet-input
                                            id="plazo"
                                            type="text"
                                            class="mt-1 border-blue-500"
                                            v-model="form.plazo_respuesta"
                                            @blur="validate"
                                        />
                                        <jet-input-error
                                            :message="form.errors.plazo_respuesta"
                                            class="mt-2"
                                        />
                                    </div>
                                    <div class="flex flex-col ">
                                        <jet-label for="modalidad" value="Modalidad de Atención"
                                                   class="text-lg font-semibold"/>
                                        <BaseListbox
                                            :options="modalidad"
                                            placeholder="Seleccione Modalidad"
                                            v-model="form.modalidad_id"
                                        />
                                    </div>
                                    <div class="flex flex-col">
                                        <jet-label for="tipo_usuario" value="Tipo de Usuario"
                                                   class="text-lg font-semibold"/>
                                        <BaseListbox
                                            :options="tipoUsuarios"
                                            placeholder="Seleccione Tipo de Usuario"
                                            v-model="form.tipo_usuario_id"
                                        />
                                    </div>
                                    <div class="flex flex-col">
                                        <jet-label for="tipo_departamento" value="Departamento"
                                                   class="text-lg font-semibold"/>
                                        <BaseListbox
                                            :options="departamentosList"
                                            placeholder="Seleccione Departamento"
                                            v-model="form.departamento_id"
                                        />
                                        <jet-input-error
                                            :message="form.errors.departamento_id"
                                            class="mt-2"
                                        />
                                    </div>
                                    <div class="flex flex-col col-span-3">
                                        <jet-label for="url_proceso" value="Url Proceso"
                                                   class="text-lg font-semibold"/>
                                        <jet-input
                                            id="url_proceso"
                                            type="text"
                                            class="mt-1 border-blue-500"
                                            @blur="validate"
                                            v-model="form.url_proceso"
                                        />
                                        <jet-input-error
                                            :message="form.errors.url_proceso"
                                            class="mt-2"
                                        />
                                    </div>
                                    <div class="flex flex-col items-center">
                                        <jet-label for="activo" value="Activo" class="text-lg font-semibold"/>
                                        <Switch
                                            v-model="form.activo"
                                            name="enabled"
                                            :class="form.activo ? 'bg-teal-900' : 'bg-teal-200'"
                                            class="relative inline-flex h-6 w-11 items-center rounded-full"
                                        >
                                            <span class="sr-only">Activar</span>
                                            <span
                                                :class="form.activo ? 'translate-x-6' : 'translate-x-1'"
                                                class="inline-block h-4 w-4 transform rounded-full bg-white"
                                            />
                                        </Switch>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-row w-full justify-end">
                                <button
                                    class="bg-gray-100 text-blue-700 rounded-md flex flex-row m-2 items-center hover:bg-blue-700 hover:text-gray-100"
                                    @click="selectIndexTab=1">
                                    <ArrowCircleRightIcon class="h-5 w-5"></ArrowCircleRightIcon>
                                    <span class="p-2">Siguiente</span>
                                </button>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div class="max-w-8xl flex justify-end mb-2">
                                <ModalAddRequisito/>
                            </div>
                            <div class="max-w-8xl">
                                <div
                                    class="grid grid-row-4 grid-cols-4 gap-4 max-h-96 ">
                                    <div class="col-span-3">
                                        <div
                                            class="grid grid-cols-3 grid-flow-row  overflow-hidden lg:overflow-auto scrollbar:!w-1.5 scrollbar:!h-1.5 scrollbar:bg-transparent
                                                scrollbar-track:!bg-slate-100 scrollbar-thumb:!rounded scrollbar-thumb:!bg-slate-300 scrollbar-track:!rounded
                                                dark:scrollbar-track:!bg-slate-500/[0.16] dark:scrollbar-thumb:!bg-slate-500/50 max-h-96 supports-scrollbars:pr-2 lg:max-h-96">
                                            <div v-for="requisito in $page.props.requisitos"
                                                 :class="[
                                                            active
                                                                ? 'ring-2 ring-offset-2 ring-offset-sky-300 ring-white ring-opacity-60'
                                                                : '',
                                                            findRequisito(requisito)
                                                                ? 'bg-sky-900 bg-opacity-75 text-white '
                                                                : 'bg-white ring-offset-2 ring-sky-300',
                                                        ]"
                                                 class="  px-5 py-4 rounded-lg shadow-md cursor-pointer focus:outline-none md:w-64 m-2"
                                                 @click="addRequisito(requisito)"
                                            >
                                                <div
                                                    class="flex items-center justify-between "
                                                >
                                                    <div
                                                        class="flex items-center"
                                                    >
                                                        <div
                                                            class="text-sm uppercase"
                                                        >

                                                            {{
                                                                requisito.nombre
                                                            }}

                                                            <span>
                                                                            {{
                                                                    requisito.objetivo
                                                                }}/{{
                                                                    requisito.descripcion
                                                                }}</span
                                                            >
                                                            <span
                                                                aria-hidden="true"
                                                            >
                                                                            &middot;
                                                                        </span>
                                                        </div>
                                                    </div>
                                                    <div
                                                        v-show="findRequisito(requisito)"
                                                        class="flex-shrink-0 text-white"
                                                    >
                                                        <CheckIcon class="h-5 w-5 "/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex flex-col  overflow-hidden lg:overflow-auto scrollbar:!w-1.5 scrollbar:!h-1.5 scrollbar:bg-transparent
                                                scrollbar-track:!bg-slate-100 scrollbar-thumb:!rounded scrollbar-thumb:!bg-slate-300 scrollbar-track:!rounded
                                                dark:scrollbar-track:!bg-slate-500/[0.16] dark:scrollbar-thumb:!bg-slate-500/50 max-h-96 supports-scrollbars:pr-2 lg:max-h-96">
                                        <div class="text-lg font-semibold"><p>Requisitos del Trámite</p></div>
                                        <ul class="border border-gray-100 rounded-lg shadow-md cursor-pointer">
                                            <li v-for="(req, index) in form.requisitos"
                                                class="flex flex-row items-center border-b m-2 border-blue-500 p-2 uppercase hover:bg-gray-100">
                                                <span><XCircleIcon class="h-5 w-5 text-blue-700"
                                                                   @click="deleteRequisito(index)"/></span>
                                                <p> {{ req.nombre }}</p>
                                            </li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-row w-full justify-between">
                                <button
                                    class="bg-gray-100 text-blue-700 rounded-md flex flex-row m-2 items-center hover:bg-blue-700 hover:text-gray-100"
                                    @click="selectIndexTab=0">
                                    <ArrowCircleLeftIcon class="h-5 w-5"></ArrowCircleLeftIcon>
                                    <span class="p-2">Anterior</span>
                                </button>
                                <button
                                    class="bg-gray-100 text-blue-700 rounded-md flex flex-row m-2 items-center hover:bg-blue-700 hover:text-gray-100"
                                    @click="selectIndexTab=2">
                                    <span class="p-2">Siguiente</span>
                                    <ArrowCircleRightIcon class="h-5 w-5"></ArrowCircleRightIcon>
                                </button>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div class="max-w-8xl">
                                <div
                                    class="inline-grid grid-row-4 grid-cols-4 gap-4 max-h-96 h-96 overflow-hidden">
                                    <div class="col-span-4 flex items-center justify-center">
                                        <jet-label for="tarea" value="Nueva Tarea"
                                                   class="text-lg font-semibold mx-2 p-2"/>
                                        <jet-input
                                            id="tarea"
                                            type="text"
                                            class="mt-1 border-blue-400"
                                            v-model="task"
                                            size="44"
                                            maxsize="44"
                                        />

                                        <button
                                            class="bg-gray-100 text-blue-700 rounded-md flex flex-row m-2 items-center hover:bg-blue-700 hover:text-gray-100"
                                            @click="addTarea(task)">
                                            <PlusCircleIcon class="h-5 w-5"></PlusCircleIcon>
                                            <span class="p-2">Agregar</span>
                                        </button>
                                    </div>
                                    <ul class="col-span-4 overflow-y-auto">
                                        <ol class="flex flex-row ">
                                            <p class="font-semibold text-lg w-1/3">No.</p>
                                            <p class="font-semibold text-lg w-2/3">Descripción</p>
                                        </ol>
                                        <ol v-for="(tarea, i) in form.tareas "
                                            class="group relative flex flex-row items-center justify-start w-full hover:bg-gray-50 rounded-md">
                                            <p class="font-semibold text-lg w-1/3">{{ i + 1 }}</p>
                                            <div class="flex w-full flex-row mx-2 my-2">
                                                <p class=" text-left font-semibold text-lg  font-bold uppercase">
                                                    {{ tarea }}</p>
                                                <button
                                                    class="hidden absolute top-1 right-1 w-8 h-8 bg-gray-50 group-hover:grid place-content-center rounded-md text-gray-600 hover:text-black hover:bg-gray-200"
                                                    @click="deleteTarea(i)">
                                                    <XCircleIcon class="h-5 w-5 "/>
                                                </button>
                                            </div>
                                        </ol>
                                    </ul>
                                </div>
                            </div>
                            <div class="flex flex-row w-full justify-between">
                                <button
                                    class="bg-gray-100 text-blue-700 rounded-md flex flex-row m-2 items-center hover:bg-blue-700 hover:text-gray-100"
                                    @click="selectIndexTab=1">
                                    <ArrowCircleLeftIcon class="h-5 w-5"></ArrowCircleLeftIcon>
                                    <span class="p-2">Anterior</span>
                                </button>
                                <button
                                    class="bg-gray-100 text-blue-700 rounded-md flex flex-row m-2 items-center hover:bg-blue-700 hover:text-gray-100"
                                    @click="saveTramiteInformation">
                                    <span class="p-2">Guardar</span>
                                    <SaveIcon class="h-5 w-5"></SaveIcon>
                                </button>
                            </div>
                        </TabPanel>
                    </TabPanels>
                </TabGroup>
            </div>
        </div>
    </app-layout>
</template>

<script setup>
import AppLayout from "@/Layouts/AppLayout";
import {
    TabGroup, TabList, Tab, TabPanels, TabPanel,

} from '@headlessui/vue'
import {
    DotsCircleHorizontalIcon,
    MinusIcon,
    ArrowCircleRightIcon,
    CheckIcon,
    XCircleIcon,
    PlusCircleIcon,
    ArrowCircleLeftIcon,
    SaveIcon
} from '@heroicons/vue/solid'
import JetInput from "@/Jetstream/Input";
import JetInputError from "@/Jetstream/InputError";
import JetLabel from "@/Jetstream/Label";
import {useForm} from "@inertiajs/inertia-vue3";
import BaseListbox from "@/Shared/BaseListbox.vue";
import {ref} from "vue";
import {Switch} from "@headlessui/vue";
import {usePrevalidate} from "@/Composables/usePrevalidate";
import Alert from "@/Components/Alert";
import ModalAddRequisito from "@/modules/Dialog/Components/ModalAddRequisito";

const props = defineProps(['requisitos', 'departamentos', 'errors']);

const form = useForm({
    nombre: null,
    objetivo: null,
    fundamento_jur: null,
    casos: null,
    modalidad_id: 1,
    plazo_respuesta: null,
    costo: 0,
    tipo_usuario_id: 1,
    departamento_id: null,
    activo: true,
    url_proceso: null,
    requisitos: [],
    tareas: []
});
const modalidad = [
    {
        id: 1,
        nombre: 'Presencial'
    },
    {
        id: 2,
        nombre: 'Semi-presencial'
    },
    {
        id: 3,
        nombre: 'Virtual'
    }
];
const tipoUsuarios = [
    {
        id: 1,
        nombre: 'Interno'
    },
    {
        id: 2,
        nombre: 'Externo'
    },
]
let selectIndexTab = ref(0);
const departamentosList = ref(props.departamentos);
let checked = ref(false);
let active = ref(false);
const task = ref(null);
const addRequisito = (requisito) => {
    // console.log(form.requisitos.some(elem => elem.id === requisito.id));
    if (form.requisitos.some(elem => elem.id === requisito.id))
        return;
    if (!form.requisitos.includes(requisito)) {
        form.requisitos.push(requisito)
    }
}
const findRequisito = (requisito) => form.requisitos.some(elem => elem.id === requisito.id);

const deleteRequisito = (index) => {
    form.requisitos.splice(index, 1);

}
const deleteTarea = (index) => form.tareas.splice(index, 1);
const addTarea = (t) => {
    form.tareas.push(t);
    task.value = null
}
const {validate} = usePrevalidate(form, {
    method: "post",
    url: route("admin.tramites/store"),
});
const saveTramiteInformation = () => {
    form.transform((data) => ({
        ...data,
    })).post(route("admin.tramites/store"), {
        errorBag: "saveRequisitoInformation",
        preserveScroll: true,
    });
}
</script>


