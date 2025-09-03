<template>
    <nav class="max-w-full border bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800 sticky top-0">
        <div class="flex flex-wrap justify-between items-center">
            <div class="flex justify-start items-center w-1/3">
                <svg class="mr-3 h-10" viewBox="0 0 52 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M1.87695 53H28.7791C41.5357 53 51.877 42.7025 51.877 30H24.9748C12.2182 30 1.87695 40.2975 1.87695 53Z"
                        fill="#76A9FA"></path>
                    <path
                        d="M0.000409561 32.1646L0.000409561 66.4111C12.8618 66.4111 23.2881 55.9849 23.2881 43.1235L23.2881 8.87689C10.9966 8.98066 1.39567 19.5573 0.000409561 32.1646Z"
                        fill="#A4CAFE"></path>
                    <path
                        d="M50.877 5H23.9748C11.2182 5 0.876953 15.2975 0.876953 28H27.7791C40.5357 28 50.877 17.7025 50.877 5Z"
                        fill="#1C64F2"></path>
                </svg>
                <span class="self-center text-lg font-semibold whitespace-nowrap dark:text-white hidden md:block">Flujo
                    de Servicio</span>
            </div>
            <div class="flex items-center justify-end w-2/3">
                <LogoSeg />
            </div>
        </div>
    </nav>
    <div>

        <Head :title="title" />
        <JetBanner />

        <div class="min-h-screen">
            <!-- Page Heading -->
            <header class="bg-white" v-if="$slots.header">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <slot name="header"></slot>
                </div>
            </header>
            <div>
                <!-- Page Content -->
                <main>
                    <slot></slot>
                </main>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from "vue";
import JetApplicationMark from "@/Jetstream/ApplicationMark.vue";
import JetBanner from "@/Jetstream/Banner.vue";
import JetDropdown from "@/Jetstream/Dropdown.vue";
import JetDropdownLink from "@/Jetstream/DropdownLink.vue";
import JetNavLink from "@/Jetstream/NavLink.vue";
import JetResponsiveNavLink from "@/Jetstream/ResponsiveNavLink.vue";
import { Link, Head } from '@inertiajs/vue3'
import { router } from '@inertiajs/vue3'
import LogoSeg from "@/Shared/LogoSeg.vue";

export default defineComponent({
    props: {
        title: String,
    },

    components: {
        Head,
        JetApplicationMark,
        JetBanner,
        JetDropdown,
        JetDropdownLink,
        JetNavLink,
        JetResponsiveNavLink,
        Link,
        LogoSeg,
    },

    data() {
        return {
            showingNavigationDropdown: false,
        };
    },

    methods: {
        switchToTeam(team) {
            this.$inertia.put(
                route("current-team.update"),
                {
                    team_id: team.id,
                },
                {
                    preserveState: false,
                }
            );
        },

        logout() {
            Inertia.post("/logout");
        },
    },
});
</script>
