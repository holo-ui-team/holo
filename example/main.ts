import Vue from 'vue'
import App from './App.vue'
import router from './router'

// import Toast from '../packages/toast/index'
// import { oButton, Toast } from '../lib/index/index'
// import Toast from '../lib/toast/index'
// import '../lib/index/style.css'

Vue.config.productionTip = false

// console.log(Toast)
// Vue.use(Toast)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
