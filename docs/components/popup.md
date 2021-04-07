# Popup 对话弹出框
## 参数

| 参数       | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
|**【必填】visible**     | 弹窗是否显示  |  boolean  | [true, false] | false  |
|**【必填】content**     | 内容  |  string  | - |  '' |
|icon               | 图标  |  string  | - |  '' |
|iconColor          | 图标颜色  |  string  | - |  '' |
|title              | 标题  |  string  | - |  '' |
|type               | 表示弹窗的危险程度，默认的蓝色和紧急的橙色  |  string  | ['default', 'alert'] |  'default' |
|primaryButtonText  | 主要的按钮文字  |  string  | - |  '' |
|secondaryButtonText| 第二个按钮的文字  |  string  | - |  '' |
|lastButtonText     | 第三个按钮（最后一个按钮）的文字  |  string  | - |  '' |
|beforeConfirm      | 确认前的验证函数，需要返回true/false|function  |  -  | - |  () => true |
|maskClosable       | 点击黑色背景/幕布是否可以关闭  |  boolean  | [true, false] |  true |

## 事件
| 事件名称 | 说明 | 回调参数 |
|---------|---------|---------|
| confirm | 蓝色的，主要按钮点击后触发的事件 | - |
| cancel  | 白色的，第二个按钮点击后触发的事件 | - |
| cancel2 | 百色的，第三个按钮点击后触发的事件 | - |

## 用法

根据通常的代码习惯，popup提供两种使用方法：

1. 通过`this.$popup()`来使用
2. 通过标签`<o-popup></o-popup>`来使用（展示内容过于复杂时推荐此种情况）

### 基础用法

其中`title`标题为非必选项。

<popup-demo :currentDemo="0" />
<popup-demo :currentDemo="4" />

写法一：
```js
  this.$popup({
    title            : '我是标题',
    content          : '我是内容',
    primaryButtonText: '主要按钮',
  })
```

写法二：
```vue
  <o-popup :visible="visible" title="我是标题" content="我是内容" primaryButtonText="主要按钮" @cancel="visible = false"></o-popup>
```

### 可最多支持三个按钮

<popup-demo :currentDemo="1" />

```js
  this.$popup({
    title              : '我是标题',
    content            : '我是内容',
    primaryButtonText  : '主要按钮',
    secondaryButtonText: '第二个按钮' // 新增内容
  })
```

<popup-demo :currentDemo="2" />

```js
  this.$popup({
    title              : '我是标题',
    content            : '我是内容',
    primaryButtonText  : '主要按钮',
    secondaryButtonText: '第二个按钮',
    lastButtonText     : '第三个按钮' // 新增内容
  })
```

### 可选择主要类型的按钮颜色 
目前仅支持主题色（蓝色）和强调色（橙红色），默认为主题色`type="default"`

<popup-demo :currentDemo="3" />

```js
  this.$popup({
    title              : '我是标题',
    type               : 'alert', // 新增内容
    content            : '我是内容',
    primaryButtonText  : '主要按钮',
    secondaryButtonText: '第二个按钮'
  })
```

### 可自定义内容

请使用标签的形式来完成自定义的内容。

<popup-demo :currentDemo="5" />

```vue
  <o-popup :visible="visible6" title="我是标题" content="我是内容" primaryButtonText="主要按钮" @cancel="visible6 = false">
    这里开始是我自定义的其他内容
    <br />
    <p>你好，我是个蓬头垢面的input框</p>
    <input type="text" />
  </o-popup>
```

### 可支持多行文本

多行文本请用`\n`来区分

<popup-demo :currentDemo="6" />

```js
  this.$popup({
    title              : '我是标题',
    content            : '我是内容,我是好多好多内容，\n我是换了行的好多好多好多好好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多多', // 新增内容 \n
    primaryButtonText  : '主要按钮',
  })
```

### 可支持Icon

icon分为内置Icon和其他，具体可参考Icon章节。

<popup-demo :currentDemo="7" />

```js
  this.$popup({
    title              : '我是标题',
    content            : '我是内容',
    icon               : 'o-info-filled', // 新增内容
    iconColor          : '#FF6347', // 新增内容
    primaryButtonText  : '主要按钮',
    secondaryButtonText: '第二个按钮'
  })
```


<popup-demo :currentDemo="9" />

外置Icon需要填写Icon的图片地址

```js
  this.$popup({
    title              : '我是标题',
    content            : '我是内容',
    icon               : 'https://cdn.133.cn/gtgjwap/Image/tmcShanglv/icons/train@2x.png', // 新增内容
    primaryButtonText  : '主要按钮',
    secondaryButtonText: '第二个按钮'
  })
```

<style lang="less">
  .box {
    padding: 30px 16px;
    width:375px;
    background-color: #303030; 
  }
</style>