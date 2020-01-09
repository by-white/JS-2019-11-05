<template>
  <div id="app">
    <router-link to="/">home</router-link>
    <router-link to="/about">about</router-link>
    <router-link to="/login">login</router-link>
    <router-link to="/public">public</router-link>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
