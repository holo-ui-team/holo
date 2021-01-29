import Vue from 'vue'
import App from './App.vue'
import router from './router'

import '../lib/index/style.css'

// import oButton from '../lib/Button/index'
// import { oButton } from '../lib/index/index'

Vue.config.productionTip = false

// Vue.use(oButton);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
