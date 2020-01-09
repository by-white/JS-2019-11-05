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
  },
  {
    path:'/public',
    name:'public',
    component:()=>import('../views/public.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue'),
  }
]

import {islogin} from '../api/api';


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(async (to,from,next)=>{
 const b = to.matched.some(item=>item.meta.reg);
 if (b) {
   //需要验证
   let flg = await islogin(); //需要就请求验证接口
   //校验成功
   if (flg) {
      next();
   }else{
     //校验失败
     next('/login');
   }
 }else{
   //不需要验证
   next();
 }
 //console.log(to.matched)

})
 
export default router
