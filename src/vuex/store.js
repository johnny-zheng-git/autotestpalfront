import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var state = {
    access_token: '',
    refresh_token: ''
}

var mutations = {

    savetoken(state, token) {
        state.access_token = token.access_token;
        state.refresh_token = token.refresh_token;
        console.log(state)
    }
}

var actions = {
    save({ commit }, token) {
        commit('savetoken', token)
    },

}
const store = new Vuex.Store({
    state,
    mutations,
    actions
})

export default store;
