<template>
  <div>
    <section v-if="currentDemo === 0">
      基础用法
      <o-button size="small" @click="visible = !visible">点击</o-button>
      <o-popup :visible="visible" title="我是标题" content="我是内容" primaryButtonText="主要按钮" @cancel="visible = false"></o-popup>
    </section>

    <section v-if="currentDemo === 1">
      有两个按钮
      <o-button size="small" @click="visible2 = !visible2">点击</o-button>
      <o-popup :visible="visible2" title="我是标题" content="我是内容" primaryButtonText="主要按钮" secondaryButtonText="第二个按钮" @cancel="visible2 = false"></o-popup>
    </section>

    <section v-if="currentDemo === 2">
      有三个按钮
      <o-button size="small" @click="visible3 = !visible3">点击</o-button>
      <o-popup :visible="visible3" title="我是标题" content="我是内容" primaryButtonText="主要按钮" secondaryButtonText="第二个按钮" lastButtonText="第三个按钮" @cancel="visible3 = false"></o-popup>
    </section>

    <section v-if="currentDemo === 3">
      两个按钮，主要按钮为危险按钮
      <o-button size="small" @click="visible4 = !visible4">点击</o-button>
      <o-popup :visible="visible4" title="我是标题" content="我是内容" primaryButtonText="主要按钮" secondaryButtonText="第二个按钮" type="alert" @cancel="visible4 = false"></o-popup>
    </section>

    <section v-if="currentDemo === 4">
      没有标题
      <o-button size="small" @click="visible5 = !visible5">点击</o-button>
      <o-popup :visible="visible5" content="我是内容，但是我冒得标题冇得标题冇得标题冇得标题冇得标题" primaryButtonText="主要按钮" @cancel="visible5 = false"></o-popup>
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
      <o-button size="small" @click="visible7 = !visible7">点击</o-button>
      <o-popup :visible="visible7" title="我是标题" content="我是内容,我是好多好多内容，\n我是换了行的好多好多好多好好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多多" primaryButtonText="主要按钮" @cancel="visible7 = false"></o-popup>
    </section>


    <section v-if="currentDemo === 7">
      带有icon (内置Icon)
      <o-button size="small" @click="visible8 = !visible8">点击</o-button>
      <o-popup :visible="visible8" icon="o-info-filled" iconColor="#FF6347" title="我是标题" content="我是内容" primaryButtonText="主要按钮" @cancel="visible8 = false"></o-popup>
    </section>

    <section v-if="currentDemo === 9">
      带有icon(图片Icon)
      <o-button size="small" @click="visible10 = !visible10">点击</o-button>
      <o-popup :visible="visible10" icon="https://cdn.133.cn/gtgjwap/Image/tmcShanglv/icons/train@2x.png" title="我是标题" content="我是内容" primaryButtonText="主要按钮" @cancel="visible10 = false"></o-popup>
    </section>

    <section v-if="currentDemo === 8">
      点击mask不关闭
      <o-button size="small" @click="visible9 = !visible9">点击</o-button>
      <o-popup :visible="visible9" :maskClosable="false" title="我是标题" content="我是内容" primaryButtonText="主要按钮" @confirm="visible9 = false"></o-popup>
    </section>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Obutton from '@/Button/button.vue'
import OPopup from '@/Popup/index.vue'

export default Vue.extend({
  props: {
    currentDemo: {
      type: Number,
      default: 0
    },
  },
  components: {
    OPopup,
    Obutton
  },
  data() {
    return {
      visible: false,
      visible2: false,
      visible3: false,
      visible4: false,
      visible5: false,
      visible6: false,
      visible7: false,
      visible8: false,
      visible9: false,
      visible10: false,
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