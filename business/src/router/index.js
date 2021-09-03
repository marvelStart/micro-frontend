import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import System from '../views/system.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/system',
    name: 'System',
    component: System
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/business',
  routes
})

export default router
