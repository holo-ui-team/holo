module.exports = {
  title: 'holo-ui',
  description: 'holo-ui',
  port: '8081', // 为了不和前面的端口冲突，这里也得注意
  // head: [ // 注入到当前页面的 HTML <head> 中的标签
  //   ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
  // ],
  sidebar: 'auto',
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig: {
    nav:[ // 导航栏配置
      {text: 'home', link: '/' },
      {text: 'guide', link: '/guide/'},
      {text: 'components', link: '/components/'}
    ],
    sidebar: {
      '/components/': getPluginSidebar('组件'),
    }
    // sidebar: 'auto', // 侧边栏配置
    // sidebarDepth: 2, // 侧边栏显示2级
  }
}


function getPluginSidebar (pluginTitle) {
  return [
    {
      title: pluginTitle,
      collapsable: false,
      children: [
        {
          title: '基础组件',
          collapsable: false,
          children: [
            'button'
          ]
        }
      ]
    }
  ]
}
