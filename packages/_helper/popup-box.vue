<template>
  <OMask class="popup-box-mask" :visible="visible" :maskClosable="maskClosable" @cancel="$emit('cancel')">

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
        
      </div>

    <footer v-if="footerVisible" class="popup-box-footer">
      <div class="popup-box-cancel" @click="$emit('cancel')">取消</div>
    </footer>

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
    footerVisible: { type: Boolean },
  },
})
</script>

<style lang="less" scoped>
@import '~@/_style/theme.less';

.popup-box {
  min-width: 351px;
  background: #fafafa;
  border-radius: 12px;
  overflow: hidden;

  &-mask {
    & /deep/ .bg-mask-content {
      bottom: 12px;
    }
  }

  &-header {
    background: #F4F4F4;
    text-align: center;
    border-radius: 12px 12px 0 0;

    .header-title {
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


  &-footer {
    text-align: center;
    margin-top: 8px;
    
    .popup-box-cancel {
      padding: 19px 0;
      font-size: 18px; line-height: 18px;
      color: @color; background: #ffffff; border-radius: 12px;
    }
  }

}

@media screen and (max-width: 550px) {
  .popup-box-mask /deep/ .bg-mask-content {
    width: 100%;
  }
  .popup-box {
    min-width: unset;
  }

  .popup-box, .popup-box-footer {
    margin-left: 12px;
    margin-right: 12px;
  }

}
</style>