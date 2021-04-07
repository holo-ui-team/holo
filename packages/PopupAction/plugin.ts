// @ts-ignore
import renderHelper from '@/_helper/render-helper.ts'
import { PluginObject } from 'vue/types/umd'
import component from './index.vue'
import {PopupActionProps} from './type'

const plugin: PluginObject<PopupActionProps> = {
  install: function(Vue) {

    Vue.prototype.$popupAction = function(props: PopupActionProps) {
    
      const _popupAction = renderHelper(component, {
        visible: false,
        actions: [],
      })
      const hidePopup = () => {
        if (_popupAction.props) {
          _popupAction.props.visible = false
          _popupAction.$el.remove()
        }
      }

      _popupAction.props = {
        confirm: () => {},
        cancel: () => { hidePopup() },
        ...props,
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