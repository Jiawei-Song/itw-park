import Vue from 'vue'
import Router from 'vue-router'
import ShoppingMall from '@/pages/ShoppingMall'
import Register from '@/pages/Register'
import Login from '@/pages/Login'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'ShoppingMall', component: ShoppingMall },
    { path: '/register', name: 'Register', component: Register },
    { path: '/login', name: 'Login', component: Login},
  ]
})
