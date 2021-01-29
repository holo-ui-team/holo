<template>
  <img v-if="usePattern === 'img'" :src="imgSrc" :width="width" :height="height" :alt="title">
  <i v-else class="holo-icon" :class="iconClass" :style="iconStyle" :title="title"></i>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    name: { type: String, default: 'o-check', validator: (val) => /^o-/.test(val) },
    title: { type: String },
    type: { type: String, default: 'css', validator: (val) => ['img', 'css'].indexOf(val) >= 0 },
    url: { type: String, default: '' },
    width: { type: Number, default: 10 },
    height: { type: Number, default: 10 }
  },
  data() {
    return {
      iconClass: '',
      iconStyle: {},
      imgSrc: ''
    }
  },
  computed: {
    usePattern(): string {
      return this.url ? this.type : 'default'
    }
  },
  created() {
    const handleMap = {
      'default': 'handleDefault',
      'css': 'handleCss',
      'img': 'handleImg'
    }
    this[handleMap[this.usePattern]]()
  },
  methods: {
    handleDefault() {
      this.iconClass = this.name
    },
    handleCss() {
      this.iconClass = 'css'
      this.iconStyle = {
        backgroundImage: `url(${this.url})`,
        width: this.width + 'px',
        height: this.height + 'px'
      }
    },
    handleImg() {
      this.imgSrc = this.url
    }
  },
})
</script>

<style lang="less" scoped>
@import '~@/assets/icon.css';

.holo-icon.css {
  display: inline-block;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}
</style>