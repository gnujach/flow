export const TOGGLE_OPEN_MODAL_ADD_USER = (state) => {
    state.isOpenCreate = !state.isOpenCreate;
};
export const OPEN_OPEN_MODAL_ADD_USER = (state) => {
    state.isOpenCreate = true;
};

export const SELECT_USUARIO = (state, usuario) => {
    state.cliente = usuario;
};

export const TOGGLE_OPEN_MODAL_SEARCH_USER = (state) => {
    state.isOpenSearch = !state.isOpenSearch;
};
export const SET_CLIENTE = (state, cliente) => {
    state.cliente = cliente;
};
