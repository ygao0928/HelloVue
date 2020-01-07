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
import VueCookies from 'vue-cookies'
import Vuex from 'Vuex'//引入状态管理
import moment from 'moment'
import echarts from 'echarts'

//时间格式化

//data 格式转化
import qs from 'qs'
// xml 格式化
import x2js from 'x2js'
//挂载
Vue.use(Vuex)
Vue.use(VueCookies)
Vue.use(ElementUI)

Vue.prototype.$echarts = echarts
Vue.prototype.moment=moment
Vue.prototype.$http=axios
Vue.prototype.$message=Message
Vue.prototype.$qs=qs
Vue.prototype.$x2js=new x2js()

// axios.defaults.baseURL='http://192.168.0.197:8077/'

Vue.config.productionTip = false



// router.beforeEach((to, from, next)=>{
//   document.title=`${to.meta.title}|OA智能办公`;
//   const role = localStorage.getItem('ms_username');
//   // if (!role && to.path !== '/login') {
//   //   next('/login');
//   // }
// })

/* eslint-disable no-new */
new Vue({
  router,
  //i18n,
  render: h => h(App)
}).$mount('#app');

