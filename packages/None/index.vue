<template>
  <div class="none-wrapper">

    <Icon type="img" :url="url" :style="{width: sideLength + 'px', height: sideLength + 'px'}"/>

    <div v-if="text" class="none-text-wrapper">
      <p v-for="(program, index) in texts" :key="index" class="none-text">{{program}}</p>
    </div>

    <Button v-if="buttonText" type="primary" size="medium" @click="$emit('click')">{{buttonText}}</Button>

  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {NoneImgs} from '@/_helper/cdn-img-helper'
  import Icon from '../Icon/index.vue'
  import Button from '../Button/button.vue'

  export default Vue.extend({
    name: 'ONone',
    props: {
      name: {
        type     : String,
        default  : 'management',
        validator: (val) => {
          return ['management', 'network', 'news', 'order', 'purse', 'search', 'trip'].indexOf(val) >= 0
        }
      },
      size: {
        type     : String,
        default  : 'default',
        validator: (val) => {
          return ['default', 'small'].indexOf(val) >= 0
        }
      },
      text: {
        type: String,
      },
      buttonText: {
        type: String
      }
    },
    components: {
      Icon, Button
    },
    computed: {
      sideLength() {
        return this.size === 'default' ? 200 : 128
      },
      url() {
        return NoneImgs.get(this.name)
      },
      texts() {
        return this.text.split('\\n')
      }
    },
  })
</script>

<style scoped lang="less">
@import '~@/_style/theme.less';

.none {
  &-wrapper {
    display: flex; justify-content: center; align-items: center;
    flex-direction: column;
  }

  &-text {
    font-size: 13px; line-height: 13px;
    margin: 0; padding: 0;
    color: @gray;

    & + .none-text {
      margin-top: 4px;
    }

    &-wrapper {      
      margin-top: 20px;
    }
  }

}

.button-wrapper {
  max-width: 150px;
  margin-top: 24px;
}
</style>