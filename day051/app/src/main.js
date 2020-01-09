import Vue from 'vue'
import App from './App.vue'
import router from './router'
import qs from 'qs'

Vue.config.productionTip = false

Vue.property.$qs = qs;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
