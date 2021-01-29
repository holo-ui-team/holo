<template>
  <SimulateWindow title="switch" bgColor="#ffffff">
    <div class="loading-wapper">
      <div class="tips-text" @click="showToast('1')">全局 加载蓝色</div>
      <div class="tips-text" @click="showToast('2')">全局 加载白色</div>
      <div class="tips-text" @click="showToast('3')">局部 加载蓝色</div>
      <div class="tips-text" @click="showToast('4')">局部 加载白色</div>
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
        this.$loading('加载中...');
      } else if (type == '2') {
        this.$loading({ text: '加载中...', theme: 'white' } );
      } else if (type == '3') {
        this.$loading({ text: '加载中...', type: 'local' } );
      } else if (type == '4') {
        this.$loading({ text: '加载中...', type: 'local', theme: 'white' } );
      } else if (type == '5') {
        
      } else if (type == '6') {
        
      }
  }

}

</script>

<style lang="less" scoped>
.loading-wapper {
  .tips-text {
    margin: 16px 0;
  }
}
</style>
