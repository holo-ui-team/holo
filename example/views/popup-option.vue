
<template>
  <div>
    <section>
      单选：

      <OButton size="small" @click="visible = !visible">点击</OButton>
      <OPopupOption title="我是标题" :visible="visible" :options="options" single @cancel="visible = !visible" />
    </section>

    <section>
      单选：（option的第二种写法）

      <OButton size="small" @click="visible3 = !visible3">点击</OButton>
      <OPopupOption title="我是标题" subTitle="我是副标题" :visible="visible3" :options="options2" single @cancel="visible3 = !visible3" />
    </section>

    <section>
      多选：

      <OButton size="small" @click="visible2 = !visible2">点击</OButton>
      <OPopupOption title="我是标题" :visible="visible2" :options="options" @cancel="visible2 = !visible2" @confirm="handleConfirm"/>
    </section>

    <section>
      多选：（显示补充说明）

      <OButton size="small" @click="visible4 = !visible4">点击</OButton>
      <OPopupOption title="我是标题" :visible="visible4" :options="options3" @cancel="visible4 = !visible4" @confirm="handleConfirm"/>
    </section>
    <section>

      多选：（多行选项）

      <OButton size="small" @click="visible5 = !visible5">点击</OButton>
      <OPopupOption title="我是标题" :visible="visible5" :options="options3" :multiColumn="true" @cancel="visible5 = !visible5" @confirm="handleConfirm"/>
    </section>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import OPopupOption from '../../packages/PopupOption/index.vue'
  import OButton from '../../packages/Button/button.vue'
  // @ts-ignore
  import $popupOption from '@/PopupOption/plugin.ts'

  Vue.use($popupOption)

  export default Vue.extend({
    components: {
      OPopupOption,
      OButton
    },
    data() {
      return {
        visible: false,
        visible2: false,
        visible3: false,
        visible4: false,
        visible5: false,
        options: ['选项1', '选项2', '选项3', '选项4'],
        options2: [
          {name: '选项1'},
          {name: '选项2'},
          {name: '选项3'},
          {name: '选项4'},
          {name: '选项5'},
        ],
        options3: [
          {name: '选项1', desc: '我是个冇得表情的描述'},
          {name: '选项2', desc: '我是个冇得表情的描述'},
          {name: '选项3', desc: '我是个冇得表情的描述'},
          {name: '选项4', desc: '我是个冇得表情的描述'},
          {name: '选项5', desc: '我是个冇得表情的描述'},
        ]
      }
    },
    created () {
      // @ts-ignore
      this.$popupOption({
        options: [1, 2, 3]
      })
    },
    methods: {
      handleConfirm(val) {
        console.log('selected', val)
      }
    },
  })
</script>

<style scoped>
.button-wrapper {
  width: 100px;
}
</style>