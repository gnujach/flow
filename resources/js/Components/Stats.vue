<template>
    <div class="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 mb-2">
        <div class="grid grid-cols-2 row-gap-8 md:grid-cols-4">
            <div class="text-center md:border-r">
                <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl">
                    {{ total }}
                </h6>
                <div class="flex flex-row justify-center items-center">
                    <p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
                        Total
                    </p>
                    <jet-nav-link v-if="$page.props.auth.roles.includes('Admin')"
                        :href="route('admin.solicitudes/listadmin', {})">
                        <Bars4Icon class="block w-6 h-6 fill-gray-400" />
                    </jet-nav-link>
                </div>
            </div>
            <div class="text-center md:border-r">
                <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl">
                    {{ concluidas }}
                </h6>
                <p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
                    Concluídas
                </p>
            </div>
            <div class="text-center md:border-r">
                <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl">
                    {{ today }}
                </h6>
                <p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
                    Hoy
                </p>
            </div>
            <div class="text-center">
                <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl">
                    {{ week }}
                </h6>
                <p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
                    Esta semana
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import JetNavLink from "@/Jetstream/NavLink.vue";
import { Bars4Icon } from "@heroicons/vue/24/outline";
const props = defineProps({
    title: {
        type: String,
        default: "Estadísticas",
    },
    total: {
        type: Number,
        default: "14.4k",
    },
    concluidas: {
        type: Number,
        default: "14.4k",
    },
    week: {
        type: Number,
        default: "14.4k",
    },
    today: {
        type: Number,
        default: "14.4k",
    },
});
</script>
