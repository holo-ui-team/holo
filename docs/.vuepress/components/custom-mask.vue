<template>
  <div>
    <OButton size="small"
             @click="visible = !visible">点击
    </OButton>
    <OMask :visible="visible"
           position="middle"
           @cancel="visible = !visible">

     <main style="background-color: white;text-align: center;">
        <img class="mask-img" src="https://cdn.133.cn/gtgjwap/Image/rushHour/pass-bg@3x.png" alt="图片">
      </main>

    </OMask>
  </div>
</template>

<script lang="ts">
import Vue     from 'vue'
import OButton from '@/Button/button.vue'
import OMask   from '@/Mask/index.vue'

export default Vue.extend( {
  components: {
    OButton, OMask
  },
  data () {
    return {
      visible: false
    }
  },
} )
</script>

<style scoped>
.button-wrapper {
  width : 100px;
}

.mask-img {
  width : 300px;
}
</style>