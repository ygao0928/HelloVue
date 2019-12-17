import Vue from 'vue'
import Router from 'vue-router'
//import Login from '@/components/Login.vue'
//import Home from '@/components/Home.vue'
const Login = r => require.ensure([], () => r(require('@/components/Login.vue')), 'Login');
const Home = r => require.ensure([], () => r(require('@/components/Home.vue')), 'Home');
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/', redirect: '/login'
    },
    {
      path: '/login', name:'Login',component: Login
    },
    {
      path: '/home', name:'Home',component: Home
    }
  ]
})
