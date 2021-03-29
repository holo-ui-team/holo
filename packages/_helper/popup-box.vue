<template>
  <BgMask :visible="visible" :maskClosable="maskClosable" @cancel="$emit('cancel')">

    <div class="popup-box">
      <header v-if="title" class="popup-box-header" :class="{'with-subtitle': subTitle}">
        <h1>{{title}}</h1>
        <p v-if="subTitle">{{subTitle}}</p>
      </header>

      <div v-if="actionVisible" class="popup-box-top-action">
        action
      </div>

      <div class="popup-box-content">
        <slot/>
      </div>

      <footer v-if="footerVisible" class="popup-box-footer">
        <PopupBox></PopupBox>
      </footer>
    </div>

  </BgMask>
</template>

<script lang="ts">
import Vue from 'vue'
import BgMask from './bg-mask.vue'

export default Vue.extend({
  name: 'PopupBox',
  components: {
    BgMask
  },
  props: {
    visible      : { type: Boolean },
    maskClosable : { type: Boolean, default: true },
    title        : { type: String },
    subTitle     : { type: String },
    actionVisible: { type: Boolean },
    footerVisible: { type: Boolean }
  },
})
</script>

<style lang="less" scoped>
@import '~@/style/theme.less';

.popup-box {
  min-width: 351px;
  background: #fafafa;
  border-radius: 12px;

  &-header {
    padding: 14px 0 12px;
    background: #F4F4F4;
    text-align: center;
    border-radius: 12px 12px 0 0;

    &.with-subtitle {
      padding: 15px 0 15px;
    }

    h1 {
      font-size: 16px; line-height: 16px;
      color: @color;
    }

    p {
      margin-top: 10px;
      color: @gray;
      font-size: 14px; line-height: 14px;
    }
  }
}
</style>