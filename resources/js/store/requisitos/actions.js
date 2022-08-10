export const toggleModalAddRequisito = (context) => {
    try {
        context.commit("TOGGLE_OPEN_MODAL_ADD_REQUISITO");
    } catch {
        console.log("error action");
    }
};

export const openModalAddRequisito = (context) => {
    try {
        context.commit("OPEN_OPEN_MODAL_ADD_REQUISITO");
    } catch {
        console.log("error action");
    }
};

export const selectUsuario = ({commit}, usuario) => {
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
