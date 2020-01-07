<template>
    <div>
        <p>公共路由</p>
        <router-link to="/public/p1">P1</router-link>
        <router-link to="/public/p2">P2</router-link>
        <router-link to="">P3</router-link>
        <hr>
        <router-view></router-view>
        <router-link to="/">home</router-link>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>