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
      },{
        path:'/gonggao',
        component:()=>import('../components/views/wode/gonggao.vue')
      },
      {
        path:'/jihua',
        component:()=>import('../components/views/wode/jihua.vue')
      },
      {
        path:'/baoxiao',
        component:()=>import('../components/views/wode/baoxiao.vue')
      },
      {
        path:'/kaoqin',
        component:()=>import('../components/views/wode/kaoqin.vue')
      },
      {
        path:'/tongxunlu',
        component:()=>import('../components/views/wode/tongxunlu.vue')
      },
      {
        path:'/toupiao',
        component:()=>import('../components/views/wode/toupiao.vue')
      },
      {
        path:'/fbrw',
        component:()=>import('../components/views/task/fbrw.vue')
      },{
        path:'/jltask',
        component:()=>import('../components/views/task/jltask.vue')
      },{
        path:'/jlztask',
        component:()=>import('../components/views/task/jlztask.vue')
      },{
        path:'/nomoaltask',
        component:()=>import('../components/views/task/nomoaltask.vue')
      },{
        path:'/nomoalztask',
        component:()=>import('../components/views/task/nomoalztask.vue')
      },{
        path:'/shtask',
        component:()=>import('../components/views/task/shtask.vue')
      },{
        path:'/xjrw',
        component:()=>import('../components/views/task/xjrw.vue')
      },
      
      ]
    }
  ]
})
