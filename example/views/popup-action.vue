
<template>
  <div>
    <section>
      分享
      <OButton size="small" @click="visible = !visible">点击</OButton>
      <OPopupAction type="share" :visible="visible" :actions="actions" single @cancel="visible = !visible" />
    </section>

    <section>
      分享（有广告）

      <OButton size="small" @click="visible3 = !visible3">点击</OButton>
      <OPopupAction title="我是标题" subTitle="我是副标题" :visible="visible3" :actions="actions2" single @cancel="visible3 = !visible3" />
    </section>

    <section>
      多选：

      <OButton size="small" @click="visible2 = !visible2">点击</OButton>
      <OPopupAction title="我是标题" :visible="visible2" :actions="actions" @cancel="visible2 = !visible2" @confirm="handleConfirm"/>
    </section>

    <section>
      多选：（显示补充说明）

      <OButton size="small" @click="visible4 = !visible4">点击</OButton>
      <OPopupAction title="我是标题" :visible="visible4" :actions="actions3" @cancel="visible4 = !visible4" @confirm="handleConfirm"/>
    </section>
    <section>

      多选：（多行操作）

      <OButton size="small" @click="visible5 = !visible5">点击</OButton>
      <OPopupAction title="我是标题" :visible="visible5" :actions="actions3" :multiColumn="true" @cancel="visible5 = !visible5" @confirm="handleConfirm"/>
    </section>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import OPopupAction from '../../packages/PopupAction/index.vue'
  import OButton from '../../packages/Button/button.vue'

  export default Vue.extend({
    components: {
      OPopupAction,
      OButton
    },
    data() {
      return {
        visible: false,
        visible2: false,
        visible3: false,
        visible4: false,
        visible5: false,
        actions: ['操作1', '操作2', '操作3', '操作4'],
        actions2: [
          {name: '操作1'},
          {name: '操作2'},
          {name: '操作3'},
          {name: '操作4'},
          {name: '操作5'},
        ],
        actions3: [
          {name: '操作1', desc: '我是个冇得表情的描述'},
          {name: '操作2', desc: '我是个冇得表情的描述'},
          {name: '操作3', desc: '我是个冇得表情的描述'},
          {name: '操作4', desc: '我是个冇得表情的描述'},
          {name: '操作5', desc: '我是个冇得表情的描述'},
        ]
      }
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