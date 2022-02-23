<template>
    <div class="p-6 sm:px-20 bg-white border-b border-gray-200">
        <div>
            <jet-application-logo class="block h-12 w-auto" />
        </div>
        <div class="mt-8 text-2xl">Lista de Tareas</div>

        <div class="mt-6 text-gray-500">
            Laravel Jetstream provides a beautiful, robust starting point for
            your next Laravel application. Laravel is designed to help you build
            your application using a development environment that is simple,
            powerful, and enjoyable. We believe you should love expressing your
            creativity through programming, so we have spent time carefully
            crafting the Laravel ecosystem to be a breath of fresh air. We hope
            you love it.
        </div>
        <div class="flex flex-row mx-auto">
            <button
                type="button"
                @click="clickme('tareasTodas')"
                class="border rounded-md border-white bg-blue-400 mx-2 px-2"
                :class="{
                    'border-x-2 border-gray-400 bg-blue-600':
                        currrentTab === 'tareasTodas',
                }"
            >
                Todas
            </button>
            <button
                type="button"
                @click="clickme('completadas')"
                class="border rounded-md border-gray-200 bg-green-400 mx-2 px-2"
                :class="{
                    'border-x-2 border-gray-400 bg-green-600':
                        currrentTab === 'completadas',
                }"
            >
                Completadas
            </button>
            <button
                type="button"
                @click="clickme('pendientes')"
                class="border rounded-md border-gray-200 bg-yellow-200 mx-2 px-2"
                :class="{
                    'border-x-2 border-gray-400 bg-yellow-600':
                        currrentTab === 'pendientes',
                }"
            >
                Pendientes
            </button>
        </div>
        <div>
            <ul>
                <li
                    v-for="tarea in getTodosByTab"
                    :key="tarea.id"
                    :class="{
                        'underline decoration-dotted': tarea.completed,
                    }"
                    @dblclick="toggleTodo(tarea.id)"
                >
                    id: {{ tarea.id }} Description: {{ tarea.text }} Completed:
                    {{ tarea.completed }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import useTodos from "@/Composables/useTodos";
import { defineComponent } from "vue";
import JetApplicationLogo from "@/Jetstream/ApplicationLogo.vue";

export default defineComponent({
    components: { JetApplicationLogo },
    setup() {
        const {
            tareasTodas,
            getTodosByTab,
            completadas,
            pendientes,
            currrentTab,
            clickme,
        } = useTodos();
        return {
            tareasTodas,
            getTodosByTab,
            completadas,
            pendientes,
            currrentTab,
            clickme,
        };
    },
});
</script>

<style></style>
