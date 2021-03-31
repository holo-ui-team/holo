<template>
  <PopupBox :visible.sync="visible" :maskClosable="maskClosable" @cancel="handleCancel"
    :title="title" :subTitle="subTitle" :actionVisible="true">

    <div class="picker-wrapper">
      
    </div>

  </PopupBox>
</template>

<script lang="ts">
  import Vue from 'vue'
  import PopupBox from '../_helper/popup-box.vue'

  export default Vue.extend({
    name: 'OPicker',
    components: { PopupBox },
    props: {
      visible      : { type: Boolean, required: true },
      maskClosable : { type: Boolean, default: true },
    },
    methods: {
      handleCancel() {
        
      }
    },
  })
</script>

<style scoped>

</style>