# Radio 选择框

## 参数

| 参数       | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| label      | 标签文字 | string  |   -    |     ''    |
| disabled   | 禁用    | boolean |   -    |     false    |
| default    | 默认勾选 | boolean |   -    |     false    |
| size       | 大小    | string  | ['large', 'medium', 'small'] |     'medium'    |
| gap        | 图标和文字之间的间隙 | number  |   -    |     12    |

## 事件

| 事件名称 | 说明 | 回调参数 | 参数类型 |
|---------|---------|---------|--------|
| click | 选择框点击事件 | 该元素是否被选中 | boolean |

## 注意事项
单独使用时，请将父元素设置为`display: flex;`，否则选中与非选中状态切换时，组件会跳动。

## 用法
### 基础用法

  <div class="my-wrapper">单个单选框：  <ORadio /> </div>
  <div class="my-wrapper">单选框和文字： <ORadio label="我是一个单选框，选我" /></div>

```vue
  <ORadio />
  <!-- or -->
  <o-radio></o-radio>

  <ORadio label="我是一个单选框，选我" />
  <!-- or -->
  <ORadio>我是一个单选框，选我</ORadio>
```

### 可设置disabled状态

  <div class="my-wrapper"><ORadio disabled label="现在为禁止状态" /> </div>

```vue
  <ORadio disabled label="现在为禁止状态" />
```

### 可设置default默认状态

  <div class="my-wrapper"><ORadio default label="默认选中" /> </div>

```vue
  <ORadio default label="默认选中" />
```

### 可默认选中且不可切换

  <div class="my-wrapper"><ORadio default disabled label="默认选中且不可切换状态" /> </div>

```vue
  <ORadio default disabled label="默认选中且不可切换状态" />
```

<style scoped>
  .my-wrapper {
    display: flex;
    font-weight: bold;
    margin: 10px;
  }
</style>