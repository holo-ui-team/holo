# Mask 遮罩层

考虑到有很多活动会涉及到各式各样的弹窗，所以这里单独提供一个遮罩层的组件，供大家自定义弹出层的内容。

## 参数

| 参数       | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
|visible（必填）            | 弹窗是否显示  |  boolean  | [true, false] | -  |
|maskClosable       | 点击黑色背景/幕布是否可以关闭  |  boolean  | [true, false] |  true |


## 事件
| 事件名称 | 说明 | 回调参数 |
|---------|---------|---------|
| confirm | 蓝色的，主要按钮点击后触发的事件 | - |
| cancel  | 白色的，第二个按钮点击后触发的事件 | - |


## 用法

<br />
<mask-demo />

```vue
  <template>
    <OMask :visible="visible" @cancel="visible = !visible">
      <div class="box"> <!-- 直接在里面定义样式即可 -->
        我是自定义的内容，哈哈哈哈
      </div>
    </OMask>
  </template>

  <script lang="ts">
    export default Vue.extend({
      data() {
        return {
          visible: false
        }
      },
    }
  </script>

  <style scoped>
    .box {
      background: white;
      padding: 10px;
    }
  </style>
```


