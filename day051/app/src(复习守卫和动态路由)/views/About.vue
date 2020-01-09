<template>
  <div class="about">
    <h1>about page</h1>
     <router-link to="/">Home</router-link>
     <router-link to="/about/b/1">b1页</router-link>
     <router-link :to="{name:'bb',params:{id:'2',num:'字'}}">b2页</router-link>
     <router-link :to="{name:'bb',params:{id:'3',num:'大字'}}">b3页</router-link>
     <router-view></router-view>
  </div>
</template>
