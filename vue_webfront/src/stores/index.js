import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userinfo: {
            user: "Login",
            password: null,
        },
        card: {
            aid: null,
            title: null,
            dark: false,
            parameter: 'vue'
        }
    },
    getters: {},
    mutations: {
        userinfo(state, user) {
            state.userinfo.user = user
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
        },
        darkinfo(state, dark){
            state.card.dark = dark
        }
    },
    actions: {},
    modules: {}
})
