import { VueConstructor } from 'vue'
import component from './index.vue'

const oPopupAction = function(Vue: VueConstructor) {
  Vue.component('oPopupAction', component)

}

export default oPopupAction

