import Vue, { Component }    from 'vue'
import { CreateElement }     from 'vue/types/umd'
import getEl                 from '@/_helper/get-el'
import { CombinedComponent } from '@/_helper/type'

export default function combineHelper<T> ( component: Component, props?: T ) : CombinedComponent<T>  {
  // @ts-ignore
  const componentName = component.options.name
  const wrapper       = getEl( componentName )

  return new Vue( {
    el: wrapper,
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
