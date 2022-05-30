const { ref, computed } = require("vue");
const { useStore, mapGetters } = require("vuex");

const useTodos = () => {
    const store = useStore();
    const currrentTab = ref("tareasTodas");
    const clickme = (val) => {
        currrentTab.value = val;
    };

    return {
        currrentTab,
        ...mapGetters("todoStore"),
        /**

        tareasTodas: computed(() => store.getters["todoStore/tareasTodas"]),
        tareasCompletadas: computed(
            () => store.getters["todoStore/tareasCompletadas"]
        ),
        tareasNoCompletadas: computed(
            () => store.getters["todoStore/tareasNoCompletadas"]
        ),
        getTodosByTab: computed(() =>
            store.getters["todoStore/getTodosbyTab"](currrentTab.value)
        ),
        */
        //methods
        toggleTodo: (id) => store.commit("todoStore/toggleTodo", id),
        clickme,
    };
};

export default useTodos;
