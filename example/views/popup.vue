<template>
  <div>
    <section>
      基础用法
      <button @click="visible = !visible">切换状态</button>
      <o-popup :visible="visible" title="我是标题" content="我是内容" primaryButtonText="主要按钮" @cancel="visible = false"></o-popup>
    </section>

    <section>
      有两个按钮
      <button @click="visible2 = !visible2">切换状态</button>
      <o-popup :visible="visible2" title="我是标题" content="我是内容" primaryButtonText="主要按钮" secondaryButtonText="第二个按钮" @cancel="visible2 = false"></o-popup>
    </section>

    <section>
      有三个按钮
      <button @click="visible3 = !visible3">切换状态</button>
      <o-popup :visible="visible3" title="我是标题" content="我是内容" primaryButtonText="主要按钮" secondaryButtonText="第二个按钮" lastButtonText="第三个按钮" @cancel="visible3 = false"></o-popup>
    </section>

    <section>
      两个按钮，主要按钮为危险按钮
      <button @click="visible4 = !visible4">切换状态</button>
      <o-popup :visible="visible4" title="我是标题" content="我是内容" primaryButtonText="主要按钮" secondaryButtonText="第二个按钮" type="alert" @cancel="visible4 = false"></o-popup>
    </section>

    <section>
      没有标题
      <button @click="visible5 = !visible5">切换状态</button>
      <o-popup :visible="visible5" content="我是内容，但是我冒得标题冇得标题冇得标题冇得标题冇得标题" primaryButtonText="主要按钮" @cancel="visible5 = false"></o-popup>
    </section>

    <section>
      自定义内容
      <button @click="visible6 = !visible6">切换状态</button>
      <o-popup :visible="visible6" title="我是标题" content="我是内容" primaryButtonText="主要按钮" @cancel="visible6 = false">
        这里开始是我自定义的其他内容
      </o-popup>
    </section>

    <section>
      多行文本
      <button @click="visible7 = !visible7">切换状态</button>
      <o-popup :visible="visible7" title="我是标题" content="我是内容,我是好多好多内容，/n\n我是换了行的好多好多好多好好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多多" primaryButtonText="主要按钮" @cancel="visible7 = false"></o-popup>
    </section>


    <section>
      带有icon
      <button @click="visible8 = !visible8">切换状态</button>
      <o-popup :visible="visible8" title="我是标题" content="我是内容" primaryButtonText="主要按钮" @cancel="visible8 = false"></o-popup>
    </section>

    <section>
      点击mask不关闭
      <button @click="visible9 = !visible9">切换状态</button>
      <o-popup :visible="visible9" :maskClosable="false" title="我是标题" content="我是内容" primaryButtonText="主要按钮" @cancel="visible9 = false"></o-popup>
    </section>

    <p style="height: 2000px">content</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import OPopup from '@/Popup/index.vue'

export default Vue.extend({
  components: {
    OPopup,
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
    }
  },
})
</script>

<style scoped>

</style>