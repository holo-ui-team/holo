<template>
  <PopupBox
      :actionVisible="true"
      :maskClosable="maskClosable"
      :visible.sync="visible"
      @cancel="handleCancel"
      @confirm="handleConfirm"
  >

    <div
        ref="pickerWrapper"
        class="picker-wrapper"
        @touchend.prevent="onTouchEnd"
        @touchmove.prevent="onTouchMove"
        @touchstart.prevent="onTouchStart"
        @touchcancel.prevent="onTouchEnd"
    >

      <div
          :class="{ multi: pickerCount >= 3 }"
          class="picker-ul-wrapper">
        <ul
            v-for="(option, ulIndex) in options"
            :key="ulIndex"
            ref="pickerList"
            class="picker-list">
          <li
              v-for="(item, index) in option"
              :key="index"
              :class="{bold: selectedIndexes[ulIndex] === index}"
              class="picker-item ellipsis"
          >{{ getOptionName( item ) }}
          </li>
        </ul>
      </div>

      <main class="picker-result"></main>
    </div>

  </PopupBox>
</template>

<script lang="ts">
import { PropType } from 'node_modules/vue/types/umd'
import Vue          from 'vue'
import PopupBox     from '../_helper/popup-box.vue'
import { Option }   from './type'

let wrapperWidth: number
let wrapperX: number
let maxScrollHeights: number[]
const minHeight = 40

export default Vue.extend( {
  name: 'OPicker',

  components: { PopupBox },

  props: {
    visible        : { type: Boolean, required: true },
    maskClosable   : { type: Boolean, default: true },
    options        : {
      type: Array as PropType<Array<Array<Option>>>, required: true, validator: ( val: Array<Option[]> ) => {
        let result = true

        val.forEach( ( list ) => {
          list.forEach( ( item ) => {
            if ( typeof item === 'object' && typeof item.name === 'undefined' ) {
              result = false
            }
          } )
        } )

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
      currentOptions(): Option[] {
        return this.options[this.currentPickerIndex]
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
        const wrapperElement = (
            this.$refs.pickerWrapper
        ) as HTMLDivElement
        wrapperWidth         = wrapperElement.getBoundingClientRect().width
        wrapperX             = wrapperElement.getBoundingClientRect().x
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
        this.endY = e.touches[0].clientY
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

        if (flag) {
          if (newValue % minHeight !== 0) {
            newValue = Math.round(newValue / minHeight) * minHeight
          }

          selectedIndex = Math.abs( Math.round(newValue / minHeight) )
        }

        if (Math.abs(newValue) > maxValue) {
          newValue      = -maxValue
          selectedIndex = this.currentOptions.length - 1
        } else if (newValue >= 0) {
          newValue      = 0
          selectedIndex = 0
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

        return typeof option === 'object' ?
               this.currentOptions.findIndex( item => (
                                              typeof item === 'object'
                                          ) && item.name === option.name ) :
               this.currentOptions.indexOf( option )
      },
      setSelectedIndex(currentValue: number) {
        this.selectedIndexes.forEach((value, index) => {
          if (this.currentPickerIndex === index) {
            this.$set( this.selectedIndexes, index, currentValue )
          } else if (this.currentPickerIndex < index) {
            this.$set( this.selectedIndexes, index, this.auto ? 0 : value )
          }
        })
        
        this.handleChange()
      },
      setScrollingElementIndex(clientX: number) {
        if ( this.pickerCount < 1 ) throw new Error( 'pickerCount must be greater than 0' )

        this.currentPickerIndex = this.pickerCount === 1 ?
                                  0 :
                                  Math.floor( (
                                                  clientX - wrapperX
                                              ) / (
                                              wrapperWidth / this.pickerCount
                                              ) )
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
@import "~@/_style/common.less";

.bold {
  font-weight : bold;
}

.picker {
  &-wrapper {
    position   : relative;
    height     : 306px;
    overflow   : hidden;
    background : white;
    padding-left: 10px;
    padding-right: 10px;
  }

  &-ul-wrapper {
    display: flex; justify-content: center;

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
    font-size   : 16px;
    line-height : 40px;
    box-sizing  : border-box;
    padding     : 0 32px 0;
    width       : 100%;
    white-space : nowrap;
    text-align  : center;
    list-style  : none;
    user-select : none;
    height      : 40px;

    &:first-child {
      margin-top : 120px;
    }
  }

  &-result {
    position : absolute;
    padding  : 0 20px 0 20px;
    width    : 100%;
    height   : 100%;
    top      : 0;
    left     : 0;

    &::after {
      content          : "";
      display          : block;
      width            : 100%;
      height           : 100%;
      background-image : linear-gradient(to bottom, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, .5) 118px, #F3F3F3 119.5px, transparent 120px, transparent 160px, #F3F3F3 161.5px, rgba(255, 255, 255, .5) 162px, rgba(255, 255, 255, .9));
    }
  }
}
</style>