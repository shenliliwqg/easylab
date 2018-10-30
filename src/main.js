// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
 import Bounce from './components/bounce'
//引入公共样式
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
// require styles
import 'swiper/dist/css/swiper.css'
//动态title
import VueWechatTitle from 'vue-wechat-title';
Vue.use(VueWechatTitle)
//引入公用的弹窗js
import bounce from './assets/js/bounce'
import axios from 'axios'
Vue.prototype.$axios=axios
Vue.use(bounce)
//全局注册组件
Vue.component("bounce",Bounce)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})



