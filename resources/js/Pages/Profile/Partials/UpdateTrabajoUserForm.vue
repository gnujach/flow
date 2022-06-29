<template>
    <jet-form-section @submitted="updateTrabajoInformation">
        <template #title> Información de Servidor Público </template>

        <template #description>
            Actualizar información de servidor público
        </template>

        <template #form>
            <!-- Departamento -->
            <div
                class="col-span-6 sm:col-span-4"
                v-if="departamentos.length > 0"
            >
                <jet-label for="departamento" value="Departamento" />
                <Listbox v-model="departamentoActual">
                    <div class="relative mt-1">
                        <ListboxButton
                            class="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
                        >
                            <span class="block truncate">{{
                                departamentoActual.nombre
                            }}</span>
                            <span
                                class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
                            >
                                <SelectorIcon
                                    class="h-5 w-5 text-gray-400"
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
                                class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-10"
                            >
                                <ListboxOption
                                    v-slot="{ active, selected }"
                                    v-for="departamento in departamentos"
                                    :key="departamento.id"
                                    :value="departamento"
                                    as="template"
                                >
                                    <li
                                        :class="[
                                            active
                                                ? 'bg-amber-100 text-amber-900'
                                                : 'text-gray-900',
                                            'relative cursor-default select-none py-2 pl-10 pr-4',
                                        ]"
                                    >
                                        <span
                                            :class="[
                                                selected
                                                    ? 'font-medium'
                                                    : 'font-normal',
                                                'block truncate',
                                            ]"
                                            >{{ departamento.nombre }}</span
                                        >
                                        <span
                                            v-if="selected"
                                            class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"
                                        >
                                            <CheckIcon
                                                class="h-5 w-5"
                                                aria-hidden="true"
                                            />
                                        </span>
                                    </li>
                                </ListboxOption>
                            </ListboxOptions>
                        </transition>
                    </div>
                </Listbox>
                <jet-input-error
                    :message="formTrabajo.errors.departamento"
                    class="mt-2"
                />
            </div>
            <!-- Puesto -->
            <div
                class="col-span-6 sm:col-span-4"
                v-if="puestos && puestos.length > 0"
            >
                <jet-label for="puesto" value="Puesto" />
                <Listbox v-model="puestoActual">
                    <div class="relative mt-1">
                        <ListboxButton
                            class="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
                        >
                            <span class="block truncate">{{
                                puestoActual.nombre
                            }}</span>
                            <span
                                class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
                            >
                                <SelectorIcon
                                    class="h-5 w-5 text-gray-400"
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
                                class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-20"
                            >
                                <ListboxOption
                                    v-slot="{ active, selected }"
                                    v-for="puesto in puestos"
                                    :key="puesto.id"
                                    :value="puesto"
                                    as="template"
                                >
                                    <li
                                        :class="[
                                            active
                                                ? 'bg-amber-100 text-amber-900'
                                                : 'text-gray-900',
                                            'relative cursor-default select-none py-2 pl-10 pr-4',
                                        ]"
                                    >
                                        <span
                                            :class="[
                                                selected
                                                    ? 'font-medium'
                                                    : 'font-normal',
                                                'block truncate',
                                            ]"
                                            >{{ puesto.nombre }}</span
                                        >
                                        <span
                                            v-if="selected"
                                            class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"
                                        >
                                            <CheckIcon
                                                class="h-5 w-5"
                                                aria-hidden="true"
                                            />
                                        </span>
                                    </li>
                                </ListboxOption>
                            </ListboxOptions>
                        </transition>
                    </div>
                </Listbox>
                <jet-input-error
                    :message="formTrabajo.errors.puesto"
                    class="mt-2"
                />
            </div>
            <!-- BaseListbox -->
            <div
                class="col-span-6 sm:col-span-4"
                v-if="puestos && puestos.length > 0"
            >
                <jet-label for="puesto" value="Puesto" />
                <BaseListbox
                    :options="puestos"
                    placeholder="Seleccione Puesto de Trabajo"
                    v-model="formTrabajo.puesto_id"
                />

                <jet-input-error
                    :message="formTrabajo.errors.puesto"
                    class="mt-2"
                />
            </div>
            <div
                class="col-span-6 sm:col-span-4"
                v-if="puestos && puestos.length > 0"
            >
                <jet-label for="puesto" value="Departamentos" />
                <BaseListbox
                    :options="departamentos"
                    placeholder="Seleccione Departamentos de Trabajo"
                    v-model="formTrabajo.departamentos"
                    multiple
                />
            </div>
        </template>

        <template #actions>
            <jet-action-message
                :on="formTrabajo.recentlySuccessful"
                class="mr-3"
            >
                Guardar.
            </jet-action-message>

            <jet-button
                :class="{ 'opacity-25': formTrabajo.processing }"
                :disabled="formTrabajo.processing"
            >
                Guardar
            </jet-button>
        </template>
    </jet-form-section>
</template>

<script>
import JetButton from "@/Jetstream/Button.vue";
import JetFormSection from "@/Jetstream/FormSection.vue";
import JetInputError from "@/Jetstream/InputError.vue";
import JetLabel from "@/Jetstream/Label.vue";
import JetActionMessage from "@/Jetstream/ActionMessage.vue";
import JetSecondaryButton from "@/Jetstream/SecondaryButton.vue";
import BaseListbox from "@/Shared/BaseListbox.vue";
import { useForm } from "@inertiajs/inertia-vue3";
import { ref } from "vue";
import {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
} from "@headlessui/vue";
import { CheckIcon, SelectorIcon } from "@heroicons/vue/solid";

export default {
    props: ["departamentos", "puestos", "user"],
    components: {
        JetActionMessage,
        JetButton,
        JetFormSection,
        JetInputError,
        JetLabel,
        JetSecondaryButton,
        Listbox,
        ListboxButton,
        ListboxOption,
        ListboxOptions,
        CheckIcon,
        SelectorIcon,
        BaseListbox,
    },

    setup(props) {
        const departamentoActual = ref(
            props.departamentos.find(
                (departamento) =>
                    departamento.id ===
                    props.user.data.attributes.departamento_id
            )
        );
        const puestoActual = ref(
            // {
            //     id: 1,
            //     nombre: "juan",
            // }
            // props.puestos[1]
            props.puestos.find(
                (puesto) => puesto.id === props.user.data.attributes.puesto_id
            )
        );
        const formTrabajo = useForm({
            departamento_id: departamentoActual.value.id,
            puesto_id: 1,
            departamentos: ref([]),
        });
        function updateTrabajoInformation() {
            formTrabajo
                .transform((data) => ({
                    ...data,
                    departamento_id: departamentoActual.value.id,
                    puesto_id: puestoActual.value.id,
                }))
                .put(
                    route("admin.usuarios/updatedatostrabajo", {
                        user: props.user.data.uuid,
                    })
                );
        }
        return {
            updateTrabajoInformation,
            formTrabajo,
            departamentoActual,
            puestoActual,
        };
    },
};
</script>
