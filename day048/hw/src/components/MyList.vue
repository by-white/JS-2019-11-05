<template>
        <section class="main">
            <input 
                class="toggle-all" 
                type="checkbox" 
            >
            <ul class="todo-list">
                <li
                    :class="{
                        completed:v.checked,
                        editing:v.onoff
                    }"
                    v-for="(v,k) in aryl"
                >
                    <div class="view">
                        <input class="toggle" type="checkbox"
                        v-model="v.checked"
                        >
                        <label
                        @dblclick="replace(k)"
                        >{{v.txt}}</label>
                        <button 
                        class="destroy"
                        @click="del(v.id)"
                        ></button>
                    </div>
                    <input 
                        class="edit"
                        v-model="v.txt"
                        @blur="changeS(val,$event)"
                        @keyup.27="changeI(val.id)"
                    />
                </li>
            </ul>
        </section>
</template>

<script>
    export default {
        props:['aryl'],
        data() {
            return {
                aryl1:[],
                t:''
            }
        },
        methods: {
           del(id){
               this.aryl1 = this.aryl.filter(e=>e.id !== id);
               this.$emit('list',this.aryl1);
           },
           replace(k){
               this.aryl[k].onoff = true;
               this.aryl1 = this.aryl;
               this.$emit('listD',this.aryl1);
           }/* ,
           changeI(id){
                this.ary[k].onoff = true;
                this.ary[k].txt = this.t;
           },
           changeS(id){
               this.aryl[k].onoff = false;
               this.aryl[k].txt = this.aryl[k].txt;
           } */

        },
        computed: {
            
        },
    }
</script>

<style lang="scss" scoped>

</style>