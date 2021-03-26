# Popup 弹出层
## 参数

| 参数       | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
|visible（必填）            | 弹窗是否显示  |  boolean  | [true, false] | -  |
|maskClosable       | 点击黑色背景/幕布是否可以关闭  |  boolean  | [true, false] |  true |
|title              | 标题  |  string  | - |  '' |
|content（必填）            | 内容  |  string  | - |  '' |
|type               | 表示弹窗的危险程度，主要是按钮颜色的区分，默认的蓝色和紧急的橙色  |  string  | ['default', 'alert'] |  'default' |
|primaryButtonText（必填）  | 主要的按钮文字  |  string  | - |  '' |
|secondaryButtonText| 第二个按钮的文字  |  string  | - |  '' |
|lastButtonText     | 第三个按钮（最后一个按钮）的文字  |  string  | - |  '' |

## 事件
| 事件名称 | 说明 | 回调参数 |
|---------|---------|---------|
| confirm | 蓝色的，主要按钮点击后触发的事件 | - |
| cancel  | 白色的，第二个按钮点击后触发的事件 | - |
| cancel2 | 百色的，第三个按钮点击后触发的事件 | - |

## 用法
<template>
  例子引入有点问题，暂时空着
  <div class="box">
    <!-- <oIcon></oIcon> -->
  </div>
</template>

此处的内容 加入具体例子后 会一对一展示，调整
```vue

  // 基础用法
  <o-popup :visible="visible" title="我是标题" content="我是内容" primaryButtonText="主要按钮" @cancel="visible = false"></o-popup>


  // 有两个按钮
  <o-popup :visible="visible2" title="我是标题" content="我是内容" primaryButtonText="主要按钮" secondaryButtonText="第二个按钮" @cancel="visible2 = false"></o-popup>

  // 有三个按钮
  <o-popup :visible="visible3" title="我是标题" content="我是内容" primaryButtonText="主要按钮" secondaryButtonText="第二个按钮" lastButtonText="第三个按钮" @cancel="visible3 = false"></o-popup>

  // 两个按钮，主要按钮为危险按钮
  <o-popup :visible="visible4" title="我是标题" content="我是内容" primaryButtonText="主要按钮" secondaryButtonText="第二个按钮" type="alert" @cancel="visible4 = false"></o-popup>

  // 没有标题
  <o-popup :visible="visible5" content="我是内容，但是我冒得标题冇得标题冇得标题冇得标题冇得标题" primaryButtonText="主要按钮" @cancel="visible5 = false"></o-popup>

  // 自定义内容
  <o-popup :visible="visible6" title="我是标题" content="我是内容" primaryButtonText="主要按钮" @cancel="visible6 = false">
    这里开始是我自定义的其他内容
  </o-popup>
  
  // 多行文本
  <o-popup :visible="visible7" title="我是标题" content="我是内容,我是好多好多内容，/n\n我是换了行的好多好多好多好好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多好多多" primaryButtonText="主要按钮" @cancel="visible7 = false"></o-popup>

  // 带有icon
  <o-popup :visible="visible8" title="我是标题" content="我是内容" primaryButtonText="主要按钮" @cancel="visible8 = false"></o-popup>

  // 点击mask不关闭
  <o-popup :visible="visible9" :maskClosable="false" title="我是标题" content="我是内容" primaryButtonText="主要按钮" @cancel="visible9 = false"></o-popup>
```
|

<style lang="less">
  .box {
    padding: 30px 16px;
    width:375px;
    background-color: #303030; 
  }
</style>