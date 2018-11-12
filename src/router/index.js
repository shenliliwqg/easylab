import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index/Index'
import CompanyHomePage from '@/components/CompanyHomePage/CompanyHomePage'
 import Test from '@/components/RouterTest/test'
 import Js from '@/components/RouterTest/js'
 import Css from '@/components/RouterTest/css'

Vue.use(Router)

export default new Router({
  linkActiveClass:'active',
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
      path: '/test',
      name:'test',
      component: Test,
      meta:{
        title:'路由嵌套主页'
      },
      //默认进来重定向页面
      redirect:'/test/js/private',
      children: [
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: 'js/:plan',
          name:'js',
          component: Js
        },
        {
          // UserPosts will be rendered inside User's <router-view>
          // when /user/:id/posts is matched
          path: 'css/:count',
          name:'css',
          component: Css
        },
      ]
    },
    {
      path: '/company',
      name:'company',
      component: CompanyHomePage,
      meta:{
        title:'公司主页'
      }
    },
  ]
})

