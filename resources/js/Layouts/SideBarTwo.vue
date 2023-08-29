<template>
    <div class="hidden md:flex md:flex-1 items-start" v-if="statusSideBar">
        <TransitionRoot :show="statusSideBar">
            <Dialog
                class="bg-gray-200 md:block fixed z-20 inset-0 top-[3.225rem] left-0 right-auto w-60 overflow-y-auto opacity-90 border-r border-gray-300"
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
                    <div v-if="$page.props.auth.roles.includes('Admin')">
                        <nav class="mt-2 px-2">
                            <NavItem
                                :item="item"
                                v-for="item in navItems"
                                :key="item.label"
                            />
                        </nav>
                    </div>
                    <div
                        v-else-if="
                            $page.props.auth.roles.includes('capturista')
                        "
                    >
                        <nav class="mt-2 px-2">
                            <NavItem
                                :item="item"
                                v-for="item in navItems2"
                                :key="item.label"
                            />
                        </nav>
                    </div>
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
<script setup>
import NavItem from "../components/NavItem.vue";
import {
    ClipboardCheckIcon,
    HeartIcon,
    HomeIcon,
    NewspaperIcon,
    PhotographIcon,
} from "@heroicons/vue/outline";
import { useStore } from "vuex";
import { computed, ref } from "vue";
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogOverlay,
} from "@headlessui/vue";

const store = useStore();
const statusSideBar = computed(() => store.getters["todoStore/statusSideBar"]);
const toggleNavBar = () => store.commit("todoStore/toggleNavBar");
let completeButtonRef = ref(null);
const navItems = [
    {
        href: "/dashboard",
        active: false,
        label: "Home",
        children: [],
        icon: HomeIcon,
    },
    {
        href: "#",
        active: false,
        label: "Administración",
        children: [
            {
                href: "/admin/medios",
                active: false,
                label: "Canales de atención",
                children: [],
                icon: HomeIcon,
            },
            {
                href: "/admin/usuarios",
                active: false,
                label: "Administración de Usuarios",
                children: [],
                icon: HeartIcon,
            },
            {
                href: "/admin/puestos",
                active: false,
                label: "Administración de Puestos",
                children: [],
                icon: HeartIcon,
            },
            {
                href: "/admin/departamentos",
                active: false,
                label: "Administración de Departamentos",
                children: [],
                icon: HeartIcon,
            },
            {
                href: "/admin/centros",
                active: false,
                label: "Administración de Centros",
                children: [],
                icon: HeartIcon,
            },
            {
                href: "/admin/clientes",
                active: false,
                label: "Administración de Clientes",
                children: [],
                icon: HeartIcon,
            },

            {
                href: "/admin/requisitos/",
                active: false,
                label: "Administración de Requisitos",
                children: [],
                icon: HeartIcon,
            },
            {
                href: "/admin/tramites/",
                active: false,
                label: "Administración de Trámites",
                children: [],
                icon: ClipboardCheckIcon,
            },
        ],
    },
    {
        href: "#",
        active: false,
        label: "Solicitudes",
        children: [
            {
                href: "/solicitudes/list",
                active: false,
                label: "Nueva Solicitudes",
                children: [],
                icon: ClipboardCheckIcon,
            },
        ],
    },
];
const navItems2 = [
    {
        href: "#",
        active: false,
        label: "Inicio",
        children: [
            {
                href: "/solicitudes",
                active: false,
                label: "Nueva Solicitud",
                children: [],
                icon: ClipboardCheckIcon,
            },
            {
                href: "/solicitudes/list",
                active: false,
                label: "Mostrar solicitudes",
                children: [],
                icon: ClipboardCheckIcon,
            },
        ],
        icon: HomeIcon,
    },
];
</script>
