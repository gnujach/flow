<template>
    <div>
        <div class="p-6 sm:px-20 bg-white border-b border-gray-200">
            <div>
                <jet-application-logo class="block h-12 w-auto"/>
            </div>

            <div class="mt-8 text-2xl">
                Bienvenido
            </div>

            <div class="mt-6 text-gray-500">
                Sistema Integral de Gestión de Solicitudes de Atención
            </div>
        </div>

        <div class="p-6 sm:px-20 bg-white border-b border-gray-200">
            <div class="flex flex-row">
                <div class="w-44 h-44">
                    <jet-nav-link
                        :href="route('solicitudes') "
                    >
                        <button
                            class="border-green-700 border bg-white rounded mr-4 w-32 mb:w-42 p-1 hover:bg-aqua transition duration-500"
                        >
                            <div class="flex flex-row">
                                <icon
                                    name="plus"
                                    class="block w-6 h-6 fill-gray-400"
                                />
                                <p class="font-bold">
                                    Nueva Solicitud
                                </p>
                            </div>
                        </button>
                    </jet-nav-link>
                </div>
                <div class="w-44 h-44">
                    <jet-nav-link
                        :href="route('solicitudes.list') "
                    >
                        <button
                            class="border-green-700 border bg-white rounded mr-4 w-32 mb:w-42 p-1 hover:bg-aqua transition duration-500"
                        >
                            <div class="flex flex-row">
                                <icon
                                    name="plus"
                                    class="block w-6 h-6 fill-gray-400"
                                />
                                <p class="font-bold">
                                    Ver Solicitudes
                                </p>
                            </div>
                        </button>
                    </jet-nav-link>
                </div>


            </div>

        </div>
    </div>
</template>

<script>
import {defineComponent} from "vue";
import JetApplicationLogo from "@/Jetstream/ApplicationLogo.vue";
import {computed, ref} from "vue";
import {useStore} from "vuex";
import Icon from "@/Shared/Icon";
import JetNavLink from "@/Jetstream/NavLink";
import Button from "@/Jetstream/Button.vue";
import {plus,} from "@heroicons/vue/outline";

export default defineComponent({
    components: {
        JetApplicationLogo,
        Button,
        Icon,
        JetNavLink
    },
    setup() {
        const currrentTab = ref("tareasTodas");
        const clickme = (val) => {
            currrentTab.value = val;
        };
        const store = useStore();
        return {
            clickme,
            currrentTab,
            tareasTodas: computed(() => store.getters["todoStore/tareasTodas"]),
            tareasCompletadas: computed(
                () => store.getters["tareasCompletadas"]
            ),
            tareasNoCompletadas: computed(
                () => store.getters["tareasNoCompletadas"]
            ),
            getTodosByTab: computed(() =>
                store.getters["todoStore/getTodosbyTab"](currrentTab.value)
            ),
            toggleTodo: (id) => store.commit("todoStore/toggleTodo", id),
        };
    },
});
</script>
