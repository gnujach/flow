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
                <button
                    type="button"
                    class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    id="user-menu-button"
                    aria-expanded="false"
                    data-dropdown-toggle="dropdown"
                >
                    <span class="sr-only">Open user menu</span>
                    <img
                        class="w-8 h-8 rounded-full"
                        src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                        alt="user photo"
                    />
                </button>
                <!-- Dropdown menu -->
                <div
                    class="hidden z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                    id="dropdown"
                >
                    <div class="py-3 px-4">
                        <span
                            class="block text-sm text-gray-900 dark:text-white"
                            >Bonnie Green</span
                        >
                        <span
                            class="block text-sm font-medium text-gray-500 truncate dark:text-gray-400"
                            >name@flowbite.com</span
                        >
                    </div>
                    <ul class="py-1" aria-labelledby="dropdown">
                        <li>
                            <a
                                href="#"
                                class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                >Dashboard</a
                            >
                        </li>
                        <li>
                            <a
                                href="#"
                                class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                >Settings</a
                            >
                        </li>
                        <li>
                            <a
                                href="#"
                                class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                >Earnings</a
                            >
                        </li>
                        <li>
                            <a
                                href="#"
                                class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                >Sign out</a
                            >
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import Icon from "../Shared/Icon.vue";
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
    },
    setup() {
        const store = useStore();
        return {
            toggleNavBar: () => store.commit("toggleNavBar"),
            statusSideBar: computed(() => store.getters["statusSideBar"]),
        };
    },
});
</script>

<style></style>
