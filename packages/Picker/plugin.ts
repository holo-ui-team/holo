import combineHelper         from '@/_helper/combine-helper'
import { PluginObject }      from 'vue/types/umd'
import component from '@/Picker/index.vue'
import {PickerProps} from '@/Picker/type'

const plugin: PluginObject<PickerProps> = {
  install: function(Vue) {

    
    Vue.prototype.$picker = function(props: PickerProps) {
      const _picker = combineHelper<PickerProps>(component, {
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
        ...props,
        confirm: (val) => {
          console.log(val)
          props.confirm && props.confirm(val)
        },
        cancel : () => {
          hidePopup()
          props.cancel && props.cancel()
        },
        visible: true,
      }
    }
    
  }
}

export default plugin