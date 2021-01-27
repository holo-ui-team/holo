import Toast from './toast.vue';

const toast: any = function(Vue) {
  const toastConsTructor = Vue.extend(Toast);
  let isHavShow: boolean = false;
  Vue.prototype.$toast = function(msg: string, duration: number = 2000, env: string, type: string) {
    if (isHavShow) {return}
    const toastDom = new toastConsTructor({
      el:document.createElement('div'),
      propsData: { msg, env: env || 'client', type: type || 'default' },
    })
    document.body.appendChild(toastDom.$el);
    isHavShow = true;
    setTimeout(()=>{toastDom.isShow = false; isHavShow = false;}, duration)
  }
}

export default toast;
