<template>
  <div class="point-loading" :class="classObj">
    <dv class="img-box">
      <img :src="loadingImg" />
    </dv>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component({
  name: 'CircleLoading'
})
export default class PointLoading extends Vue {
  @Prop({ default: 'blue' }) readonly theme!: string;
  @Prop({ default: true }) readonly lock!: boolean;

  private get loadingImg(): string {
    let resImgUrl = '';
    if (this.theme === 'blue') {
      resImgUrl = require('../../assets/img/loading_blue.png');
    } else if (this.theme === 'white') {
      resImgUrl = require('../../assets/img/loading_white.png');
    }
    return resImgUrl;
  }

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
@import "../../_style/theme.less";

.point-loading {
  position: absolute; top: 50%; left: 50%;
  transform: translate(-40px, -40px);
  width: 80px; height: 80px;
  border-radius: 8px;
  display: flex; flex-direction: row; justify-content: center; align-items: center;

  .img-box {
    width: 40px; height: 40px;
    animation: rotateAnimation 1.5s linear infinite;
    >img {
      width: 100%; height: 100%;
    }
  }
  
  &.bg-white {
    background: rgba(255, 255, 255, 0.4);
  }
  &.bg-black {
    background: rgba(0, 0, 0, 0.4);
  }

  @keyframes rotateAnimation {
    0% { transform: rotate(0); }
    100% { transform: rotate(360deg); }
  }

}
</style>