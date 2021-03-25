<template>
  <div class="toast-wrapper" :class="classObj" v-if="isHide">
    {{ msg }}
  </div>
</template>

<script lang="ts">

import { Component, Prop, Watch, Vue } from 'vue-property-decorator';

@Component
export default class Toast extends Vue {

  @Prop({ default: '' }) readonly msg!: string;
  @Prop({ default: 'client' }) readonly env!: string;
  @Prop({ default: 'default' }) readonly type!: string;

  private isShow: Boolean = true;
  private isHide: Boolean = true;

  private get classObj(): Array<string> {
    let classArray: Array<string> = [ this.env, this.type ];
    if (this.isShow) {
      classArray.push('onShow');
    }
    return classArray;
  }

  private created(): void {
    
  }

  @Watch('isShow')
  onShowChange(val: boolean) {
    if (!val) {
      setTimeout(() => {
        this.isHide = false;
      }, 600);
    }
  }
}

</script>

<style lang="less" scoped>
@import "../style/theme.less";
.toast-wrapper {
  position: fixed; left: 0; right: 0; top: 0; z-index: 1000;
  box-sizing: border-box;
  width: 100%;
  font-size: 16px; color: #fff; text-align: center; line-height: 50px; font-weight: 400;
  opacity: 0;
  transition: opacity .5s ease-in-out;
  
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

  // 是否在客户端运行,决定了高度
  &.other {
    height: 50px;
  }
  &.client {
    padding-top: 30px;
    height: 80px;
  }

  &.onShow {
    opacity: 1;
  }
}
</style>
