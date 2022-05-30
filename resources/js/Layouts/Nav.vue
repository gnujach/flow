<template>
    <nav
        class="max-w-full border bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800 sticky top-0"
    >
        <div class="flex flex-wrap justify-between items-center">
            <div class="flex justify-start items-center w-1/3">
                <button
                    type="button"
                    @click="toggleNavBar"
                    class="flex items-center w-10 h-10 hover:ring-2 focus:outline-none focus:ring-2 focus:ring-gray-600 rounded-full flex-shrink-0 mx-2"
                    value="Open sidebar"
                >
                    <MenuAlt1Icon
                        name="open_menu"
                        class="h-6 w-6 text-black mx-2 cursor-pointer"
                        v-if="!statusSideBar"
                    />
                    <x-icon
                        class="h-6 w-6 text-black mx-2 cursor-pointer"
                        v-else
                    />
                </button>
                <a href="#" class="flex">
                    <svg
                        class="mr-3 h-10"
                        viewBox="0 0 52 72"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1.87695 53H28.7791C41.5357 53 51.877 42.7025 51.877 30H24.9748C12.2182 30 1.87695 40.2975 1.87695 53Z"
                            fill="#76A9FA"
                        ></path>
                        <path
                            d="M0.000409561 32.1646L0.000409561 66.4111C12.8618 66.4111 23.2881 55.9849 23.2881 43.1235L23.2881 8.87689C10.9966 8.98066 1.39567 19.5573 0.000409561 32.1646Z"
                            fill="#A4CAFE"
                        ></path>
                        <path
                            d="M50.877 5H23.9748C11.2182 5 0.876953 15.2975 0.876953 28H27.7791C40.5357 28 50.877 17.7025 50.877 5Z"
                            fill="#1C64F2"
                        ></path>
                    </svg>
                    <span
                        class="self-center text-lg font-semibold whitespace-nowrap dark:text-white"
                        >Flujo de Trabajo</span
                    >
                </a>
            </div>
            <div class="flex items-center">
                <SearchCircleIcon
                    class="md:hidden h-6 w-6 text-gray-500 mx-2"
                />
                <ClipboardIcon class="h-6 w-6 text-gray-500 mx-2" />
                <BellIcon class="h-6 w-6 text-gray-500 mx-2" />
                <MoonIcon class="h-6 w-6 text-gray-500 mx-2" />
                <!-- Dropdown menu -->
                <div class="ml-3 relative">
                    <jet-dropdown align="right" width="48">
                        <template #trigger>
                            <button
                                v-if="
                                    $page.props.jetstream.managesProfilePhotos
                                "
                                class="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out"
                            >
                                <img
                                    class="h-8 w-8 rounded-full object-cover"
                                    :src="$page.props.user.profile_photo_url"
                                    :alt="$page.props.user.name"
                                />
                            </button>

                            <span v-else class="inline-flex rounded-md">
                                <button
                                    type="button"
                                    class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                >
                                    {{ $page.props.user.name }}

                                    <svg
                                        class="ml-2 -mr-0.5 h-4 w-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </button>
                            </span>
                        </template>

                        <template #content>
                            <!-- Account Management -->
                            <div class="block px-4 py-2 text-xs text-gray-400">
                                Manage Account
                            </div>

                            <jet-dropdown-link :href="route('profile.show')">
                                Configuraciones
                            </jet-dropdown-link>

                            <jet-dropdown-link
                                :href="route('api-tokens.index')"
                                v-if="$page.props.jetstream.hasApiFeatures"
                            >
                                API Tokens
                            </jet-dropdown-link>

                            <div class="border-t border-gray-100"></div>

                            <!-- Authentication -->
                            <form @submit.prevent="logout">
                                <jet-dropdown-link as="button">
                                    Logout
                                </jet-dropdown-link>
                            </form>
                        </template>
                    </jet-dropdown>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import JetNavLink from "@/Jetstream/NavLink";
import JetResponsiveNavLink from "@/Jetstream/ResponsiveNavLink";
import JetDropdown from "@/Jetstream/Dropdown";
import JetDropdownLink from "@/Jetstream/DropdownLink";
import Icon from "../Shared/Icon.vue";
import { Inertia } from "@inertiajs/inertia";
import {
    BellIcon,
    ClipboardIcon,
    MoonIcon,
    SearchCircleIcon,
    XIcon,
    MenuAlt1Icon,
} from "@heroicons/vue/solid";
export default defineComponent({
    components: {
        BellIcon,
        ClipboardIcon,
        MoonIcon,
        SearchCircleIcon,
        Icon,
        XIcon,
        MenuAlt1Icon,
        JetNavLink,
        JetResponsiveNavLink,
        JetDropdown,
        JetDropdownLink,
    },
    setup() {
        const store = useStore();
        return {
            toggleNavBar: () => store.commit("todoStore/toggleNavBar"),
            statusSideBar: computed(
                () => store.getters["todoStore/statusSideBar"]
            ),
            logout: () => {
                Inertia.post("/logout");
            },
        };
    },
});
</script>

<style></style>
