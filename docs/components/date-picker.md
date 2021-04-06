# DatePicker 日期选择器

## 参数

| 参数       | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
|default            | 默认选中的内容  | [number, number, number] | - |  [] |
|title              | 标题  | string | - |  '' |
|maskClosable       | 点击黑色背景是否可以关闭  |  boolean  | [true, false] |  true |

## 事件
| 事件名称 | 说明 | 回调参数 |
|---------|---------|---------|
| confirm | 确定按钮点击后触发的事件 | - |
| cancel  | 取消/关闭弹窗触发的事件  | - |

## 用法

<br />

<picker-demo :currentDemo="3" />

```js
  this.$datePicker({
    confirm: (val) => {
      console.log('val', val)
    }
  })
```

<picker-demo :currentDemo="4" />

```js
  this.$datePicker({
    default: [1996, 11, 15],
    confirm: (val) => {
      console.log('val', val)
    }
  })
```