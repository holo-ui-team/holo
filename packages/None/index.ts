import { VueConstructor } from 'vue'
import component from './index.vue'

const oNone = function(Vue: VueConstructor) {
  Vue.component('oNone', component)
}

export default oNone
