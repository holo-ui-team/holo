<template>
  <BgMask :visible="visible" :maskClosable="maskClosable" @cancel="$emit('cancel')">

    <div class="popup-box">
      <header v-if="title" class="popup-box-header">
        header
      </header>

      <div v-if="actionVisible" class="popup-box-top-action">
        action
      </div>

      <div class="popup-box-content">
        <slot/>
      </div>

      <footer v-if="footerVisible" class="popup-box-footer">
        <PopupBox></PopupBox>
      </footer>
    </div>

  </BgMask>
</template>

<script lang="ts">
import Vue from 'vue'
import BgMask from './bgMask.vue'

export default Vue.extend({
  name: 'PopupBox',
  components: {
    BgMask
  },
  props: {
    visible      : { type: Boolean },
    maskClosable : { type: Boolean, default: true },
    title        : { type: String },
    desc         : { type: String },
    actionVisible: { type: Boolean },
    footerVisible: { type: Boolean }
  },
})
</script>

<style lang="less" scoped>
.popup-box {
  min-width: 351px;
  background: #fafafa;
  border-radius: 12px;
}
</style>