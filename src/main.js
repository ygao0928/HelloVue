// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index.js'
import ElementUI, { Message } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import './assets/css/global.css'
import './assets/fonts/iconfont.css'
import qs from 'qs'
import x2js from 'x2js'

Vue.prototype.$http=axios
Vue.prototype.$message=Message
Vue.prototype.$qs=qs
Vue.prototype.$x2js=new x2js()
// axios.defaults.baseURL='http://192.168.0.197:8077/'
Vue.use(ElementUI)
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
