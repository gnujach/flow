<template>
    <Link :href="'/'">
    <img src="/assets/img/logosegnuevo.png" class=" fill-current text-gray-500" />
    </Link>
</template>

<script>
import { defineComponent } from "vue";
import { Link } from '@inertiajs/vue3'
import { router } from '@inertiajs/vue3'


export default defineComponent({
    components: {
        Link,
    },
});
</script>
