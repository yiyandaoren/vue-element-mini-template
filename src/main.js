import Vue from 'vue'
import Cookies from 'js-cookie'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/element-variables.scss'

import '@/styles/index.scss' // global css

import App from './App.vue'
import router from './router'

Vue.use(ElementUI,{
  size: Cookies.get('size') || 'medium' // set element-ui default size
})
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
