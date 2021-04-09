import { ComponentOptions, PluginFunction } from 'vue/types/umd'
import componentRegister from './_helper/component-register'

const vueComponents: PluginFunction<Vue>[] = Object.values(componentRegister)

const componentsPluginFunction: PluginFunction<ComponentOptions<Vue>> = function(Vue) {
  vueComponents.forEach((plugin) => {
    Vue.use(plugin)
  })
}

export default componentsPluginFunction