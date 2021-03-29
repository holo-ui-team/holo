<template>
  <div class="radio-wrapper">

    <label class="radio-label-wrapper" :class="size" @click="handleChecked">
      <span v-show="!checked" class="radio-unchecked"></span>
      <Icon v-show="checked" class="radio-checked" name="o-check-filled" />
      <span v-if="label" class="radio-text">{{label}}</span>
    </label>

  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Icon from '../Icon/index.vue'

  export default Vue.extend({
    name: 'ORadio',
    components: { Icon, },
    props: {
      label   : { type: String, },
      disabled: { type: Boolean, },
      default : { type: Boolean, },
      size    : { type: String, default: 'medium', validator: (val) => ['large', 'medium', 'small'].indexOf(val) >= 0 }
    },
    data() {
      return {
        checked: false
      }
    },
    methods: {
      handleChecked() {
        if (this.disabled) return

        this.checked = !this.checked 
        this.$emit('checked', this.checked)
      }
    },
  })
</script>

<style lang="less" scoped>
@import '~@/assets/theme.less';

</style>