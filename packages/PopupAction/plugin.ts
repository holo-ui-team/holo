import combineHelper                from '@/_helper/combine-helper'
import { PluginObject }             from 'vue/types/umd'
import component                    from '@/PopupAction/index.vue'
import { Action, PopupActionProps } from '@/PopupAction/type'
import { ShareImgs }                from '@/_helper/cdn-img-helper'

const ShareList: { [key: string]: Action } = {
  wechat : { icon: ShareImgs.get( 'wechat' ), name: '微信' },
  moments: { icon: ShareImgs.get( 'moments' ), name: '朋友圈' },
  qq     : { icon: ShareImgs.get( 'qq' ), name: 'QQ' },
  qZone  : { icon: ShareImgs.get( 'qzone' ), name: 'QQ空间' },
  message: { icon: ShareImgs.get( 'message' ), name: '短信' },
  weibo  : { icon: ShareImgs.get( 'weibo' ), name: '微博' },
  wallet : { icon: ShareImgs.get( 'wallet' ), name: '钱包' },
  xhs    : { icon: ShareImgs.get( 'xhs' ), name: '小红书' },
}

const plugin: PluginObject<PopupActionProps> = {
  install: function ( Vue ) {

    Vue.prototype.$popupAction = function ( props: PopupActionProps ) {

      const _popupAction = combineHelper<PopupActionProps>( component, {
        visible: false,
        actions: [],
      } )
      const hidePopup    = () => {
        if ( _popupAction.props ) {
          _popupAction.props.visible = false
          _popupAction.$el.remove()
        }
      }

      const actions = props.actions.map( ( a ) => {
        return typeof a === 'string' ? props.type === 'share'
                                       ? { ...ShareList[a], id: a }
                                       : { name: a }
                                     : a
      } )

      _popupAction.props = {
        ...props,
        actions,
        confirm: ( val ) => {
          console.log( val )
          props.confirm && props.confirm( val )
        },
        cancel : () => {
          hidePopup()
          props.cancel && props.cancel()
        },
        visible: true,
      }
    }

    Vue.prototype.$share = function ( props: PopupActionProps & { actions: Array<string | Action> } ) {

      Vue.prototype.$popupAction( {
        ...props,
        type: 'share',
      } )
    }

  },
}

export default plugin