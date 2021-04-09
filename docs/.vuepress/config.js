const path = require('path')
const configData = require('./config-data')

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
  alias: {
    '@': path.join(__dirname, '../../packages'),
  },
  themeConfig: {
    nav         : configData.nav,
    sidebar     : configData.sidebar,
    sidebarDepth: 3,
  },
  plugins: [
    [
      'vuepress-plugin-typescript'
    ],
  ],
}


