<template>
  <PopupBox :visible.sync="visible" :maskClosable="maskClosable" @cancel="handleCancel" :actionVisible="true" @confirm="handleConfirm">

    <div class="picker-wrapper" ref="pickerWrapper" @touchstart="onTouchStart" @touchmove="onTouchMove" @touchend="onTouchEnd">

      <div class="picker-ul-wrapper" :class="{ multi: pickerCount >= 3 }">
        <ul class="picker-list" v-for="(option, index) in options" :key="index" ref="pickerList">
          <li class="picker-item ellipsis" v-for="(item, index) in option" :key="index">{{getOptionName(item)}}</li>
        </ul>
      </div>
      
      <main class="picker-result"></main>
    </div>

  </PopupBox>
</template>

<script lang="ts">
  import { PropType } from 'node_modules/vue/types/umd'
  import Vue from 'vue'
  import PopupBox from '../_helper/popup-box.vue'
  import {Option} from './type'

  let   wrapperWidth    : number
  let   maxScrollHeights: number[]
  const minHeight = 40

  export default Vue.extend({
    name: 'OPicker',

    components: { PopupBox },

    props: {
      visible      : { type: Boolean, required: true },
      maskClosable : { type: Boolean, default: true },
      options      : { type: Array as PropType<Array<Array<Option>>>, required: true, validator: (val: Array<Option[]>) => {
        let result = true

        val.forEach((list) => {
          list.forEach((item) => {
            if (typeof item === 'object' && typeof item.name === 'undefined') {
              result = false
            }
          })
        })

        return result
      } },
      default      : { type: Array as PropType<Option[]> },
      confirm      : { type: Function },
      cancel       : { type: Function },
      change       : { type: Function },
      auto         : { type: Boolean, default: true } // 默认几个选项是相关联的，如果前一个选项更新了，后面的选项会重置为该列的第一个选项
    },

    computed: {
      pickerCount(): number {
        return this.options.length 
      },
      scrollingElement(): HTMLUListElement {
        const index = this.currentPickerIndex < 0 ? 0 : this.currentPickerIndex

        // @ts-ignore
        return this.$refs.pickerList[index]
      },
    },

    data() {
      return {
        isFirst           : true,
        currentPickerIndex: -1,
        startY            : -1,
        endY              : -1,
        selectedIndexes   : [] as number[],
      }
    },

    methods: {
      handleConfirm() {
        const selected = this.getSelected()
        this.handleCancel()

        if (this.confirm) {
          this.confirm(selected)
        } else {
          this.$emit('confirm', selected)
        }
      },
      handleCancel() {
        if (this.cancel) {
          this.cancel()
        } else {
          this.$emit('cancel')
        }
      },
      handleChange() {
        const selected = this.getSelected()
        
        const result = {
          index      : this.currentPickerIndex,
          value      : selected[this.currentPickerIndex],
          allSelected: selected 
        }

        if (this.change) {
          this.change(result)
        } else {
          this.$emit('change', result)
        }
      },
      getSelected() {
        return this.selectedIndexes.map(
          (index, picketIndex) => {
            const currentOption = this.options[picketIndex]
            const maxIndex      = currentOption.length - 1

            return currentOption[Math.min(index, maxIndex)]
          })
      },
      setWrapperWidth() {
        const wrapperElement = (this.$refs.pickerWrapper) as HTMLDivElement
        wrapperWidth = wrapperElement.getBoundingClientRect().width
      },
      setMaxScrollHeight() {
        maxScrollHeights = [] as number[]

        this.options.forEach((option) => {
          maxScrollHeights.push((option.length - 1) * minHeight)
        })
      },
      getOptionName(option: Option) {
        if (typeof option === 'object') {
          return option.name.toString()
        }

        return option.toString()
      },
      onTouchStart(e: TouchEvent) {
        this.startY = e.touches[0].clientY
        this.setScrollingElementIndex(e.touches[0].clientX)
      },
      onTouchMove(e: TouchEvent) {
        this.endY   = e.touches[0].clientY
        this.move()
        this.startY = e.touches[0].clientY
      },
      onTouchEnd(e: TouchEvent) {
        this.endY = e.changedTouches[0].clientY

        this.move(true)
        this.clear()

        if (this.auto && this.pickerCount > 1) {
          const nextPickerIndex = this.currentPickerIndex + 1

          if (nextPickerIndex <= this.pickerCount - 1) {
            this.setDefault(this.getSelected())
          }
        }
      },
      reset() {
        this.isFirst = true

        this.clear()        
        this.initSelectedIndexes()
        this.setDefault(this.getSelected())
      },
      clear() {
        this.currentPickerIndex = -1
        this.startY             = -1
        this.endY               = -1
      },
      setDefault(value ?: Option[]) {
        const defaultOptions  = value || this.default
        if (!defaultOptions) return

        defaultOptions.forEach((option, index) => {
          this.currentPickerIndex = index
          const defaultIndex = this.getOptionIndex(option)
          const transformValue = this.checkTransformValue( -(defaultIndex) * minHeight, true  )

          this.translateY(transformValue)
        })
      },
      initSelectedIndexes() {
        this.selectedIndexes = new Array(this.pickerCount).fill(0)
      },
      translateY(value: number) {
        this.scrollingElement.style.transform = `translateY(${value}px)`
      },
      checkTransformValue(newValue: number, flag?: boolean) {
        const maxValue    = maxScrollHeights[this.currentPickerIndex]
        let selectedIndex = -1

        if (newValue <= -maxValue) {
          newValue      = -maxValue
          selectedIndex = this.options[this.currentPickerIndex].length - 1

        } else if (newValue >= 0) {
          newValue      = 0
          selectedIndex = 0

        } else {

          if (flag) {
            if (newValue % minHeight !== 0) {
              newValue = Math.round(newValue / minHeight) * minHeight
            }

            selectedIndex = Math.abs( Math.round(newValue / minHeight) )
          }
          
        }

        if (flag) this.setSelectedIndex(selectedIndex)

        return newValue
      },
      move(flag?: boolean) {
        const result      = this.startY - this.endY
        const lastValue   = this.getLastTransformValue()
        const newValue    = this.checkTransformValue( lastValue - result, flag )

        this.translateY(newValue)
      },
      getOptionIndex(option: Option) {
        let result = -1
        const options = this.options[this.currentPickerIndex]

        if (typeof option === 'object') {
          for (let i = 0; i < options.length; i++) {
            const item = options[i];
            
            if (typeof item === 'object' && item.name === option.name) {
              result = i
            }
          }
        } else {
          result = options.indexOf(option)
        }

        return result
      },
      setSelectedIndex(currentValue: number) {
        this.selectedIndexes.forEach((value, index) => {
          if (this.currentPickerIndex === index) {

            this.selectedIndexes[index] = currentValue
          } else if (this.currentPickerIndex < index) {

            this.selectedIndexes[index] = this.auto ? 0 : value
          }
        })
        
        this.handleChange()
      },
      setScrollingElementIndex(clientX: number) {
        if (this.pickerCount < 1) return

        if (this.pickerCount === 1) {
          this.currentPickerIndex = 0
        } else {
          const width      = wrapperWidth / this.pickerCount
          const widthArray = Array.from(new Array(this.pickerCount), (item, index) => (index + 1) * width)

          for (let i = 0; i < widthArray.length; i++) {
            const len = widthArray[i]
            
            if (clientX <= len) {
              this.currentPickerIndex = i
              break
            }
          }
        }

      },
      getLastTransformValue() {
        const regexResult = (/-?[.\d]+(?=px)/.exec(this.scrollingElement.style.transform))

        if (regexResult) {
          return parseFloat(regexResult[0])
        } else {
          return 0
        }
      },
      init() {
        this.setWrapperWidth()
        this.setMaxScrollHeight()
      }
    },

    watch: {
      visible(newValue, oldValue) {
        if (newValue && newValue !== oldValue) {
          this.$nextTick(() => {
            this.init()

            if (this.isFirst) {
              this.isFirst = false
              this.initSelectedIndexes()
              this.setDefault()
            }
          })
        }
      },
      options: {
        deep: true,
        handler() {
          this.init()
        }
      }
    },
  })
</script>

<style lang="less" scoped>
@import '~@/_style/common.less';

.picker {
  &-wrapper {
    position: relative;
    height: 306px;
    overflow: hidden;
    background: white;
  }

  &-ul-wrapper {
    display: flex; justify-content: center;
    padding: 12px 0;

    &.multi {
      .picker-item {
        padding-left: 10px;
        padding-right: 10px;
        max-width: 115px;
      }
    }
  }

  &-list {
    display: flex; flex-direction: column;
    margin: 0; padding: 0;
    width: 100%;
    transition: transform .5s ease-out;
  }

  &-item {
    font-size: 16px; line-height: 22px;
    box-sizing: border-box;
    padding: 8px 32px 10px;
    width: 100%;
    white-space: nowrap;
    text-align: center; font-weight: bold;
    list-style: none; user-select: none;

    &:first-child {
      margin-top: 120px;
    }
  }

  &-result {
    position: absolute; width: 100%; height: 100%; top: 0; left: 0;
    background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, .5) 130px, #EBEBEB 132px, transparent 133px, transparent 171px, #EBEBEB 172px, rgba(255, 255, 255, .5) 172px, rgba(255, 255, 255, .9));
  }
}
</style>