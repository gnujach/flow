export const toggleTodo = (state, id) => {
    const todoIdx = state.tareas.findIndex((tarea) => tarea.id === id);
    state.tareas[todoIdx].completed = !state.tareas[todoIdx].completed;
};
export const toggleNavBar = (state) => {
    state.openSideBar = !state.openSideBar;
};
