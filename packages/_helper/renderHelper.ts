import Vue, { Component } from 'vue'
import { CreateElement } from 'vue/types/umd'

export default function renderHelper(component: Component): Vue {
  // @ts-ignore
  const componentName = component.options.name
  const wrapper = _getWrapper(componentName)

  return new Vue({
    el: wrapper,
    data() {
      return {
        props: {}
      }
    },
    render(h: CreateElement) {
      return ( h('div', { class: componentName }, [
        h(component, { props: { ...this.$data.props } })
       ] ) )
    }
  })
}

function _getWrapper(className: string): HTMLDivElement {
  const queryResult = ( document.querySelector('.' + className) ) as HTMLDivElement

  if (queryResult) {
    return queryResult
  } else {
    const wrapper = document.createElement('div')
    wrapper.className = className
    document.querySelector('#app')?.appendChild(wrapper)
  
    return wrapper
  }
}