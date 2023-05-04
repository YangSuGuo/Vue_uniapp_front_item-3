import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
   /* {
      path: '/',
      name: '',
      component:
    },*/
  ]
})

export default router
