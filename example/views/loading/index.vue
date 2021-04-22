<template>
  <SimulateWindow title="loading" bgColor="#ffffff">
    <div class="loading-wrapper">
      <div class="tips-text" @click="showToast('1')">全局 加载蓝色</div>
      <div class="tips-text" @click="showToast('2')">全局 加载白色</div>
      <div class="tips-text" @click="showToast('3')">局部 加载蓝色</div>
      <div class="tips-text" @click="showToast('4')">局部 加载白色</div>
      <div class="tips-text" @click="showToast('5')">菊花 加载白色 - 还没写待补充</div>
      <div class="tips-text" @click="showToast('6')">菊花 加载蓝色 - 还没写待补充</div>
      <div class="tips-text" @click="showToast('7')">全局 加载蓝色-无遮罩</div>
      <div class="tips-text" @click="showToast('8')">全局 加载白色-无遮罩</div>
      <div class="tips-text" @click="showToast('9')">局部 加载蓝色-无遮罩</div>
      <div class="tips-text" @click="showToast('10')">局部 加载白色-无遮罩</div>
    </div>
  </SimulateWindow>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import SimulateWindow from '../../components/simulate-window.vue'
import Loading from '../../../packages/Loading/index'
Vue.use(Loading)

@Component({
  components: {
    SimulateWindow
  }
})
export default class ButtonExample extends Vue {

  private showToast(type: String): void {
    if (type == '1') {
      this.$loading({ text: '加载中...' });
    } else if (type == '2') {
      this.$loading({ text: '加载中...', theme: 'white' } );
    } else if (type == '3') {
      this.$loading({ text: '加载中...', type: 'circle' } );
    } else if (type == '4') {
      this.$loading({ text: '加载中...', type: 'circle', theme: 'white' } );
    } else if (type == '7') {
      this.$loading({ text: '加载中...', lock: false });
    } else if (type == '8') {
      this.$loading({ text: '加载中...', theme: 'white', lock: false } );
    } else if (type == '9') {
      this.$loading({ text: '加载中...', type: 'circle', lock: false } );
    } else if (type == '10') {
      this.$loading({ text: '加载中...', type: 'circle', theme: 'white', lock: false } );
    }
    // ===== 延时两秒后执行关闭loading ====
    setTimeout(() => {
      this.$hideLoading();
    }, 2000);
  }

}

</script>

<style lang="less" scoped>
.loading-wrapper {
  .tips-text {
    margin: 16px 0;
  }
}
</style>
