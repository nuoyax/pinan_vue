import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login'
import home from '../components/Home'
import send from '../components/websockert'
import register from '../components/register'
import jia from '../components/jiaju/Index'
Vue.use(Router)

export default new Router({
  base: '/vue/',

  routes: [
    {
      path: '/',
      name: 'jia',
      component: jia
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/send',
      name: 'send',
      component: send
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
