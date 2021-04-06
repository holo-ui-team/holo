<template>
  <PopupBox :visible.sync="visible" :maskClosable="maskClosable" :footerVisible="true" @cancel="handleCancel">

    <main class="popup-action-wrapper">
      <div v-if="type === 'share'" class="popup-action-header">
        <div v-if="ad" class="ad"></div>
        <h1 v-else>分享到</h1>
      </div>

      <div class="popup-action-content" :class="actionClasses">
      </div>
    </main>

  </PopupBox>
</template>

<script lang="ts">
import Vue from 'vue'
import { PropType } from 'node_modules/vue/types/umd'
import PopupBox from '@/_helper/popup-box.vue'
import Button from '@/Button/button.vue'
import Icon from '@/Icon/index.vue'
import {Action} from './type'

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
    icon               : { type: String, },
    iconColor          : { type: String, },
    cancel             : { type: Function },
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
    isIconDefaultPattern(): boolean {
      return this.icon && this.icon.indexOf('o-') === 0 || false
    },
    actionClasses() {
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
    }
  },
  methods: {
    handleConfirm() {
    },
    handleCancel() {
      if (this.cancel) {
        this.cancel()
      } else {
        this.$emit('cancel')
      }
    },
  },
})
</script>

<style lang="less" scoped>
@import '~@/style/theme.less';

@buttonGap: 10px;
.popup {
  padding: 20px 16px 16px;

  &-icon {
    margin-bottom: 20px;
    text-align: center;

    .holo-icon {      
      font-size: 54px;
    }
  }

  &-title {
    margin-bottom: 12px;
  }

  &-content {
    color: @gray;
    font-size: 16px; line-height: 22px;
    margin-bottom: 48px;
  }

  &-title, .without-title {
    color: @color;
    font-weight: bold; text-align: left;
    font-size: 18px; line-height: 25px;
  }

  &-button-wrapper {
    &.button-length-2 {
      display: flex; justify-content: space-between;

      .button-wrapper:first-child {
        order: 1;
        margin-left: @buttonGap;
      }
    }

    &.button-length-3 {
      display: flex; flex-direction: column;

      .button-wrapper + .button-wrapper {
        margin-top: @buttonGap;
      }
    }
  }
}

// csy:todo 需要确定是POPUP单独处理，还是在button里面需要加上
.button-wrapper.gray {
  border: 1px solid @borderColor;
}