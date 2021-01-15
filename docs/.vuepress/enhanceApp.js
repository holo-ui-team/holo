// const Button = import('../../packages/button/button.vue')
import Button from '../../packages/button/button.vue'

const vueComArray = [ Button ]

export default ({ Vue }) => {
  vueComArray.forEach( (item) => {
    Vue.component('oButton', item);
  } )
}