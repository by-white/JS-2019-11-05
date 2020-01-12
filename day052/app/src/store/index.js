const state = {
    num:0
}
const mutations = {
    increment(state){
        state.num ++
    },
    changeval(){
        console.log('进入')
    }
}
const actions = {
    asyncincrement(context){//context->store
        setTimeout(() => {
            context.commit('increment');
        }, 2000); 
    }
}
export default {
    state,
    mutations,
    actions
};