import { PluginObject } from 'vue/types/umd'
import renderHelper from '../_helper/render-helper'
import component from './index.vue';

type PopupProps = {
  visible             : boolean
  maskClosable       ?: boolean
  title              ?: string
  content             : string
  type               ?: string
  primaryButtonText  ?: string
  secondaryButtonText?: string
  lastButtonText     ?: string
  beforeConfirm      ?: Function
  confirm            ?: Function
  cancel             ?: Function
  cancel2            ?: Function
}


const plugin: PluginObject<PopupProps> = {
  install: function(Vue) {

    const _popup = renderHelper(component, {
      visible: false,
      content: ''
    })
    const hidePopup = () => {
      if (_popup.props) {
        _popup.props.visible = false
      }
    }

    Vue.prototype.$popup = function (props: PopupProps) {
      _popup.props = {

        ...props,
        visible: true,
        
        beforeConfirm: () => {
          let result = true

          if (props.beforeConfirm) {
            result = props.beforeConfirm()
          }

          return result
        },

        confirm: () => {
          if (!this.beforeConfirm()) return
          
          hidePopup()
          props.confirm && props.confirm()
        },

        cancel: () => {
          hidePopup()
          props.cancel && props.cancel()
        },

        cancel2: () => {
          hidePopup()
          props.cancel2 && props.cancel2()
        }
  
      }
    }
  
  }
}

export default plugin