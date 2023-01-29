import combineHelper       from '@/_helper/combine-helper'
import { DatePickerProps } from '@/Picker/type'
import { PluginObject }                       from 'vue/types/umd'
import component                              from '@/Picker/index.vue'
import { formatDate, getDateArray, PropDate } from '@/_helper/date-helper'

const YEARS  = Array.from( new Array( 201 ), ( item, index ) => ( 1900 + index + '年' ) )
const MONTHS = Array.from( new Array( 12 ), ( item, index ) => ( 1 + index ) + '月' )
const DAYS   = Array.from( new Array( 31 ), ( item, index ) => ( 1 + index ) + '日' )

const plugin: PluginObject<DatePickerProps> = {
  install: function ( Vue ) {

    Vue.prototype.$datePicker = function ( props: DatePickerProps ) {

      const _picker = combineHelper<DatePickerProps>( component, {
        visible: false,
        options: [],
      } )

      const hidePopup = () => {
        if ( _picker.props ) {
          _picker.props.visible = false
          _picker.$el.remove()
        }
      }

      const _default                   = getDateArray( props.default || [ 1990, 1, 1 ] )
      const baseProps: DatePickerProps = {
        ...props,
        default: [ _default[0] + '年', _default[1] + '月', _default[2] + '日' ],
      }

      _picker.props = {
        ...baseProps,
        confirm: ( val ) => {
          props.confirm && props.confirm( formatDate( val.map( ( item ) => parseInt( item ) ), baseProps.format ) )
        },
        cancel : () => {
          hidePopup()
          props.cancel && props.cancel()
        },

        visible: true,
        options: getOptions( baseProps ),
        change : ( { allSelected } ) => {
          const { years, months, days } = resetOptions( allSelected.map( ( item ) => parseInt( item )), { min: baseProps.min, max: baseProps.max } )
          _picker.$set( _picker.props.options, 0, years )
          _picker.$set( _picker.props.options, 1, months )
          _picker.$set( _picker.props.options, 2, days )
        },
      }
    }

  },
}

export default plugin

function getOptions ( props: DatePickerProps ): string[][] {
  const { years, months, days } = resetOptions( props.default || [ parseInt( YEARS[0] ), parseInt( MONTHS[0] ), parseInt( DAYS[0] ) ], { min: props.min, max: props.max } )

  return [ years, months, days ]
}

function resetOptions ( currentValue: PropDate, { min, max } ): {
  years: string[];
  months: string[];
  days: string[];
} {
  const [ year, month ] = getDateArray( currentValue )
  let years: string[]   = YEARS
  let months: string[]  = MONTHS
  let days: string[]    = [ 1, 3, 5, 7, 8, 10, 12 ].includes( month ) ? DAYS : DAYS.slice( 0, 30 )

  if ( month === 2 ) {

    if (
      (
        (
          year % 4 === 0
        ) && (
          year % 100 !== 0
        )
      ) ||
      (
        year % 400 === 0
      )
    ) {
      days = DAYS.slice( 0, 29 )
    } else {
      days = DAYS.slice( 0, 28 )
    }
  }

  if ( min ) {
    const [ minYear, minMonth, minDay ] = getDateArray( min )

    years = years.filter( item => parseInt( item ) >= minYear )

    const sameYear = minYear === year
    if ( sameYear ) {
      months = months.filter( item => parseInt( item ) >= minMonth )
    }

    const sameMonth = sameYear && minMonth === month
    if ( sameMonth ) {
      days = days.filter( item => parseInt( item ) >= minDay )
    }

  }

  if ( max ) {
    const [ maxYear, maxMonth, maxDay ] = getDateArray( max )

    years = years.filter( item => parseInt( item ) <= maxYear )

    const sameYear = maxYear === year
    if ( sameYear ) {
      months = months.filter( item => parseInt( item ) <= maxMonth )
    }

    const sameMonth = sameYear && maxMonth === month
    if ( sameMonth ) {
      days = days.filter( item => parseInt( item ) <= maxDay )
    }
  }


  return {
    years,
    months,
    days,
  }
}