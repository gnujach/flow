<template>
    <div>
        <Head :title="title" />
        <JetBanner />
        <div class="min-h-screen">
            <navbar></navbar>
            <!-- Page Heading -->
            <header class="bg-white" v-if="$slots.header">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <slot name="header"></slot>
                </div>
            </header>
            <div>
                <!-- Page Content -->
                <side-bar-two />
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
import { Head, Link } from "@inertiajs/inertia-vue3";
import Navbar from "./Nav.vue";
import SideBarTwo from "./SideBarTwo.vue";
import { Inertia } from "@inertiajs/inertia";

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
        Navbar,
        SideBarTwo,
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
