export default function getEl ( className: string ): Element {
  const queryResult = document.querySelector( '.' + className )

  if ( queryResult ) return queryResult

  const wrapper     = document.createElement( 'div' )
  wrapper.className = className

  const root = document.querySelector( '#app' ) || document.body
  if ( root ) {
    root.appendChild( wrapper )
  }

  return wrapper

}
