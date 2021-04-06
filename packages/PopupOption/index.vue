<template>
  <PopupBox :visible.sync="visible" :maskClosable="maskClosable" @cancel="handleCancel"
    :title="title" :subTitle="subTitle">

    <div class="popup-options-wrapper" :class="{'multi-wrapper' : !single}">

      <div class="popup-option" v-for="(option, index) in options" :key="index" 
          :class="optionsClass" @click="handleSelected(option)">

        <div v-if="single" class="single-option holo-icon" :class="{active: isSelected(option)}">
          <div class="text"> {{getOptionName(option)}} </div>
        </div>
        <div v-else class="multi-option">
          <Radio ref="radio" :label="getOptionName(option)" :size="radioStyle.size" :gap="radioStyle.gap" :default="isSelected(option)" />
          <p v-if="!multiColumn && option.desc" class="desc">{{option.desc}}</p>
        </div>

      </div>
      
      <Button v-if="!single" @click="handleConfirm">确定</Button>

    </div>

  </PopupBox>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Radio from '../Radio/index.vue'
  import PopupBox from '../_helper/popup-box.vue'
  import Button from '../Button/button.vue'
  import {Option} from './type'

  export default Vue.extend({
    name: 'OPopupOption',
    components: { Radio, PopupBox, Button },
    props: {
      visible      : { type: Boolean, required: true },
      maskClosable : { type: Boolean, default: true },
      title        : { type: String, required: true, default: '标题' },
      subTitle     : { type: String },
      single       : { type: Boolean },
      multiColumn  : { type: Boolean },
      default      : { type: Array, default: () => [] },
      options      : { type: Array, required: true, validator: (val: Option[]) => {
        let result = true

        val.forEach((item) => {

          if (typeof item === 'object' && typeof item.name === 'undefined') {
              result = false
          }
        })

        return result
      } },
      confirm            : { type: Function },
      cancel             : { type: Function },
    },
    computed: {
      selectedValues(): Array<string| number> {
        return this.selected.map((item: Option) => {
          if (typeof item === 'object') return item.name

          return item
        }) 
      },
      optionsClass(): object {
        return { 
          single       : this.single,
          multiple     : !this.single && !this.multiColumn, 
          'multi-lines': !this.single && this.multiColumn
        }
      },
      radioStyle(): object {
        const result = { size: 'medium', gap : 12 }

        if (!this.multiColumn) {
          result.size = 'large'
          result.gap  = 16
        }

        return result
      }
    },
    data() {
      return {
        selected: [] as Option[],
        isFirst : true,
      }
    },
    methods: {
      handleConfirm() {
        this.handleCancel()

        if (this.confirm) {
          this.confirm(this.selected)
        } else {
          this.$emit('confirm', this.selected)
        }
      },
      handleCancel() {
        if (this.cancel) {
          this.cancel()
        } else {
          this.$emit('cancel')
        }
      },
      getOptionName(option: Option) {
        if (typeof option === 'object') {
          return option.name.toString()
        }

        return option.toString()
      },
      isSelected(option: Option) {
        let result = true

        if (typeof option === 'object') {
          result = Object.values(this.selectedValues).includes(option.name)
        } else {
          result = this.selected.includes(option)
        }

        return result
      },
      handleSelected(option: Option) {
        if (this.isSelected(option)) {
          this.cancelSelected(option)
        } else {
          this.addSelected(option)
        }

        this.$emit('click', this.selected)

        if (this.single) {
          this.handleConfirm()
        }
      },
      getSelectedIndex(option: Option) {
        let index = -1

        if (typeof option === 'object') {
          index= Object.values(this.selectedValues).indexOf(option.name)
        } else {
          index = this.selected.indexOf(option)
        }

        return index
      },
      cancelSelected(option: Option) {
        const index = this.getSelectedIndex(option)
        index >= 0 && this.selected.splice(index, 1)
      },
      addSelected(option: Option) {
        if (this.single) {
          this.selected = [option]
        } else {
          this.selected.push(option)
        }
      },
      clear() {
        this.selected = []
        this.isFirst  = true

        if (!this.single) {
          for (const index in this.$refs.radio) {
            this.$refs.radio[index].clear()
          }
        }

      },
      setDefault() {
        if (this.default.length) {
          this.selected = this.default as Option[]
        }
      }
    },
    watch: {
      visible(newValue, oldValue) {
        if (newValue && newValue !== oldValue) {
          if (this.isFirst) {
            this.$nextTick(() => {
              this.setDefault()
            })
            this.isFirst = false
          }
        }
      }
    },
  })
</script>

<style lang="less" scoped>
@import '~@/style/theme.less';

.popup-option {
  display: flex; align-items: center;

  &.single { margin-left: 20px; }

  &.single +.single {
    border-top: 1px solid @borderColor;
  }

  .single-option {
    padding: 19px 22px 19px 0;
    font-size: 18px; line-height: 18px;
    display: flex; align-items: center; justify-content: space-between;
    width: 100%;

    &.active::after {
      content: '\e610';
      color: @themeColor;
      font-size: 14px;
    }
  }

  &s-wrapper.multi-wrapper {
    padding: 0 16px 16px 16px;
    display: flex; flex-wrap: wrap;
  }

  &.multiple {
    display: flex; justify-content: space-between; align-items: center;
    width: 100%;

    .radio-wrapper { padding: 12px 0; }

    .multi-option {
      display: flex;
      width: 100%;
      position: relative;
    }

    .desc {
      position: absolute; right: 0;
      font-size: 16px; line-height: 16px;
      color: @gray;
    }
  }

  &.multi-lines {
    width: 50%;
    display: inline-flex;

    .radio-wrapper { padding: 18px 0; }
  }

  .button-wrapper { margin-top: 16px; }

}

.radio-wrapper { width: 100%; z-index: 1; }

</style>