import { RenderHelperVueComponent } from '@/_helper/type'
import { PluginObject } from 'vue/types/umd'
import renderHelper from '@/_helper/render-helper'
import component from '@/Popup/index.vue';

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

    Vue.prototype.$popup = function (props: PopupProps) {

      const _popup = renderHelper(component, {
        visible: false,
        content: ''
      }) as RenderHelperVueComponent<PopupProps>

      
      const hidePopup = () => {
        if (_popup.props) {
          _popup.props.visible = false
        }
      }

      _popup.props = {

        beforeConfirm: () => { return props.beforeConfirm || ( () => true ) },
        confirm: () => { props.confirm && props.confirm() },
        cancel: () => { hidePopup() },
        cancel2: () => { hidePopup() },
        ...props,
        visible: true,
  
      }

    }
  
  }
}

export default plugin