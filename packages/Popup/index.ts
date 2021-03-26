import plugin from './plugin'
import component from './index.vue';

const oPopup = function(Vue) {
  Vue.component('oPopup', component)

  return plugin
}

export default oPopup;

