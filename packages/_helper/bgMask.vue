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

const body = document.querySelector('body')

export default Vue.extend({
  props: {
    visible: {
      type   : Boolean,
      default: false
    },
    maskClosable: {
      type   : Boolean,
      default: true
    }
  },
  mounted() {
    if (this.visible) this.handleVisible()
  },
  methods: {
    handleVisible() {
      if (body) {
        body.style.overflow = this.visible ? 'hidden' : ''
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
  z-index: @zIndex;

  &-content {
    overflow: hidden;
    z-index: @zIndex;
    position: absolute; bottom: 12px; left: 50%;
    transform: translateX(-50%);
  }
}

main {
  overflow: auto;
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