const path = require('path');
const {getComponentEntries} = require('./build/utils.js')
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: '/',
  lintOnSave: false,
  productionSourceMap: false,
  devServer: {
    port: 8080 // 有需要的筒子们自己修改端口号
  },
  outputDir: process.env.NODE_ENV === 'production' ? resolve('lib') : resolve('dist'),
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      return {
        entry: getComponentEntries('packages'),
        output: {
          filename: '[name]/[name].js',
          libraryTarget: 'commonjs2', // 使用 commonjs2 或者配置其他模式 umd 之类的
          libraryExport: 'default',
          library: '[name]',
        }
      }
    } else {
      // 为开发环境修改配置...
      return {
        entry: './example/main.ts',
      }
    }
  },
  css: {
    sourceMap: true,
    extract: {
      filename: '[name]/style.css'
    }
  },
  chainWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.optimization.delete('splitChunks') // 删除splitChunks，在打包组件的时候，并不希望抽离每个组件的公共js出来，而是每个独立打包，于是删除这个配置
      config.plugins.delete('copy') // 删除copy：不要复制public文件到打包目录；
      config.plugins.delete('preload') // 删除preload以及prefetch，因为删除了html插件，所以这两个也没用；
      config.plugins.delete('prefetch')
      config.plugins.delete('html') // 删除html，只打包组件，不生成html页面；
      config.plugins.delete('hmr') // 删除hmr，删除hot-module-reload；
      config.entryPoints.delete('app') // 删除自动加上的入口：app
    } else {
      config.module.rule('md').test(/\.md$/).use('html-loader').loader('html-loader').end().use('markdown-loader').loader('markdown-loader');
    }
  }
};
