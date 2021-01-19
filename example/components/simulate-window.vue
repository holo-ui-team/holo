<template>
  <div class="simulate-wapper">
    <div class="title">{{ title }}
      <div class="back-box" @click="backClick">返回</div>
    </div>
    <div class="main-body" :style="{ background : bgColor }">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class SimulateWindow extends Vue {
  @Prop( { default: '' } ) readonly title!: String;
  @Prop( { default: '#ffffff' } ) readonly bgColor!: String;

  private backClick(): void {
    this.$router.go(-1);
  }

}
</script>

<style lang="less" scoped>
.simulate-wapper {
  box-sizing: border-box;
  width: 100%; max-height: 1000px; min-height: 700px;
  border: 1px solid #ccc;
  .title {
    height: 46px;
    background: #ccc;
    color: #333; font-size: 18px; text-align: center; line-height: 46px;
    position: relative;
    .back-box {
      position: absolute; left: 20px; top: 0;
      font-size: 14px;
    }
  }
  .main-body {
    padding: 16px;
  }
}
</style>
