// @ts-ignore
import renderHelper from '@/_helper/render-helper.ts'
import { PluginObject } from 'vue/types/umd'
import component from './index.vue'
import {PickerProps} from './type'

const plugin: PluginObject<PickerProps> = {
  install: function(Vue) {

    
    Vue.prototype.$picker = function(props: PickerProps) {
      const _picker = renderHelper(component, {
        visible: false,
        options: [],
      })
      const hidePopup = () => {
        if (_picker.props) {
          _picker.props.visible = false
          _picker.$el.remove()
        }
      }

      _picker.props = {
        confirm: () => {},
        cancel: () => { hidePopup() },
        ...props,
        visible: true,
      }
    }
    
  }
}

export default plugin