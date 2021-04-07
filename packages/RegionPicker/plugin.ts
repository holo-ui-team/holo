// @ts-ignore
import renderHelper from '@/_helper/render-helper.ts'
// @ts-ignore
import {PickerProps} from '@/Picker/type.ts'
import { PluginObject } from 'vue/types/umd'
import component from '@/Picker/index.vue'
import Nation from './Data/Nation'
import China from './Data/China'

type Region = {name: string, city ?: Region[], district?: Region[]}

const plugin: PluginObject<PickerProps> = {
  install: function(Vue) {

    Vue.prototype.$regionPicker = function(props: PickerProps) {

      const _picker = renderHelper(component, {
        visible: false,
        options: [],
      })
      const hidePopup = () => {
        if (_picker.props) {
          _picker.props.visible = false
          _picker.$el.remove()
        }
      }

      _picker.props = {
        confirm: (val) => { console.log(val) },
        cancel : () => { hidePopup() },

        ...props,
        
        visible: true,
        options: _getRegionData(props.type || 'china'),
        change: ({index, value}) => {
          if (props.type !== 'nation') {

            if (index === 0) {
              const citys     = _getCityByProvince(value) as Region[]
              const districts = _getDistrictByCity(citys[0])
              _picker.$set(_picker.props.options, 1, citys)
              _picker.$set(_picker.props.options, 2, districts)
            } else if (index === 1) {
              const districts = _getDistrictByCity(value)
              _picker.$set(_picker.props.options, 2, districts)
            }
          }
        },
      }
    }

  }
}

export default plugin

function _getRegionData(type: string) {
  let result: Region[][]

  if (type === 'nation') {
    result = [Nation]
  } else {
    result = [China.province, China.province[0].city, China.province[0].city[0].district]
  }

  return result
}

function _getCityByProvince(province: Region) {
  return province.city
}

function _getDistrictByCity(city: Region) {
  return city.district
}

