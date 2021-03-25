<template>
  <div>
    <section style="display:flex;">
      基础用法
      <ONoData/>
      <ONoData name="network"/>
      <ONoData name="news"/>
      <ONoData name="order"/>
      <ONoData name="purse"/>
      <ONoData name="search"/>
      <ONoData name="trip"/>
    </section>

    <section>
       可选择尺寸
      <ONoData size="small"/>
    </section>

    <section>
      可添加文案说明
      <ONoData text="说明文案说明文案说明文案" />
    </section>

    <section>
      多行文案
      <ONoData text="说明文案说明文案说明文案\n说明文案说明文案说明文案" />
    </section>

    <section>
      可添加按钮
      <ONoData text="说明文案说明文案说明文案" buttonText="操作按钮" @click="handleClick"/>
    </section>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import ONoData from '@/NoData/index.vue'

  export default Vue.extend({
    components: {
      ONoData,
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