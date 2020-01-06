import Vue from 'vue'
import Router from 'vue-router'
const Login = r => require.ensure([], () => r(require('@/components/Login.vue')), 'Login');
// const Home = r => require.ensure([], () => r(require('@/components/common/Home.vue')), 'Home');
// const Main = () => import('@/view/main.vue')
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/', redirect: '/wode'
    },
    {
      path: '/login', name: 'Login', component: Login
    },
    {
      path: '*',
            redirect: '/404'
    },
    {
      path:'/',
      component:()=>import('../components/common/Home.vue'),
      children:[
        {
        path:'/wode',
        component:()=>import('../components/views/wode.vue'),
        meta:{title:'我的'}
        
      },
      {
        path:'/task',
        component:()=>import('../components/views/task.vue'),
        meta:{title:'工作任务'} 
      },
      {
        path:'/workflow',
        component:()=>import('../components/views/workflow.vue'),
        meta:{title:'工作流'} 
      },
      {
        path:'/project',
        component:()=>import('../components/views/project.vue'),
        meta:{title:'项目管理'} 
      },
      ]
    }
  ]
})
