import state from "./state";
import * as mutations from "./mutations";
import * as actions from "./actions";
import * as getters from "./getters";

const requisitosStore = {
    namespaced: true,
    state,
    mutations,
    getters,
    actions,
};

export default requisitosStore;
