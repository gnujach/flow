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
export const openModalUpdateRequest = (context) => {
    try {
        context.commit("OPEN_MODAL_UPDATE_REQUEST");
    } catch {
        console.log("error action");
    }
};
export const closeModalUpdateRequest = (context) => {
    try {
        context.commit("CLOSE_MODAL_UPDATE_REQUEST");
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
export const loadLastCliente = async (context) => {
    try {
        const data = await axios.get("/admin/clientes/getlast")
        context.commit("SET_CLIENTE", data.data)
    } catch (error) {
        console.log(error)
    }
}

export async function setTask(context, task) {
    try {
        context.commit('SET_TASK', task);
    } catch (e) {
        console.log(e)
    }
}

export const toggleModalAddNote = (context) => {
    try {
        context.commit("TOGGLE_OPEN_MODAL_ADD_NOTE");
    } catch {
        console.log("error action");
    }
};

export const loadNote = (context, notes) => {
    try {
        context.commit("SET_NOTE", notes)
    } catch (error) {
        console.log(error)
    }
}
