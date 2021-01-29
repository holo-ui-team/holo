// const Button = import('../../packages/Button/button.vue')
import Button from '../../packages/Button/button.vue'
import Switch from '../../packages/Switch/switch.vue'

const vueComArray = [ Button, Switch ]

export default ({ Vue }) => {
  vueComArray.forEach( (item) => {
    console.log(item)
    Vue.component(item.options.name, item);
  } )
}
