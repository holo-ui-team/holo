# Picker 选择器
## 参数

| 参数       | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
|**【必填】visible**     | 弹窗是否显示  |  boolean  | [true, false] | false  |
|**【必填】options**     | 选项  |  `Array<Options>`  | - |  [] |
|default            | 默认选中的内容  | `Options` | - |  [] |
|maskClosable       | 点击黑色背景是否可以关闭  |  boolean  | [true, false] |  true |

```ts
  type Option = { name: string } | string | number
  type Options = Option[]
```

## 事件
| 事件名称 | 说明 | 回调参数 |
|---------|---------|---------|
| confirm | 确定按钮点击后触发的事件 | - |
| cancel  | 取消/关闭弹窗触发的事件  | - |

## 用法

根据通常的代码习惯，popup提供两种使用方法：

1. 通过`this.$picker()`来使用
2. 通过标签`<OPicker></OPicker>`来使用

### 基础用法

1. `options`可包含以下三种情形`type Options = { name: string }[] | string[] | number[]
`

<picker-demo :currentDemo="0" />

<br />

<picker-demo :currentDemo="1" />

写法一：

```js
  this.$picker({
    options : [
      ['西瓜', '凤梨', '老虎']
    ],
    confirm(val) {
      console.log('selected', val)
    }
  })
/*
  options: [ // 另一种形式的Option
    [
      {name: '香蕉'},
      {name: '苹果'},
      {name: '橘子'},
      {name: '草莓'},
      {name: '西红柿'},
      {name: '柿子椒'},
    ],

    [
      'Nodejs', 'JavaScript', 'Java'
    ],

    [
      {name: '兔子'},
      {name: '猫咪'},
      {name: '狗狗'},
    ],
  ]

*/
```

写法二：

```vue
<template>
  <Picker :visible="visible" :options="options" @cancel="visible = false" @confirm="handleConfirm" />
</template>

<script lang="ts">
  export default Vue.extend({
    data() {
      return {
        visible: false,
        options:  [
          [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 3],
          [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, ]
        ],
      }
    },
    methods: {
      handleConfirm(selected) {
        console.log('selected', selected)
      }
    },
  })
</script>
```

### 可配置默认值

<br />
<picker-demo :currentDemo="2" />

```js

  this.$picker({
    options: [
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99],
    ],
    default: [9],
    confirm(val) {
      console.log('selected', val)
    }
  })

```