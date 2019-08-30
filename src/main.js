import Vue from 'vue'
import App from './App.vue'

import router from './routers'
Vue.config.productionTip = false
import "./static/css/reset.css"

new Vue({
  el:"#app",
  render: h => h(App),
  router
}).$mount('#app')
