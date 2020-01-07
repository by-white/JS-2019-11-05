import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  //遇到router常用  jsx (JS XML)
  render: h => h(App)
}).$mount('#app')
