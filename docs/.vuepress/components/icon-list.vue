<template>
  <div class="icon-list">
    <div v-for="(icon, index) in list" :key="index"
         class="icon-wrapper">
      <OIcon :name="icon"/>
      <p>name="{{ icon }}"</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend( {
  name: 'IconList',
  data () {
    return {
      list: [
        'o-picture', 'o-right', 'o-tick',  'o-plus',
        'o-cross', 'o-train', 'o-switch-on', 'o-switch-off',
        'o-loading-circle', 'o-loading-dot', 'o-refresh',
        'o-triangle-left', 'o-triangle-down', 'o-triangle-right', 'o-triangle-up',
        'o-arrow-left', 'o-arrow-down', 'o-arrow-right', 'o-arrow-up',
        'o-help', 'o-help-filled', 'o-info', 'o-info-filled',
        'o-check', 'o-check-filled', 'o-close', 'o-close-filled',
        'o-caution', 'o-caution-filled', 'o-forbidden', 'o-forbidden-filled',
        'o-dots'
      ]
    }
  },
} )
</script>

<style scoped>
.icon-list {
  display : flex; flex-wrap : wrap;
}

.icon-wrapper {
  width      : 150px;
  margin     : 6px;
  text-align : center;
}

i {
  font-size : 20px;
}

p {
  margin : 5px;
}
</style>