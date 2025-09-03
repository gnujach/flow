<template>
    <div class="flex items-center">
        <div class="flex w-full bg-white shadow rounded">
            <jet-dropdown align="bottom" width="48"
                class="px-4 md:px-6 rounded-l border-r hover:bg-gray-100 focus:border-white focus:shadow-outline focus:z-10"
                placement="bottom-start">
                <template #trigger>
                    <span class="inline-flex rounded-md items-center">
                        <span class="italic mt-2">Filtros</span>
                        <button type="button"
                            class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50 transition ease-in-out duration-150">
                            <svg class="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                    clip-rule="evenodd" />
                            </svg>
                        </button>
                    </span>
                </template>
                <template #content>
                    <slot name="dropdown" class="mt-2 px-4 py-6 w-screen shadow-xl bg-white rounded"
                        :style="{ maxWidth: `${maxWidth}px` }" />
                </template>
                <div class="flex items-baseline">
                    <span class="text-gray-700 hidden md:inline">Filtros</span>
                    <svg class="w-2 h-2 fill-gray-700 md:ml-2" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 961.243 599.998">
                        <path
                            d="M239.998 239.999L0 0h961.243L721.246 240c-131.999 132-240.28 240-240.624 239.999-.345-.001-108.625-108.001-240.624-240z" />
                    </svg>
                </div>
                <div slot="dropdown" class="mt-2 px-4 py-6 w-screen shadow-xl bg-white rounded"
                    :style="{ maxWidth: `${maxWidth}px` }">
                    <slot />
                </div>
            </jet-dropdown>
            <input class="relative w-full px-6 py-3 rounded-r focus:shadow-outline" autocomplete="off" type="text"
                name="search" placeholder="Buscar..." :value="value" @input="$emit('input', $event.target.value)" />
        </div>
        <button class="ml-3 text-sm text-gray-500 hover:text-gray-700 focus:text-indigo-500" type="button"
            @click="$emit('reset')">
            Limpiar
        </button>
    </div>
</template>

<script>
import JetDropdown from "@/Jetstream/Dropdown.vue";

export default {
    components: {
        JetDropdown,
    },
    props: {
        value: String,
        maxWidth: {
            type: Number,
            default: 300,
        },
    },
};
</script>
