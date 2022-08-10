import {createStore} from "vuex";
import todoStore from "./todo";
import solicitudesStore from "./solicitudes";
import requisitosStore from "@/store/requisitos";

export default createStore({
    modules: {
        todoStore,
        solicitudesStore,
        requisitosStore,
    },
});
