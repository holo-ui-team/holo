<template>
  <div class="radio-wrapper" :class="[size, {disabled}]">

    <label class="radio-label" @click="handleChecked">
      <span v-show="!checked" class="radio-unchecked"></span>
      <Icon v-show="checked" class="radio-checked" name="o-check-filled" />
      <span class="radio-text" :style="{marginLeft: gap + 'px'}">
        <slot>{{label}}</slot>
      </span>
    </label>

  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  // @ts-ignore
  import Icon from '../Icon/index.vue'

  export default Vue.extend({
    name: 'ORadio',
    components: { Icon, },
    props: {
      label   : { type: String, },
      disabled: { type: Boolean, },
      default : { type: Boolean, },
      size    : { type: String, default: 'medium', validator: (val) => ['large', 'medium', 'small'].indexOf(val) >= 0 },
      gap     : { type: Number, default: 12 }
    },
    data() {
      return {
        checked: false
      }
    },
    created () {
      if (this.default) {
        this.checked = true
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
@import '~@/style/theme.less';

.radio-wrapper {
  font-size: 0;

  &.large {

    .radio-checked { font-size: 24px; }
    .radio-unchecked { width: 24px; height: 24px; }
  }

  &.medium {

    .radio-checked { font-size: 20px; }
  }

  &.small {

    .radio-checked { font-size: 16px; }
    .radio-unchecked { width: 16px; height: 16px; }
  }

  &.disabled {
    .radio-unchecked { background-color: @borderColor;}
    .radio-checked { color: @borderColor; }
  }
  
}

.radio-label {
  display: inline-flex; align-items: center;
  user-select: none;
}

.radio-text {
  font-size: 16px; color: @color;
}

.radio-unchecked {
  display: inline-block; box-sizing: border-box;
  width: 20px; height: 20px;
  border-radius: 50%;
  border: 1px solid @grayish;
}

.radio-checked {
  color: @themeColor;
  line-height: 1;
}
</style>