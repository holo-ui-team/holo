# Mask 遮罩层

考虑到活动通常会涉及到各式各样的弹窗，所以这里单独提供一个遮罩层的组件，供大家自定义弹出的内容。

## 参数

| 参数           | 说明              | 类型      | 可选值                        | 默认值                 |
|--------------|-----------------|---------- |----------------------------|---------------------|
| **visible**  | **必填，** 弹窗是否显示  |  boolean  | [true, false]              | false               |
| maskClosable | 点击黑色背景/幕布是否可以关闭 |  boolean  | [true, false]              | true                |
| position     | 弹窗的位置          |  string  | ['top', bottom', 'middle'] | 'bottom'            |
| background   | 黑色幕布的颜色       |  string  | ''                         | 'rbga(0, 0, 0, .6)' |
| ani          | 动效方式            |  string  | ['slide-fade', 'fade']     | 'slide-fade'        |

## 事件

| 事件名称 | 说明 | 回调参数 |
|---------|---------|---------|
| cancel  | maskClosable 为 true 时，点击黑色幕布时会调用 | - |

## 用法

<br />

**示例：position:bottom** <mask-demo />

<br />

**示例：position:middle** <custom-mask />

```vue

<template>
  <OMask :visible="visible"
         position="bottom"
         @cancel="visible = !visible">

    <div class="box"> <!-- 直接在里面定义样式即可 -->
      我是自定义的内容，哈哈哈哈
    </div>

  </OMask>
</template>

<script lang="ts">
export default Vue.extend( {
  data () {
    return {
      visible: false
    }
  },
}
</script>

<style scoped>
.box {
  background : white;
  padding    : 10px;
}
</style>

```
