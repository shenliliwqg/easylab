import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/Index'
import CompanyHomePage from '@/page/CompanyHomePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name:'index',
      component: Index
    } ,
    {
      path: '/compay',
      name:'compay',
      component: CompanyHomePage
    }
  ]
})
