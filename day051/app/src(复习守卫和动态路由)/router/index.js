import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue'),
    children:[
      {
        path:'b/:id',
        name:'bb',
        props:true,
        component:()=>import('../views/params/b.vue'),
        beforeEnter(to,from,next){
          //这个是加在路由上的
          console.log('组件进入的时候触发');
          console.log(1)
          next('/');
        },
      }
    ]
  }
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
/* router.beforeEach((to,from,next)=>{
  console.log('只要切换路由就触发');
  next();
})
 */
export default router
