# Icon 图标
## 参数
为了方便开发，“随机”内置了一小部分Icon，如果常用的话，可以让设计小姐姐帮我们整理一下常出现的icon。

| 参数       | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| name      | 内置图标的图标名   | string  |   -    |     ''    |
| title     | 鼠标移至到图标上显示的title文字    | string| -   | ''   |
| type      | 图标的标签类型，是Img类型还是css背景图   | string    | ['css', 'img']   |  'css' |
| url       | 图片地址   | string    | -   |  '' |
| width     | 图标宽度   | number    | -   |  10 |
| height    | 图标高度   | number    | -   |  10 |

## 用法

图标采用了三种使用方式：
  1. 通过iconfont引入图标
  2. 使用css的background引入图片
  3. 使用img标签引入图片

### 通过iconfont引入图标 · name
  > 为了让大家在使用时及时看到效果，组件内置了默认样式。

  默认图标：<o-icon/>

```vue
  <o-icon />
  <!-- or -->
  <oIcon />
  <!-- or -->
  <OIcon /> 
```

  可通过class自定义样式：<o-icon class="customClass"></o-icon>

  ```vue
    <o-icon class="customClass"></o-icon>

    <style scoped>
    .customClass {
      color: red;
      font-size: 40px;
      font-weight: bold;
    }
    </style>
  ```

  可设置title（鼠标移到icon上可以看到效果）：<o-icon title="哈咯哈"></o-icon>

  ```vue
    <o-icon title="哈咯哈"></o-icon>
  ```

  **使用iconfont的原因在于，对于单色图标我们可以轻松的改变他的`font-size, color等属性`，如同操作文本一样地操作icon。**（采用iconfont分为单色图标和有色图标（这里由于一些问题，暂时没有加入有色图标）。

  我们需要到iconfont的holo项目文档里查看当前可用的图标，然后复制图标名即可使用。下面列出一些可能常用的图标（我猜的）。

  <div class="my-box">
    <div class="my-wrapper">
      <OIcon name="o-close-filled"/>
      <p>name="o-close-filled"</p>
    </div>
    <div class="my-wrapper">
      <OIcon name="o-close"/>
      <p>name="o-close"</p>
    </div>
    <div class="my-wrapper">
      <OIcon name="o-check-filled"/>
      <p>name="o-check-filled"</p>
    </div>
    <div class="my-wrapper">
      <OIcon name="o-check"/>
      <p>name="o-check"</p>
    </div>
    <div class="my-wrapper">
      <OIcon name="o-info-filled"/>
      <p>name="o-info-filled"</p>
    </div>
    <div class="my-wrapper">
      <OIcon name="o-info"/>
      <p>name="o-info"</p>
    </div>
    <div class="my-wrapper">
      <OIcon name="o-help-filled"/>
      <p>name="o-help-filled"</p>
    </div>
    <div class="my-wrapper">
      <OIcon name="o-help"/>
      <p>name="o-help"</p>
    </div>
    <div class="my-wrapper">
      <OIcon name="o-arrow-up"/>
      <p>name="o-arrow-up"</p>
    </div>
    <div class="my-wrapper">
      <OIcon name="o-arrow-right"/>
      <p>name="o-arrow-right"</p>
    </div>
    <div class="my-wrapper">
      <OIcon name="o-arrow-down"/>
      <p>name="o-arrow-down"</p>
    </div>
    <div class="my-wrapper">
      <OIcon name="o-arrow-left"/>
      <p>name="o-arrow-left"</p>
    </div>
    <div class="my-wrapper">
      <OIcon name="o-triangle-up"/>
      <p>name="o-triangle-up"</p>
    </div>
    <div class="my-wrapper">
      <OIcon name="o-triangle-right"/>
      <p>name="o-triangle-right"</p>
    </div>
    <div class="my-wrapper">
      <OIcon name="o-triangle-down"/>
      <p>name="o-triangle-down"</p>
    </div>
    <div class="my-wrapper">
      <OIcon name="o-triangle-left"/>
      <p>name="o-triangle-left"</p>
    </div>
  </div>

### 通过css的background引入图片 · css

  当我们没有传入name时，说明我们即将采用css的background形式来加载图标，我们需要传入`url width height`。（也可设置type="css"）

  <div style="margin-top:20px">
    <o-icon url="https://cdn.133.cn/gtgjwap/Image/tmcShanglv/icons/train@2x.png" :width="26" :height="20"></o-icon>
  </div>  

```vue
  <!-- 通过background引入图片icon -->
  <o-icon url="https://cdn.133.cn/gtgjwap/Image/tmcShanglv/icons/train@2x.png" :width="26" :height="20"></o-icon>
```

### 通过img标签引入图片 · img

  当我们设置`type="img"`，说明我们即将采用img标签的形式来加载图标，我们需要传入`url width height`。

  <div style="margin-top:20px">
    <o-icon type="img" url="https://cdn.133.cn/gtgjwap/Image/tmcShanglv/icons/train@2x.png" :width="26" :height="20"></o-icon>
  </div>

```vue

  <!-- 通过配置type为img，设置为img标签引入图片 -->
  <o-icon type="img" url="https://cdn.133.cn/gtgjwap/Image/tmcShanglv/icons/train@2x.png" 
  :width="26" :height="20"></o-icon>
```


## 其他

现在暂时加入的内置图标如下，详情请进入iconfont的项目查看！

iconfont地址如下，需要加入组织的记得给我一下账号名。

[icon-font地址](https://www.iconfont.cn/ )

![icon.png](https://i.loli.net/2021/03/24/DyjA5iZRTzHXGuq.png)

<style scoped>
  .my-box {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .my-wrapper {
    margin: 10px;
    text-align: center;
  }
  .customClass {
    color: red;
    font-size: 40px;
    font-weight: bold;
  }
</style>