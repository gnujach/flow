<template>
    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div class="grid grid-cols-2 row-gap-8 md:grid-cols-4">
            <div class="text-center md:border-r">
                <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl">{{ total }}</h6>
                <p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
                    Total
                </p>
            </div>
            <div class="text-center md:border-r">
                <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl">{{ concluidas }}</h6>
                <p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
                    Concluidas
                </p>
            </div>
            <div class="text-center md:border-r">
                <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl">{{ today }}</h6>
                <p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
                    Hoy
                </p>
            </div>
            <div class="text-center">
                <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl">{{ week }}</h6>
                <p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
                    Esta semana
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        default: 'Estadísticas'
    },
    total: {
        type: String,
        default: '14.4k'
    },
    concluidas: {
        type: String,
        default: '14.4k'
    },
    week: {
        type: String,
        default: '14.4k'
    },
    today: {
        type: String,
        default: '14.4k'
    },


})
</script>
