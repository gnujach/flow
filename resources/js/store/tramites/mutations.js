export const TOGGLE_OPEN_MODAL_INFO_TRAMITE = (state) => {
    state.isOpenModalInfoTramite = !state.isOpenModalInfoTramite;
};
export const OPEN_OPEN_MODAL_INFO_TRAMITE = (state) => {
    state.isOpenModalInfoTramite = true;
};

export const SET_TRAMITE = (state, tram) => {
    state.tramite = tram;
}
export const OPEN_OPEN_MODAL_SAVE_DIALOG = (state) => {
    state.isOpenModalSave = true
}
export const CLOSE_OPEN_MODAL_SAVE_DIALOG = (state) => {
    state.isOpenModalSave = false
}
