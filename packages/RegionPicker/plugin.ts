import renderHelper                 from '@/_helper/render-helper'
import { PickerProps }              from '@/Picker/type'
import { PluginObject }             from 'vue/types/umd'
import component                    from '@/Picker/index.vue'
import Nation                       from './Data/Nation'
import China                        from './Data/China'
import { RenderHelperVueComponent } from '@/_helper/type'

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
        options: _getInitialData( props.type ),
        change : ( { index, value, allSelected } ) => {
          if ( props.type === 'china' ) {

            if ( !value && Number( index ) <= 2 ) {
              _picker.$set( _picker.props.options, Number( index ) + 1, [] )
            } else if ( index === 0 ) {
              const cities    = _getCityByProvince( value )
              const districts = cities.length ? _getDistrictByCity( value, cities[0] ) : []
              _picker.$set( _picker.props.options, 1, cities )
              _picker.$set( _picker.props.options, 2, districts )
            } else if ( index === 1 ) {
              const districts = _getDistrictByCity( allSelected[0], value )
              _picker.$set( _picker.props.options, 2, districts )
            }
          }
        },
      }
    }

  },
}

export default plugin

function _getInitialData ( type: string ) {
  if ( type === 'china' ) {
    const provinces = Object.keys( China )
    const cities    = _getCityByProvince( provinces[0] )
    const districts = _getDistrictByCity( provinces[0], cities[0] )

    return [ provinces, cities, districts ]

  } else {
    return [ Nation ]
  }
}

function _getCityByProvince ( province: string ): string[] {
  return Object.keys( China[province] )
}

function _getDistrictByCity ( province: string, city: string ): string[] {
  return China[province][city]
}

