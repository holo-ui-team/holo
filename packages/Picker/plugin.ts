// @ts-ignore
import renderHelper from '@/_helper/render-helper.ts'
import { PluginObject } from 'vue/types/umd'
import component from './index.vue'
import {PickerProps} from './type'

const YEARS  = Array.from(new Array(201), (item, index) => (1900 + index))
const MONTHS = Array.from(new Array(12), (item, index) => (1 + index))
const DAYS   = Array.from(new Array(31), (item, index) => (1 + index))

const plugin: PluginObject<PickerProps> = {
  install: function(Vue) {

    const _picker = renderHelper(component, {
      visible: false,
      options: [],
    })
    const hidePopup = () => {
      if (_picker.props) {
        _picker.props.visible = false
      }
    }

    Vue.prototype.$picker = function(props: PickerProps) {
      _picker.props = {
        confirm: () => {},
        cancel: () => { hidePopup() },
        ...props,
        visible: true,
      }
    }

    Vue.prototype.$datePicker = function(props: PickerProps) {

      _picker.props = {
        confirm: (val) => { console.log(val) },
        cancel: () => { hidePopup() },
        default: [1990, 1, 1],

        ...props,
        
        visible: true,
        options: [ YEARS, MONTHS, DAYS ],
        change: ({index, value, allSelected}) => {
          const actualDays: number[] = _getActualDays(index, value, allSelected)

          if (actualDays.length) {
            _picker.$set(_picker.props.options, 2, actualDays)
          }
        },
      }
    }
  }
}

export default plugin

function _getActualDays(index: number, value: number, dateArray: number[]) {
  let result: number[] = []

  if (index === 1) {
    result = [1, 3, 5, 7, 8, 10, 12].includes(value) ? DAYS : _getDays(30)
  }

  if ((index === 1 && value === 2) || ( index === 0 && dateArray[1] === 2 )) {
    const result1 = ( dateArray[0] % 4 === 0 ) && ( dateArray[0] % 100 !== 0 )
    const result2 = dateArray[0] % 400 === 0

    if (result1 || result2) {
      result = _getDays(29)
    } else {
      result = _getDays(28)
    }
  }

  return result
}

function _getDays(day: number) {
  return Array.from(new Array(day), (item, index) => (1 + index))
}