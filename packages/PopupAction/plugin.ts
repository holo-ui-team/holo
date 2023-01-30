import combineHelper         from '@/_helper/combine-helper'
import { PluginObject }      from 'vue/types/umd'
import component from '@/PopupAction/index.vue'
import {PopupActionProps} from '@/PopupAction/type'

const plugin: PluginObject<PopupActionProps> = {
  install: function(Vue) {

    Vue.prototype.$popupAction = function(props: PopupActionProps) {
    
      const _popupAction = combineHelper<PopupActionProps>(component, {
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