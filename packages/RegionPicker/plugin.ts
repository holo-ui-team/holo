import combineHelper    from '@/_helper/combine-helper'
import { PickerProps }  from '@/Picker/type'
import { PluginObject } from 'vue/types/umd'
import picker           from '@/Picker/index.vue'
import Nation           from './Data/Nation'
import China            from './Data/China'

type RegionPickerProps = PickerProps & {
  type: 'china' | 'nation'
  title?: string
}

const plugin: PluginObject<RegionPickerProps> = {
  install: function ( Vue ) {

    Vue.prototype.$regionPicker = function ( props: RegionPickerProps ) {

      const _pickerType = props.type || 'china'
      const _picker     = combineHelper<RegionPickerProps>( picker, {
        visible: true,
        options: _getInitialData( _pickerType ),
        type   : _pickerType,
        confirm: ( val ) => {
          props.confirm && props.confirm( val )
        },
      } )

      this.$set( _picker.props, 'cancel', () => {
        if ( _picker.props ) {
          _picker.props.visible = false
          _picker.$el.remove()
        }
        props.cancel && props.cancel()
      } )
      this.$set( _picker.props, 'change', ( { index, value, selected } ) => {
        if ( _picker.props.type === 'china' ) {

          if ( !value && Number( index ) <= 2 ) {
            this.$set( _picker.props.options, Number( index ) + 1, [] )
          } else if ( index === 0 ) {
            const cities    = _getCityByProvince( value )
            const districts = cities.length ? _getDistrictByCity( value, cities[0] ) : []
            this.$set( _picker.props.options, 1, cities )
            this.$set( _picker.props.options, 2, districts )
          } else if ( index === 1 ) {
            const districts = _getDistrictByCity( selected[0], value )
            this.$set( _picker.props.options, 2, districts )
          }
        }
      } )

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

