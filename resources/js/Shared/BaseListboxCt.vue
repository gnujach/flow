<script setup>
import {computed, ref} from "vue";
import {
    Listbox,
    ListboxButton,
    ListboxOption,
    ListboxOptions,
} from "@headlessui/vue";
import { CheckCircleIcon, ChevronUpDownIcon } from "@heroicons/vue/24/solid";

const props = defineProps({
    options: Array,
    modelValue: [String, Number, Array],
    placeholder: {
        type: String,
        default: "Select option",
    },
    multiple: Boolean,
    error: String,
});

const emit = defineEmits(["update:modelValue"]);

const label = computed(() => {
    return props.options
        .filter((option) => {
            if (Array.isArray(props.modelValue)) {
                return props.modelValue.includes(option.full_name);
            }

            return props.modelValue === option.full_name;
        })
        .map((option) => option.full_name)
        .join(", ");
});
</script>
<template>
    <Listbox
        :model-value="props.modelValue"
        :multiple="props.multiple"
        @update:modelValue="(full_name) => emit('update:modelValue', full_name)"
    >
        <div class="relative mt-1">
            <ListboxButton
                class="relative py-2 pr-10 pl-3 w-full text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
            >
                <span v-if="label" class="block truncate">{{ label }}</span>
                <span v-else class="text-gray-500">{{
                        props.placeholder
                    }}</span>
                <span
                    class="flex absolute inset-y-0 right-0 items-center pr-2 pointer-events-none"
                >
                    <SelectorIcon
                        aria-hidden="true"
                        class="w-5 h-5 text-gray-400"
                    />
                </span>
            </ListboxButton>

            <transition
                leave-active-class="transition duration-100 ease-in"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
            >
                <ListboxOptions
                    class="overflow-auto absolute z-10 py-1 mt-1 w-full max-h-60 text-base bg-white rounded-md ring-1 ring-black ring-opacity-5 shadow-lg focus:outline-none sm:text-sm"
                >
                    <ListboxOption
                        v-for="option in props.options"
                        :key="option.full_name"
                        v-slot="{ active, selected }"
                        :value="option.full_name"
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
                                    selected ? 'font-medium' : 'font-normal',
                                    'block truncate',
                                ]"
                            >{{ option.full_name }}</span
                            >
                            <span
                                v-if="selected"
                                class="flex absolute inset-y-0 left-0 items-center pl-3 text-amber-600"
                            >
                                <CheckIcon aria-hidden="true" class="w-5 h-5"/>
                            </span>
                        </li>
                    </ListboxOption>
                </ListboxOptions>
            </transition>
            <div class="text-xs text-red-400 mt-1" v-if="props.error">
                {{ props.error }}
            </div>
        </div>
    </Listbox>
</template>
