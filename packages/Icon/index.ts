import { VueConstructor } from 'vue/types/umd'
import component from './index.vue'

const oIcon: any = function(Vue: VueConstructor) {
  Vue.component('oIcon', component)
}

export default oIcon
