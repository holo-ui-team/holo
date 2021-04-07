
<template>
  <div>
    <section>
      分享
      <OButton size="small" @click="visible = !visible">点击</OButton>
      <OPopupAction type="share" :visible="visible" :actions="actions" @cancel="visible = !visible" @confirm="handleConfirm"/>
    </section>

    <section>
      分享（有广告）

      <OButton size="small" @click="visible3 = !visible3">点击</OButton>
      <OPopupAction type="share" :visible="visible3" :actions="actions" :ad="ad"  @confirm="handleConfirm" @cancel="visible3 = !visible3" />
    </section>

    <section>
      动作：（仅文字）

      <OButton size="small" @click="visible2 = !visible2">点击</OButton>
      <OPopupAction :visible="visible2" :actions="actions4" @cancel="visible2 = !visible2" @confirm="handleConfirm"/>
    </section>

    <section>
      动作：（有危险动作）

      <OButton size="small" @click="visible4 = !visible4">点击</OButton>
      <OPopupAction :visible="visible4" :actions="actions2" @cancel="visible4 = !visible4" @confirm="handleConfirm"/>
    </section>
    <section>
      动作：（有icon）

      <OButton size="small" @click="visible5 = !visible5">点击</OButton>
      <OPopupAction :visible="visible5" :actions="actions3" :multiColumn="true" @cancel="visible5 = !visible5" @confirm="handleConfirm"/>
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
        actions: [ 'wchat', 'moments', 'qq', 'qZone', 'message', 'weibo', 'wallet', ],
        // actions: [ 'wchat', 'moments'],
        actions4: [ '操作1', '操作2', '操作3', '操作4', '操作5', ],
        actions2: [
          {name: '操作1'},
          {name: '操作2'},
          {name: '操作3', danger: true},
          {name: '操作4'},
          {name: '操作5'},
        ],
        actions3: [
          {name: '操作1', icon: 'o-train' },
          {name: '操作2', icon: 'o-close' },
          {name: '操作3', icon: 'o-help' },
          {name: '操作4', icon: require('../../packages/assets/img/share/o-message.png') },
          {name: '操作5', icon: require('../../packages/assets/img/share/o-qq.png') },
        ],
        ad: require('../../packages/assets/ad/vivo.png')
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