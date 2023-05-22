import Vue from 'vue'
import App from './App.vue'
import router from './router'
import stores from './stores'
//第三方依赖
import './public/ElementUI.js'
// import './public/ant-design-vue.js'
import './public/ECharts.js'

new Vue({
    router, store: stores,
    render: (h) => h(App)
}).$mount('#app')