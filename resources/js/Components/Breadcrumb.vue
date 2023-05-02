<template>
    <div class="flex flex-row ml-8 items-center">
        <spam v-for="(item, index) in items" :key="index">
            <jet-nav-link v-if="item.url" :href="item.url">
                <span class="text-base">{{ item.label }}</span>
                <ChevronRightIcon class="w-4 h-4 text-gray-600" />
            </jet-nav-link>
            <span v-if="!item.url" class="text-base">{{ item.label }}</span>
        </spam>
    </div>
</template>
<script setup>
import JetNavLink from "@/Jetstream/NavLink";
import { ChevronRightIcon } from "@heroicons/vue/outline";

const props = defineProps({
    items: {
        type: Array,
        require: true,
    },
});
</script>
