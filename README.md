# holo-ui

## 项目说明
### 1.在哪里写组件
  组件统一放置在packages目录下。<br />
  单个组件以文件夹存放，例如新加一个button组件，则新建一个button文件夹

  :::  warning Note
  .<br />
  ├── button _(**实例展示**)_<br />
  │   ├── `button.vue` _(**组件**)_<br />
  │   └── `index.ts` _(**输出，命名只能使用index.ts,写法可参考demo**)_<br />
  :::

### 2.文档在哪里写
  在 .vuepress/config.js 里面配置路由
  在 .vuepress/enhanceApp.js 里面引入组件
  详情参考demo, demo 的目录  docs/components/button.md


## 目录结构

<!-- textlint-disable terminology -->
::: warning Note
.<br />
├── config _(**配置文件**)_<br />
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
├── scripts_(**相关指令文件**)_<br />
└── package.json<br />
:::
<!-- textlint-enable -->

## 开发说明

### 如何运行项目
运行 npm run serve          以开发模式跑 example 目录<br />
运行 npm run docs:dev       以开发模式跑 文档<br />
运行 npm run build          打包packages目录，生成组件库，组件库生成在lib目录下<br />

### 单元测试
(单元测试工具调整，此处内容待更新)
为了让组件提供的功能更加具有可信度，我们增加了单元测试的内容，推荐的文件命名为 `FileName.spec.ts`，以下命令可以帮助你很快创建一个单元测试文件，并且跑起来。
（测试覆盖率后期会补充）

采用的技术：karma, mocha, chai, sinion, typescript
相关配置：karma.config.js

1. 创建一个单元测试文件（如下，以Button为例），以下命令会在 `tests` 目录下创建 `Button.spec.ts` 文件。
```bash
yarn test:create button
// or
npm run test:create button
```

2. 运行单元测试
```bash
yarn test
// or
npm run test
```

3. 运行单个单元测试
```bash
yarn test --file=Button
// or 
npm run test --file=Button
```

4. 只运行一次单元测试（不wath），也可修改配置文件
```bash
yarn test --single-run=true
// or
npm run test --single-run=true
```
