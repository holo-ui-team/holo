
<template>
  <div>
    <section>
      单选：

      <OButton size="small" @click="visible = !visible">点击</OButton>
      <OPopupOption title="我是标题" :visible="visible" :options="options" single @cancel="visible = !visible" />
    </section>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import OPopupOption from '../../packages/PopupOption/index.vue'
  import OButton from '../../packages/Button/button.vue'

  export default Vue.extend({
    components: {
      OPopupOption,
      OButton
    },
    data() {
      return {
        visible: false,
        options: ['选项1', '选项2', '选项3', '选项4']
      }
    },
  })
</script>

<style scoped>
.button-wrapper {
  width: 100px;
}
</style>