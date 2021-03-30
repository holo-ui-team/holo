import { VueConstructor } from 'vue'
import component from './index.vue';

const oMask = function(Vue: VueConstructor) {
  Vue.component('oMask', component)
}

export default oMask;

