<template>
    <div
        class="relative flex bg-no-repeat bg-cover bg-fixed items-top justify-center z-0 min-h-screen bg-[url('/assets/img/decalogo1.jpeg')] sm:items-center sm:pt-0">
        <div v-if="canLogin" class="fixed top-0 right-0 px-6 py-4 sm:block z-40">
            <jet-nav-link v-if="$page.props.user" href="/dashboard" class="text-sm text-orange-500 underline">
                Dashboard
            </jet-nav-link>

            <template v-else>
                <jet-nav-link :href="route('login')" class="z-40 text-sm text-orange-500 underline">
                    Login
                </jet-nav-link>
            </template>
        </div>

        <div class="max-w-6xl mx-auto sm:px-6 lg:px-8">
            <Link :href="route('login')" class="underline text-sm text-gray-600 hover:text-gray-900">
            <jet-button class="ml-4">
                Ingresar
            </jet-button>
            </Link>

        </div>
    </div>
</template>

<style scoped>
.bg-gray-100 {
    background-color: #f7fafc;
    background-color: rgba(247, 250, 252, var(--tw-bg-opacity));
}

.border-gray-200 {
    border-color: #edf2f7;
    border-color: rgba(237, 242, 247, var(--tw-border-opacity));
}

.text-gray-400 {
    color: #cbd5e0;
    color: rgba(203, 213, 224, var(--tw-text-opacity));
}

.text-gray-500 {
    color: #a0aec0;
    color: rgba(160, 174, 192, var(--tw-text-opacity));
}

.text-gray-600 {
    color: #718096;
    color: rgba(113, 128, 150, var(--tw-text-opacity));
}

.text-gray-700 {
    color: #4a5568;
    color: rgba(74, 85, 104, var(--tw-text-opacity));
}

.text-gray-900 {
    color: #1a202c;
    color: rgba(26, 32, 44, var(--tw-text-opacity));
}

@media (prefers-color-scheme: dark) {
    .dark\:bg-gray-800 {
        background-color: #2d3748;
        background-color: rgba(45, 55, 72, var(--tw-bg-opacity));
    }

    .dark\:bg-gray-900 {
        background-color: #1a202c;
        background-color: rgba(26, 32, 44, var(--tw-bg-opacity));
    }

    .dark\:border-gray-700 {
        border-color: #4a5568;
        border-color: rgba(74, 85, 104, var(--tw-border-opacity));
    }

    .dark\:text-white {
        color: #fff;
        color: rgba(255, 255, 255, var(--tw-text-opacity));
    }

    .dark\:text-gray-400 {
        color: #cbd5e0;
        color: rgba(203, 213, 224, var(--tw-text-opacity));
    }
}
</style>

<script>
import JetNavLink from "@/Jetstream/NavLink.vue";
import JetButton from "@/Jetstream/Button.vue";
import { Link, Head } from '@inertiajs/vue3'

export default {
    props: {
        canLogin: Boolean,
        canRegister: Boolean,
        laravelVersion: String,
        phpVersion: String,
    },
    components: {
        JetNavLink,
        JetButton,
        Head,
        Link
    },
};
</script>
