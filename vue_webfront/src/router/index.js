import Vue from 'vue'
import VueRouter from 'vue-router'
//主页面
import Home from "@/components/Home.vue";

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: import.meta.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
            children: [
                /*{
                    path: '',
                    name: '',
                    component:
                },*/
            ]
        }
    ]
})

export default router
