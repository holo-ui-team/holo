import oSwitch from './switch.vue';

const exportComponent = {
  install(Vue) {
      if(typeof window !== 'undefined' && window.Vue) {
          Vue = window.Vue;
        }
      //全局注册组件（组件名，组件）
      Vue.component(oSwitch.name, oSwitch);
  }
}

export default exportComponent
