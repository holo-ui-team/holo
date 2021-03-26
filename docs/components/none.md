# None 空状态

## 参数

| 参数       | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| name      | 空样式的插画名 | string  | ['management', 'network', 'news', 'order', 'purse', 'search', 'trip']  |     'management'    |
| size     | 插画的大小    | string| ['default', 'small']   | 'default'   |
| text      | 描述文字   | string    | -   |  '' |
| buttonText| 按钮文字   | string    | -   |  '' |

## 事件
| 事件名称 | 说明 | 回调参数 |
|---------|---------|---------|
| click | 按钮的点击事件 | - |

## 用法

### 默认
  > 为了让大家在使用时及时看到效果，组件内置了默认样式。
  
  <ONone/>

```vue
  <!-- 默认 -->
  <ONone/>
  <!-- or -->
  <oNone>
  <!-- or -->
  <o-none/>
```

### 可选择插画类型 · name
  <div class="my-box">
    <div class="my-wrapper">
      <ONone name="management"/>
       <p>name="management"</p>
    </div>
  </div>
  <div class="my-box">
    <div class="my-wrapper">
      <ONone name="network"/>
       <p>name="network"</p>
    </div>
   <div class="my-wrapper">
     <ONone name="news"/>
     <p>name="news"</p>
    </div>
   <div class="my-wrapper">
     <ONone name="order"/>
     <p>name="order"</p>
    </div>
   <div class="my-wrapper">
     <ONone name="purse"/>
     <p>name="purse"</p>
    </div>
   <div class="my-wrapper">
     <ONone name="search"/>
     <p>name="search"</p>
    </div>
   <div class="my-wrapper">
     <ONone name="trip"/>
     <p>name="trip"</p>
    </div>
  </div>

```vue
  <!-- 可选择的name值，默认name为management -->
  <ONone name="management"/>
  <ONone name="network"/>
  <ONone name="news"/>
  <ONone name="order"/>
  <ONone name="purse"/>
  <ONone name="search"/>
  <ONone name="trip"/>
```

### 可选择尺寸 · size

根据需要提供两种尺寸 —— default 和 small，默认为default。

  <ONone size="small"/>

```vue
  <!-- 可选择尺寸 -->
  <ONone size="small"/>

  <!-- 默认尺寸（大尺寸） -->
  <ONone size="default"/>

```

### 可添加单行/多行文案 · text

文案中以`\n`来判断是否需要换行

  <ONone text="说明文案说明文案说明文案" />

  <ONone text="说明文案说明文案说明文案\n说明文案说明文案说明文案" />

```vue
  <!-- 可添加文案说明 -->
  <ONone text="说明文案说明文案说明文案" />

  <!-- 多行文案 -->
  <ONone text="说明文案说明文案说明文案\n说明文案说明文案说明文案" />

```

### 可添加操作按钮 · buttonText
  `使用@click可以捕获到按钮的click事件`

  <ONone text="说明文案说明文案说明文案" buttonText="操作按钮" @click="handleClick"/>

```vue
  <!-- 可添加按钮 -->
  <ONone text="说明文案说明文案说明文案" buttonText="操作按钮" @click="handleClick"/>
```

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
</style>