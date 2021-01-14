<template>
  <div class="button-wapper">
    <Button :mainText="'主要文字'" :descText="'次要的描述文字'"></Button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Button from '../../../packages/button/button.vue'

@Component({
  components: {
    Button
  }
})
export default class ButtonExample extends Vue {}

</script>
