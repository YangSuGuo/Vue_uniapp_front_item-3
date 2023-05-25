import Vue from 'vue'
import VueRouter from 'vue-router'
//主页面
import Home from "@/components/Home.vue";
import list from "@/views/home/list.vue";
import login from "@/views/Login.vue";
//子页面
import Read from "@/views/home/Read.vue";

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
                {
                    path: '',
                    name: 'list',
                    component: list
                },
                {
                    path: 'login',
                    name: 'login',
                    component: login
                },
            ]
        },
        {
            path: '/Read',
            name: 'Read',
            component: Read,
        }
    ]
})

export default router
