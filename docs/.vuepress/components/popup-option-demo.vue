<template>
  <div>
    <section v-if="currentDemo === 0">
      单选：

      <OButton size="small" @click="handlePopupOption({single: true})">点击</OButton>
    </section>
    <section v-if="currentDemo === 4">
      单选（默认选中）：

      <OButton size="small" @click="handlePopupOption({single: true, default: ['凤梨']})">点击</OButton>
    </section>

    <section v-if="currentDemo === 3">
      多选：

      <OButton size="small" @click="handlePopupOption({subTitle: ''})">点击</OButton>
    </section>

    <section v-if="currentDemo === 5">
      多选（默认选中）：

      <OButton size="small" @click="handlePopupOption({subTitle: '', default: ['凤梨', '老虎']})">点击</OButton>
    </section>

    <section v-if="currentDemo === 1">
      多选：（显示补充说明）

      <OButton size="small" @click="handlePopupOption({
        subTitle: '',
        options : [
          {name: '选项1', desc: '我是个冇得表情的描述'},
          {name: '选项2', desc: '我是个冇得表情的描述'},
          {name: '选项3', desc: '我是个冇得表情的描述'},
          {name: '选项4', desc: '我是个冇得表情的描述'},
          {name: '选项5', desc: '我是个冇得表情的描述'},
        ]
      })">点击</OButton>
    </section>
    <section v-if="currentDemo === 2">

      多选：（多行选项）

      <OButton size="small" @click="handlePopupOption({multiColumn: true, subTitle: ''})">点击</OButton>
    </section>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import OButton from '@/Button/button.vue'
  // @ts-ignore
  import $popupOption from '@/PopupOption/plugin.ts'
  
  Vue.use($popupOption)

  export default Vue.extend({
    name: 'PopupOptionDemo',
    components: {
      OButton
    },
    props: {
      currentDemo: {
        type: Number,
      },
    },
    mounted () {
    },
    methods: {
      handlePopupOption(props: object) {
        // @ts-ignore
        this.$popupOption({
          title   : '请选择',
          subTitle: '你可以不写我的',
          options : ['西瓜', '凤梨', '老虎'],
          ...props,
          confirm(val) {
            console.log('selected', val)
          }
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
  font-weight: bold;
}
</style>