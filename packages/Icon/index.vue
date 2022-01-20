<template>

  <img v-if="pattern === 'img'"
       :src="imgSrc" :alt="title"
       @click="$emit('click', $event)">

  <i v-else
     class="holo-icon" :class="iconClass" :style="iconStyle"
     :title="title"
     @click="$emit('click', $event)">
    <slot/>
  </i>

</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend( {
  name : 'OIcon',
  props: {
    name : { type: String, default: 'o-check', validator: ( val ) => /^o-/.test( val ) },
    title: { type: String },
    type : { type: String, default: 'css', validator: ( val ) => [ 'img', 'css' ].indexOf( val ) >= 0 },
    url  : { type: String, default: '' },
  },
  data () {
    return {
      iconClass: '',
      iconStyle: {},
      imgSrc   : ''
    }
  },
  computed: {
    pattern (): string {
      return this.url ? this.type : 'default'
    }
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      const handleMap = {
        'default': 'handleDefault',
        'css'    : 'handleCss',
        'img'    : 'handleImg'
      }
      this[handleMap[this.pattern]]()
    },
    handleDefault () {
      this.iconClass = this.name
    },
    handleCss () {
      this.iconClass = 'css'
      this.iconStyle = {
        backgroundImage: `url(${ this.url })`,
      }
    },
    handleImg () {
      this.imgSrc = this.url
    }
  },
  watch  : {
    name ( newValue, oldValue ) {
      if ( newValue !== oldValue ) {
        this.init()
      }
    },
    url ( newValue, oldValue ) {
      if ( newValue !== oldValue ) {
        this.init()
      }
    }
  },
} )
</script>

<style lang="less" scoped>
@import '~@/Icon/iconfont.css';

.holo-icon.css {
  display             : inline-block;
  background-repeat   : no-repeat;
  background-position : center;
  background-size     : 100%;
  width               : 100%;
  height              : 100%;
}
</style>