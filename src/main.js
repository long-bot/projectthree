import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import ELEMENTUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from '@/api/axios.js'
Vue.prototype.$http = axios
Vue.use(ELEMENTUI)
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
