<template>
  <PopupBox :visible.sync="visible" :maskClosable="maskClosable" :footerVisible="true" @cancel="handleCancel" class="popup-action">

    <main class="popup-action-wrapper">
      <div v-if="isShare" class="popup-action-header">
        <Icon v-if="ad" class="ad" type="img" :url="ad" :width="351" :height="44"/>
        <h1 v-else>分享到</h1>
      </div>

      <div class="popup-action-list" :class="actionClasses" @click="handleConfirm">
        <div v-for="(item, index) in computedActions" :key="index" class="popup-action-item" :data-index="index">
          <template v-if="item.icon" >
            <Icon v-if="isIconDefaultPattern(item.icon)" :name="item.icon" :color="item.iconColor" :data-index="index" class="popup-action-icon"/>
            <Icon v-else :url="item.icon" :width="iconSideLength" :height="iconSideLength" :data-index="index"/>
          </template>

          <span class="popup-action-text" :class="{danger: isDanger(item)}" :data-index="index">{{getActionName(item)}}</span>
        </div>
      </div>
    </main>

  </PopupBox>
</template>

<script lang="ts">
import Vue from 'vue'
import { PropType } from 'node_modules/vue/types/umd'
import PopupBox from '@/_helper/popup-box.vue'
import {ShareImgs} from '@/_helper/cdn-img-helper'
import Button from '@/Button/button.vue'
import Icon from '@/Icon/index.vue'
import {Action} from './type'

const ShareList = {
  wechat : { icon: ShareImgs.get('wechat') , name: '微信'  },
  moments: { icon: ShareImgs.get('moments'), name: '朋友圈' },
  qq     : { icon: ShareImgs.get('qq')     , name: 'QQ'   },
  qZone  : { icon: ShareImgs.get('qzone')  , name: 'QQ空间'},
  message: { icon: ShareImgs.get('message'), name: '短信'  },
  weibo  : { icon: ShareImgs.get('weibo')  , name: '微博'  },
  wallet : { icon: ShareImgs.get('wallet') , name: '钱包'  }
}

export default Vue.extend({
  name      : 'OPopupAction',
  components: {
    PopupBox, Button, Icon
  },
  props: {
    visible            : { type: Boolean, required: true },
    maskClosable       : { type: Boolean, default: true },
    ad                 : { type: String, },
    type               : { type: String, validator: (val: string) => ['share'].includes(val) },
    cancel             : { type: Function },
    confirm            : { type: Function },
    actions            : { type: Array as PropType<Action[]>, required: true, validator: (val: Action[]) => {
      let result = true

      val.forEach((item) => {

        if (typeof item === 'object' && typeof item.name === 'undefined') {
            result = false
        }
      })

      return result
    } },
  },
  computed: {
    isShare(): boolean {
      return this.type === 'share'
    },
    iconSideLength(): number {
      return this.isShare ? 48 : 24
    },
    actionClasses(): string[] {
      const result: string[] = []

      if (this.type) {
        result.push('share')
      } else {
        result.push('default')
        const action = this.actions && this.actions[0]

        if (typeof action === 'object' && action.icon) {
          result.push('with-icon')
        }
      }

      return result
    },
    computedActions(): Action[] {
      let result: Action[] = []

      if (this.type === 'share') {
        result = this.actions.map((item) => {
          if (typeof item === 'string') {
            return ShareList[item]
          }
        })
      } else {
        result = this.actions
      }

      return result
    }
  },
  methods: {
    isDanger(action: Action) {
      let result = false
      if (typeof action === 'object') {
        result = !!action.danger
      }

      return result
    },
    getActionName(action: Action) {
      if (typeof action === 'object') {
        return action.name.toString()
      }

      return action.toString()
    },
    handleConfirm(e: MouseEvent) {
      const target      = e.target as HTMLDivElement
      const targetIndex = Number(target.getAttribute('data-index'))

      if (targetIndex === NaN) return

      const targetItem = this.actions[targetIndex]
      if (this.confirm) {
        this.confirm(targetItem)
      } else {
        this.$emit('confirm', targetItem)
      }

      this.handleCancel()
    },
    handleCancel() {
      if (this.cancel) {
        this.cancel()
      } else {
        this.$emit('cancel')
      }
    },
    isIconDefaultPattern(icon: string) {
      return !this.isShare && icon.includes('o-')
    },
  },
})
</script>

<style lang="less" scoped>
@import '~@/_style/theme.less';

.popup-action /deep/ .popup-box {
  background: #F6F6F6;
}

.popup-action {

  &-header {
    text-align: center;

    h1 {
      padding: 12px 20px; margin: 0;
      font-size: 16px; line-height: 22px;
    }

    .ad { margin-bottom: 20px; }

  }

  &-list {
    width: 351px; box-sizing: border-box;

    &.share {
      padding: 0 14px;
      display: flex; flex-wrap: wrap; align-items: center;

      .popup-action-item {
        display: flex; flex-direction: column; justify-content: center; align-items: center;
        margin: 0 9px;
        width: 62px; box-sizing: border-box;
        margin-bottom: 16px;
        
        .popup-action-text {
          color: @color; text-align: center;
          font-size: 16px; line-height: 22px;
          margin-top: 6px;
        }
      }

    }

    &.default {
      text-align: center;

      .popup-action-item + .popup-action-item {
        border-top: 1px solid @borderColor;
      }
 
      .popup-action-item {
        padding: 19px 0;
       
        .popup-action-text {
          font-size: 18px; line-height: 18px;
          color: @color;

          &.danger { color: @red; }
        }

      }

    }

    &.with-icon {

      .popup-action-item {
        display: flex; align-items: center;
        padding-left: 16px;

        .popup-action-text { margin-left: 20px; }

        .popup-action-icon { font-size: 24px; }

      }

    }

  }

}

</style>