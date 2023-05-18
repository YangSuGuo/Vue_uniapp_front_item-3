import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        card:{
            parameter: "vue"
        }
    },
    getters: {},
    mutations: {
        cardinfo(state,parameter){
            state.card.parameter =parameter
        }
    },
    actions: {},
    modules: {}
})
