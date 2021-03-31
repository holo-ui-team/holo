import { VueConstructor } from 'vue'
import component from './index.vue';

const oRadio = function(Vue: VueConstructor) {
  Vue.component('oRadio', component)
}

export default oRadio;

