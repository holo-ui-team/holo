export type PropDate = Date | string | number | number[] | string[]

export const createDate = ( date: PropDate ): Date => {
  if ( Array.isArray( date ) ) {
    date = (
      date as Array<string | number>
    ).map( ( item ) => parseInt( item.toString() ) )
    return new Date( date[0], date[1] - 1, date[2] )
  } else if ( typeof date === 'number' ) {
    return new Date( date )
  } else if ( typeof date === 'string' ) {
    return new Date( date.replace( /-/g, '/' ) )
  } else {
    return date
  }
}

export const formatDate = ( date: PropDate, format = 'yyyy-MM-dd' ): string => {

  const _date = createDate( date )

  return format.replace( /yyyy/g, _date.getFullYear().toString() )
               .replace( /MM/g, (
                   _date.getMonth() + 1
                 ).toString().padStart( 2, '0' ),
               )
               .replace( /dd/g, _date.getDate().toString().padStart( 2, '0' ) )


}

export const getDateString = ( date: PropDate ): string => {
  return formatDate( date )
}

export const getDateArray = ( date: PropDate ): number[] => {

  if ( Array.isArray( date ) ) {
    return (
      date as Array<string | number>
    ).map( ( item ) => parseInt( item.toString() ) )
  } else {
    const _date = createDate( date )

    return [
      _date.getFullYear(),
      _date.getMonth() + 1,
      _date.getDate(),
    ]
  }

}
