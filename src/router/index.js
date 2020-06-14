import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from "@/store";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/entrar',
    name: 'login',
    component: () => import('@/views/auth/Login.vue')
  },
  {
    path: '/teste',
    name: 'teste',
    component: () => import('@/views/Teste.vue')
  },
  {
    path: '/local',
    name: 'local',
    beforeEnter: (to, from, next) => {
      if (!store.getters["auth/authenticated"]) {
        return next({ name: "login" });
      }
      next();
    },
    component: () => import("@/views/places/Place.vue")
  },
  {
    path: '/sair',
    name: 'logout',
    beforeEnter: (to, from, next) => {
      if (!store.getters["auth/authenticated"]) {
        return next({ name: "login" });
      }
      next();
    },
    component: () => import('@/views/auth/Logout.vue')
  },
  {
    path: "/dashboard",
    name: "dashboard",
    beforeEnter: (to, from, next) => {
      if (!store.getters["auth/authenticated"]) {
        return next({ name: "login" });
      }
      next();
    },
    component: () => import("@/views/Dashboard.vue")
  },
  {
    path: "/primeiro-acesso",
    name: "first-access",
    beforeEnter: (to, from, next) => {
      if (!store.getters["auth/authenticated"]) {
        return next({ name: "login" });
      }
      next();
    },
    component: () => import("@/views/FirstAccess.vue")
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
