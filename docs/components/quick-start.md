# 快速上手
本节将介绍如何在项目中使用 holo-ui。

## 引入 holo
你可以引入整个 holo，或是根据需要仅引入部分组件。我们先介绍如何引入完整的 holo。

### 完整引入

在 main.js 中写入以下内容：

```js
import Vue from 'vue'
import App from './App.vue'

import holo from 'holo-ui'
import 'holo-ui/lib/Index/style.css'

Vue.use(holo)

new Vue({
  render: h => h(App),
}).$mount('#app')

```

以上代码便完成了 holo 的引入。需要注意的是，样式文件需要单独引入。

### 按需引入

#### 最基础的按需引入
如果你只希望引入部分组件，比如 Icon 和 Popup，那么需要在 main.js 中写入以下内容：

```js
import Vue from 'vue'
import App from './App.vue'

import Icon from 'holo-ui/lib/Icon/index.js'
import 'holo-ui/lib/Icon/style.css'

Vue.use(Icon)
/*
  或者可写为
  Vue.component(Icon.name, Icon);
*/

import popup from 'holo-ui/lib/Popup/index.js'
import 'holo-ui/lib/Popup/style.css'

Vue.use(popup)

new Vue({
  render: h => h(App),
}).$mount('#app')
```

#### 借助babel-plugin-component的按需引入

#### es module的tree shaking

