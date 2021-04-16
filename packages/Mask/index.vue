<template>
  <div v-show="visible" class="bg-mask-wrapper">
    <div class="bg-mask" @click="handleCancel"></div>
      <div class="bg-mask-content">
        <transition name="slide-fade">
          <main v-show="visible">
            <slot/>
          </main>
        </transition>
      </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

let body             : HTMLElement
let originalOverflow : string

export default Vue.extend({
  name: 'OMask',
  props: {
    visible: {
      type    : Boolean,
      default : false,
      required: true
    },
    maskClosable: {
      type   : Boolean,
      default: true
    }
  },
  mounted() {
    body             = document.body
    originalOverflow = body.style.overflow
    
    if (this.visible) this.handleVisible()
  },
  methods: {
    handleVisible() {
      if (body) {
        body.style.overflow = this.visible ? 'hidden' : originalOverflow

        if (!/(iPhone|iPad|iPod|iOS|ANDROID)/i.test(navigator.userAgent)) {
          body.style.marginRight = this.visible ? 17 + 'px' : ''
        }
      }
    },
    handleCancel() {
      if (this.maskClosable) {
        this.$emit('cancel')
      }
    }
  },
  watch: {
    visible(newValue, oldValue) {
      if (newValue !== oldValue)
        this.handleVisible()
    },
  },
})
</script>

<style lang="less" scoped>
@zIndex: 1000;

.bg-mask {
  position: fixed;
  top: 0; bottom: 0; left: 0; right: 0;
  background: rgba(0, 0, 0, 0.4);

  &-wrapper {
    position: relative;
    z-index: @zIndex;
  }

  &-content {
    overflow: hidden;
    z-index: @zIndex;
    position: fixed; left: 50%; bottom: 0;
    transform: translateX(-50%);
  }
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
</style>