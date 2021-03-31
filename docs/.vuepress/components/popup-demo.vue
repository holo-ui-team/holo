<template>
  <div>
    <section v-if="currentDemo === 0">
      基础用法
      <o-button size="small" @click="handlePopup">点击</o-button>
    </section>

    <section v-if="currentDemo === 1">
      有两个按钮
      <o-button size="small" @click="handlePopup({
        title              : '我是标题',
        content            : '我是内容',
        primaryButtonText  : '主要按钮',
        secondaryButtonText: '第二个按钮' // 新增内容
      })">点击</o-button>
    </section>

    <section v-if="currentDemo === 2">
      有三个按钮
      <o-button size="small" @click="handlePopup({
        title              : '我是标题',
        content            : '我是内容',
        primaryButtonText  : '主要按钮',
        secondaryButtonText: '第二个按钮',
        lastButtonText     : '第三个按钮' // 新增内容
      })">点击</o-button>
    </section>

    <section v-if="currentDemo === 3">
      两个按钮，主要按钮为危险按钮
      <o-button size="small" @click="handlePopup({
        title              : '我是标题',
        type               : 'alert', // 新增内容
        content            : '我是内容',
        primaryButtonText  : '主要按钮',
        secondaryButtonText: '第二个按钮'
      })">点击</o-button>
    </section>

    <section v-if="currentDemo === 4">
      没有标题
      <o-button size="small" @click="handlePopup({title: ''})">点击</o-button>
    </section>

    <section v-if="currentDemo === 5">
      自定义内容
      <o-button size="small" @click="visible6 = !visible6">点击</o-button>
      <o-popup :visible="visible6" title="我是标题" content="我是内容" primaryButtonText="主要按钮" @cancel="visible6 = false">
        这里开始是我自定义的其他内容
        <br />
        <p>你好，我是个蓬头垢面的input框</p>
        <input type="text" />
      </o-popup>
    </section>

    <section v-if="currentDemo === 6">
      多行文本
      <o-button size="small" @click="handlePopup({
        title              : '我是标题',
        content            : '我是内容,我是好多好多内容，\n我是换了行的好多好多好多好好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多多', // 新增内容 \n
        primaryButtonText  : '主要按钮',
      })">点击</o-button>
    </section>


    <section v-if="currentDemo === 7">
      带有icon (内置Icon)
      <o-button size="small" @click="handlePopup({
        title              : '我是标题',
        content            : '我是内容',
        icon               : 'o-info-filled', // 新增内容
        iconColor          : '#FF6347', // 新增内容
        primaryButtonText  : '主要按钮',
        secondaryButtonText: '第二个按钮'
      })">点击</o-button>
    </section>

    <section v-if="currentDemo === 9">
      带有icon(图片Icon)
      <o-button size="small" @click="handlePopup({
        title              : '我是标题2',
        content            : '我是内容',
        icon               : 'https://cdn.133.cn/gtgjwap/Image/tmcShanglv/icons/train@2x.png', // 新增内容
        primaryButtonText  : '主要按钮',
        secondaryButtonText: '第二个按钮'
      })">点击</o-button>
    </section>

    <section v-if="currentDemo === 8">
      点击mask不关闭
      <o-button size="small" @click="handlePopup">点击</o-button>
    </section>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Obutton from '@/Button/button.vue'
// @ts-ignore
import $popup from '@/Popup/plugin.ts'

Vue.use($popup)

export default Vue.extend({
  props: {
    currentDemo: {
      type: Number,
      default: 0
    },
  },
  components: {
    Obutton
  },
  data() {
    return {
      visible6: false
    }
  },
  methods: {
    handlePopup(props) {
      // @ts-ignore
      this.$popup({
        title            : '我是标题',
        content          : '我是内容',
        primaryButtonText: '主要按钮',
        ...props
      })
    }
  },
})
</script>

<style scoped>
.button-wrapper {
  width: 100px;
}

section {
  margin: 10px;
  font-weight: bold;
}
</style>