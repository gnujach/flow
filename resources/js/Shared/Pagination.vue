<template>
    <ul class="flex list-reset rounded w-auto font-sans justify-center">
        <li v-for="(link, key) in meta.links" :key="key">
            <Link v-if="link.url !== null" :key="key"
                class="mr-1 mb-1 px-4 py-3 text-sm border rounded hover:bg-white focus:border-indigo focus:text-indigo"
                :class="[
                    link.active
                        ? 'text-blue-600 bg-blue border-r border-blue'
                        : 'hover:text-gray-500 hover:bg-blue text-blue border-r border-grey-light',
                    'block px-3 py-2',
                ]" :href="link.url">{{ link.label }}</Link>
        </li>
    </ul>
</template>

<script>
// import { Link } from "@inertiajs/inertia-vue3";
import { Link } from '@inertiajs/vue3'

export default {
    props: {
        meta: Object,
    },
    components: {
        Link,
    },
};
</script>
