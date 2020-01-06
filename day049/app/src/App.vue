<template>
<div>
    <router-link to="home">首页</router-link>
    <router-link to="public">公共</router-link>
    <router-link to="about">关于</router-link>
    <router-view></router-view>  
</div>
</template>

<script>
  /* 
    单页SPA优点
        不刷新页面,在当前页面切换多页面的操作方式,能够提高用户体验
        一些后端逻辑(工作)就可以分给前端来做,减少后端同学的压力.提高前端开发的业务能力
        能够共用一些公共静态资源,减少http请求实现真正的前后端分离

        /          -> home.vue
        /about     -> about.vue
        /public    -> public.vue

        安装路由:
            npm install vue-router
            或者
            yarn add vue-router

            找到main.js
                1.引包
                   import VueRouter from 'vue-router';
                2.安装路由功能
                   Vue.use(VueRouter);
                3.实例化VueRouter
                   const router = new VueRouter({
                     routes:[
                       {
                         path:'指定路径',
                         component:指定路径响应的组件
                       }
                     ]
                   });
                4.挂路由
                  默认配置是hash路由
                  new Vue({
                    mode:'history',
                    router
                  })
                5.(*) 设置路由页面渲染的位置
                <router-view></router-view>
  */
export default {
  
}
</script>

<style>

</style>
