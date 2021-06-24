<template>
  <img v-if="currentPattern === 'img'" :src="imgSrc" :style="style" :alt="title" @click="$emit('click')" >
  <i v-else class="holo-icon" :class="iconClass" :style="iconStyle" :title="title" @click="$emit('click')">
    <slot />
  </i>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'OIcon',
  props: {
    name  : { type: String, default: 'o-check', validator: (val) => /^o-/.test(val) },
    color : { type: String },
    title : { type: String },
    type  : { type: String, default: 'css', validator: (val) => ['img', 'css'].indexOf(val) >= 0 },
    url   : { type: String, default: '' },
    style : { type: Object, default: () => ({})}
  },
  data() {
    return {
      iconClass: '',
      iconStyle: {},
      imgSrc   : ''
    }
  },
  computed: {
    currentPattern(): string {
      return this.url ? this.type : 'default'
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      const handleMap = {
        'default': 'handleDefault',
        'css'    : 'handleCss',
        'img'    : 'handleImg'
      }
      this[handleMap[this.currentPattern]]()
    },
    handleDefault() {
      this.iconClass = this.name
      this.iconStyle = {
        color: this.color,
        ...this.style,
      }
    },
    handleCss() {
      this.iconClass = 'css'
      this.iconStyle = {
        backgroundImage: `url(${this.url})`,
        ...this.style,
      }
    },
    handleImg() {
      this.imgSrc = this.url
    }
  },
  watch: {
    name(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.init()
      }
    },
    url(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.init()
      }
    }
  },
})
</script>

<style lang="less" scoped>
@import '~@/Icon/iconfont.css';

.holo-icon.css {
  display: inline-block;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  width: 100%;
  height: 100%;
}
</style>