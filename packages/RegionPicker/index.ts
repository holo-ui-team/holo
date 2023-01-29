import { PluginFunction } from 'vue/types/umd'
import plugin from './plugin'

const myComponent: PluginFunction<object> = function(Vue) {
  Vue.use(plugin)
}

export default myComponent


