import Vue from 'vue'
import App from './App.vue'
import router from './router'
import api from './plugins/api'

Vue.config.productionTip = false

Vue.use(api)

window.$ = require('jquery')
window.JQuery = require('jquery')

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
