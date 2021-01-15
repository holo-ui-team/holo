<template>
  <div class="cxj-button">
    <div class="flex1"></div>
    <div class="main-text" @click="demoClick">{{ msg + mainText }}</div>
    <div class="flex1"></div>
    <div class="desc-text">{{ descText }}</div>
    <div class="flex1"></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class Button extends Vue {
  msg='默认的文字'; // 相当于 data() { return {} }
  @Prop({ default: "" })
  mainText!: string;
  @Prop({ default: "" })
  descText!: string;
  private created(): void {
    console.log('created', this.mainText);
  }
  private mounted(): void {
    console.log('mounted', this.mainText);
  }

  private demoClick() {
    // methods
    console.log('这个文字被惦记了')
  }
}

// export default {
//   name: 'buttonCom',
//   props: {
//     mainText: {
//       type: String
//     },
//     descText: {
//       type: String
//     }
//   }
// }
</script>

<style scoped lang="less">
@import "../../../packages/style/less.less";
.cxj-button {
  display: flex;
  background-color: #1188ff;
}
</style>
