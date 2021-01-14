<template>
  <div id="app">
    <!-- // 还没想好要怎么写 example，先放个空架子 // -->
    <div class="head-wapper"></div>
    <div class="main-body">
      <div class="left-body">
        <ul>
          <li>from
            <ul>
              <li @click="gotoExample('button')">button</li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="right-body">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

const routerData: {[key: string]: string;} = {
  'button': 'button'
}

import { Component, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {

  private gotoExample(exampleName: string) {
    this.$router.push( { name: routerData[exampleName] } )
  }

}
</script>

<style lang="less">
</style>
