<template>
  <div class="toast-wapper" :class="classObj" v-if="isShow">
    {{ msg }}
  </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Toast extends Vue {

  @Prop({ default: '' }) readonly msg!: String;
  @Prop({ default: 'client' }) readonly env!: String;
  @Prop({ default: 'default' }) readonly type!: string;

  private isShow: Boolean = true;

  private get classObj(): Array<String> {
    let classArray: Array<String> = [ this.env, this.type ];
    return classArray;
  }
}

</script>

<style lang="less" scoped>
@import "../style/theme.less";
.toast-wapper {
  position: fixed; left: 0; right: 0; top: 0; z-index: 1000;
  box-sizing: border-box;
  width: 100%;
  font-size: 16px; color: #fff; text-align: center; line-height: 50px; font-weight: 400;
  
  // 场景决定背景色
  &.default {
    background: @toast-background-default-color;
  }
  &.success {
    background: @toast-background-success-color;
  }
  &.warning {
    background: @toast-background-warning-color;
  }

  // 是否在客户端运行
  &.other {
    height: 50px;
  }
  &.client {
    padding-top: 30px;
    height: 80px;
  }
}
</style>
