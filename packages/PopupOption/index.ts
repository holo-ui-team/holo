import { VueConstructor } from 'vue'
import component from './index.vue'

const oPopupOption = function(Vue: VueConstructor) {
  Vue.component('oPopupOption', component)
}

export default oPopupOption

