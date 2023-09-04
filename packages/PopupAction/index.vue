<template>
  <PopupBox :title="sharable ? '分享到' : ''"
            :visible.sync="visible"
            :maskClosable="maskClosable"
            :footerVisible="true"
            @cancel="handleCancel" class="popup-action">

    <main class="popup-action-wrapper">

      <Icon v-if="ad" class="ad" type="img" :url="ad" :style="{width: '100%'}" />

      <div class="popup-action-list" :class="actionClasses"
           @click="handleConfirm">

        <div v-for="(item, index) in actions" :key="index"
             class="popup-action-item" :data-index="index">
          <template v-if="item.icon">
            <Icon v-if="isIconDefaultPattern(item.icon)"
                  :name="item.icon"
                  :color="item.iconColor"
                  :data-index="index"
                  class="popup-action-icon" />
            <Icon v-else :url="item.icon"
                  :style="{width: iconSideLength + 'px', height: iconSideLength + 'px'}"
                  :data-index="index" />
          </template>

          <span class="popup-action-text" :class="{danger: isDanger(item)}" :data-index="index">{{ getActionName( item ) }}</span>
        </div>
      </div>

    </main>

  </PopupBox>
</template>

<script lang="ts">
import Vue           from 'vue'
import { PropType }  from 'node_modules/vue/types/umd'
import PopupBox      from '@/_helper/popup-box.vue'
import Icon                  from '@/Icon/index.vue'
import { Action  } from './type'


export default Vue.extend( {
  name      : 'OPopupAction',
  components: {
    PopupBox, Icon
  },
  props     : {
    visible     : { type: Boolean, required: true },
    maskClosable: { type: Boolean, default: true },
    ad          : { type: String, },
    type        : { type: String, validator: ( val: string ) => [ 'share' ].includes( val ) },
    cancel      : { type: Function },
    confirm     : { type: Function },
    actions     : {
      type: Array as PropType<Action[]>, required: true, validator: ( val: Action[] ) => {
        let result = true

        val.forEach( ( item ) => {

          if ( typeof item === 'object' && typeof item.name === 'undefined' ) {
            result = false
          }
        } )

        return result
      }
    },
  },
  computed  : {
    sharable (): boolean {
      return this.type === 'share'
    },
    iconSideLength (): number {
      return this.sharable ? 48 : 24
    },
    actionClasses (): string[] {
      const result: string[] = []

      if ( this.type ) {
        result.push( 'share' )

        if (this.actions.length < 4) {
          result.push('around')
        }
      } else {
        result.push( 'default' )
        const action = this.actions && this.actions[0]

        if ( typeof action === 'object' && action.icon ) {
          result.push( 'with-icon' )
        }
      }

      return result
    },
  },
  methods   : {
    isDanger ( action: Action ) {
      let result = false
      if ( typeof action === 'object' ) {
        result = !!action.danger
      }

      return result
    },
    getActionName ( action: Action ) {
      return action.name
    },
    handleConfirm ( e: MouseEvent ) {
      const target      = e.target as HTMLDivElement
      const targetIndex = Number( target.getAttribute( 'data-index' ) )

      if ( isNaN(targetIndex) ) return

      const targetItem = this.actions[targetIndex]
      if ( this.confirm ) {
        this.confirm( targetItem )
      } else {
        this.$emit( 'confirm', targetItem )
      }

      this.handleCancel()
    },
    handleCancel () {
      if ( this.cancel ) {
        this.cancel()
      } else {
        this.$emit( 'cancel' )
      }
    },
    isIconDefaultPattern ( icon: string ) {
      return /^o-/.test( icon )
    },
  },
} )
</script>

<style lang="less" scoped>
@import '~@/_style/theme.less';

.popup-action {

  &-header {
    text-align : center;

    h1 {
      padding     : 12px 20px;
      margin      : 0;
      font-size   : 16px;
      line-height : 22px;
    }

  }

  &-list {
    box-sizing : border-box;

    &.share {
      margin-top  : 21px;
      padding     : 0 23px;
      display     : flex;
      flex-wrap   : wrap;
      align-items : center;

      &.around {
        justify-content: space-around;
      }


      .popup-action-item {
        display         : flex;
        flex-direction  : column;
        justify-content : center;
        align-items     : center;
        margin          : 0 10px 20px;
        width           : 62px;
        box-sizing      : border-box;

        .popup-action-text {
          color       : @color;
          text-align  : center;
          font-size   : 14px;
          line-height : 14px;
          margin-top  : 8px;
        }
      }

    }

    &.default {
      text-align : center;

      .popup-action-item + .popup-action-item {
        border-top : 1px solid @borderColor;
      }

      .popup-action-item {
        padding : 19px 0;

        .popup-action-text {
          font-size   : 16px;
          line-height : 16px;
          color       : @color;

          &.danger {
            color : @red;
          }
        }

      }

    }

    &.with-icon {

      .popup-action-item {
        display      : flex;
        align-items  : center;
        padding-left : 16px;

        .popup-action-text {
          margin-left : 20px;
        }

        .popup-action-icon {
          font-size : 24px;
        }

      }

    }

  }

}

</style>