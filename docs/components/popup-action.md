# PopupAction 动作弹出框
## 参数

| 参数              | 说明           | 类型               | 可选值       | 默认值   |
|-----------------|--------------|------------------|-------------  |-------|
| **【必填】visible** | 弹窗是否显示       | boolean          | [true, false] | false |
| **【必填】actions** | 选项           | `Array<Action>`   | `Array<ShareAction>`  | -     |  [] |
| type            | 类型           | string           | ['share'] | ''    |
| maskClosable    | 点击黑色背景是否可以关闭 | boolean          | [true, false] | true  |

```ts
  type Action = {
    id    ?: string,
    name  : string,
    icon  ?: string,
    ad    ?: string,
    danger?: boolean
  } | string

  type ShareAction = ['wechat', 'moments', 'qq', 'qZone', 'message', 'weibo', 'wallet', 'xhs']
```

## 事件
| 事件名称 | 说明 | 回调参数 |
|---------|---------|---------|
| confirm | 确定按钮点击后触发的事件 | - |
| cancel  | 取消/关闭弹窗触发的事件  | - |

## 用法

根据通常的代码习惯，popup提供两种使用方法：

1. 通过`this.$popupAction()`来使用
2. 通过标签`<OPopupAction></OpopupAction>`来使用

### 分享

1. 另外`actions`可包含以下三种情形`type Action = { id ?: string, name  : string, icon  ?: string, ad    ?: string, danger?: boolean } | string`
2. 分享支持一下参数：`['wechat', 'moments', 'qq', 'qZone', 'message', 'weibo', 'wallet', 'xhs']`, 展示顺序与以上顺序相同

<popup-action-demo :currentDemo="0" />

写法一：

由于分享用的比较频繁，所以专门封装了`this.$share`的方法
```js
  this.$share({
    actions: ['wechat', 'moments', 'qq', 'qZone', 'message', 'weibo', 'wallet', 'xhs']
  })
```

写法二：
```js
  this.$popupAction({
    type   : 'share',
    actions: ['wechat', 'moments'],
    confirm(val) {
      console.log('selected', val)
    }
  })
```

写法三：
```vue
  <template>
    <OPopupAction type="share" :visible="visible" :actions="actions" @cancel="visible = !visible" @confirm="handleConfirm"/>
  </template>

  <script lang="ts">
    export default Vue.extend({
      data() {
        return {
          visible: false,
          actions: [ 'wechat', 'moments', 'qq', 'qZone', 'message', 'weibo', 'wallet', ],
        }
      },
    })
</script>
```

### 分享 - 自定义内容

<br />

<popup-action-demo :currentDemo="5" />

```js
  this.$share({
    actions: [ 
      'xhs', 
      { id: 'tiktok', name: '抖音', icon: 'https://cdn.133.cn/ticket/h5/gtgj/img/holoUi/tiktok.png' }, 
    ]
  })
```

<br />

### 分享 - 有广告

<br />

<popup-action-demo :currentDemo="1" />

```js
  this.$share({
    ad     : 'https://i.loli.net/2021/04/07/UTyMhjWecx5PYv8.png',
    actions: ['wechat', 'moments']
  })
```

<br />

### 弹出动作 - 仅文字

<br />

<popup-action-demo :currentDemo="2" />

```js
  this.$popupAction({
    actions: [ '操作1', '操作2', '操作3', '操作4', '操作5', ],
    confirm(val) {
      console.log('selected', val)
    }
  })
```
### 弹出动作 - 有危险动作

<br />

<popup-action-demo :currentDemo="3" />

```js
  this.$popupAction({
    actions: [
      {name: '操作1'},
      {name: '操作2'},
      {name: '操作3', danger: true},
      {name: '操作4'},
      {name: '操作5'},
    ],
    confirm(val) {
      console.log('selected', val)
    }
  })
```

### 弹出动作 - 有Icon

<br />

<popup-action-demo :currentDemo="4" />

```js
  this.$popupAction({
    actions: [
      {name: '操作1', icon: 'o-train' },
      {name: '操作2', icon: 'o-close' },
      {name: '操作3', icon: 'o-help' },
      {name: '操作4', icon: 'https://i.loli.net/2021/04/07/gHpUJKwyTuCNzht.png' },
      {name: '操作5', icon: 'https://i.loli.net/2021/04/07/r9LXR2lDp7PUiQH.png' },
    ],
    confirm(val) {
      console.log('selected', val)
    }
  })
```

<style lang="less">
  .box {
    padding: 30px 16px;
    width:375px;
    background-color: #303030; 
  }
</style>
