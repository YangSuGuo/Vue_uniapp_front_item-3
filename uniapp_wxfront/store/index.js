import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userinfo: {
            username: null,
            password: null,
            view: null
        },
        card: {
            aid: null,
            title: null,
            classify: null,
            background: null,
            intro: null,
            parameter: "ALL"
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
        viewinfo(state, view) {
            state.userinfo.view = view
        },
        cardinfo(state, parameter) {
            state.card.parameter = parameter
        },
        aidinfo(state, aid) {
            state.card.aid = aid
        },
        titleinfo(state, title) {
            state.card.title = title
        },
        classifyinfo(state, classify) {
            state.card.classify = classify
        },
        backgroundinfo(state, background) {
            state.card.background = background
        },
        introinfo(state, intro) {
            state.card.intro = intro
        },
    },
    actions: {},
    modules: {}
})
