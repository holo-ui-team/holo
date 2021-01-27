<template>
  <div>
    <section>
      默认引用 <o-icon></o-icon>
    </section>
    
    <section>
      使用内置的icon，请传入对应的name属性 <o-icon name="o-loading"></o-icon>
    </section>

    <section>
      使用内置的icon支持字体、颜色等的设置 
      <o-icon class="customClass"></o-icon>
      <o-icon class="customClass" title="哈咯哈"></o-icon>
    </section>

    <section>
      支持传入图片作为icon，请传入对应的url、with、type，默认通过background引入图片，也支持通过img标签引入图片（可配置）

      <section>
        通过默认的background引入图片icon
        <o-icon url="https://cdn.133.cn/gtgjwap/Image/tmcShanglv/icons/train@2x.png" :width="26" :height="20"></o-icon>
      </section>

      <section>
        通过配置type为img，设置为img标签引入图片
        <o-icon type="img" url="https://cdn.133.cn/gtgjwap/Image/tmcShanglv/icons/train@2x.png" :width="26" :height="20"></o-icon>
      </section>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Icon from '@/Icon/index.vue'

export default Vue.extend({
  components: {
    oIcon: Icon
  }
})
</script>

<style scoped>
.customClass {
  color: red;
  font-size: 20px;
}
</style>