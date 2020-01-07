<template>
    <div>
        <h1>请登录</h1>
        用户: <input type="text" v-model="uname"> <br>
        密码: <input type="password" v-model="pass"><br>
        <button @click="login">登录</button>
        <hr>
        <router-link to="/">home</router-link>
        <p>{{uname}}:{{pass}}</p>
        <p>{{on}}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                uname:'',
                pass:'',
                on:false
            }
        },
        methods: {
            login(){
                //console.log(this)
                const {uname,pass} = this;
                setTimeout(() => {
                    if (uname === '刘月鹏' && pass ==='123') {
                        //跳转
                        /* this.$router.push('/');
                        this.$router.push({
                            path:'/',  //?name=
                            query:{
                                name:'刘月鹏'
                            }
                        }); */
                        this.on = !this.on;
                        this.$router.push({
                            name:'home',
                            params:{
                                uname:'刘月鹏'
                            }
                        });
                      

                        //替换
                        /* this.$router.replace({
                            path:'/about/name/:uname/id/:id',  //  ?name=
                           // name:'home',
                            params:{
                                name:'刘月鹏'
                            },
                            query:{
                                name:'刘月鹏'
                            }
                        }) */
                    }
                }, 2000);
            }
        },
    }
</script>

<style scoped>

</style>