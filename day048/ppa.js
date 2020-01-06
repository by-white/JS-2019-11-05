const ppa = {
    template:'#ppa',
    data() {
        return {
            num:11
        }
    },
    created(){
        /*
            this.$parent拿到父级的实例
            可以通过实例获取父级的数据
        */
        console.log(this.num);
        console.log(this.$parent.num);
    },
    inject:['ary2']
}