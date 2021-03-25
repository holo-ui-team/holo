# no-data 空状态

### 基础用法
<template>
  例子引入有点问题，暂时空着
  <div class="box">
    <!-- <oIcon></oIcon> -->
  </div>
</template>

```vue
  // 基础用法
  <ONoData/>
  <ONoData name="network"/>
  <ONoData name="news"/>
  <ONoData name="order"/>
  <ONoData name="purse"/>
  <ONoData name="search"/>
  <ONoData name="trip"/>

  //  可选择尺寸
  <ONoData size="small"/>

  // 可添加文案说明
  <ONoData text="说明文案说明文案说明文案" />

  // 多行文案
  <ONoData text="说明文案说明文案说明文案\n说明文案说明文案说明文案" />

  // 可添加按钮
  <ONoData text="说明文案说明文案说明文案" buttonText="操作按钮" @click="handleClick"/>
```

### 参数说明

| 参数       | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| name      | 空样式的插画名 | string  | ['management', 'network', 'news', 'order', 'purse', 'search', 'trip']  |     'management'    |
| size     | 插画的大小    | string| ['default', 'small']   | 'default'   |
| text      | 描述文字   | string    | -   |  '' |
| buttonText| 按钮文字   | string    | -   |  '' |

### Events
| 事件名称 | 说明 | 回调参数 |
|---------|---------|---------|
| click | 按钮的点击事件 | - |

<style lang="less">
  .box {
    padding: 30px 16px;
    width:375px;
    background-color: #303030; 
  }
</style>