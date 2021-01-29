// 从测试实用工具集中导入 `mount()` 方法
// 同时导入你要测试的组件
import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import Demo from '../../packages/Demo/index.vue'

describe('Demo.vue', () => {
  // 现在挂载组件，你便得到了这个包裹器
  const wrapper = mount(Demo)

  it('renders the correct markup', () => {
    expect(wrapper.html()).to.contain('<span class="count">0</span>')
  })

  // 也便于检查已存在的元素
  it('has a button', () => {
    expect(wrapper.contains('button')).to.be.true
  })

  // it('button click should increment the count', () => {
  //   expect(wrapper.vm.count).to.equal(0)
  //   const button = wrapper.find('button')
  //   button.trigger('click')
  //   expect(wrapper.vm.count).to.equal(1)
  // })
})