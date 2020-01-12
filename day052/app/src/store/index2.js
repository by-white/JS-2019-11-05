export default {
    namespaced: true,
    state:{
        val:'vue.....'
    },
    mutations:{
        changeval:(state,val)=>{
            console.log('进入')
            state.val = val;
        }
    }
}