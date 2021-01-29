<template>
  <div class="loading-wapper" :class="classObj">
    <div v-if="type == 'global'" class="global">
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
    </div>
  </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Loading extends Vue {

  @Prop({ default: 'global' }) readonly type!: string;
  @Prop({ default: 'blue' }) readonly theme!: string;
  @Prop({ default: true }) readonly lock!: boolean; // 默认loading时加锁,不可执行任何操作
  @Prop({ default: 'white' }) readonly maskType!: string;

  private get classObj(): Array<string> {
    let classArray: Array<string> = [ this.lock ? 'lock' : 'no-lock', this.type, this.theme ];
    if (this.lock) {
      classArray.push( 'bg-' + this.maskType );
    }
    return classArray
  }

  private get loadingImg(): string {
    let resImgUrl = '';
    if (this.type === 'local' && this.theme === 'blue') {
      resImgUrl = require('../assets/img/loading_blue.png');
    } else if (this.type === 'local' && this.theme === 'white') {
      resImgUrl = require('../assets/img/loading_white.png');
    }
    return resImgUrl;
  }

}

</script>

<style lang="less" scoped>
@import "../style/theme.less";
.loading-wapper {
  &.local {
    width: 24px; height: 24px;
    .local {
      width: 100%; height: 100%;
    }
  }
  
  // .main-body {
  //   width: 80px; height: 80px;
  //   display: flex; flex-direction: row; justify-content: center; align-items: center;
  //   background: #EBEBEB;
  // }
  // &.lock {
  //   position: fixed; left: 0; top: 0; bottom: 0; right: 0;
  //   .mask {
  //     width: 100%; height: 100%;
  //   }

  //   &.bg-white {
  //     background: rgba(255, 255, 255, 0.4);
  //   }

  //   .main-body {
  //     position: absolute; top: 50%; left: 50%;
  //     transform: translate(-40px, -40px);
  //     background: transparent;
  //   }
  // }
  // &.no-lock {
  //   width: 80px; height: 80px;
  //   background: #EBEBEB;
  //   border-radius: 8px;
  // }

  // .global-loading {
  //   ul { padding: 0; margin: 0;}
  //   ul li {
  //     list-style: none;
  //     display: inline-block; vertical-align: middle;
  //     margin-right: 8px;
  //     width: 8px; height: 8px;
  //     border-radius: 100%;
  //     &:first-child {
  //       opacity: 1;
  //       animation: opacityChange1 1.5s ease infinite;
  //     }
  //     &:last-child {
  //       margin-right: 0;
  //       opacity: 0.2;
  //       animation: opacityChange3 1.5s ease infinite;
  //     }
  //     &:nth-child(2) {
  //       opacity: 0.6;
  //       animation: opacityChange2 1.5s ease infinite;
  //     }
  //   }
  // }

  // &.blue {
  //   .global-loading ul li {
  //     background: @themeColor;
  //   }
  // }

  // &.white {
  //   .main-body {
  //     background: #333;
  //   }
  //   .global-loading ul li {
  //     background: #fff;
  //   }
  // }


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
