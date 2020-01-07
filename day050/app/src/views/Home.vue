<template>
  <div class="home">
    <router-link to="/about/name/bw/id/18">about1</router-link>
    <router-link to="/about/name/lyp/id/81">about2</router-link>
    <router-link :to="{name:'p4',params:{n:'刘月鹏'}}">p4</router-link>
    <router-link :to="{name:'p5',params:{n:'张瑞鹏'}}">p5</router-link>
    <router-link to="/public/">public</router-link>
    <router-link to="/login">登录</router-link>
    <router-link to="/about/3">找不到我的</router-link>
    <p></p>
  </div>
</template>
<script>
export default {
    data() {
      return {
        n:'刘月鹏'
      }
    }
}
</script>
