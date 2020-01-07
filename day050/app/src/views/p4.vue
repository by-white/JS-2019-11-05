<template>
    <div name="p4">
        p4
        {{n}}
         {{$route.params.n}}
    </div>
</template>

<script>
    export default {
        name:'p4',
        props:['n'],
    }
</script>

<style lang="scss" scoped>

</style>