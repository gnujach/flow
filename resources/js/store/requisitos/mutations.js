export const TOGGLE_OPEN_MODAL_ADD_REQUISITO = (state) => {
    state.isOpenCreate = !state.isOpenCreate;
};
export const OPEN_OPEN_MODAL_ADD_REQUISITO = (state) => {
    state.isOpenCreate = true;
};

export const SELECT_REQUISITO = (state, requisito) => {
    state.requisito = requisito;
};

export const TOGGLE_OPEN_MODAL_SEARCH_REQUISITO = (state) => {
    state.isOpenSearch = !state.isOpenSearch;
};
