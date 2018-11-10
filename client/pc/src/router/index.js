import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MyHome from '@/components/MyHome'
import AdminLogin from '@/components/AdminLogin'
import KwList from '@/components/KwList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/my',
      name: 'MyHome',
      component: MyHome
    },
    {
      path: '/login',
      name: 'AdminLogin',
      component: AdminLogin
    },
    {
      path: '/list',
      name: 'KwList',
      component: KwList
    }
  ]
})
