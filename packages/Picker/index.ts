import { PluginFunction } from 'vue/types/umd'
import component from './index.vue'
import plugin from './plugin'

const myComponent: PluginFunction<object> = function(Vue) {
    // @ts-ignore
  Vue.component(component.options.name, component)
  Vue.use(plugin)
}

export default myComponent
