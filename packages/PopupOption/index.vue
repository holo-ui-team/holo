<template>
  <PopupBox :visible.sync="visible" :maskClosable="maskClosable" @cancel="$emit('cancel')"
    :title="title" :subTitle="subTitle">

    <div class="popup-option-wrapper">

      <div class="popup-option" v-for="(option, index) in options" :key="index" :class="{single}" @click="handleSelected(option)">

        <div v-if="single" class="single-option holo-icon" :class="{active: isSelected(option)}">
          <div class="text"> {{getOptionName(option)}} </div>
        </div>
        <Radio v-else :label="getOptionName(option)" />

      </div>

    </div>

  </PopupBox>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Radio from '../Radio/index.vue'
  import PopupBox from '../_helper/popupBox.vue'

  type Option = { name: string } | string | number

  export default Vue.extend({
    name: 'OPopupOption',
    components: { Radio, PopupBox },
    props: {
      visible      : { type: Boolean },
      maskClosable : { type: Boolean, default: true },
      title        : { type: String },
      subTitle     : { type: String },
      single       : { type: Boolean },
      usingIndex   : { type: Boolean },
      multiColumn  : { type: Boolean },
      default      : { type: Array },
      options      : { type: Array, validator: (val: Option[]) => {
        let result = true

        val.forEach((item) => {

          if (typeof item === 'object' && !item.name) {
              result = false
          }
        })

        return result
      } },
    },
    created() {
      if (this.default?.length) {
        this.selected = this.default as Option[]
      }
    },
    data() {
      return {
        selected: [] as Option[]
      }
    },
    methods: {
      getOptionName(option) {
        return option?.name || option
      },
      isSelected(option: Option) {
        let result = true

        if (typeof option === 'object') {
          // @ts-ignore
          result = !!( this.selected.filter((item) => item.name === option.name)?.[0] )
        } else {
          result = this.selected.indexOf(option) >= 0
        }

        return result
      },
      handleSelected(option) {
        if (this.isSelected(option)) {
          this.cancelSelected(option)
        } else {
          this.addSelected(option)
        }

        this.$emit('click', this.selected)

        if (this.single) {
          this.$emit('cancel')
        }
      },
      getSelectedIndex(option) {
        let index = -1

        if (typeof option === 'object') {
          this.selected.forEach((item, currentIndex) => {
            // @ts-ignore
            if (item.name === option.name) {
              index = currentIndex
            }
          })
        } else {
          index = this.selected.indexOf(option)
        }

        return index
      },
      cancelSelected(option) {
        const index = this.getSelectedIndex(option)
        this.selected.splice(index, 1)
      },
      addSelected(option) {
        if (this.single) {
          this.selected = [option]
        } else {
          this.selected.push(option)
        }
      }
    },
  })
</script>

<style lang="less" scoped>
@import '~@/style/theme.less';

.popup-option {
  display: flex; align-items: center;

  &.single {
    margin-left: 20px;
  }

  &.single +.single {
    border-top: 1px solid @borderColor;
  }

  .single-option {
    padding: 19px 22px 19px 0;
    font-size: 18px;
    line-height: 18px;
    display: flex; align-items: center; justify-content: space-between;
    width: 100%;

    &.active::after {
      content: '\e610';
      color: @themeColor;
      font-size: 14px;
    }
  }

}

</style>