<template>
  <div>
    <section v-if="currentDemo === 0">
      一个简单的Picker

      <OButton size="small" @click="handlePicker">点击</OButton>
    </section>

    <section v-if="currentDemo === 1">
      另一种Option格式，以及多个Picker选项

      <OButton size="small" @click="handlePicker({
        options: [
          [
            {name: '香蕉'},
            {name: '苹果'},
            {name: '橘子'},
            {name: '草莓'},
            {name: '西红柿'},
            {name: '柿子椒'},
          ],

          [
            'Nodejs', 'JavaScript', 'Java'
          ],

          [
            {name: '兔子'},
            {name: '猫咪'},
            {name: '狗狗'},
          ],
        ]
      })">点击</OButton>
    </section>

     <section v-if="currentDemo === 2">
      可配置默认参数

      <OButton size="small" @click="handlePicker({
        options: [
          [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99],
        ],
        default: [9]
      })">点击</OButton>
    </section>

     <section v-if="currentDemo === 3">
      日期选择器

      <OButton size="small" @click="handleDatePicker">点击</OButton>
    </section>

     <section v-if="currentDemo === 4">
      可选填默认值

      <OButton size="small" @click="handleDatePicker({
        default: [1996, 11, 15]
      })">点击</OButton>
    </section>

  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import OButton from '@/Button/button.vue'
  // @ts-ignore
  import $picker from '@/Picker/plugin.ts'
  // @ts-ignore
  import $datePicker from '@/DatePicker/plugin.ts'
  
  Vue.use($picker)
  Vue.use($datePicker)

  export default Vue.extend({
    name: 'PopupOptionDemo',
    components: {
      OButton
    },
    props: {
      currentDemo: {
        type: Number,
      },
    },
    mounted () {
    },
    methods: {
      handlePicker(props: object) {
        // @ts-ignore
        this.$picker({
          options : [
            ['西瓜', '凤梨', '老虎']
          ],
          ...props,
          confirm(val) {
            console.log('selected', val)
          }
        })
      },
      handleDatePicker(props) {
        // @ts-ignore
        this.$datePicker({
          confirm: (val) => {
            console.log('val', val)
          },
          ...props
        })
      }
    },
  })
</script>

<style scoped>
.button-wrapper {
  width: 100px;
}
section {
  font-weight: bold;
}
</style>