import state from "./state";
import * as mutations from "./mutations";
import * as getters from "./getters";

const todoStore = {
    namespaced: true,
    state,
    mutations,
    getters,
};

export default todoStore;
