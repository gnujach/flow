export const statusSideBar = (state, getters, rootState) => {
    return state.openSideBar;
};

export const tareasTodas = (state, getters, rootState) => {
    return state.tareas;
};
export const tareasCompletadas = (state, getters, rootState) => {
    return state.tareas.filter((tarea) => tarea.completed);
};
export const tareasNoCompletadas = (state, getters, rootState) => {
    return state.tareas.filter((tarea) => !tarea.completed);
};
export const getTodosbyTab = (_, getters) => (tab) => {
    switch (tab) {
        case "tareasTodas":
            return getters.tareasTodas;
        case "pendientes":
            return getters.tareasNoCompletadas;
        case "completadas":
            return getters.tareasCompletadas;
    }
};
