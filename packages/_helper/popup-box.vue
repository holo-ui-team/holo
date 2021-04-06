<template>
  <OMask :visible="visible" :maskClosable="maskClosable" @cancel="$emit('cancel')">

    <div class="popup-box">
      <header class="popup-box-header">

        <div v-if="title" class="header-title" :class="{'with-subtitle': subTitle}">
          <h1>{{title}}</h1>
          <p v-if="subTitle">{{subTitle}}</p>
        </div>

        <div v-if="actionVisible" class="top-action">
          <span class="text-button cancel" @click="$emit('cancel')">取消</span>
          <span v-if="title" class="action-title">{{title}} 请选择</span>
          <span class="text-button confirm" @click="$emit('confirm')">确定</span>
        </div>

      </header>


      <div class="popup-box-content">
        <slot/>
      </div>

      <footer v-if="footerVisible" class="popup-box-footer">
        <PopupBox></PopupBox>
      </footer>
    </div>

  </OMask>
</template>

<script lang="ts">
import Vue from 'vue'
import OMask from '../Mask/index.vue'

export default Vue.extend({
  name: 'PopupBox',
  components: {
    OMask
  },
  props: {
    visible      : { type: Boolean, required: true },
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
  overflow: hidden;

  &-header {
    background: #F4F4F4;
    text-align: center;
    border-radius: 12px 12px 0 0;

    .heander-title {
      padding: 15px 0 15px;

      &.with-subtitle {
        padding: 14px 0 12px;
      }

      h1 {
        font-size: 16px; line-height: 16px;
        margin: 0;
        color: @color;
      }

      p {
        margin: 10px 0 0 0;
        color: @gray;
        font-size: 14px; line-height: 14px;
      }
    }

    .top-action {
      display: flex; justify-content: space-between; align-items: center;

      .action-title {
        font-weight: bold;
        font-size: 16px;
      }

      .text-button {        
        display: inline-block;
        padding: 12px 20px;
        font-size: 16px; line-height: 22px;
        cursor: default; user-select: none;

        &.cancel {
          color: @color;
        }

        &.confirm {
          color: @themeColor;
          font-weight: bold;
        }
      }
    }

  }


}
</style>