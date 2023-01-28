import renderHelper                 from '@/_helper/render-helper'
import { PickerProps }              from '@/Picker/type'
import { PluginObject }             from 'vue/types/umd'
import component                    from '@/Picker/index.vue'
import Nation                       from './Data/Nation'
import China                        from './Data/China'
import { RenderHelperVueComponent } from '@/_helper/type'

type Name = {
  name: string
}
type City = {
  name: string
  district: Name[]
}
type Province = {
                  city: City[]
                } & Name

type RegionPickerProps = PickerProps & {
  type: 'china' | 'nation'
  title?: string
  maskClosable?: boolean
}

const plugin: PluginObject<RegionPickerProps> = {
  install: function ( Vue ) {

    Vue.prototype.$regionPicker = function ( props: RegionPickerProps ) {

      if ( !props.type )
        props.type = 'china'

      const _picker = renderHelper( component, {
        visible: false,
        options: [],
      } ) as RenderHelperVueComponent<RegionPickerProps>

      const hidePopup = () => {
        if ( _picker.props ) {
          _picker.props.visible = false
          _picker.$el.remove()
        }
      }

      _picker.props = {
        ...props,
        confirm: ( val ) => {
          console.log( val )
          props.confirm && props.confirm( val )
        },
        cancel : () => {
          hidePopup()
          props.cancel && props.cancel()
        },

        visible: true,
        options: _getRegionData( props.type ),
        change : ( { index, value } ) => {
          if ( props.type === 'china' ) {

            if ( !value ) {
              _picker.$set( _picker.props.options, Number( index ) + 1, [] )
            } else if ( index === 0 ) {
              const cities    = _getCityByProvince( value )
              const districts = cities.length ? _getDistrictByCity( cities[0] ) : []
              _picker.$set( _picker.props.options, 1, cities )
              _picker.$set( _picker.props.options, 2, districts )
            } else if ( index === 1 ) {
              const districts = _getDistrictByCity( value )
              _picker.$set( _picker.props.options, 2, districts )
            }
          }
        },
      }
    }

  },
}

export default plugin

function _getRegionData ( type: string ) {
  return type === 'nation' ? [ Nation ] : [ China.province, China.province[0].city, China.province[0].city[0].district ]
}

function _getCityByProvince ( province: Province ): City[] {
  return province.city || []
}

function _getDistrictByCity ( city: City ): Name[] {
  return city.district || []
}

