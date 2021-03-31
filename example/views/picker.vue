<template>
  <div>
    <section>
      一个简单的Picker
      <OButton size="small" @click="visible = !visible">点击</OButton>
      <Picker :visible="visible" />
    </section>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Picker from '@/Picker/index.vue'
  import OButton from '@/Button/button.vue'

  export default Vue.extend({
    components: {
      Picker,
      OButton
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
</style>