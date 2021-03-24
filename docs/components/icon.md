# icon 图标

### Basic Usages
<template>
  例子引入有点问题，暂时空着
  <div class="box">
    <!-- <oIcon></oIcon> -->
  </div>
</template>

```vue
  // 默认引用
  <o-icon></o-icon>

  // 使用内置的icon，请传入对应的name属性 
  <o-icon name="o-loading"></o-icon>

  // 使用内置的icon支持字体、颜色等的设置 
  <o-icon class="customClass"></o-icon>
  <o-icon class="customClass" title="哈咯哈"></o-icon>

  // 通过默认的background引入图片icon
  <o-icon url="https://cdn.133.cn/gtgjwap/Image/tmcShanglv/icons/train@2x.png" 
  :width="26" :height="20"></o-icon>

  // 通过配置type为img，设置为img标签引入图片
  <o-icon type="img" url="https://cdn.133.cn/gtgjwap/Image/tmcShanglv/icons/train@2x.png" 
  :width="26" :height="20"></o-icon>
```

### Attributes
为了方便开发，“随机”内置了一小部分Icon，如果常用的话，可以让设计小姐姐帮我们整理一下常出现的icon。

| 参数       | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| name      | 内置图标的图标名   | string  |   -    |     ''    |
| title     | 鼠标移至到图标上显示的title文字    | string| -   | ''   |
| type      | 图标的标签类型，是Img类型还是css背景图   | string    | ['css', 'img']   |  'css' |
| url       | 图片地址   | string    | -   |  '' |
| width     | 图标宽度   | number    | -   |  10 |
| height    | 图标高度   | number    | -   |  10 |

### Others

现在暂时加入的内置图标如下，详情请进入iconfont的项目查看！

iconfont地址如下，需要加入组织的记得给我一下账号名。

[icon-font地址](https://www.iconfont.cn/ )

![icon.png](https://i.loli.net/2021/03/24/DyjA5iZRTzHXGuq.png)

<style lang="less">
  .box {
    padding: 30px 16px;
    width:375px;
    background-color: #303030; 
  }
</style>