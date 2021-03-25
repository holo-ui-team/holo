<template>
  <div class="point-loading" :class="classObj">
    <ul>
      <li></li><li></li><li></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component({
  name: 'PointLoading'
})
export default class PointLoading extends Vue {
  @Prop({ default: 'blue' }) readonly theme!: string;
  @Prop({ default: true }) readonly lock!: boolean;

  private get classObj(): Array<string> {
    let classArray: Array<string> = [ this.theme ];
    if ( !this.lock ) {
      classArray.push( 'bg-' + (this.theme === 'blue' ? 'white' : 'black') );
    }
    return classArray;
  }

}
</script>

<style lang="less" scoped>
@import "../../style/theme.less";

.point-loading {
  position: absolute; top: 50%; left: 50%;
  transform: translate(-40px, -40px);
  width: 80px; height: 80px;
  border-radius: 8px;
  display: flex; flex-direction: row; justify-content: center; align-items: center;
  ul { padding: 0; margin: 0;}
  ul li {
    list-style: none;
    display: inline-block; vertical-align: middle;
    margin-right: 8px;
    width: 8px; height: 8px;
    border-radius: 100%;
    &:first-child {
      opacity: 1;
      animation: opacityChange1 1.5s ease infinite;
    }
    &:last-child {
      margin-right: 0;
      opacity: 0.2;
      animation: opacityChange3 1.5s ease infinite;
    }
    &:nth-child(2) {
      opacity: 0.6;
      animation: opacityChange2 1.5s ease infinite;
    }
  }

  &.blue {
    ul li {
      background: #1188ff;
    }
  }
  &.white {
    ul li {
      background: #ffffff;
    }
  }

  &.bg-white {
    background: rgba(255, 255, 255, 0.4);
  }
  &.bg-black {
    background: rgba(0, 0, 0, 0.4);
  }

  @keyframes opacityChange1 {
    0% { opacity: 1; }
    50% { opacity: 0.2; }
    100% { opacity: 1; }
  }
  @keyframes opacityChange2 {
    0% { opacity: 0.6; }
    25% { opacity: 1; }
    50% { opacity: 0.6; }
    75% { opacity: 1; }
    100% { opacity: 0.6; }
  }
  @keyframes opacityChange3 {
    0% { opacity: 0.2; }
    50% { opacity: 1; }
    100% { opacity: 0.2; }
  }
}
</style>