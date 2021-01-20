# Toast 顶部提示

### 基础用法

<template>
  <toast-demo></toast-demo>
</template>

在入口文件(vue是main.js/main.ts)，中引入 toast
然后使用Vue.use(toast)

```html
  
  import toast from 'holo-ui'
  Vue.use(toast)

  this.$toast('客户端默认提示');
  this.$toast('客户端成功提示', 2000, 'client', 'success');
  this.$toast('客户端警告提示', 2000, 'client', 'warning');
  this.$toast('第三方默认提示', 3000, 'other');
  this.$toast('第三方成功提示', 3000, 'other', 'success');
  this.$toast('第三方警告提示', 3000, 'other', 'warning');
```

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| msg      | 提示文案   | string  |  必填项  |     -     |
| duration | 持续时间   | number  |   -    |     2000毫秒    |
| env      | 环境      | string  |   client / other |     client    |
| type     | 类型      | string    | default / success / warning | default |
