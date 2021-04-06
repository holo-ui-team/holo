import Vue, { Component } from 'vue'
import { CreateElement, VNodeData } from 'vue/types/umd'

let i = 0

export default function renderHelper(component: Component, requiredOption?: object): VNodeData {
  i += 1
  // @ts-ignore
  const componentName = component.options.name + i
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
        h(component, { props: { ...requiredOption, ...this.$data.props }, ref: 'myChild' })
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

    const root = document.querySelector('#app') || document.querySelector('body')
    if (root) {
      root.appendChild(wrapper)
    }
  
    return wrapper
  }
}