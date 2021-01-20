<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {

}
</script>

<style lang="less" scoped>
body { padding: 0; margin: 0; }
</style>
