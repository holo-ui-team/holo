<template>
  <div>
    <section>
      一个简单的Picker
      <OButton size="small" @click="visible = !visible">点击</OButton>
      <Picker :visible="visible" :options="options" @cancel="visible = false" @confirm="handleConfirm" />
    </section>

    <section>
      另一个格式的Option
      <OButton size="small" @click="visible1 = !visible1">点击</OButton>
      <Picker :visible="visible1" :options="options1" @cancel="visible1 = !visible1" @confirm="handleConfirm"/>
    </section>

    <section>
      可带有默认值
      <OButton size="small" @click="visible2 = !visible2">点击</OButton>
      <!-- <Picker :visible="visible2" :options="options" @cancel="visible2 = !visible2" :default="[10, 99]" @confirm="handleConfirm"/> -->
      <Picker :visible="visible2" :options="options1" @cancel="visible2 = !visible2" :default="[{name: 21}]" @confirm="handleConfirm"/>
    </section>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Picker from '@/Picker/index.vue'
  import OButton from '@/Button/button.vue'

  export default Vue.extend({
    components: {
      Picker,
      OButton
    },
    data() {
      return {
        visible: false,
        options:  [
          // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99],
          // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]
          [
            {name: '香蕉'},
            {name: '苹果'},
            {name: '橘子'},
            {name: '草莓'},
            {name: '西红柿'},
            {name: '柿子椒'},
          ],
          [
            {name: 'Nodejs'},
            {name: 'JavaScript'},
            {name: 'Java'},
          ],
          [
            {name: '兔子'},
            {name: '猫咪'},
            {name: '狗狗'},
          ],
        ],
        visible1: false,
        visible2: false,
        options1: [
          [{"name":0},{"name":1},{"name":2},{"name":3},{"name":4},{"name":5},{"name":6},{"name":7},{"name":8},{"name":9},{"name":10},{"name":11},{"name":12},{"name":13},{"name":14},{"name":15},{"name":16},{"name":17},{"name":18},{"name":19},{"name":20},{"name":21},{"name":22},{"name":23},{"name":24},{"name":25},{"name":26},{"name":27},{"name":28},{"name":29},{"name":30},{"name":31},{"name":32},{"name":33},{"name":34},{"name":35},{"name":36},{"name":37},{"name":38},{"name":39},{"name":40},{"name":41},{"name":42},{"name":43},{"name":44},{"name":45},{"name":46},{"name":47},{"name":48},{"name":49},{"name":50},{"name":51},{"name":52},{"name":53},{"name":54},{"name":55},{"name":56},{"name":57},{"name":58},{"name":59},{"name":60},{"name":61},{"name":62},{"name":63},{"name":64},{"name":65},{"name":66},{"name":67},{"name":68},{"name":69},{"name":70},{"name":71},{"name":72},{"name":73},{"name":74},{"name":75},{"name":76},{"name":77},{"name":78},{"name":79},{"name":80},{"name":81},{"name":82},{"name":83},{"name":84},{"name":85},{"name":86},{"name":87},{"name":88},{"name":89},{"name":90},{"name":91},{"name":92},{"name":93},{"name":94},{"name":95},{"name":96},{"name":97},{"name":98},{"name":99}]
        ]
      }
    },
    methods: {
      handleConfirm(selected) {
        console.log('selected', selected)
      }
    },
  })
</script>

<style scoped>
.button-wrapper {
  width: 100px;
}
</style>