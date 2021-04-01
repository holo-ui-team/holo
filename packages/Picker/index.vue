<template>
  <PopupBox :visible.sync="visible" :maskClosable="maskClosable" @cancel="handleCancel" :actionVisible="true" @confirm="handleConfirm">

    <div class="picker-wrapper" ref="pickerWrapper" @touchstart="onTouchStart" @touchmove="onTouchMove" @touchend="onTouchEnd">

      <div class="picker-ul-wrapper">
        <ul class="picker-list" v-for="(option, index) in options" :key="index" ref="pickerList">
          <li class="picker-item" v-for="(item, index) in option" :key="index">{{getOptionName(item)}}</li>
        </ul>
      </div>
      
      <main class="picker-result"></main>
    </div>

  </PopupBox>
</template>

<script lang="ts">
  import Vue from 'vue'
  import PopupBox from '../_helper/popup-box.vue'
  import {Option} from './type'

  let   wrapperWidth   : number
  let   maxScrollHeights: number[]
  const minHeight = 40

  export default Vue.extend({
    name: 'OPicker',

    components: { PopupBox },

    props: {
      visible      : { type: Boolean, required: true },
      maskClosable : { type: Boolean, default: true },
      options      : { type: Array, required: true, validator: (val: Array<Option[]>) => {
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
      confirm            : { type: Function },
      cancel             : { type: Function },
    },

    computed: {
      pickerCount(): number {
        return this.options.length 
      },
      scrollingElement(): HTMLUListElement {
        const index = this.currentPickerIndex < 0 ? 0 : this.currentPickerIndex

        return this.$refs.pickerList[index]
      },
      selectedItems(): Option[] {
        return this.selectedIndexes.map((index, picketIndex) => (this.options as Array<Option[]>)[picketIndex][index])
      }
    },

    data() {
      return {
        currentPickerIndex: -1,
        startY            : -1,
        endY              : -1,
        selectedIndexes   : [] as number[],
      }
    },

    methods: {
      handleConfirm() {
        this.handleCancel()

        if (this.confirm) {
          this.confirm(this.selectedItems)
        } else {
          this.$emit('confirm', this.selectedItems)
        }

        this.clear()
      },
      handleCancel() {
        if (this.cancel) {
          this.cancel()
        } else {
          this.$emit('cancel')
        }
      },
      setWrapperWidth() {
        const wrapperElement = (this.$refs.pickerWrapper) as HTMLDivElement
        wrapperWidth = wrapperElement.getBoundingClientRect().width
      },
      setMaxScrollHeight() {
        maxScrollHeights = []

        for (let i = 0; i < this.pickerCount; i++) {
          const {height: maxHeight} = this.$refs.pickerList[i].getBoundingClientRect()
          maxScrollHeights.push(maxHeight - minHeight * 4)
        }
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
      },
      clear() {
        this.currentPickerIndex = -1
        this.startY             = -1
        this.endY               = -1
      },
      move(flag?: boolean) {
        const result    = this.startY - this.endY
        const lastValue = this.getLastTransformValue()
        const maxValue  = maxScrollHeights[this.currentPickerIndex]
        let   newValue  = lastValue - result

        if (newValue <= -maxValue) {
          newValue           = -maxValue
          this.setSelectedIndex( (this.options as Array<Option[]>)[this.currentPickerIndex].length - 1 )

        } else if (newValue >= 0) {
          newValue           = 0
          this.setSelectedIndex(0)

        } else {

          if (flag) {
            if (newValue % minHeight !== 0) {
              newValue = Math.round(newValue / minHeight) * minHeight
            }

            this.setSelectedIndex( Math.abs( Math.round(newValue / minHeight) ) )
          }
          
        }
        
        this.scrollingElement.style.transform = `translateY(${newValue}px)`
      },
      setSelectedIndex(index: number) {
        this.selectedIndexes[this.currentPickerIndex] = index
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
        const regexResult = (/-?\d+(?=px)/.exec(this.scrollingElement.style.transform))
        
        if (regexResult) {
          return parseFloat(regexResult[0])
        } else {
          return 0
        }
      }
    },

    watch: {
      visible(newValue, oldValue) {
        if (newValue && newValue !== oldValue) {
          this.$nextTick(() => {
            this.setWrapperWidth()
            this.setMaxScrollHeight()
          })
        }
      },
      options(newValue, oldValue) {
        if (newValue !== oldValue) {
          this.selectedIndexes = new Array(this.pickerCount, 0)
          this.clear()
        }
      }
    },
  })
</script>

<style lang="less" scoped>
.picker {
  &-wrapper {
    position: relative;
    height: 306px;
    overflow: hidden;
    background: white;
  }

  &-ul-wrapper {
    display: flex; justify-content: center; align-items: center;
    padding: 12px 0;
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