import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userinfo: {
            username: null,
            password: null,
        },
        card: {
            aid: null,
            title: null,
            parameter: 'vue'
        }
    },
    getters: {},
    mutations: {
        userinfo(state, username) {
            state.userinfo.username = username
        },
        passinfo(state, pass) {
            state.userinfo.password = pass
        },
        cardinfo(state, parameter) {
            state.card.parameter = parameter
        },
        aidinfo(state, aid){
            state.card.aid = aid
        },
        titleinfo(state, title){
            state.card.title = title
        }
    },
    actions: {},
    modules: {}
})
