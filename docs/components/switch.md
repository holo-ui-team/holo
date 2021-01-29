# switch 开关

### 基础用法
<template>
  <div class="switch-box">
    <oSwitch :status="true"></oSwitch>
  </div>
</template>

```html
  <oSwitch :status="true"></oSwitch>
```

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| status    | 初始化时是打开还是关闭   | boolean  |   true / false    |     false    |
| disabled  | 是否禁用状态    | boolean   | —   | false   |
| width     | 宽度           | number    | —   | 40（单位px）   |

### Events
| 事件名称 | 说明 | 回调参数 |
|---------|---------|---------|
| change | 状态改变时触发 | 新状态的值 |


<style lang="less">
  .switch-box {
    padding: 30px 16px;
    width:375px;
    background-color: #303030; 
  }
</style>