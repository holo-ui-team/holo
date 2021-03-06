# holo-ui

使用vue-cli3.0的脚手架搭建的项目<br />
使用vue2.0<br />
文档编辑使用 vuepress<br />

## 项目说明
### 1.组件在哪里写
  1. 组件统一放置在packages目录下；
  2. 单个组件以文件夹存放，并且首字母大写（例如，Icon组件、Button组件）；
  3. 单个组件文件夹下需必须存在一个对外输出的文件，默认为`index.ts`。

  :::  warning Note
  .<br />
  ├── Button _(**实例展示**)_<br />
  │   ├── `button.vue/index.vue` _(**vue组件**)_<br />
  │   └── `index.ts` _(**输出，命名请采用index.ts**)_<br />
  :::

### 2.文档在哪里写
  在 .vuepress/config.js 里面配置路由<br />
  在 .vuepress/enhanceApp.js 里面引入组件<br />
  详情参考已有的例子，例如`docs/components/button.md`, 或者访问vuepress官网获取更多内容。

## 目录结构

由于项目内的文件名单数、复数等都不太统一，所以专门来定一下规则，让代码结构更加美观一些。

1. 文件（夹）名统一用单数；
2. packages下的**组件相关的文件夹，统一为大驼峰**（首字母大写的驼峰）；
3. 除组件文件夹外的**其他文件夹，统一为小驼峰**（首字母小写的驼峰）；
4. **文件统一用小写，多个字母之间用`-`中划线隔开；**

待调整：

- [x] tests、scripts文件夹单复数调整
- [] packages和docs文件夹单复数调整
- [] tests和scripts子文件单复数调整

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
│   └── `_helper` _(**存放组件相关的帮助方法、公共组件、数据等**)_<br />
│   └── `_style` _(**存放组件相关的公共样式内容**)_<br />
│   └── `index.ts` _(**所有组件的入口文件**)_<br />
├── script_(**相关指令文件**)_<br />
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
