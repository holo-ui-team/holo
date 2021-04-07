<template>
  <div>
    <section v-if="currentDemo === 0">
      分享：

      <OButton size="small" @click="handlePopupAction({type: 'share', actions: [ 'wechat', 'moments', 'qq', 'qZone', 'message', 'weibo', 'wallet', ]})">点击</OButton>
    </section>
    <section v-if="currentDemo === 1">
      分享:（有广告）

      <OButton size="small" @click="handleShare">点击</OButton>
    </section>
    <section v-if="currentDemo === 2">
      动作：（仅文字）

      <OButton size="small" @click="handlePopupAction">点击</OButton>
    </section>

    <section v-if="currentDemo === 3">
      动作：（有危险动作）

      <OButton size="small" @click="handlePopupAction({
        actions: [
          {name: '操作1'},
          {name: '操作2'},
          {name: '操作3', danger: true},
          {name: '操作4'},
          {name: '操作5'},
        ]
      })">点击</OButton>
    </section>

    <section v-if="currentDemo === 4">
      动作：（有icon）

      <OButton size="small" @click="handlePopupAction({
        actions: [
          {name: '操作1', icon: 'o-train' },
          {name: '操作2', icon: 'o-close' },
          {name: '操作3', icon: 'o-help' },
          {name: '操作4', icon: 'https://i.loli.net/2021/04/07/gHpUJKwyTuCNzht.png' },
          {name: '操作5', icon: 'https://i.loli.net/2021/04/07/r9LXR2lDp7PUiQH.png' },
        ],
      })">点击</OButton>
    </section>

  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import OButton from '@/Button/button.vue'
  // @ts-ignore
  import $popupAction from '@/PopupAction/plugin.ts'
  
  Vue.use($popupAction)

  export default Vue.extend({
    name: 'PopupActionDemo',
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
      handlePopupAction(props: object) {
        // @ts-ignore
        this.$popupAction({
          actions: [ '操作1', '操作2', '操作3', '操作4', '操作5', ],
          ...props,
          confirm(val) {
            console.log('selected', val)
          }
        })
      },
      handleShare() {
        // @ts-ignore
        this.$share({
          ad     : 'https://i.loli.net/2021/04/07/UTyMhjWecx5PYv8.png',
          // actions: [ 'moments', 'wechat' ]
          actions: ['wechat', 'moments']
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