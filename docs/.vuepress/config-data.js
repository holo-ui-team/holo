const ComponentSidebar = {
  '/components/': [
    {
      title      : '开发指南',
      collapsable: false,
      children   : [ 'install', 'quick-start' ]
    },
    {
      title      : '组件',
      collapsable: false,
      children   : [
        {
          title      : '基础组件',
          collapsable: false,
          children   : [ 'icon', 'button', 'none' ]
        },
        {
          title      : 'Form 表单',
          collapsable: false,
          children   : [ 'switch', 'radio' ]
        },
        {
          title      : 'Notice 提示',
          collapsable: false,
          children   : [ 'toast', 'loading' ]
        },
        {
          title      : 'Popup 弹出内容',
          collapsable: false,
          children   : [ 'mask', 'popup', 'popup-option', 'popup-action', ]
        },
        {
          title      : 'Picker 选择器',
          collapsable: false,
          children   : [ 'picker', 'date-picker', 'region-picker' ]
        },
      ]
    }
  ]
}

const nav = [
  {text: '首页', link: '/' },
  {text: '组件', link: '/components/'}
]

module.exports = {
  nav    : nav,
  sidebar: ComponentSidebar
}