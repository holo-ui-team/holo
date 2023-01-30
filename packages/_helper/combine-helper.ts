import Vue                   from 'vue'
import { CreateElement }     from 'vue/types/umd'
import getEl                 from '@/_helper/get-el'
import { CombinedComponent } from '@/_helper/type'

export default function combineHelper<T> ( component, props?: T ): CombinedComponent<T> {
  const componentName = component.options.name
  const wrapper       = getEl( componentName )

  return new Vue( {
    el  : wrapper,
    data: {
      props,
    },
    render ( h: CreateElement ) {
      return (
        h( 'div', { class: componentName }, [
          h( component, { props: this.props, ref: 'myChild' } ),
        ] )
      )
    },
  } )
}
