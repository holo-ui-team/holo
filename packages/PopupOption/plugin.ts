import combineHelper         from '@/_helper/combine-helper'
import { CombinedComponent } from '@/_helper/type'
import { PluginObject }      from 'vue/types/umd'
import component from '@/PopupOption/index.vue'
import {PopupOptionProps} from '@/PopupOption/type'

const plugin: PluginObject<PopupOptionProps> = {
  install: function(Vue) {

    Vue.prototype.$popupOption = function(props: PopupOptionProps) {
    
    const _popupOption = combineHelper<PopupOptionProps>(component, {
      visible: false,
      options: [],
      title  : '标题'
    })

    const hidePopup = () => {
      if (_popupOption.props) {
        _popupOption.props.visible = false
        _popupOption.$el.remove()
      }
    }
      _popupOption.props = {
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