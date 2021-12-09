# Icon 图标

图标提供了 **3** 种 使用方式：

1. 使用 holo-ui 提供的字符图标，[查看当前所有图标](icon-list.html#)；
2. 使用 css background 的方式提供的图片图标；
3. 使用 img标签 的方式提供的图片图标；

## 参数

### 字符参数

**使用字符参数的好处：我们可以轻松的改变他的`font-size, color等属性`，如同操作文本一样地操作 icon。**

为了方便开发，“随机”内置了一小部分Icon，如果需要新增 icon 请随时联系我们。

| 参数       | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| **name**      | **必填，** 内置图标的图标名   | string  |   -    |     'o-check'    |
| title     | 鼠标移至到图标上显示的title文字    | string| -   | ''   |

### 图片参数

| 参数       | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| type      | 图标的标签类型，是Img类型还是css背景图   | string    | ['css', 'img']   |  'css' |
| **url**       | **必填，** 图片地址   | string    | -   |  '' |
| title     | img 标签的 alt 说明    | string| -   | ''   |

## 用法

### 字符图标

[查看当前所有图标](icon-list.html#)

**示例：** name 为 o-plus 的 icon <OIcon class="icon" name="o-plus"></OIcon>

  ```vue
name 为 o-plus 的 icon
<OIcon class="icon" name="o-plus"></OIcon>
  ```

**示例：** 可设置title（鼠标移到icon上可以看到效果）：<o-icon title="哈咯哈"></o-icon>

  ```vue
给默认图标设置 title 
<o-icon title="哈咯哈"></o-icon>
  ```

### css 图片图标

使用 css background 加载图片内容，`默认 width: 100%; height: 100%;` 使用前请设置合适的宽高。

**示例：**  <div style="margin-top:20px">
    <o-icon url="https://cdn.133.cn/gtgjwap/Image/doubleEleven2021/other/3.png" style="width: 100px;height:100px"></o-icon>
  </div>  

```vue
使用前请通过 class 或者 style 设置具体的宽高：
<o-icon url="https://cdn.133.cn/gtgjwap/Image/doubleEleven2021/other/3.png" style="width: 100px;height:100px"></o-icon>
```

### img 图片图标

**示例：**   <div style="margin-top:20px">
    <o-icon type="img" url="https://cdn.133.cn/gtgjwap/Image/doubleEleven2021/other/2.png"></o-icon>
  </div>

```vue
使用前请通过 class 或者 style 设置具体的宽高：
<o-icon type="img" url="https://cdn.133.cn/gtgjwap/Image/tmcShanglv/icons/train@2x.png" ></o-icon>
```
