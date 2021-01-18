import Toast from './toast.vue';

// let toast = {}
// toast.install = function(Vue,options){
//   let toastConsTructor = Vue.extend(Toast);
//   Vue.prototype.$toast = function(text,duration = 2000){
//       let toastDom = new toastConsTructor({
//           el:document.createElement('div'),
//           data(){
//               return {
//                   message:text,
//                   isShow:true,
//                   showContent:true
//               }
//           }
//       }) 
//       document.body.appendChild(toastDom.$el)
//       let outduration = duration - 1250;
//       setTimeout(() => {toastDom.showContent = false},outduration)
//       setTimeout(()=>{toastDom.isShow = false},duration)
//   }
// }

// export default toast;

export default Toast
