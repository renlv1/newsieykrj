import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import wiki from '@/pages/wiki'
import aboutUs from '@/pages/aboutUs'
import dApp from '@/pages/dApp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/wiki',
      name: 'wiki',
      component: wiki
    },
    {
      path: '/aboutUs',
      name: 'aboutUs',
      component: aboutUs
    },
    {
      path: '/dApp',
      name: 'dApp',
      component: dApp
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
