//state= Array de archivos, en este caso los files
export const state = () => ({
    files: []
});


//mutations= para cambiar lo que esta en el state, por si queremos sobreescribir el state.
export const mutations = {

    SET_FILES(state, files){
        state.files = files;
    }
};

//getters= para retornar un elemento del state.
export const getters = {
    files(state){
        return state.files;
    }
};

//actions= para ir a la api, traer los datos y despues llamar la mutations y cambiar el valor de los state.
//ejemplo: hacer un fetch a nuestra api.
export const actions = {
    async getFiles({ commit }) {
        const response = await this.$axios.$get('/api/files');

        commit('SET_FILES', response.data);
    }

};