<template>
        <header class="header" >
                <h1>todos</h1>
                <input 
                    class="new-todo" 
                    placeholder="请输入内容"
                    @keyup.13="add"
                    v-model="val1"
                >
        </header>
</template>

<script>
    export default {
        props:['aryh'],
        data() {
            return {
                val1: ''
            }
        },
        methods: {
            add(){
               this.$emit('head',this.val1);
               this.val1 = ''
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>