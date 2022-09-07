import {createStore} from "vuex";
import todoStore from "./todo";
import solicitudesStore from "./solicitudes";
import requisitosStore from "@/store/requisitos";
import infoTramiteStore from "@/store/tramites";

export default createStore({
    modules: {
        todoStore,
        solicitudesStore,
        requisitosStore,
        infoTramiteStore,
    },
});
