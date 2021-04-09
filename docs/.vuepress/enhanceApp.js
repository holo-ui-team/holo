// const Button = import('../../packages/Button/button.vue')
import Button from '../../packages/Button/button.vue'
import Switch from '../../packages/Switch/switch.vue'
import Icon from '@/Icon/index.vue'
import None from '@/None/index.vue'
import Popup from '@/Popup/index.vue'
import Radio from '@/Radio/index.vue'
import Mask from '@/Mask/index.vue'

const vueComArray = [ Button, Switch, Icon, None, Popup, Radio, Mask ]

export default ({ Vue }) => {
  vueComArray.forEach( (item) => {
    Vue.component(item.options.name, item);
  } )
}
