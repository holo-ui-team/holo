// const Button = import('../../packages/Button/button.vue')
import Button from '../../packages/Button/button.vue'
import Switch from '../../packages/Switch/switch.vue'
import Icon from '@/Icon/index.vue'
import None from '@/None/index.vue'

const vueComArray = [ Button, Switch, Icon, None ]

export default ({ Vue }) => {
  vueComArray.forEach( (item) => {
    console.log(item)
    Vue.component(item.options.name, item);
  } )
}
