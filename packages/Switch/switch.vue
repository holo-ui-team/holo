<template>
  <div class="switch-wrapper" :style="styleObj" @click="switchClick">
    <div class="switch-bg" :class="classObj"></div>
    <div class="switch-round" :class="classObj"></div>
  </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  name: 'OSwitch'
})
export default class Switch extends Vue {

  @Prop({ default: false }) readonly status!: boolean;
  @Prop({ default: false }) readonly disabled!: boolean;
  @Prop({ default: 40 }) readonly width!: number;

  private nowStatus: boolean = false;

  private get styleObj(): Object {
    return {
      width: this.width + 'px'
    }
  }

  private get classObj(): Array<string> {
    let classArray: Array<string> = [ this.nowStatus ? 'is-open' : 'is-close', this.disabled? 'is-disable' : '' ];
    return classArray;
  }

  private switchClick(): void {
    this.nowStatus = !this.nowStatus;
  }

  private created():void {
    if (this.status) {
      this.nowStatus = true;
    } else {
      this.nowStatus = false;
    }
  }

}
</script>

<style lang="less" scoped>
@import "../_style/theme.less";
.switch-wrapper {
  box-sizing: border-box;
  display: inline-block;
  height: 24px;
  position: relative;
  .switch-bg {
    width: 100%; height: 100%;
    border-radius: 24px;
    transition: all 0.5s ease;
    &.is-open {
      background: @switch-background-open-color;
      border: 1px solid @switch-background-open-color;
    }
    &.is-close {
      background: @switch-background-close-color;
      border: 1px solid @switch-round-border-close-color;
    }
  }
  .switch-round {
    width: 24px; height: 24px;
    border-radius: 24px;
    transition: all 0.5s ease;
    position: absolute; top: 0; z-index: 10;
    &.is-open {
      left: 100%;
      transform: translateX(-100%);
      background: #ffffff;
      border: 1px solid @switch-background-open-color;
    }
    &.is-close {
      left: 0;
      transform: translateX(0);
      background: #ffffff;
      border: 1px solid @switch-round-border-close-color;
    }
  }
}
</style>
