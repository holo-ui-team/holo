<template>
  <div class="phone-nav-wrapper">
    <ul>
      <li v-for="(item, index) in navData" :key="index" @click="gotoContent(item.pathname)">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';

@Component
export default class PhoneNav extends Vue {
  private navData: Array<any> = [
    { name: 'button', path: '/button', pathname: 'button' },
    { name: 'toast', path: '/toast', pathname: 'toast' },
    { name: 'switch', path: '/switch', pathname: 'switch' },
    { name: 'loading', path: '/loading', pathname: 'loading' },
    { name: 'popup', path: '/popup', pathname: 'popup' },
    { name: 'icon', path: '/icon', pathname: 'icon' },
  ]


  private gotoContent(pathname): void {
    this.$router.push( { name: pathname } );
  }
}

</script>

<style lang="less" scoped>
.phone-nav-wrapper {
  ul li {
    list-style: none;
    display: inline-block; vertical-align: middle;
    width: 33%; height: 40px;
    text-align: center; line-height: 40px;
  }
}
</style>
