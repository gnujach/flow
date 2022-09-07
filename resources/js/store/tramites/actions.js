import axios from 'axios';

export const toggleModalInfoTramite = (context) => {
    try {
        context.commit("TOGGLE_OPEN_MODAL_INFO_TRAMITE");
    } catch {
        console.log("error action");
    }
};

export const openModalInfoTramite = (context) => {
    try {
        context.commit("OPEN_OPEN_MODAL_INFO_TRAMITE");
    } catch {
        console.log("error action");
    }
};
//
// export async const getTramite = ({context}, uuid) => {
//     try {
//         const data = await axios.get('/tramites/show', {uuid: uuid});
//         commit('SET_TRAMITE', data.data);
//     }
//     catch((error) => console.log(error));
// }

export async function getTramite(context, uuid) {
    try {
        const data = await axios.get('/admin/tramites/' + uuid + '/show');
        context.commit('SET_TRAMITE', data.data);
        context.commit("OPEN_OPEN_MODAL_INFO_TRAMITE");
        console.log(data.data);
    } catch (e) {
        console.log(e)
    }
}
