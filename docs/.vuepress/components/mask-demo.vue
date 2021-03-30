<template>
  <div>
      <OButton size="small" @click="visible = !visible">点击</OButton>
      <OMask :visible="visible" @cancel="visible = !visible">
        <div class="box">
          我是自定义的内容，哈哈哈哈
        </div>
      </OMask>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import OButton from '@/Button/button.vue'
  import OMask from '@/Mask/index.vue'

  export default Vue.extend({
    components: {
      OButton, OMask
    },
    data() {
      return {
        visible: false
      }
    },
  })
</script>

<style scoped>
.button-wrapper {
  width: 100px;
}
.box {
  background: white;
  padding: 10px;
}
</style>