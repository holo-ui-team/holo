<template>
  <div>
    <section style="display:flex;">
      基础用法
      <ONone/>
      <ONone name="network"/>
      <ONone name="news"/>
      <ONone name="order"/>
      <ONone name="purse"/>
      <ONone name="search"/>
      <ONone name="trip"/>
    </section>

    <section>
       可选择尺寸
      <ONone size="small"/>
    </section>

    <section>
      可添加文案说明
      <ONone text="说明文案说明文案说明文案" />
    </section>

    <section>
      多行文案
      <ONone text="说明文案说明文案说明文案\n说明文案说明文案说明文案" />
    </section>

    <section>
      可添加按钮
      <ONone text="说明文案说明文案说明文案" buttonText="操作按钮" @click="handleClick"/>
    </section>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import ONone from '@/None/index.vue'

  export default Vue.extend({
    components: {
      ONone,
    },
    methods: {
      handleClick() {
        alert(1)
      }
    },
  })
</script>

<style scoped>
</style>