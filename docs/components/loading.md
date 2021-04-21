# loading 加载

### 基础用法

<template>
  <loading-demo></loading-demo>
</template>

在入口文件(vue是main.js/main.ts)，中引入 Loading
然后使用Vue.use(Loading)

```html
  
  import Loading from 'holo-ui'
  Vue.use(Loading)

  this.$loading({ text: '加载中...' }); // 全局 加载蓝色
  this.$loading({ text: '加载中...', theme: 'white' } ); // 全局 加载白色
  this.$loading({ text: '加载中...', type: 'circle' } ); // 局部 加载蓝色
  this.$loading({ text: '加载中...', type: 'circle', theme: 'white' } ); // 局部 加载白色
  this.$loading({ text: '加载中...', lock: false }); // 全局 加载蓝色-无遮罩
  this.$loading({ text: '加载中...', theme: 'white', lock: false } ); // 全局 加载白色-无遮罩
  this.$loading({ text: '加载中...', type: 'circle', lock: false } ); // 局部 加载蓝色-无遮罩
  this.$loading({ text: '加载中...', type: 'circle', theme: 'white', lock: false } ); // 局部 加载白色-无遮罩
  
```

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| text    |  显示在加载图标下方的加载文案  |   string   |   -   |     -    |
| type    |  类型 point 三个小点   circle 圆圈   |   string   |   point / circle   |     point    |
| theme   |  主题色    | string   |  blue / white  | blue   |
| lock    |  是否加锁    | boolean   |  true / false  | true   |
| maskType    |  遮罩类型,只有lock:true时生效    | string   |  transparent / white / black  | - |

