import { PluginFunction } from 'vue/types/umd'
import component from './button.vue'

const myComponent: PluginFunction<object> = function(Vue) {
    // @ts-ignore
  Vue.component(component.options.name, component)
}

export default myComponent
