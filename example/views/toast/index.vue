<template>
  <SimulateWindow title="toast" bgColor="#ffffff">
    <div class="toast-wrapper">
      <div class="tips-text" @click="showToast('1')">点击展示 客户端 默认提示</div>
      <div class="tips-text" @click="showToast('2')">点击展示 客户端 成功提示</div>
      <div class="tips-text" @click="showToast('3')">点击展示 客户端 警告提示</div>
      <div class="tips-text" @click="showToast('4')">点击展示 第三方 默认提示</div>
      <div class="tips-text" @click="showToast('5')">点击展示 第三方 成功提示</div>
      <div class="tips-text" @click="showToast('6')">点击展示 第三方 警告提示</div>
    </div>
  </SimulateWindow>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import SimulateWindow from '../../components/simulate-window.vue'
import Toast from '../../../packages/Toast/index'
Vue.use(Toast)

@Component({
  components: {
    SimulateWindow
  }
})
export default class ButtonExample extends Vue {

  private showToast(type: String): void {
    if (type == '1') {
        this.$toast('客户端默认提示');
      } else if (type == '2') {
        this.$toast('客户端成功提示', 2000, 'client', 'success');
      } else if (type == '3') {
        this.$toast('客户端警告提示', 2000, 'client', 'warning');
      } else if (type == '4') {
        this.$toast('第三方默认提示', 3000, 'other');
      } else if (type == '5') {
        this.$toast('第三方成功提示', 3000, 'other', 'success');
      } else if (type == '6') {
        this.$toast('第三方警告提示', 3000, 'other', 'warning');
      }
  }

}

</script>

<style lang="less" scoped>
.toast-wrapper {
  .tips-text {
    margin: 16px 0;
  }
}
</style>
