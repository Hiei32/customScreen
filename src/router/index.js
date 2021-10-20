import { createRouter, createWebHistory } from 'vue-router'

//登录
const Login = () => import('views/login/Login');

//主面板
const Main = () => import('views/main/Main');


import Home from '../views/Home.vue'

const routes = [
  {
    path: '',
    redirect: '/Main'
  },
  {
    path: '/Login',
    component: Login
  },
  {
    path: '/Main',
    component: Main
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
