import { createStore } from "vuex";
import todoStore from "./todo";
import solicitudesStore from "./solicitudes";
export default createStore({
    modules: {
        todoStore,
        solicitudesStore,
    },
});
