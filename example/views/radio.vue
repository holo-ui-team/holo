<template>
  <div>
    <section>
      基础用法
      <Radio />
    </section>

    <section>
      带有文字的Radio
      <Radio>西瓜</Radio>
    </section>

    <section>
       默认勾选
      <Radio default label="我是被默认勾选的" />
    </section>

    <section>
      置灰，不可选择
      <Radio disabled>西瓜</Radio>
    </section>

    <section>
      默认勾选，且不可撤销
      <Radio default disabled label="我是被默认勾选的" />
    </section>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Radio from '../../packages/Radio/index.vue'

  export default Vue.extend({
    components: {
      Radio,
    },
  })
</script>

<style scoped>
section {
  display: flex;
}
</style>