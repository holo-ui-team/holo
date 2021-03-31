import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/home/index.vue'


Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/phoneNav',
    name: 'phoneNav',
    component: () => import('../views/home/phone.vue')
  },
  {
    path: '/button',
    name: 'button',
    component: () => import('../views/button/index.vue')
  },
  {
    path: '/toast',
    name: 'toast',
    component: () => import('../views/toast/index.vue')
  },
  {
    path: '/switch',
    name: 'switch',
    component: () => import('../views/switch/index.vue')
  },
  {
    path: '/radio',
    name: 'radio',
    component: () => import('../views/radio.vue')
  },
  {
    path: '/loading',
    name: 'loading',
    component: () => import('../views/loading/index.vue')
  },
  {
    path: '/icon',
    name: 'icon',
    component: () => import('../views/icon.vue')
  },
  {
    path: '/none',
    name: 'none',
    component: () => import('../views/none.vue')
  },
  {
    path: '/mask',
    name: 'mask',
    component: () => import('../views/mask.vue')
  },
  {
    path: '/popup',
    name: 'popup',
    component: () => import('../views/popup.vue')
  },
  {
    path: '/popup-option',
    name: 'popup-option',
    component: () => import('../views/popup-option.vue')
  },
  {
    path: '/picker',
    name: 'picker',
    component: () => import('../views/picker.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
