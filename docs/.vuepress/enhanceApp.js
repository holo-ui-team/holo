// const Button = import('../../packages/button/button.vue')
import Button from '../../packages/button/button.vue'
import Switch from '../../packages/switch/switch.vue'

const vueComArray = [ Button, Switch ]

export default ({ Vue }) => {
  vueComArray.forEach( (item) => {
    console.log(item)
    Vue.component(item.options.name, item);
  } )
}
