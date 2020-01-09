<template>
  <div>
    <div>我是B路由(是公共的)</div>
    <hr />
    <!-- <h1>{{num}}</h1> -->
    <h1>{{$route.params.id}}</h1>
    <img v-if="$route.params.id==1" src="../../assets/1.jpg" />
    <img v-else-if="$route.params.id==2" src="../../assets/2.jpg" />
    <img v-else-if="$route.params.id==3" src="../../assets/2.jpg" />
    <span v-if="$route.params.id==3">我是3</span>
  </div>
</template>

<script>
export default {
  name: "bb",
  created() {
    console.log("组件加载");
  },
  props: ["num"],
  //// 复用组件使用beforeRouteUpdate去进行监听
  beforeRouteUpdate(to, from, next) {
    console.log("守卫", to.params.id);
    //next();

    //如果从1跳到2，那么就直接到首页(模拟权限不够)
     if(from.params.id === '1'){
         next('/');
     }else{
         next();
     }
  },
   //离开组件的时候触发
    beforeRouteLeave(to,from,next){
        const b = confirm('你舍得丢下我离开吗?');
        if(b){
            next();
        }else{
            next(false);
        }
        // console.log(b);
    },
};
</script>

<style lang="scss" scoped>
</style>