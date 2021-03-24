<template>
  <div class="point-loading">
    <ul>
      <li></li><li></li><li></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component({
  name: 'PointLoading'
})
export default class PointLoading extends Vue {
  @Prop({ default: 'blue' }) readonly theme!: string;
}
</script>

<style lang="less" scoped>
@import "../../style/theme.less";

.point-loading {
  ul { padding: 0; margin: 0;}
  ul li {
    list-style: none;
    display: inline-block; vertical-align: middle;
    margin-right: 8px;
    width: 8px; height: 8px;
    border-radius: 100%;
    &:first-child {
      opacity: 1;
      animation: opacityChange1 1.5s ease infinite;
    }
    &:last-child {
      margin-right: 0;
      opacity: 0.2;
      animation: opacityChange3 1.5s ease infinite;
    }
    &:nth-child(2) {
      opacity: 0.6;
      animation: opacityChange2 1.5s ease infinite;
    }
  }

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