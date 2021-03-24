<template>
  <div class="loading-wapper">
    <!-- <div v-if="type == 'global'" class="global">
      <div class="mask"></div>
      <div class="main-body">
        <div class="global-loading" v-if="type == 'global'">
          <ul>
            <li></li><li></li><li></li>
          </ul>
        </div>
      </div>
    </div>
    <div v-if="type == 'local'" class="local">
      <img :src="loadingImg" />
    </div> -->
    <PointLoading v-if="type == 'point'" :theme="theme"></PointLoading>
  </div>
</template>

<script lang="ts">

import PointLoading from './components/loading-point.vue'

import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {
    PointLoading
  }
})
export default class Loading extends Vue {

  @Prop({ default: 'point' }) readonly type!: string;
  @Prop({ default: 'blue' }) readonly theme!: string;
  @Prop({ default: true }) readonly lock!: boolean; // 默认loading时加锁,不可执行任何操作
  @Prop({ default: 'white' }) readonly maskType!: string;

  // private get classObj(): Array<string> {
  //   let classArray: Array<string> = [ this.lock ? 'lock' : 'no-lock', this.type, this.theme ];
  //   if (this.lock) {
  //     classArray.push( 'bg-' + this.maskType );
  //   }
  //   return classArray
  // }

  // private get loadingImg(): string {
  //   let resImgUrl = '';
  //   if (this.type === 'point' && this.theme === 'blue') {
  //     resImgUrl = require('../assets/img/loading_blue.png');
  //   } else if (this.type === 'circle' && this.theme === 'white') {
  //     resImgUrl = require('../assets/img/loading_white.png');
  //   }
  //   return resImgUrl;
  // }

  private created(): void {
    console.log(this.type);
  }

}

</script>

<style lang="less" scoped>
@import "../style/theme.less";
.loading-wapper {
  &.lock {
    position: fixed; left: 0; top: 0; bottom: 0; right: 0;
    .mask {
      width: 100%; height: 100%;
    }

    &.bg-white {
      background: rgba(255, 255, 255, 0.4);
    }

    .main-body {
      position: absolute; top: 50%; left: 50%;
      transform: translate(-40px, -40px);
      background: transparent;
    }
  }
  &.no-lock {
    width: 80px; height: 80px;
    background: #EBEBEB;
    border-radius: 8px;
  }

}
</style>
