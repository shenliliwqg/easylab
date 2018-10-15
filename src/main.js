// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Headers from './header_footer/headers'
 import Footers from './header_footer/footers'
 import Bounce from './components/bounce'
//引入公共样式
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
// require styles
import 'swiper/dist/css/swiper.css'
//引入公用的弹窗js
import bounce from './assets/js/bounce'
Vue.use(bounce);
//全局注册组件
Vue.component("headers",Headers)
Vue.component("footers",Footers)
Vue.component("bounce",Bounce)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})



