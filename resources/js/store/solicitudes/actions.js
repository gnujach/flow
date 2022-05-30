export const toggleModalAddUser = (context) => {
    try {
        context.commit("TOGGLE_OPEN_MODAL_ADD_USER");
    } catch {
        console.log("error action");
    }
};

export const openModalAddUser = (context) => {
    try {
        context.commit("OPEN_OPEN_MODAL_ADD_USER");
    } catch {
        console.log("error action");
    }
};

export const selectUsuario = ({ commit }, usuario) => {
    commit("SELECT_USUARIO", usuario);
    commit("TOGGLE_OPEN_MODAL_SEARCH_USER");
};

export const toggleModalSearchUser = (context) => {
    try {
        context.commit("TOGGLE_OPEN_MODAL_SEARCH_USER");
    } catch {
        console.log("error action");
    }
};
