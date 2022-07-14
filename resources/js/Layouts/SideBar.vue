<template>
    <!-- Desktop -->
    <div class="hidden md:flex md:flex-1 items-start" v-if="statusSideBar">
        <TransitionRoot :show="statusSideBar">
            <Dialog
                class="bg-gray-200 md:block fixed z-20 inset-0 top-[3.8125rem] left-0 right-auto w-60 overflow-y-auto opacity-90"
                as="div"
                @close="toggleNavBar"
                :open="statusSideBar"
                :initialFocus="completeButtonRef"
            >
                <TransitionChild
                    enter="transition ease-in-out duration-200 transform"
                    enter-from="-translate-x-full"
                    enter-to="translate-x-0"
                    leave="transition ease-in-out duration-200 transform"
                    leave-from="translate-x-0"
                    leave-to="-translate-x-full"
                    as="div"
                >
                    <div class="py-4 px-6 flex items-center">
                        <button ref="completeButtonRef" class="py-4 px-6 flex">
                            <home-icon
                                class="h-6 w-6 text-gray-500 mx-2 hover:text-blue-800 cursor-pointer"
                            />
                            <p
                                class="text-xs md:text-lg text-gray-400 capitalize tracking-widest hover:text-blue-800 cursor-pointer"
                            >
                                Inicio
                            </p>
                        </button>
                    </div>
                    <div
                        v-if="
                            $page.props.auth.permissions.includes(
                                'manage-users'
                            )
                        "
                    >
                        <div
                            v-for="(item, index) in mainNavigationAdmin"
                            :key="index"
                            class="py-4 px-6 flex"
                        >
                            <component
                                :is="item.icon"
                                class="h-6 w-6 text-gray-500 mx-2"
                            />
                            <Link :href="item.url" @click="toggleNavBar"
                                >{{ item.label }}
                            </Link>
                        </div>
                    </div>
                    <div
                        v-if="
                            $page.props.auth.roles[0] === 'PersonalVentanilla'
                        "
                    ></div>
                    <!-- <DialogOverlay /> -->
                </TransitionChild>
                <TransitionChild
                    enter="transition-opacity ease-linear duration-200"
                    enter-from="opacity-0"
                    enter-to="opacity-100"
                    leave="transition-opacity ease-linear duration-200"
                    leave-from="opacity-100"
                    leave-to="opacity-0"
                    as="div"
                >
                    <DialogOverlay></DialogOverlay>
                </TransitionChild>
            </Dialog>
        </TransitionRoot>
    </div>
</template>

<script>
import { Link } from "@inertiajs/inertia-vue3";
import {
    BadgeCheckIcon,
    HomeIcon,
    HeartIcon,
    ChatIcon,
    ClipboardCheckIcon,
} from "@heroicons/vue/outline";
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogOverlay,
} from "@headlessui/vue";
import ApplicationLogo from "@/Jetstream/ApplicationLogo.vue";
import { useStore } from "vuex";
import { ref, computed, defineComponent } from "vue";
export default defineComponent({
    name: "SideBar",
    components: {
        BadgeCheckIcon,
        ApplicationLogo,
        HomeIcon,
        HeartIcon,
        ChatIcon,
        TransitionRoot,
        TransitionChild,
        Dialog,
        DialogOverlay,
        Link,
        ClipboardCheckIcon,
    },
    setup() {
        let completeButtonRef = ref(null);
        let completeButtonRef1 = ref(null);
        const store = useStore();
        return {
            statusSideBar: computed(
                () => store.getters["todoStore/statusSideBar"]
            ),
            toggleNavBar: (id) => store.commit("todoStore/toggleNavBar"),
            completeButtonRef,
            completeButtonRef1,
            toogle: false,
            mainNavigationAdmin: [
                {
                    url: "/admin/medios",
                    label: "Canales de atención",
                    icon: HomeIcon,
                },

                {
                    url: "/admin/usuarios",
                    label: "Administración de Usuarios",
                    icon: HeartIcon,
                },
                {
                    url: "/admin/puestos",
                    label: "Administración de Puestos",
                    icon: HeartIcon,
                },
                {
                    url: "/admin/departamentos",
                    label: "Administración de Departamentos",
                    icon: HeartIcon,
                },
                {
                    url: "/admin/centros",
                    label: "Administración de Centros",
                    icon: HeartIcon,
                },
                {
                    url: "/admin/requisitos/",
                    label: "Administración de Requisitos",
                    icon: HeartIcon,
                },
                {
                    url: "/solicitudes",
                    label: "Solicitudes",
                    icon: ClipboardCheckIcon,
                },
            ],
            mainNavigationPersonalVentanilla: [
                {
                    url: "/solicitudes",
                    label: "Solicitudes",
                    icon: ClipboardCheckIcon,
                },
            ],
        };
    },
});
</script>

<style></style>
