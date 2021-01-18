<template>
  <SimulateWindow title="按钮" bgColor="#ffffff">
    <div class="button-wapper">
      <div class="item-box"><oButton @click="btnClick">蓝色 / 默认</oButton></div>
      <div class="item-box"><oButton :round="false">蓝色 / 非圆角</oButton></div>
      <div class="item-box"><oButton :disabled="true">蓝色 / 禁用</oButton></div>
      <div class="item-box"><oButton size="medium">蓝色 / 中</oButton></div>
      <div class="item-box"><oButton size="small">蓝色 / 小</oButton></div>
      <div class="item-box"><oButton theme="gray">灰色 / 默认</oButton></div>
      <div class="item-box"><oButton :disabled="true" theme="gray">灰色 / 禁用</oButton></div>
      <div class="item-box"><oButton theme="red">红色 / 默认</oButton></div>
      <div class="item-box"><oButton :disabled="true" theme="red">红色 / 禁用</oButton></div>
      <div class="item-box"><oButton size="small" :round="false" type="ghost">蓝色 / 镂空 / 非圆角</oButton></div>
      <div class="item-box"><oButton size="small" type="ghost" :disabled="true">蓝色 / 镂空 / 禁用</oButton></div>
      <div class="item-box"><oButton icon="search"></oButton></div>
      <div class="item-box"><oButton icon="loading">加载中...</oButton></div>
      <div class="item-box"><oButton icon="https://cdn.133.cn/gtgjwap/Image/gtTravel/my-like-white.png" iconPosition="right">收藏</oButton></div>
    </div>
  </SimulateWindow>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import SimulateWindow from '../../components/simulate-window.vue'
import oButton from '../../../packages/button/button.vue'

@Component({
  components: {
    SimulateWindow,
    oButton
  }
})
export default class ButtonExample extends Vue {

private btnClick(): void {
  console.log('点击了按钮');
}

}

</script>

<style lang="less" scoped>
.button-wapper {
  .item-box {
    margin: 16px 0;
  }
  .item-yl {
    padding: 10px;
  }
}
</style>
