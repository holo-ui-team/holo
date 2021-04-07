# PopupOption 选项弹出框
## 参数

| 参数       | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
|**【必填】visible**     | 弹窗是否显示  |  boolean  | [true, false] | false  |
|**【必填】title**       | 标题  |  string  | - |  '标题' |
|**【必填】options**     | 选项  |  `Array<Option>`  | - |  [] |
|subTitle           | 副标题  |  string  | - |  '' |
|single             | 是否为单选  |  boolean  | - |  false |
|multiColumn        | 是否多行显示（只针对多选）  |  boolean  | - |  false |
|default            | 默认选中的内容  | `Array<Option>` | - |  [] |
|maskClosable       | 点击黑色背景是否可以关闭  |  boolean  | [true, false] |  true |

```ts
  type Option = { name: string, desc?: string } | string | number
```

## 事件
| 事件名称 | 说明 | 回调参数 |
|---------|---------|---------|
| confirm | 确定按钮点击后触发的事件 | - |
| cancel  | 取消/关闭弹窗触发的事件  | - |

## 用法

根据通常的代码习惯，popup提供两种使用方法：

1. 通过`this.$popupOption()`来使用
2. 通过标签`<OPopupOption></OpopupOption>`来使用

### 单选 - 基础用法

1. 其中`title`标题为`必选项`。
2. 另外`options`可包含以下三种情形`type Options = { name: string, desc?: string }[] | string[] | number[]`

<popup-option-demo :currentDemo="0" />

写法一：
```js
  this.$popupOption({
    title   : '请选择',                // 必填
    single  : true,                   // 此处标记为单选
    subTitle: '你可以不写我的',        // 副标题（可选）
    options : ['西瓜', '凤梨', '老虎'] // 选项的集中格式请参考 参数 章节
  })
```

写法二：
```vue
  <template>
    <OPopupOption title="请选择" :visible="visible" :options="options" single @cancel="visible = !visible" />
  </template>

  <script lang="ts">
    export default Vue.extend({
      data() {
        return {
          visible: false,
          options: ['选项1', '选项2', '选项3', '选项4'],
        }
      },
    })
</script>

```

### 单选 - 可默认选中

<br />

<popup-option-demo :currentDemo="4" />

```js
  this.$popupOption({
    title   : '请选择',                // 必填
    single  : true,                   // 此处标记为单选
    subTitle: '你可以不写我的',        // 副标题（可选）
    default : ['凤梨'],              // 默认选择
    options : ['西瓜', '凤梨', '老虎'] // 选项的集中格式请参考 参数 章节
  })
```

<br />

### 多选 - 基础用法

<br />

<popup-option-demo :currentDemo="3" />

```js
  this.$popupOption({
    title   : '请选择',                // 必填
    single  : false,                  // 此处标记为多选，可不填，默认为多选
    options : ['西瓜', '凤梨', '老虎'] // 选项的集中格式请参考 参数 章节
  })
```
### 多选 - 可默认选中

<br />

<popup-option-demo :currentDemo="5" />

```js
  this.$popupOption({
    title   : '请选择',                // 必填
    default : ['凤梨', '老虎'],        // 默认选择
    options : ['西瓜', '凤梨', '老虎'] // 选项的集中格式请参考 参数 章节
  })
```

### 多选 - 可加入描述

<br />

<popup-option-demo :currentDemo="1" />

```js
  this.$popupOption({
    title   : '请选择',                // 必填
    options: [                        // 选项的集中格式请参考 参数 章节
      {name: '选项1', desc: '我是个冇得表情的描述'},
      {name: '选项2', desc: '我是个冇得表情的描述'},
      {name: '选项3', desc: '我是个冇得表情的描述'},
      {name: '选项4', desc: '我是个冇得表情的描述'},
      {name: '选项5', desc: '我是个冇得表情的描述'},
    ]                               
  })
```

### 多选 - 可多行显示

<br />

<popup-option-demo :currentDemo="2" />

```js
  this.$popupOption({
    title      : '请选择',                // 必填
    options    : ['西瓜', '凤梨', '老虎'] // 选项的集中格式请参考 参数 章节
    multiColumn: true                   // 标记为的多行显示
  })
```

<style lang="less">
  .box {
    padding: 30px 16px;
    width:375px;
    background-color: #303030; 
  }
</style>
