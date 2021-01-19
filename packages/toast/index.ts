import Toast from './toast.vue';

// let toast = {}
// toast.install = function(Vue,options){
//   let toastConsTructor = Vue.extend(Toast);
//   Vue.prototype.$toast = function(msg, duration = 2000, env, type){
//       let toastDom = new toastConsTructor({
//           el:document.createElement('div'),
//           propsData: { msg },
//           data(){
//             return {
//                 isShow: true,
//             }
//           }
//       }) 
//       document.body.appendChild(toastDom.$el)
//       setTimeout(()=>{toastDom.isShow = false},duration)
//   }
// }
const toast: any = function(Vue) {
  const toastConsTructor = Vue.extend(Toast);
  Vue.prototype.$toast = function(msg, duration = 2000, env, type) {
    const toastDom = new toastConsTructor({
      el:document.createElement('div'),
      propsData: { msg, env: env || 'client', type: type || 'default' },
    })
    document.body.appendChild(toastDom.$el);
    setTimeout(()=>{toastDom.isShow = false}, duration)
  }
}

export default toast;
