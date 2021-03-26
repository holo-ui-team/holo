import Vue from 'vue'
import renderComponent from '../_helper/renderHelper'
import component from './index.vue';

type PopupProps = {
  visible             : boolean
  maskClosable       ?: boolean
  title              ?: string
  content             : string
  type               ?: string
  primaryButtonText   : string
  secondaryButtonText?: string
  lastButtonText     ?: string
  confirm            ?: Function
  cancel             ?: Function
  cancel2            ?: Function
}

const _popup = renderComponent(component)

export default {
  install: function(Vue: Vue) {

    // @ts-ignore
    Vue.prototype.$popup = function (props: PopupProps) {
      _popup.$data.props = {

        ...props,

        visible: true,

        confirm: () => {
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
  
    return Vue
  
  }
}

function hidePopup() {
  _popup.$data.props.visible = false
}