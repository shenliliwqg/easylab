import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index/Index'
import CompanyHomePage from '@/components/CompanyHomePage/CompanyHomePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name:'index',
      component: Index,
      meta:{
        title:'工作台'
      }
    } ,
    {
      path: '/compay',
      name:'compay',
      component: CompanyHomePage,
      meta:{
        title:'公司主页'
      }
    }
  ]
})

