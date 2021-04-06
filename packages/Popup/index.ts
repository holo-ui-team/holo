import { VueConstructor } from 'vue'
import plugin from './plugin'
import component from './index.vue'

const oPopup = function(Vue: VueConstructor) {
  Vue.component('oPopup', component)

  return plugin
}

export default oPopup

