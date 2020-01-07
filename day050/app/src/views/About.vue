<template>
  <div>
    <h1>这是ABOUT页面</h1>
    <router-link to="/">Home</router-link>
    <router-link to="/about/name/bw/id/18">about1</router-link>
    <router-link to="/about/name/lyp/id/81">about2</router-link>
    <!-- <router-link to="/about/1">about1</router-link>
    <router-link to="/about/2">about2</router-link>
    <p>{{$route.params}}</p>
    <div v-if="$route.params.id == 1">
      这个是1111的页面
    </div>
    <div v-else-if="$route.params.id == 2">
      这个是2222的页面
    </div>
    <div v-else>
        不好意思,宝贝,找不到
    </div> -->

    <div>
        用户:{{$route.params.uname}}
        <h2 v-if="$route.params.id==18">
          <h3>欢迎我白哥</h3>
          <img src="../assets/4.jpg" alt="">
        </h2>
        <h2 v-if="$route.params.id == 81">
          <h3>欢迎我鹏哥</h3>
          <img src="../assets/3.jpg" alt="">
        </h2>
    </div>



  </div>
</template>
<script>
export default {
  data() {
    return {
      num:0
    }
  },
  //created不能监听复用组件的路由之间的跳转
  /* created() {
     //console.log(this.$route) 
     //console.log(this.$router) 
     this.num = 1;
     if (this.$route.params.id === '18') {
       setTimeout(()=>{
         console.log('请求接口1')
       },1000)
     }else if (this.$route.params.id === '81') {
         setTimeout(()=>{
           console.log('请求接口2')
         })
     }
    }, */
  //watch都可以监听
   watch: {
      '$route'(to,from){
        if (to.params.id === '18') {
          setTimeout(()=>{
            console.log('请求接口1')
          },1000)
        }else if(to.params.id === '81'){
          setTimeout(() => {
            console.log('请求接口2')
          }, 1000);
        }
        console.log(to,'to');
        console.log(from,'from')
      }
    }, 
}
</script>
<style>
    img{
      width: 200px;
      height: 200px;
    }
</style>