import { startCase } from "lodash";
import { createStore } from "vuex";

export default createStore({
    state: {
        count: 1,
        openSideBar: false,
        tareas: [
            { id: "1", text: "Tarea 1", completed: false },
            { id: "2", text: "Tarea 2", completed: true },
            { id: "3", text: "Tarea 3", completed: false },
            { id: "4", text: "Tarea 4", completed: true },
            { id: "5", text: "Tarea 5", completed: false },
            { id: "6", text: "Tarea 6", completed: true },
            { id: "7", text: "Tarea 7", completed: false },
        ],
    },
    mutations: {
        toggleTodo(state, id) {
            const todoIdx = state.tareas.findIndex((tarea) => tarea.id === id);
            state.tareas[todoIdx].completed = !state.tareas[todoIdx].completed;
        },
        toggleNavBar(state) {
            state.openSideBar = !state.openSideBar;
        },
    },
    actions: {},
    getters: {
        statusSideBar(state, getters, rootState) {
            return state.openSideBar;
        },
        tareasTodas(state, getters, rootState) {
            return state.tareas;
        },
        tareasCompletadas(state, getters, rootState) {
            return state.tareas.filter((tarea) => tarea.completed);
        },
        tareasNoCompletadas: (state, getters, rootState) => {
            return state.tareas.filter((tarea) => !tarea.completed);
        },
        getTodosbyTab: (_, getters) => (tab) => {
            switch (tab) {
                case "tareasTodas":
                    return getters.tareasTodas;
                case "pendientes":
                    return getters.tareasNoCompletadas;
                case "completadas":
                    return getters.tareasCompletadas;
            }
        },
    },
    modules: {},
});
