# Button 按钮

### 基础用法

<template>
  <div class="button-box">
    <div class="item-box"><oButton>蓝色 / 默认</oButton></div>
    <div class="item-box"><oButton theme="gray">灰色 / 默认</oButton></div>
    <div class="item-box"><oButton theme="red">红色 / 默认</oButton></div>
    
  </div>
</template>

```html
<template>
  <oButton>蓝色 / 默认</oButton>
  <oButton theme="gray">灰色 / 默认</oButton>
  <oButton theme="red">红色 / 默认</oButton>
</template>
```


### 禁用状态
<template>
  <div class="button-box">
    <div class="item-box"><oButton :disabled="true">蓝色 / 禁用</oButton></div>
    <div class="item-box"><oButton :disabled="true" theme="gray">灰色 / 禁用</oButton></div>
    <div class="item-box"><oButton :disabled="true" theme="red">红色 / 禁用</oButton></div>
    
  </div>
</template>

```html
<template>
  <oButton :disabled="true">蓝色 / 禁用</oButton>
  <oButton :disabled="true" theme="gray">灰色 / 禁用</oButton>
  <oButton :disabled="true" theme="red">红色 / 禁用</oButton>
</template>
```


### 其他尺寸的按钮
<template>
  <div class="button-box">
    <div class="item-box"><oButton size="medium">蓝色 / 中</oButton></div>
    <div class="item-box"><oButton size="medium" theme="gray">灰色 / 中</oButton></div>
    <div class="item-box"><oButton size="medium" theme="red">红色 / 中</oButton></div>
    <div class="display-flex">
      <div class="item-sml"><oButton size="small">蓝色 / 小</oButton></div>
      <div class="item-sml"><oButton size="small" theme="gray">灰色 / 小</oButton></div>
      <div class="item-sml"><oButton size="small" theme="red">红色 / 小</oButton></div>
    </div>
  </div>
</template>

```html
<template>
  <oButton size="medium">蓝色 / 中</oButton>
  <oButton size="medium" theme="gray">灰色 / 中</oButton>
  <oButton size="medium" theme="red">红色 / 中</oButton>
  <oButton size="small">蓝色 / 小</oButton>
  <oButton size="small" theme="gray">灰色 / 小</oButton>
  <oButton size="small" theme="red">红色 / 小</oButton>
</template>
```

### 其他类型的按钮
<template>
  <div class="button-box bg-white">
    <div class="display-flex">
      <div class="item-sml"><oButton size="small" :round="false" type="ghost">蓝色 / 镂空 / 非圆角</oButton></div>
      <div class="item-sml"><oButton size="small" type="ghost" :disabled="true">蓝色 / 镂空 / 禁用</oButton></div>
    </div>
  </div>
</template>

```html
<template>
  <oButton size="small" :round="false" type="ghost">蓝色 / 镂空 / 非圆角</oButton>
  <oButton size="small" type="ghost" :disabled="true">蓝色 / 镂空 / 禁用</oButton>
</template>
```

<template>
  <div class="component_iframe">
    <iframe src="http://192.168.2.76:8084/button"></iframe>
  </div>
</template>

### 带图标的按钮
<template>
  <div class="button-box">
    <div class="item-box"><oButton icon="search"></oButton></div>
    <div class="item-box"><oButton icon="loading">加载中...</oButton></div>
    <div class="item-box"><oButton icon="https://cdn.133.cn/gtgjwap/Image/gtTravel/my-like-white.png" iconPosition="right">收藏</oButton></div>
  </div>
</template>

```html
<template>
  <oButton icon="search"></oButton>
  <oButton icon="loading">加载中...</oButton>
  <oButton icon="https://cdn.133.cn/gtgjwap/Image/gtTravel/my-like-white.png" iconPosition="right">收藏</oButton>
</template>
```


### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 尺寸   | string  |   big / medium / small            |    big     |
| type     | 类型   | string  |   primary / ghost    |     primary    |
| theme    | 主题   | string  |   blue / gray / red |     blue    |
| round     | 是否圆角按钮   | boolean    | — | true   |
| disabled  | 是否禁用状态    | boolean   | —   | false   |
| icon  | 图标类名 | string   |  search / loading  |  默认无图标  |
| iconPosition  | 图标位置 | string   |  left / right  |  left  |



### Events
| 事件名称 | 说明 | 回调参数 |
|---------|---------|---------|
| click | 点击按钮 | - |


<style lang="less">
  .button-box {
    padding: 30px 16px;
    width:375px;
    background-color: #303030; 
  }
  .item-box {
    margin-bottom: 15px;
  }
  .item-sml {
    margin-right: 10px;
  }
  .bg-white {
    background-color: #ffffff;
  }
</style>
