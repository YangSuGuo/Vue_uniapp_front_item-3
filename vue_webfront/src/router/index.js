import Vue from 'vue'
import VueRouter from 'vue-router'
//主页面
import Home from "@/components/Home.vue";
//子页面
import list from "@/views/home/list.vue";
import login from "@/views/Login.vue";
import Read from "@/views/home/Read.vue";
import summary from "@/views/home/summary.vue";

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
                {
                    path: 'summary',
                    name: 'summary',
                    component: summary
                }
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
