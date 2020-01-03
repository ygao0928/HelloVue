import Vue from 'vue'
import Router from 'vue-router'
const Login = r => require.ensure([], () => r(require('@/components/Login.vue')), 'Login');
const Home = r => require.ensure([], () => r(require('@/components/Home.vue')), 'Home');
const Main = () => import('@/view/main.vue')
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/', redirect: '/login'
    },
    {
      path: '/login', name: 'Login', component: Login
    },
    {
      path:'/main',
      component:Main,
      children:[
        {
        path:'/main',
        name: 'Main', component: Main
      },
        {
          path:'home',
          name: 'Home', component: Home
        }
      ]
    }
  ]
})
