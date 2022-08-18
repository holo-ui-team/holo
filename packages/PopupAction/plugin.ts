import renderHelper from '@/_helper/render-helper'
import { RenderHelperVueComponent } from '@/_helper/type'
import { PluginObject } from 'vue/types/umd'
import component from '@/PopupAction/index.vue'
import {PopupActionProps} from '@/PopupAction/type'

const plugin: PluginObject<PopupActionProps> = {
  install: function(Vue) {

    Vue.prototype.$popupAction = function(props: PopupActionProps) {
    
      const _popupAction = renderHelper(component, {
        visible: false,
        actions: [],
      }) as RenderHelperVueComponent<PopupActionProps>

      const hidePopup = () => {
        if (_popupAction.props) {
          _popupAction.props.visible = false
          _popupAction.$el.remove()
        }
      }

      _popupAction.props = {
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

    Vue.prototype.$share = function(props: PopupActionProps) {
      Vue.prototype.$popupAction({
        ...props,
        type: 'share',
      })
    }

  }
}

export default plugin