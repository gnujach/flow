const { ref, computed } = require("vue");
const { useStore } = require("vuex");

const useTodos = () => {
    const store = useStore();
    const currrentTab = ref("tareasTodas");
    const clickme = (val) => {
        currrentTab.value = val;
    };

    return {
        currrentTab,
        tareasTodas: computed(() => store.getters["tareasTodas"]),
        tareasCompletadas: computed(() => store.getters["tareasCompletadas"]),
        tareasNoCompletadas: computed(
            () => store.getters["tareasNoCompletadas"]
        ),
        getTodosByTab: computed(() =>
            store.getters["getTodosbyTab"](currrentTab.value)
        ),
        //methods
        toggleTodo: (id) => store.commit("toggleTodo", id),
        clickme,
    };
};

export default useTodos;
