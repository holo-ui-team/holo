<template>
  <SimulateWindow title="toast" bgColor="#ffffff">
    <div class="toast-wapper">
      <div class="item-box" @click="showToast">点击出现toast</div>
    </div>
  </SimulateWindow>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import SimulateWindow from '../../components/simulate-window.vue'
// import Toast from '../../../packages/toast/index'
// Vue.use(Toast)

@Component({
  components: {
    SimulateWindow
  }
})
export default class ButtonExample extends Vue {

  private showToast(): void {
    // console.log(this.$toast)
    this.$toast('show text', 2000);
  }

}

// import Vue from 'vue'
// import Toast from '../../../packages/toast/index.ts'
// Vue.use(Toast)

// import SimulateWindow from '../../components/simulate-window.vue'

// export default {
//   components: {
//     SimulateWindow
//   },
//   methods: {
//     showToast() {
//       // console.log(this.$toast)
//       this.$toast('show text', 2000);
//     }
//   },
//   created() {
    
//   }
// }

</script>

<style lang="less" scoped>
.toast-wapper {
  .item-box {
    margin: 16px 0;
  }
  .item-yl {
    padding: 10px;
  }
}
</style>
