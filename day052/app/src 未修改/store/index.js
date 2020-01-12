import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/* 
  只有mutations才能修改数据(标准) v-model会修改vuex的数据,怎么办
*/

const store = new Vuex.Store({
  state:{
    num:0
  },
  mutations:{
    /* methods: {increment},
     asynicncrement(state){
       setTimeout(() => {
          state.num++
       }, 2000);
     }, */
     increment(state){
       state.num++
     }
  },
  //放异步请求
  actions:{
    asynicncrement(context){ //context->store
       setTimeout(() => {
         context.commit('increment');
       }, 2000);

    }
  }
})

export default store;