<template>
  <div class="loading-wrapper" :class="classObj" v-if="!isHide">
    <div v-if="lock" class="mask"></div>
    <PointLoading v-if="type == 'point'" :lock="lock" :theme="theme"></PointLoading>
    <CircleLoading v-if="type == 'circle'" :lock="lock" :theme="theme"></CircleLoading>
  </div>
</template>

<script lang="ts">

import PointLoading from './components/loading-point.vue'
import CircleLoading from './components/loading-circle.vue'

import { Component, Prop, Watch, Vue } from 'vue-property-decorator';

@Component({
  name: 'OLoading',
  components: {
    PointLoading,
    CircleLoading
  }
})
export default class Loading extends Vue {

  @Prop({ default: 'point' }) readonly type!: string;
  @Prop({ default: 'blue' }) readonly theme!: string;
  @Prop({ default: true }) readonly lock!: boolean; // 默认loading时加锁,不可执行任何操作
  @Prop({ default: '' }) readonly maskType!: string;

  private isHide: Boolean = false;

  private get classObj(): Array<string> {
    let classArray: Array<string> = [ this.lock ? 'lock' : 'no-lock' ];
    if ( this.lock ) {
      if (this.maskType !== '') {
        classArray.push( 'bg-' + this.maskType );
      } else {
        classArray.push( 'bg-' + (this.theme === 'blue' ? 'white' : 'black') );
      }
    }
    return classArray;
  }

  @Watch('isHide')
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
@import "../_style/theme.less";
.loading-wrapper {
  &.lock {
    position: fixed; left: 0; top: 0; bottom: 0; right: 0; z-index: 999;
    .mask {
      width: 100%; height: 100%;
    }

    &.bg-white {
      background: rgba(255, 255, 255, 0.4);
    }
    &.bg-transparent {
      background: rgba(255, 255, 255, 0);
    }
    &.bg-black {
      background: rgba(0, 0, 0, 0.4);
    }
  }
}
</style>
