<template>
  <SimulateWindow title="switch" bgColor="#ffffff">
    <div class="switch-wrapper">
      <oSwitch></oSwitch>
    </div>
  </SimulateWindow>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import SimulateWindow from '../../components/simulate-window.vue'
import oSwitch from '../../../packages/Switch/switch.vue'

@Component({
  components: {
    SimulateWindow,
    oSwitch
  }
})
export default class ButtonExample extends Vue {}

</script>

<style lang="less" scoped>
.switch-wrapper {
  .tips-text {
    margin: 16px 0;
  }
}
</style>
