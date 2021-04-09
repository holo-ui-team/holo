import renderHelper from '@/_helper/render-helper'
import { RenderHelperVueComponent } from '@/_helper/type'
import { PluginObject } from 'vue/types/umd'
import component from '@/PopupOption/index.vue'
import {PopupOptionProps} from '@/PopupOption/type'

const plugin: PluginObject<PopupOptionProps> = {
  install: function(Vue) {

    Vue.prototype.$popupOption = function(props: PopupOptionProps) {
    
    const _popupOption = renderHelper(component, {
      visible: false,
      options: [],
      title  : '标题'
    }) as RenderHelperVueComponent<PopupOptionProps>

    const hidePopup = () => {
      if (_popupOption.props) {
        _popupOption.props.visible = false
        _popupOption.$el.remove()
      }
    }
      _popupOption.props = {
        confirm: () => {},
        cancel: () => { hidePopup() },
        ...props,
        visible: true,
      }
    }
  }
}

export default plugin