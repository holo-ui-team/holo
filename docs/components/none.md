# none 空状态

## 用法

### 基础用法
  
  <ONone/>
  <oNone/>
  <>

```vue
  <ONone/>
  <!-- or -->
  <oNone>
```

```vue
  // 基础用法
  <ONone name="network"/>
  <ONone name="news"/>
  <ONone name="order"/>
  <ONone name="purse"/>
  <ONone name="search"/>
  <ONone name="trip"/>

  //  可选择尺寸
  <ONone size="small"/>

  // 可添加文案说明
  <ONone text="说明文案说明文案说明文案" />

  // 多行文案
  <ONone text="说明文案说明文案说明文案\n说明文案说明文案说明文案" />

  // 可添加按钮
  <ONone text="说明文案说明文案说明文案" buttonText="操作按钮" @click="handleClick"/>
```

## 参数说明

| 参数       | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| name      | 空样式的插画名 | string  | ['management', 'network', 'news', 'order', 'purse', 'search', 'trip']  |     'management'    |
| size     | 插画的大小    | string| ['default', 'small']   | 'default'   |
| text      | 描述文字   | string    | -   |  '' |
| buttonText| 按钮文字   | string    | -   |  '' |

## Events
| 事件名称 | 说明 | 回调参数 |
|---------|---------|---------|
| click | 按钮的点击事件 | - |
