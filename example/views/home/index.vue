<template>
  <div>
    <div class="head-wrapper"></div>
    <div class="main-body">
      <div class="left-body">
        <ul>
          <li>基础组件
            <ul>
              <li @click="gotoExample('button')">button</li>
            </ul>
          </li>
          <li>提示
            <ul>
              <li @click="gotoExample('toast')">toast</li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="right-body">
        <div class="iframe-box">
          <iframe id="component_iframe" :src="iframeSrc"></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

const routerData: {[key: string]: string;} = {
  'button': 'button',
  'toast': 'toast'
}

import { Component, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {

  private iframeSrc: String = 'http://192.168.2.76:8080/button'

  private gotoExample(exampleName: string) {
    // this.$router.push( { name: routerData[exampleName] } )
    this.iframeSrc = 'http://' + window.location.host + '/' + routerData[exampleName];
  }

}
</script>

<style lang="less" scoped>
.main-body {
  display: flex; flex-direction: row;
  .flex1 {
    flex: 1;
  }
  .left-body {
    width: 240px; height: 100%;
    border-right: 1px solid #ccc;
    ul {
      padding: 0; margin: 0;
    }
    ul li {
      padding: 10px 0; margin: 0;
      list-style: none;
    }
    ul li ul li {
      padding-left: 20px;
      color: #1188ff; cursor: pointer;
    }
  }
  .right-body {
    flex: 1;
    height: 100%;
    position: relative;
    .iframe-box {
      position: fixed; right: 20px; top: 50px; z-index: 999999;
      width: 407px; height: 1200px;
    }
    #component_iframe {
      width: 100%;
      max-height: 1000px; min-height: 700px;
      border: none;
    }
  }
}
</style>
