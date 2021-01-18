# holo-ui

使用vue-cli3.0的脚手架搭建的项目
使用vue2.0
文档编辑使用 vuepress
引入了typescript，可以按照自己的喜好用或者不用

## 项目说明
### 1.在哪里写组件
  组件统一放置在packages目录下。<br />
  单个组件以文件夹存放，例如新加一个button组件，则新建一个button文件夹

  :::  warning Note
  .<br />
  ├── button _(**实例展示**)_<br />
  │   ├── `button.vue` _(**组件**)_<br />
  │   └── `index.ts` _(**输出，命名只能使用index.ts**)_<br />
  :::

### 2.文档在哪里写
  在 .vuepress/config.js 里面配置路由<br />
  在 .vuepress/enhanceApp.js 里面引入组件<br />
  详情参考demo, demo 的目录  docs/components/button.md,, 或者访问vuepress官网获取更多内容。


## 目录结构

<!-- textlint-disable terminology -->
::: warning Note
.<br />
├── docs _(**文档编写**)_<br />
│   ├── .vuepress _(**存放vurpress全局的配置、组件、静态资源等**)_<br />
│   │   ├── `config.js` _(**配置文件的入口文件**)_<br />
│   │ <br />
│   └── README.md _(**文档首页**)<br />
│ <br />
├── example _(**实例展示**)_<br />
│   ├── assets _(**静态资源**)_<br />
│   ├── router _(**路由配置**)_<br />
│   ├── views _(**存放页面**)_<br />
│   ├── `app.vue` _(**layout页面**)_<br />
│   └── `main.ts` _(**入口文件**)_<br />
├── packages _(**存放组件**)_<br />
│   └── `index.ts` _(**入口文件**)_<br />
└── package.json<br />
:::
<!-- textlint-enable -->

## 开发说明

### 如何运行项目
运行 npm run serve          以开发模式跑 example 目录<br />
运行 npm run docs:dev       以开发模式跑 文档<br />
运行 npm run build          打包packages目录，生成组件库，组件库生成在lib目录下<br />
