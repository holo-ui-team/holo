<template>
  <PopupBox :visible.sync="visible" :maskClosable="maskClosable" @cancel="handleCancel">

    <div class="popup">
      <header v-if="title" class="popup-title">
        {{title}}
      </header>

      <main class="popup-content" :class="{'without-title': !title}">
        {{content}}
        <div class="popup-custom-content">
          <slot/>
        </div>
      </main>

      <div class="popup-button-wrapper" :class="['button-length-' + buttonLength]">
        <Button :theme="primaryButtonTheme" @click="handleConfirm">{{primaryButtonText}}</Button>
        <Button v-if="secondaryButtonText" theme="gray" @click="handleCancel">{{secondaryButtonText}}</Button>
        <Button v-if="lastButtonText" theme="gray" @click="handleCancel2">{{lastButtonText}}</Button>
      </div>
    </div>

  </PopupBox>
</template>

<script lang="ts">
import Vue from 'vue'
import PopupBox from '../_helper/popupBox.vue'
import Button from '../Button/button.vue'

export default Vue.extend({
  name      : 'OPopup',
  components: {
    PopupBox, Button
  },
  props: {
    visible            : { type: Boolean },
    maskClosable       : { type: Boolean, default: true },
    title              : { type: String, },
    content            : { type: String, },
    type               : { type: String, default: 'default', validator: (val) => ['default', 'alert'].indexOf(val) >= 0 },
    primaryButtonText  : { type: String, default: '确定' },
    secondaryButtonText: { type: String },
    lastButtonText     : { type: String },
    confirm            : { type: Function },
    cancel             : { type: Function },
    cancel2            : { type: Function },
  },
  computed: {
    buttonLength() {
      let baseLength = 1
      if (this.secondaryButtonText) {
        baseLength += 1
      }
      if (this.lastButtonText) {
        baseLength += 1
      }
      return baseLength
    },
    primaryButtonTheme() {
      return this.type === 'alert' ? 'red' : 'blue'
    }
  },
  methods: {
    handleConfirm() {
      if (this.confirm) {
        this.confirm()
      } else {
        this.$emit('confirm')
      }
    },
    handleCancel() {
      if (this.cancel) {
        this.cancel()
      } else {
        this.$emit('cancel')
      }
    },
    handleCancel2() {
      if (this.cancel2) {
        this.cancel()
      } else {
        this.$emit('cancel2')
      }
    }
  },
})
</script>

<style lang="less" scoped>
@import '~@/style/theme.less';

@buttonGap: 10px;
.popup {
  padding: 20px 16px 16px;

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
</style>