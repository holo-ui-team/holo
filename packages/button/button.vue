<template>
  <button class="button-wrapper" :disabled="disabled || icon == 'loading'" :class="classObj" @click="btnClick" @touchstart="emptyFun" @touchend="emptyFun">
    <img class="icon-box left" v-if="imgUrl && iconPosition == 'left'" :src="imgUrl" />
    <span><slot></slot></span>
    <img class="icon-box right" v-if="imgUrl && iconPosition == 'right'" :src="imgUrl" />
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  name: 'oButton'
})
export default class Button extends Vue {
  // msg='默认的文字'; // 相当于 data() { return {} }
  @Prop({ default: 'big' }) readonly size!: string;
  @Prop({ default: 'primary' }) readonly type!: string;
  @Prop({ default: 'blue' }) readonly theme!: string;
  @Prop({ default: true }) readonly round!: boolean;
  @Prop({ default: false }) readonly disabled!: boolean;
  @Prop({ default: '' }) readonly icon!: string;
  @Prop({ default: 'left' }) readonly iconPosition!: string;

  private get classObj(): Array<string> {
    let classArray: Array<string> = [ this.size, this.type, this.theme ];
    if (this.round) {
      classArray.push('is-round');
    }
    if (this.disabled) {
      classArray.push('is-disabled');
    }
    return classArray;
  }

  private get imgUrl(): string {
    let resImgUrl = '';
    if (this.icon === 'search') {
      resImgUrl = require('../assets/img/search_white.png');
    } else if (this.icon === 'loading') {
      resImgUrl = require('../assets/img/loading_white.png');
    } else if (this.icon !== '') {
      resImgUrl = this.icon;
    }
    return resImgUrl;
  }


  private emptyFun(): void {
    // 只是为了解决ios点击时 无法触发 active 样式添加，无实际意义
  }
  private btnClick(): void {
    if (!this.disabled) {
      this.$emit('click');
    }
  }
}
</script>

<style scoped lang="less">
@import "../style/theme.less";
.button-wrapper {
  // display: inline-block;
  width: 100%;
  // 大小
  &.big {
    height: @button-size-big-height;
    font-size: @button-size-big-fontSize; font-weight: 400; line-height: @button-size-big-height; text-align: center;
  }
  &.medium {
    height: @button-size-medium-height;
    font-size: @button-size-medium-fontSize; font-weight: 400; line-height: @button-size-medium-height; text-align: center;
  }
  &.small {
    display: inline-block;
    box-sizing: border-box;
    padding: 5px 16px;
    font-size: 14px; font-weight: 400;
  }

  // 主题
  &.blue {
    background: @themeColor;
    color: #ffffff;
    &:active {
      background: @themeColorActive;
      span {
        opacity: 0.6;
      }
    }
    &:disabled {
      background: @themeColor;
      span {
        opacity: 0.6;
      }
    }
  }
  &.gray {
    background: #ffffff;
    color: @color;
  }
  &.red {
    background: @red;
    color: #ffffff;
    &:active {
      background: @redColorActive;
      span {
        opacity: 0.6;
      }
    }
    &:disabled {
      background: @red;
      span {
        opacity: 0.6;
      }
    }
  }

  // 类型
  &.ghost {
    &.blue {
      background: none;
      border: 1px solid @themeColor;
      color: @themeColor;
      &:active {
        opacity: 0.6;
        span {
          opacity: 1;
        }
      }
      &:disabled {
        border-color: rgba(0,0,0,0.2);
        span {
          opacity: 0.2;
          color: @color;
        }
      }
    }
  }

  // 图标
  .icon-box {
    width: 20px; height: 20px;
    display: inline-block; vertical-align: middle;
    line-height: 0;
    &.left{
      margin-right: 10px;
    }
    &.right {
      margin-left: 10px;
    }
  }


  // 是否圆角
  &.is-round {
    border-radius: 4px;
  }

  // 是否禁用
  &.is-disabled {
    opacity: 0.6;
    cursor: no-drop;
  }

  

}
</style>
